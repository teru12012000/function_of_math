import { NextPage } from "next";
import Graph from "../../components/Graph";
import { useState } from "react";
import formstyle from "../../components/styles/valueform.css";
import Graphtable from "../../components/graphtable";
import { label, x_array } from "../../data/writegraph_value";
import Graphform from "../../components/Graphform";
import Formula from "../../components/Formula";
import Head from "next/head";
import 'katex/dist/katex.mjs';
import Comment from "../../components/Comment";
import Header from "../../components/Header";
import { MathJaxContext, MathJax } from "better-react-mathjax";
import { writegraph } from "../../data/function";
import Caluculate from '../../components/Caluculate';
import {Dispatch,SetStateAction} from 'react'
import Setting from "../../components/Setting";
type Graph_data={
  setP:Dispatch<SetStateAction<string>>;
  setNum:Dispatch<SetStateAction<number>>;
  title:string;
}
const Index:NextPage = () => {
  const [numA,setNumA]=useState(0);//型変換したやつ
  const [numB,setNumB]=useState(0);//型変換したやつ
  const [pa,setPa]=useState("0");//傾き表示(input)
  const [pb,setPb]=useState("0");//切片表示(input)
  const [y_array,setY_array]=useState(x_array.map((item:number,index:number)=>0));//Yの値
  const write=():void=>writegraph(
    numA,
    numB,
    setY_array,
  );
  const g_data:Graph_data[]=[
    {
      setP:setPa,
      setNum:setNumA,
      title:"傾き",
    },
    {
      setP:setPb,
      setNum:setNumB,
      title:"切片",
    },
  ]




  return (
    <div>
      <Head>
        <title>1次関数のグラフ</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css" />
      </Head>
      <Header title={'1次関数のグラフ'} link={'/1_function/home'}/>
      <Graph x={label} y={y_array}y2={undefined} scale={1} min={-50} max={50}/>
      <div className={formstyle.contain}>
        <Formula a={pa} b={pb}/>
        <div
          style={{marginBottom:"10px"}}
        >
          <Graphtable x={label} y={y_array}/>
        </div>
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
              title={'グラフ描画'}
              caluculate={write}
            />
          </div>
        </Setting>
        
      </div>
    <Comment title={"1次関数のグラフについて"}>
        <MathJaxContext>
        まず、1次関数の式は以下のようになります。
          <MathJax
            style={{textAlign:"center",fontSize:"30px"}}
          >
            {`\\(y=ax+b\\)`}
          </MathJax>
          <MathJax>
            {"\\(a\\)"}は傾きや変化の割合と言われ、 {"\\(b\\)"}
            は切片と言われています。傾き(変化の割合)については次の章で話します。
            切片は、{`\\(x=0\\)`}の際の、{"\\(y\\)"}座標を言います。<br/>
        傾きや切片の値を入力して、グラフを描画してみましょう。描画してみるとわかりますが、
        1次関数のグラフは直線になります。このことから1次関数の式を直線の式と言ったりもします。
          </MathJax>
        </MathJaxContext>
    </Comment>     
    </div>
  );
}
export default Index;