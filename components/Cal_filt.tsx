import { Dispatch, SetStateAction, useState, FC } from "react";
import inputform from "./styles/inputform.css";
type Props={
  numx2:number;
  numx1:number;
  numy2:number;
  numy1:number;
  setStrmother:Dispatch<SetStateAction<string>>;
  setStrchild:Dispatch<SetStateAction<string>>;
  setAns:Dispatch<SetStateAction<string>>;
}
const Cal_filt:FC<Props> = ({
  numx2,
  numx1,
  numy1,
  numy2,
  setStrmother,
  setStrchild,
  setAns
}) => {
  //傾きの計算
    const calculate=()=>{
      const mother:number=numx2-numx1;
      const child:number=numy2-numy1;
      setStrmother(String(mother.toFixed(3)));
      setStrchild(String(child.toFixed(3)));
      if(mother===0){
        window.alert("分母が0になるような値は入力しないでください！！！");
        setAns("実行不能")
      }else{
        var numans:string=(child/mother).toFixed(3);
        setAns(numans);
      }
    }
  return (
    <div>
      <input 
        type="button" 
        value="傾きを算出！"
        onClick={()=>calculate()}
        className={inputform.paintgraph}
      />
    </div>
  );
}

export default Cal_filt;