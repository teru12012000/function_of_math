import { NextPage } from "next";
import Graph from "../../components/Graph";
import { MouseEvent, useState } from "react";
import formstyle from "../../components/styles/valueform.css";
import Graphtable from "../../components/graphtable";
import { label, numberbutton, x_array } from "../../data/writegraph_value";
let slushA:boolean=false;
let slushB:boolean=false;
let achild:string='';
let amother:string='';
let bchild:string='';
let bmother:string='';
let numA:number=0;
let numB:number=1;
numberbutton.push('-','.','/','C');
const Index:NextPage = () => {
  const [a,setA]=useState("0");//傾き表示(input)
  const [b,setB]=useState("0");//切片表示(input)
  const [pa,setPa]=useState("");//傾き表示(input)
  const [pb,setPb]=useState("");//切片表示(input)

  const [unclickA,setUnclickA]=useState([...Array(13)].map((_,index:number)=>(index===0||index===12)?true:false))
  const [unclickB,setUnclickB]=useState([...Array(13)].map((_,index:number)=>(index===0||index===12)?true:false))
  const [y_array,setY_array]=useState(x_array.map((item:number,index:number)=>0));



  const handlebutton=(e: MouseEvent<HTMLInputElement, globalThis.MouseEvent>,aorb:string,index:number)=>{
    let num:string;
    const value:string=e.currentTarget.value;
    if(aorb==='A'){
      if(a==='0'){
        setUnclickA(unclickA.map((item:boolean,index:number)=>(index===0||index===12)?false:unclickA[index]))
      }
      if(value==='/'&&!slushA){
        slushA=true;
        setUnclickA(unclickA.map((item:boolean,ind:number)=>(ind===index)?true:unclickA[ind]));
      }
      if(value==='C'){
        slushA=false;
        setA("0");
        achild='';
        amother='';
        setUnclickA(unclickA.map((item:boolean,index:number)=>(index===0||index===12)?true:false))
      }else if(value==='.'){
        setUnclickA(unclickA.map((item:boolean,ind:number)=>((ind===index||ind==12)?true:unclickA[ind])));
        setUnclickA(unclickA.map((item:boolean,ind:number)=>(ind===0)?false:unclickA[ind]));
        num=a+value;
        setA(num);
      }else{
        if(a==='0'){
          num=value;
          setA(num);
        }else{
          num=a+value;
          setA(num);
        }
        if(slushA&&value!=='/'){
          amother=amother+value;
        }else if(value!=='/'){
          achild=achild+value;
        }
      }
    }else{
      if(b==='0'){
        setUnclickB(unclickB.map((item:boolean,index:number)=>(index===0||index===12)?false:unclickB[index]))
      }
      if(value==='/'&&!slushB){
        slushA=true;
        setUnclickB(unclickB.map((item:boolean,ind:number)=>(ind===index)?true:unclickB[ind]));
      }
      if(value==='C'){
        slushB=false;
        setB("0");
        bchild='';
        bmother='';
        setUnclickB(unclickB.map((item:boolean,index:number)=>(index===0||index===12)?true:false))
      }else if(value==='.'){
        setUnclickA(unclickB.map((item:boolean,ind:number)=>((ind===index||ind==12)?true:unclickA[ind])));
        setUnclickA(unclickB.map((item:boolean,ind:number)=>(ind===0)?false:unclickB[ind]));
        num=b+value;
        setB(num);
      }else{
        if(b==='0'){
          num=value;
          setB(num);
        }else{
          num=b+value;
          setB(num);
        }
        if(slushB&&value!=='/'){
          bmother=bmother+value;
        }else if(value!=='/'){
          bchild=bchild+value;
        }
      }
    }
  }

  const Confirm=(aorb:string)=>{
    if(aorb==='A'){
      if(!slushA){
        numA=Number(achild);
        console.log(achild);
      }else{
        numA=Number(achild)/Number(amother);
      }
      setPa(a);
    }else{
      if(!slushB){
        numB=Number(bchild);
      }else{
        numB=Number(bchild)/Number(bmother);
      }
      setPb(b);
    }
  }

  const writegraph=()=>{
    setY_array(x_array.map((item:number,index:number)=>(
      numA*item+numB
    )))
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
            {pa}
          </p>
          <p>
            x+
          </p>
          <p className={formstyle.text}>
            {pb}
          </p>
        </div>
        <div>
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
          <input 
            type="button" 
            value="傾きを確定させる"
            onClick={()=>Confirm('A')}
          />
        </div>
        <div>
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
          <input 
            type="button" 
            value="切片を確定させる"
            onClick={()=>Confirm('B')}
          />
        </div>
        <div>
          <input 
            type="button" 
            value="グラフ描画！"
            onClick={()=>writegraph()}
          />
        </div>
        <Graphtable x={label} y={y_array}/>
      </div>
      
    </div>
  );
}

export default Index;