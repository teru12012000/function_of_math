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
  const [child,setChild]=useState("");
  const [mother,setMother]=useState("");
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
      if(form==='0'&&value!=='.'&&value!=='C'){
        num=value;
        setForm(num);
        if(slushcp&&value!=='/'){
          setMother(mother+value);
        }else if(value!=='/'){
          setChild(child+value);
        }
        if(value==='-'){
          setMinace(true);
          setClick(click.map((item:boolean,ind:number)=>(ind===10||ind===11)?true:(ind===0)?false:item));
        }else{
          setClick(click.map((item:boolean,ind:number)=>(ind===0||ind===12)?false:(ind===10)?true:item));
        }
      }else if(value==='/'){
        setSlush(true);
        slushcp=true;
        setClick(click.map((item:boolean,ind:number)=>(ind===0||ind===11||ind===12)?true:item));
        num=form+value;
        setForm(num);
      }else if(value==='C'){
        setSlush(false);
        slushcp=false;
        setForm("0");
        setChild('');
        setMother('');
        setPoint(false);
        pointcp=false;
        setMinace(false);
        setClick(click.map((item:boolean,ind:number)=>(ind===0||ind===12)?true:false))
      }else if(value==='.'){
        setClick(click.map((item:boolean,ind:number)=>(ind===10||ind===11||ind===12)?true:(ind===0)?false:item));
        if(slushcp){
          setMother(mother+value);
        }else{
          setChild(child+value);
        }
        setPoint(true);
        pointcp=true;
        num=form+value;
        setForm(num);
      }else{
        if(form==='-'&&value==='0'){
          num=form+value+'.';
          setPoint(true);
          pointcp=true;
        }else{
          num=form+value;
        }
        if(slushcp){
          setClick(click.map((item:boolean,ind:number)=>(
            (ind===12||ind===11)?true:item
          )));
        }else{
          setClick(click.map((item:boolean,ind:number)=>(
            (pointcp&&(ind===11||ind==12))?true:
            (!pointcp&&(ind===11||ind===12))?false:item
          )));
        }
        
        if(slushcp&&value!=='/'){
          setMother(mother+value);
        }else if(value!=='/'){
          setChild(child+value);
        }
        setForm(num); 
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
    setChild('');
    setMother('');
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