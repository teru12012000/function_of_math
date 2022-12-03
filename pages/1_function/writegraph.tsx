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
import Latex from 'react-latex';
import inputform from "../../components/styles/inputform.css";
import Comment from "../../components/Comment";
import Header from "../../components/Header";
import { MathJaxContext, MathJax } from "better-react-mathjax";


const Index:NextPage = () => {
  const [numA,setNumA]=useState(0);//型変換したやつ
  const [numB,setNumB]=useState(0);//型変換したやつ
  const [pa,setPa]=useState("0");//傾き表示(input)
  const [pb,setPb]=useState("0");//切片表示(input)
  const [y_array,setY_array]=useState(x_array.map((item:number,index:number)=>0));//Yの値
  //グラフの値を設定
  const writegraph=()=>{
    setY_array(x_array.map((item:number,index:number)=>(
      Number((numA*item+numB).toFixed(3))
    )))
  }

  return (
    
    <div>
      <Head>
        <title>1次関数のグラフ</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css" />
      </Head>
      <Header title={'1次関数のグラフ'} link={'/1_function/home'}/>
      <Graph x={label} y={y_array} scale={1} min={-50} max={50}/>
      <div className={formstyle.contain}>
        <Formula a={pa} b={pb}/>
        <div>
          <Graphform
            setP={setPa}
            setNum={setNumA}
            p={pa}
            num={numA}
            title={'傾き'}         
          />
        </div>
        <div>
          <Graphform
            setP={setPb}
            setNum={setNumB}
            p={pb}
            num={numB}
            title={'切片'}         
          />
        </div>
        <div>
          <input 
            type="button" 
            value="グラフ描画！"
            onClick={()=>writegraph()}
            className={inputform.paintgraph}
          />
        </div>
        <Graphtable x={label} y={y_array}/>
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