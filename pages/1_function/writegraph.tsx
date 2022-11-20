import { NextPage } from "next";
import {Line} from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Graph from "../../components/Graph";
import { MouseEvent, useState } from "react";
import formstyle from "../../components/styles/valueform.css";
import Graphtable from "../../components/graphtable";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
);


const Index:NextPage = () => {
  const [a1,setA1]=useState("2");
  const [a2,setA2]=useState("");
  const [b1,setB1]=useState("5");
  const [b2,setB2]=useState("");
  const [dis,setDis]=useState('none');
  const [slush,setSlush]=useState("");
  const x_array:number[]=[...Array(11)].map((_,index:number)=>(index-5));
  const [y_array,setY_array]=useState(x_array.map((item:number,index:number)=>(2*item+5)));
  const label:string[]=x_array.map((item:number,index:number)=>String(item));
  const numberbutton:string[]=[...Array(10)].map((_,index:number)=>(String(index)));
  numberbutton.push('.','/','C');
  /*const handleClick=()=>{
    const a_value=Number(a);
    const b_value=Number(b);
    setY_array(x_array.map((item:number,index:number)=>(
      a_value*item+b_value
    )))
  }*/
  

const handlebutton=(value:string)=>{
  if(value==='/'&&slush===''){
    setSlush('/');
    setDis('block');
  }else if(value==='/'&&slush!==''){
    setSlush('');
    setDis('none');
  }else{

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
            a
          </p>
          <p>
            x+
          </p>
          <p className={formstyle.text}>
            b
          </p>
        </div>
        
        
        
        
        
        
        
        <div className={formstyle.form}>
          <p>傾き：</p>
          <input 
            type="text"
            value={a1}
            disabled={true}
          />
          {slush}
          <input 
            type="text"
            value={a2}
            disabled={true}
            style={{display:dis}}
          />
        </div>
        {numberbutton.map((item:string,index:number)=>(
            <input type="button" 
              value={item} 
              key={index}
              onClick={(e)=>handlebutton(e.currentTarget.value)}
            />
          ))}<br/>
          <div className={formstyle.form}>
          <p>切片：</p>
          <input 
            type="text"
            value={a1}
            disabled={true}
          />
          {slush}
          <input 
            type="text"
            value={a2}
            disabled={true}
            style={{display:dis}}
          />
        </div>
        {numberbutton.map((item:string,index:number)=>(
            <input type="button" 
              value={item} 
              key={index}
              onClick={(e)=>handlebutton(e.currentTarget.value)}
            />
          ))}<br/>
        
        <Graphtable x={label} y={y_array}/>
      </div>
      
    </div>
  );
}

export default Index;