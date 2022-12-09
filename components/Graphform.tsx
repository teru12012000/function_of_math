import { off } from "process";
import { Dispatch, FC, MouseEvent, SetStateAction, useState } from "react";
import { numberbutton } from "../data/writegraph_value";
import inputform from "./styles/inputform.css";
import formstyle from "./styles/valueform.css";
type Props={
  setP:Dispatch<SetStateAction<string>>;
  setNum:Dispatch<SetStateAction<number>>;
  title:string;
}
const Graphform:FC<Props> = ({
  setP,
  setNum,
  title,
}) => {
  const [form,setForm]=useState("0");//傾き表示(input)
  const [psub,setPsub]=useState("");//傾き表示(input)
  const [child,setChild]=useState("0");
  const [mother,setMother]=useState("0");
  const [point,setPoint]=useState(false);
  var pointcp:boolean=false;
  var slushcp:boolean=false;
  const [minace,setMinace]=useState(false);
  const [slush,setSlush]=useState(false);
  const [click,setClick]=useState([...Array(14)].map((_,index:number)=>(index===0||index===12)?true:false))



  const handlebutton=(e: MouseEvent<HTMLInputElement, globalThis.MouseEvent>,index:number)=>{
    let num:string;
    const value:string=e.currentTarget.value;
      pointcp=point;
      slushcp=slush;
      if(value==='C'){
        setSlush(false);
        slushcp=false;
        setForm("0");
        setChild('0');
        setMother('0');
        setPoint(false);
        pointcp=false;
        setMinace(false);
        setClick(click.map((item:boolean,ind:number)=>(ind===0||ind===12)?true:false))
      }else if(value==='-'){
          setMinace(true);
          setForm("-0");
          setChild("-0");
          setClick(click.map((item:boolean,ind:number)=>(ind===10)?true:(ind===0)?false:item));
      }else if(value==='.'){
        setClick(click.map((item:boolean,ind:number)=>(ind===10||ind===11||ind===12)?true:(ind===0)?false:item));
        if(slushcp){
          setMother(mother+value);
        }else{
          setChild(child+value);
        }
        setPoint(true);
        pointcp=true;
        setForm(form+value);
      }else if(value==='/'){
        setSlush(true);
        slushcp=true;
        setClick(click.map((item:boolean,ind:number)=>(ind===0||ind===11||ind===12)?true:item));
        setForm(form+value);
      }else if(form==='0'){
        setForm(value);
        setChild(value);
        setClick(click.map((item:boolean,ind:number)=>(ind===0||ind===11||ind===12)?false:(ind===10)?true:item));
      }else if(form==='-0'){
        setForm("-"+value);
        setChild("-"+value);
        if(!slush){
          setClick(click.map((item:boolean,ind:number)=>(ind===12)?false:item));
        }
      }
      else{
        setForm(form+value);
        if(!slush){
          setClick(click.map((item:boolean,ind:number)=>(ind===12)?false:item));
        }else{
          setClick(click.map((item:boolean,ind:number)=>(ind===0)?false:item));
        }
        if(slush&&mother==='0'){
          setMother(value);
        }else if(slush&&mother!=='0'){
          setMother(form+value);
        }else{
          setChild(form+value);
        }
        
      }
  }



  const Confirm=()=>{
    if(!slush){
      setNum(Number.parseFloat(child));
    }else{
      setNum(Number(child)/Number(mother));
    }
    setP(form);
    setSlush(false);
    slushcp=false;
    setForm("0");
    setChild('0');
    setMother('0');
    setPoint(false);
    pointcp=false;
    setMinace(false);
    setClick(click.map((item:boolean,ind:number)=>(ind===0||ind===12)?true:false))
  }
  return (
    <div>
        <div className={formstyle.form}>
            <p>{title}：</p>
            <input 
              type="text"
              value={form}
              disabled={true}
              className={inputform.text}
            />
        </div>
          <div>
            {numberbutton.map((item:string,index:number)=>(
              <input type="button" 
                value={item} 
                key={index}
                disabled={click[index]}
                onClick={(e)=>handlebutton(e,index)}
                className={inputform.numberbutton}
              />
            ))}
          </div>
          <div className={inputform.confirmform}>
            <input 
              type="button" 
              value={`${title}を確定させる`}
              onClick={()=>Confirm()}
              className={inputform.confirmbutton}
            />
          </div>
      </div>
  );
}

export default Graphform;