import { FC } from "react";
import formstyle from "./styles/valueform.css";

type Props={
  a:string;
  b:string;
} 


const Formula:FC<Props> = ({a,b}) => {
  return (
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
  );
}

export default Formula;