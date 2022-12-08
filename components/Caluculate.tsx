import { Dispatch, SetStateAction, useState, FC } from "react";
import { calculate_flit } from "../data/function";
import inputform from "./styles/inputform.css";
type Props={
  title:string;
  caluculate:()=>void;
}
const Caluculate:FC<Props> = ({
  title,
  caluculate,
}) => {
  return (
    <div>
      <input 
        type="button" 
        value={title}
        onClick={caluculate}
              className={inputform.paintgraph}
            />
    </div>
  );
}

export default Caluculate;