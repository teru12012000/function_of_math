import {Line} from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { FC, useState } from "react";
import graphstyle from "./styles/Graph.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
);

type Props={
  x:string[];
  y:number[];
  y2:number[]|undefined;
  scale:number;
  min:number;
  max:number;
}


const Graph:FC<Props> = ({x,y,y2,scale,min,max}) => {
  
  let options = {
    scales:{
      yAxes:
        {
          ticks:{
            stepSize:scale,
          },
        }
      }
  };
  let graphData={
      responsive:true,
      labels:x,
      datasets:[{
        label:"",
        data:y,
        borderColor:"green",
      },
      {
        label:"",
        data:y2,
        borderColor:"blue",
      },
    ]
  }

  
  return (
    <div className={graphstyle.contain}>
      <Line
        data={graphData}
        options={options}
        className={graphstyle.graph}
      />
    </div>
  );
}

export default Graph;