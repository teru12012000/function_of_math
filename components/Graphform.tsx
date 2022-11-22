import { Dispatch, FC, MouseEvent, SetStateAction, useState } from "react";
import { numberbutton } from "../data/writegraph_value";
import formstyle from "./styles/valueform.css";
type Props={
  setP:Dispatch<SetStateAction<string>>;
  setNum:Dispatch<SetStateAction<number>>;
  setSlush:Dispatch<SetStateAction<boolean>>;
  p:string;
  num:number;
  slush:boolean;
  title:string;
}
const Graphform:FC<Props> = ({
  setP,
  setNum,
  setSlush,
  p,
  num,
  slush,
  title,
}) => {
  const [form,setForm]=useState("0");//傾き表示(input)
  const [psub,setPsub]=useState("");//傾き表示(input)
  const [child,setChild]=useState("0");
  const [mother,setMother]=useState("0");
  const [click,setClick]=useState([...Array(14)].map((_,index:number)=>(index===0||index===12)?true:false))



  const handlebutton=(
    e: MouseEvent<HTMLInputElement, globalThis.MouseEvent>,index:number)=>{
    let num:string;
    const value:string=e.currentTarget.value;
    
      if(form==='0'){
        setClick(click.map((item:boolean,index:number)=>(index===0||index===12)?false:item))
      }
      if(value==='/'&&!slush){
        setSlush(true);
        setClick(click.map((item:boolean,ind:number)=>(ind===index)?true:item));
      }
      if(value==='C'){
        setSlush(false);
        setForm("0");
        setChild('');
        setMother('');
        setClick(click.map((item:boolean,ind:number)=>(ind===0||ind===12)?true:false))
      }else if(value==='.'){
        setClick(click.map((item:boolean,ind:number)=>(ind===10||ind===11||ind===12)?true:(ind===0)?false:item));
        if(slush){
          setMother(mother+value);
        }else{
          setChild(child+value);
        }
        num=form+value;
        setForm(num);
      }else{
        if(form==='0'){
          num=value;
        }else{
          num=form+value;
        }
        if(slush&&value!=='/'){
          setMother(mother+value);
        }else if(value!=='/'){
          setChild(child+value);
        }
        setForm(num); 
    }
  }
  const Confirm=(aorb:string)=>{
    
    if(!slush){
      setNum(Number.parseFloat(child));
    }else{
      setNum(Number(child)/Number(mother));
    }
      setP(form);
  }
  return (
    <div>
        <div className={formstyle.form}>
            <p>{title}：</p>
            <input 
              type="text"
              value={form}
              disabled={true}
            />
          </div>
          {numberbutton.map((item:string,index:number)=>(
            <input type="button" 
              value={item} 
              key={index}
              disabled={click[index]}
              onClick={(e)=>handlebutton(e,index)}
            />
          ))}<br/>
          <input 
            type="button" 
            value={`${title}を確定させる`}
            onClick={()=>Confirm('A')}
          />
      </div>
  );
}

export default Graphform;