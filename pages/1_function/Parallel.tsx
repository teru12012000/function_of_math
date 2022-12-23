import { NextPage } from "next";
import Head from "next/head";
import { Dispatch, SetStateAction, useState } from "react";
import Formula from "../../components/Formula";
import Graph from "../../components/Graph";
import Header from "../../components/Header";
import formstyle from "../../components/styles/valueform.css";
import { parallel } from "../../data/function";
import { label, x_array } from "../../data/writegraph_value";
import solve_1 from "../../styles/Solve1.css";
import { MathJaxContext, MathJax } from "better-react-mathjax";
import Setting from "../../components/Setting";
import Graphform from "../../components/Graphform";
import Caluculate from "../../components/Caluculate";
import Comment from "../../components/Comment";
import Link from "next/link";
import comment from "../../components/styles/comment.css";
type graphdata={
  setP:Dispatch<SetStateAction<string>>;
  setNum:Dispatch<SetStateAction<number>>;
  title:string;
}
const Parallel:NextPage = () => {
  const [y1_array,setY1_array]=useState(x_array.map((item:number,index:number)=>0));//Yの値
  const [y2_array,setY2_array]=useState(x_array.map((item:number,index:number)=>0));//Yの値
  const [numA,setNumA]=useState(0);//型変換したやつ
  const [numB,setNumB]=useState(0);//型変換したやつ
  const [numX,setNumX]=useState(0);//型変換したやつ
  const [numY,setNumY]=useState(0);//型変換したやつ
  const [pa1,setPa1]=useState("0");//傾き表示(input)
  const [pb1,setPb1]=useState("0");//切片表示(input)
  const [pa2,setPa2]=useState("0");//傾き表示(input)
  const [pb2,setPb2]=useState("0");//切片表示(input)
  const [px,setPx]=useState("0");//x座標表示(input)
  const [py,setPy]=useState("0");//y座標表示(input)
  const write=():void=>parallel(
    numA,
    numB,
    numX,
    numY,
    setPa2,
    setPb2,
    setY1_array,
    setY2_array,
  );


  const g_data:graphdata[]=[
    {
      setP:setPa1,
      setNum:setNumA,
      title:'傾き',
    },
    {
      setP:setPb1,
      setNum:setNumB,
      title:'切片',
    },
    {
      setP:setPx,
      setNum:setNumX,
      title:'x座標',
    },
    {
      setP:setPy,
      setNum:setNumY,
      title:'y座標',
    },
  ]
  return (
    <div>
      <Head>
        <title>グラフに平行？</title>
        <meta name="description" content="平行なグラフについてです" />
      </Head>
      <Header title={'グラフに平行？'} link={'/1_function/home'} display={'block'}/>
      <Graph x={label} y={y1_array}y2={y2_array} scale={1} min={-50} max={50}/>
      <div className={formstyle.contain}>
        <Formula a={pa1} b={pb1}/>
        <p className={solve_1.flexother}>に平行で</p>
        <div className={solve_1.filt}>
          <p>(</p>
          <p className={solve_1.boxvalue}>{px}</p>
          <p>,</p>
          <p className={solve_1.boxvalue}>{py}</p>
          <p>)</p>
        </div>
        <p className={solve_1.flexother}>を通る1次関数の式(直線の式)は</p>
        <Formula a={pa2} b={pb2}/>
      </div>
      <div 
        className={solve_1.setting}
        style={{marginTop:"10px"}}
      >
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
            title={'式を求める'}
            caluculate={write}
          />
        </Setting>
        <Comment title={"グラフに平行な直線の式"}>
          <MathJaxContext>
            まず、1次関数の式はこうだったですよね。
            <MathJax
              style={{textAlign:"center",fontSize:"30px"}}
            >
              {`\\(y=ax+b\\)`}
            </MathJax>
            今回はこのグラフに平行な直線の式を求めます。ですが平行な直線の式って何？
            って思う人が大半ではないでしょうか？与えられた直線の式に対して平行な直線の式は、
            <p
              style={{
                textAlign:"center",
                fontSize:"20px"
              }}
            >
              傾きが同じ
            </p>
            になります。
            <MathJax>
              つまり{`\\(a\\)`}が同じ値であるということです。そしてよく、問題ではこれとセットで
              {`\\(x\\)`}座標と{`\\(y\\)`}座標が与えられています。「ん？待って？傾きと1つの座標が分かったっているってことは...」、
              そうです！以前にやった1次関数を求める(1)と同じです。では、実際に自分で適当に1つの直線の式と座標を設定し、平行な直線の式を
              求めてみましょう！
            </MathJax>
            <div
              style={{
                textAlign:"center",
              }}
            >
              <Link 
                href="/1_function/Solve_1"
                className={comment.link}
              >
                1次関数を求める(1)
              </Link>
            </div>
          </MathJaxContext>
        </Comment>   
      </div>
    </div>
  );
}

export default Parallel;