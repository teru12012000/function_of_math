import { FC } from "react";
type Props={
  x:string[];
  y:number[];
}
const Graphtable:FC<Props> = ({x,y}) => {
  return (
    <table border={1}>
      <thead>
        <tr>
          <th>横軸(x)</th>
          {x.map((item:string,index)=>(
            <th key={index}>
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>縦軸(y)</td>
          {y.map((item:number,index)=>(
            <td key={index}>
              {String(item)}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}

export default Graphtable;