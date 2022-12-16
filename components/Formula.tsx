import { FC } from "react";
import formstyle from "./styles/valueform.css";
import { MathJaxContext, MathJax } from "better-react-mathjax";
type Props={
  a:string;
  b:string;
} 


const Formula:FC<Props> = ({a,b}) => {
  return (
    <div className={formstyle.form}>
      <MathJaxContext>
        <MathJax>
            {`\\(y=\\)`}
        </MathJax>
        <MathJax className={formstyle.text}>
            {a}
        </MathJax>
          <MathJax>
            {`\\(x+\\)`}
          </MathJax>
          <MathJax className={formstyle.text}>
            {b}
          </MathJax> 
      </MathJaxContext>
    </div>
  );
}

export default Formula;