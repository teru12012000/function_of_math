import { NextPage } from "next";
import Graph from "../../components/Graph";
import { MouseEvent, SetStateAction, useState } from "react";
import formstyle from "../../components/styles/valueform.css";
import Graphtable from "../../components/graphtable";
import { label, numberbutton, x_array } from "../../data/writegraph_value";
import Graphform from "../../components/Graphform";


numberbutton.push('-','.','/','C');
const Index:NextPage = () => {

  const [numA,setNumA]=useState(0);
  const [numB,setNumB]=useState(1);
  const [slushA,setSlushA]=useState(false);
  const [slushB,setSlushB]=useState(false);
  const [pa,setPa]=useState("");//傾き表示(input)
  const [pb,setPb]=useState("");//傾き表示(input)
  const [y_array,setY_array]=useState(x_array.map((item:number,index:number)=>0));



  
  

  const writegraph=()=>{
    console.log(numA);
    setY_array(x_array.map((item:number,index:number)=>(
      Number((numA*item+numB).toFixed(3))
    )))
  }



  return (
    <div>
      <Graph x={label} y={y_array} scale={1} min={-50} max={50}/>
      <div className={formstyle.contain}>
        
        <div className={formstyle.form}>
          <p>
            y=
          </p>
          <p className={formstyle.text}>
            {pa}
          </p>
          <p>
            x+
          </p>
          <p className={formstyle.text}>
            {pb}
          </p>
        </div>
        
        
        <div>
          <Graphform
            setP={setPa}
            setNum={setNumA}
            setSlush={setSlushA}
            p={pa}
            num={numA}
            slush={slushA}
            title={'傾き'}         
          />
        </div>
        <div>
          <Graphform
            setP={setPb}
            setNum={setNumB}
            setSlush={setSlushB}
            p={pb}
            num={numB}
            slush={slushB}
            title={'切片'}         
          />
        </div>
        <div>
          <input 
            type="button" 
            value="グラフ描画！"
            onClick={()=>writegraph()}
          />
        </div>
        <Graphtable x={label} y={y_array}/>
      </div>
      
    </div>
  );
}

export default Index;