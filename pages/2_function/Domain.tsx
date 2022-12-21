import { NextPage } from "next";
import Head from "next/head";
import { Dispatch, SetStateAction, useState } from "react";
import Formula2 from "../../components/Formula2";
import Graph from "../../components/Graph";
import Header from "../../components/Header";
import { label2, x2_array } from "../../data/writegraph_value";
import { MathJaxContext, MathJax } from "better-react-mathjax";
import Formula3 from "../../components/Formula3";
import { cal_domain } from "../../data/function";
import Setting from "../../components/Setting";
import Graphform from "../../components/Graphform";
import Caluculate from "../../components/Caluculate";
type Graph_data={
  setP:Dispatch<SetStateAction<string>>;
  setNum:Dispatch<SetStateAction<number>>;
  title:string;
}
const Domein:NextPage = () => {
  const [x,setX]=useState<number[]>(x2_array);
  const [xlabel,setXlabel]=useState<string[]>(label2);
  const [y_array,setY_array]=useState<number[]>(x2_array.map((item:number,index:number)=>0));
  const [pa,setPa]=useState<string>("0");
  const [numA,setNumA]=useState<number>(0);
  const [minx,setMinx]=useState<string>("0");
  const [numminX,setNumminX]=useState<number>(0);
  const [maxx,setMaxx]=useState<string>("0");
  const [nummaxX,setNummaxX]=useState<number>(0);
  const [miny,setMiny]=useState<string>("0");
  const [numminY,setNumminY]=useState<number>(0);
  const [maxy,setMaxy]=useState<string>("0");
  const [nummaxY,setNummaxY]=useState<number>(0);
  const write=():void=>cal_domain(
    numminX,
    nummaxX,
    numA,
    setX,
    setXlabel,
    setY_array,
    setMiny,
    setMaxy,
  );
  const g_data:Graph_data[]=[
    {
      setP:setPa,
      setNum:setNumA,
      title:"定数",
    },
    {
      setP:setMinx,
      setNum:setNumminX,
      title:"xの最小値",
    },
    {
      setP:setMaxx,
      setNum:setNummaxX,
      title:"xの最大値",
    },
  ]
  return (
    <div>
       <Head>
        <title>変域について</title>
      </Head>
      <Header title={"変域"} link={'/2_function/Home'} display={'block'}/>
      <Graph x={xlabel} y={y_array} y2={undefined} scale={1} min={-50} max={50}/>
      <div
        style={{
            textAlign:'center',
            margin:"auto",
            width:"250px",
            border:"2px solid blue",
            marginBottom:"20px",
          }}
      >
        <MathJaxContext>
          {`\\(y\\)`}の変域
        </MathJaxContext>
        <Formula3 a={miny} b={maxy} x={'y'}/> 
      </div>
      <Formula2 pa={pa}/>
      <div
        style={{textAlign:"center"}}
      >
        <MathJaxContext>
          <MathJax
            style={{marginBottom:"20px"}}
          >
            のグラフで{`\\(x\\)`}の変域が
          </MathJax>
        </MathJaxContext>
        <Formula3 a={minx} b={maxx} x={'x'}/>
        <MathJaxContext>
          <MathJax
            style={{marginTop:"20px"}}
          >
            の{`\\(y\\)`}の変域
          </MathJax>
        </MathJaxContext>
      </div>
      <div
        style={{
          textAlign:"center",
          marginTop:"10px",
          marginBottom:"10px",
        }}
      >
        <Setting>
          {g_data.map((item:Graph_data,index:number)=>(
            <div key={index}>
              <Graphform
                setP={item.setP}
                setNum={item.setNum}
                title={item.title}         
              />
            </div>
          ))}
          <div>
            <Caluculate
              title={'変域の計算'}
              caluculate={write}
            />
          </div>
        </Setting>
      </div>
    </div>
  );
}

export default Domein;