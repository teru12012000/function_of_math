import { NextPage } from "next";
import Graph from "../../components/Graph";
import { MouseEvent, useState } from "react";
import formstyle from "../../components/styles/valueform.css";
import Graphtable from "../../components/graphtable";
import { label, numberbutton, x_array } from "../../data/writegraph_value";

numberbutton.push('-','.','/','C');
const Index:NextPage = () => {
  const [a,setA]=useState("");
  const [achild,setAchid]=useState(0);
  const [amother,setAmother]=useState(1);
  const [bchild,setBchid]=useState(0);
  const [unclickA,setUnclickA]=useState([...Array(13)].map((_,index:number)=>(index===0||index===11||index===12)?true:false))
  const [unclickB,setUnclickB]=useState([...Array(13)].map((_,index:number)=>(index===0||index===11||index===12)?true:false))
  const [bmother,setBmother]=useState(1);
  const [b,setB]=useState("");
  let slushA:boolean=false;
  let slushB:boolean=false;
  const [y_array,setY_array]=useState(x_array.map((item:number,index:number)=>0));
  
  /*const handleClick=()=>{
    const a_value=Number(a);
    const b_value=Number(b);
    setY_array(x_array.map((item:number,index:number)=>(
      a_value*item+b_value
    )))
  }*/
  

const handlebutton=(e: MouseEvent<HTMLInputElement, globalThis.MouseEvent>,aorb:string,index:number)=>{
  let num:string;
  const value:string=e.currentTarget.value;
  if(aorb==='A'){
    if(!a){
      setUnclickA(unclickA.map((item:boolean)=>false))
    }
    if(value==='/'&&!slushA){
      slushA=true;
      setUnclickA(unclickA.map((item:boolean,ind:number)=>(ind===index)?true:false));
    }
    if(value==='C'){
      slushA=false;
      setA("");
      setAchid(0);
      setBchid(1);
      setUnclickA(unclickA.map((item:boolean,index:number)=>(index===0||index===11||index===12)?true:false))
    }else{
      num=a+value;
      setA(num);
    }

  }else{
    if(!b){
      setUnclickB(unclickB.map((item:boolean)=>false))
    }
    if(value==='/'&&!slushB){
      slushB=true;
      setUnclickB(unclickB.map((item:boolean,ind:number)=>(ind===index)?true:false));
    }else if(value==='.'){
      setUnclickB(unclickB.map((item:boolean,ind:number)=>(ind===index)?true:false));
    }
    if(value==='C'){
      slushB=false;
      setB("");
      setAchid(0);
      setBchid(1);
      setUnclickB(unclickB.map((item:boolean,index:number)=>(index===0||index===11||index===12)?true:false))
    }else{
      num=b+value;
      setB(num);
    }
  }
  
  
  
  
}


  return (
    <div>
      <Graph x={label} y={y_array} scale={1} min={-50} max={50}/>
      <div className={formstyle.contain}>
        
        <div className={formstyle.form}>
          <p>
            y=
          </p>
          <p className={formstyle.text}>
            {a}
          </p>
          <p>
            x+
          </p>
          <p className={formstyle.text}>
            {b}
          </p>
        </div>
        
        
        
        
        
        
        
        <div className={formstyle.form}>
          <p>傾き：</p>
          <input 
            type="text"
            value={a}
            disabled={true}
          />
        </div>
        {numberbutton.map((item:string,index:number)=>(
            <input type="button" 
              value={item} 
              key={index}
              disabled={unclickA[index]}
              onClick={(e)=>handlebutton(e,'A',index)}
            />
          ))}<br/>
          <div className={formstyle.form}>
          <p>切片：</p>
          <input 
            type="text"
            value={b}
            disabled={true}
          />
        </div>
        {numberbutton.map((item:string,index:number)=>(
            <input type="button" 
              value={item} 
              key={index}
              disabled={unclickB[index]}
              onClick={(e)=>handlebutton(e,'B',index)}
            />
          ))}<br/>
        
        <Graphtable x={label} y={y_array}/>
      </div>
      
    </div>
  );
}

export default Index;