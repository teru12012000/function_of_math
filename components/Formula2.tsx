import { FC } from "react";
import G_2 from "../styles/function2.css";
import { MathJaxContext, MathJax } from "better-react-mathjax";
type Props={
  pa:string;
}
const Formula2:FC<Props> = ({pa}) => {
  return (
    <div className={G_2.Formula}>
        <MathJaxContext>
          <MathJax>
            {`\\(y=\\)`}
          </MathJax>
          <p className={G_2.minibox}>{pa}</p>
          <MathJax>
            {`\\(x^2\\)`}
          </MathJax>
        </MathJaxContext>
      </div>
  );
}

export default Formula2;