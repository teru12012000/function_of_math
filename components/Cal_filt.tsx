import { Dispatch, SetStateAction, useState, FC } from "react";
import { calculate } from "../data/function";
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
  return (
    <div>
      <input 
        type="button" 
        value="傾きを算出！"
        onClick={
          ()=>calculate(
            numx1,
            numx2,
            numy1,
            numy2,
            setStrmother,
            setStrchild,
            setAns,
      )}
              className={inputform.paintgraph}
            />
    </div>
  );
}

export default Cal_filt;