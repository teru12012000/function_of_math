import { MathJax, MathJaxContext } from "better-react-mathjax";
import { FC } from "react";
import formstyle from "./styles/valueform.css";
type Props={
  a:string;
  b:string;
  x:string;
}
const Formula3:FC<Props> = ({a,b,x}) => {
  return (
    <div 
      className={formstyle.form}
      style={{
        marginTop:"10px",
        marginBottom:"10px",
      }}
    >
      <MathJaxContext>
        <div className={formstyle.text}>
            {a}
        </div>
          <MathJax
            style={{
              marginLeft:"5px",
              marginRight:"5px",
            }}
          >
            {`\\(\\leq ${x} \\leq \\)`}
          </MathJax>
          <div className={formstyle.text}>
            {b}
          </div> 
      </MathJaxContext>
    </div>
  );
}

export default Formula3;