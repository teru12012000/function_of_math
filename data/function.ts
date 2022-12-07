import { Dispatch, SetStateAction } from "react";

export const calculate=(
  numx1:number,
  numx2:number,
  numy1:number,
  numy2:number,
  setStrmother:Dispatch<SetStateAction<string>>,
  setStrchild:Dispatch<SetStateAction<string>>,
  setAns:Dispatch<SetStateAction<string>>,
)=>{
  const mother:number=numx2-numx1;
  const child:number=numy2-numy1;
  setStrmother(String(mother.toFixed(3)));
  setStrchild(String(child.toFixed(3)));
  if(mother===0){
    window.alert("分母が0になるような値は入力しないでください！！！");
    setAns("実不")
  }else{
    var numans:string=(child/mother).toFixed(3);
    setAns(numans);
  }
}