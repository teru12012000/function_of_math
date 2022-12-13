import { NextPage } from "next";
import Head from "next/head";
import Header from "../../components/Header";
import {useState} from 'react';
import { graphdata, label, x_array } from "../../data/writegraph_value";
import { two_graph } from "../../data/function";
import Graph from "../../components/Graph";
import Formula from "../../components/Formula";
import solve_1 from "../../styles/Solve1.css";
import Setting from "../../components/Setting";
import Graphform from "../../components/Graphform";
import Caluculate from "../../components/Caluculate";
import { MathJaxContext, MathJax } from "better-react-mathjax";
import Comment from "../../components/Comment";

const Intersetcion:NextPage = () => {
  const [y_array1,setY_array1]=useState(x_array.map((item:number,index:number)=>0));//Yの値
  const [y_array2,setY_array2]=useState(x_array.map((item:number,index:number)=>0));//Yの値
  const [numA1,setNumA1]=useState(0);//型変換したやつ
  const [numB1,setNumB1]=useState(0);//型変換したやつ
  const [numA2,setNumA2]=useState(0);//型変換したやつ
  const [numB2,setNumB2]=useState(0);//型変換したやつ
  const [pa1,setPa1]=useState("0");//傾き表示(input)
  const [pb1,setPb1]=useState("0");//切片表示(input)
  const [pa2,setPa2]=useState("0");
  const [pb2,setPb2]=useState("0");
  const [px,setPx]=useState("0");
  const [py,setPy]=useState("0");
  const graph=():void=>two_graph(
    numA1,
    numB1,
    setY_array1,
    numA2,
    numB2,
    setY_array2,
    setPx,
    setPy,
  );

  const g_data:graphdata[]=[
    {
      setP:setPa1,
      setNum:setNumA1,
      title:'1つ目の傾き',
    },
    {
      setP:setPb1,
      setNum:setNumB1,
      title:'1つ目の切片',
    },
    {
      setP:setPa2,
      setNum:setNumA2,
      title:'2つ目の傾き',
    },
    {
      setP:setPb2,
      setNum:setNumB2,
      title:'2つ目の切片',
    },
  ]


  return (
    <div>
      <Head>
        <title>2つのグラフの交点</title>
      </Head>
      <Header title={'2つのグラフの交点'} link={'/1_function/home'} display={'block'}/>
      <Graph x={label} y={y_array1} y2={y_array2} scale={1} min={-50} max={50}/>
      <Formula a={pa1} b={pb1}/>
      <div
        style={{textAlign:"center"}}
      >
        と
      </div>
      <Formula a={pa2} b={pb2}/>
      <div
        style={{textAlign:"center"}}
      >
        の交点座標は
      </div>
      <div className={solve_1.filt}>
        <p>(</p>
        <p className={solve_1.boxvalue}>{px}</p>
        <p>,</p>
        <p className={solve_1.boxvalue}>{py}</p>
        <p>)</p>
      </div>
      <div className={solve_1.setting}>
        <Setting>
          {g_data.map((item:graphdata,index:number)=>(
            <div key={index}>
              <Graphform
                setP={item.setP}
                setNum={item.setNum}
                title={item.title}         
              />
            </div>  
          ))}
          <Caluculate
            title={'交点を求める'}
            caluculate={graph}
          />
        </Setting>
        <Comment title={"グラフの交点を求める"}>
          <MathJaxContext>
            まず、1次関数の式はこうだったですよね。
            <MathJax
              style={{textAlign:"center",fontSize:"30px"}}
            >
              {`\\(y=ax+b\\)`}
            </MathJax>
            <MathJax>
              今回は2つの1次関数の式が与えられており、交点を求めろといった問題です。
              この問題の解く手法は連立方程式です！実際に例題を見てみましょう。
            </MathJax>
            <MathJax
              style={{textAlign:"center",fontSize:"30px"}}
            >
              {`\\(y=x+2\\)`}<br/>
              {`\\(y=3x+4\\)`}<br/>
            </MathJax>
            <MathJax>
              このような2つの1次関数の式があったとします。これらの交点を連立方程式で求めたいと思うのですが、
              連立方程式には2つの解法がありましたよね？そう、代入法と加減法でしたね？忘れてる人は復習をちゃんとしましょう。
              グラフの交点を解く際は代入法がいいでしょう！
            </MathJax>
            <MathJax
              style={{textAlign:"center",fontSize:"30px"}}
            >
             {`\\(x+2=3x+4\\)`}<br/>
              {`\\(-2x=2\\)`}<br/>
              {`\\(x=-1\\)`}<br/>
            </MathJax>
            <MathJax>
              となるはずです。そしてどちらの式でもいいので{`\\(x\\)`}に代入をすれば{`\\(y\\)`}が出ます。
            </MathJax>
            <MathJax
              style={{textAlign:"center",fontSize:"30px"}}
            >
              {`\\(y=-1+2\\)`}<br/>
              {`\\(y=1\\)`}
            </MathJax>
            <MathJax>
              よってグラフの交点は{`\\((-1,1)\\)`}となります。
            </MathJax>
            2つの式を設定して実際に解いてみましょう。ただし、傾きが同じ式は平行で
            交点を求めることができないので注意しましょう！
          </MathJaxContext>
        </Comment>
      </div>
    </div>
  );
}

export default Intersetcion;