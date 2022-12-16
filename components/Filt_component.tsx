import { FC } from "react";
import frac from "./styles/valueform2.css";
import { MathJaxContext, MathJax } from "better-react-mathjax";
type Props={
  strchild:string;
  strmother:string;
  ans:string;
  px1:string;
  px2:string;
  py1:string;
  py2:string;
}
const Filt_component:FC<Props> = ({strchild,strmother,ans,px1,px2,py1,py2}) => {
  return (
    <>
      <h2>傾き</h2>
      <div className={frac.content}>
        <MathJaxContext>
          <MathJax style={{
            fontSize:"30px",
            border:"3px solid black",
            padding:"5px",
          }}>
            {`\\( \\frac{${strchild}}{${strmother}}=${ans} \\)`}
          </MathJax>
        </MathJaxContext>
      </div>
      <div className={frac.valueform}>
        <h2>座標</h2>
        <div className={frac.content1}>
          <div className={frac.inputvalue}>
            <p className={frac.p}>(</p>
            <p className={frac.p1}>{px1}</p>
            <p className={frac.p}>,</p>
            <p className={frac.p1}>{py1}</p>
            <p className={frac.p}>)</p>
          </div>
          <div className={frac.inputvalue}>
            <p className={frac.p}>と</p>
          </div>
          <div className={frac.inputvalue}>
            <p className={frac.p}>(</p>
            <p className={frac.p1}>{px2}</p>
            <p className={frac.p}>,</p>
            <p className={frac.p1}>{py2}</p>
            <p className={frac.p}>)</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Filt_component;