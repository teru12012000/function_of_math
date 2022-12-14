import { NextPage } from "next";
import Graph from "../../components/Graph";
import { useState } from "react";
import formstyle from "../../components/styles/valueform.css";
import Graphtable from "../../components/graphtable";
import { label, label2, x2_array, x_array } from "../../data/writegraph_value";
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
  const [pa,setPa]=useState("0");//傾き表示(input)
  const [y_array,setY_array]=useState(x_array.map((item:number,index:number)=>5*item*item));//Yの値
  const [y2_array,setY2_array]=useState(x_array.map((item:number,index:number)=>10*item+1));//Yの値
 




  return (
    <div>
      <Head>
        <title>2次関数のグラフ</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css" />
      </Head>
      <Header title={'2次関数のグラフ'} link={'/1_function/home'} display={'block'}/>
      <Graph x={label} y={y_array}y2={y2_array} scale={1} min={-50} max={50}/>
     </div>
  );
}
export default Index;