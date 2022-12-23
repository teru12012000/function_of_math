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
import Comment from "../../components/Comment";
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
        <meta name="description" content="2次関数の変域についてです" />
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
        <Comment title={"変域"}>
            <MathJaxContext>
              2次関数の変域ですが、まず変域とは簡単に言えば{`\\(x\\)`}や{`\\(y\\)`}
              の範囲だと思っていいと思います。<br/>
              2次関数で中学の場合は以下の式のみです。
              <MathJax
                style={{textAlign:"center",fontSize:"30px"}}
              >
                {`\\(y=ax^2\\)`}
              </MathJax>
              高校に行くと
              <MathJax
                style={{textAlign:"center",fontSize:"30px"}}
              >
                {`\\(y=ax^2+bx+c\\)`}
              </MathJax>
              <MathJax>
                についてを解いていきますがここでは中学の内容なので{`\\(y=ax^2\\)`}
                のみを見ていきます。{`\\(x\\)`}の範囲が与えられたとき、その範囲が同符号の時
                と異符号の時があります。例えば
              </MathJax>
              <MathJax
                style={{textAlign:"center",fontSize:"30px"}}
              >
                {`\\(y=2x^2\\)`}
              </MathJax>
              という2次関数の式が与えられているとき
              <MathJax
                style={{textAlign:"center",fontSize:"30px"}}
              >
                {`\\(1\\leq x \\leq 2\\)`}<br/>
              </MathJax>
              
              <MathJax>
                これが同符号の時({`\\(-\\)`}の時も同じ)で
              </MathJax>
              <MathJax
                style={{textAlign:"center",fontSize:"30px"}}
              >
                {"\\(-1\\leq x \\leq 2\\)"}
              </MathJax>
              <MathJax>
                これが異符号のときです。同符号の時は{`\\(y=2x^2\\)`}にそれぞれ1と2を代入してあげれば
                {"\\(2\\leq y \\leq 8\\)"}という答えになります。<br/>
                異符号の時は解き方が違く{`\\(y=ax^2\\)`}の{`\\(a\\)`}が正の時は0が最小値,負の時は0が最大値になります。
                どういうことなのかというと2次関数のグラフを想像してみてください。放物線ですよね？{`\\(x\\)`}の変域が異符号ということは
                必ず0をまたぎますその際に0を起点にグラフは方向転換します。つまり下に下がっていって0を起点に
                上に行く、もしくは上に上っていっていったのが0を起点に下がっていくということです。
                何を言っているのか分からない人は前の単元に戻って確認してください。<br/>
                あとは2つの数値のうち絶対値の大きい方を代入してあげればよいだけです。上記例でいきますと、
                {"\\(-1\\leq x \\leq 2\\)"}で絶対値が大きいのは2なので{`\\(y=2x^2\\)`}に2を代入してあげれば、
                {"\\(0\\leq y \\leq 8\\)"}という答えになります。値を色々設定してみて試してみてください。
              </MathJax>
            </MathJaxContext>
        </Comment>
      </div>
    </div>
  );
}

export default Domein;