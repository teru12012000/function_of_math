import { FC, ReactNode, useState } from "react";
import frac from "./styles/valueform2.css";
type Props={
  children:ReactNode[];
}
const Setting:FC<Props> = ({children}) => {
  const [dis,setDis]=useState<string>("none");
  const handleclick=()=>{
    if(dis==='none'){
      setDis('block');
    }else{
      setDis('none');
    }
  }
  return (
    <>
      <h2 
          className={frac.h2} 
          onClick={()=>handleclick()}  
        >設定</h2>
        <div 
          className={frac.box}
          style={{display:dis}}
        >
          {children.map((item:ReactNode,index:number)=>(
            <div key={index}>
              {item}
            </div>
          ))}
        </div>
      <p>※設定をクリック</p>
      </>
  );
}

export default Setting;