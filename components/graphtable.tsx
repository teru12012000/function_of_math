import { FC } from "react";
import graphtable from "./styles/table.css";
type Props={
  x:string[];
  y:number[];
}
const Graphtable:FC<Props> = ({x,y}) => {
  return (
    <div>
      <h3>表</h3>
      <div className={graphtable.form}>
        <table border={1} className={graphtable.table}>
          <thead>
            <tr>
              <th className={graphtable.title}>横軸(x)</th>
              {x.map((item:string,index)=>(
                <th key={index} className={graphtable.value}>
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={graphtable.title}>縦軸(y)</td>
              {y.map((item:number,index)=>(
                <td key={index} className={graphtable.value}>
                  {String(item)}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
  );
}

export default Graphtable;