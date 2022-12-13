import { NextPage } from "next";
import Head from "next/head";
import Header from "../../components/Header";
import {Dispatch, SetStateAction, useState} from "react";
import { label, x_array } from "../../data/writegraph_value";
import Graph from "../../components/Graph";
import solve_1 from "../../styles/Solve1.css";
import Formula from "../../components/Formula";
import Graphform from "../../components/Graphform";
import Graphtable from "../../components/graphtable";
import Comment from "../../components/Comment";
import { MathJaxContext, MathJax } from "better-react-mathjax";
import Setting from "../../components/Setting";
import { calculate_function } from "../../data/function";
import Caluculate from "../../components/Caluculate";

type graphdata={
  setP:Dispatch<SetStateAction<string>>;
  setNum:Dispatch<SetStateAction<number>>;
  title:string;
}




const Solve_1:NextPage = () => {
  const [y_array,setY_array]=useState(x_array.map((item:number,index:number)=>0));//Yの値
  const [numA,setNumA]=useState(0);//型変換したやつ
  const [numX,setNumX]=useState(0);//型変換したやつ
  const [numY,setNumY]=useState(0);//型変換したやつ
  const [pa,setPa]=useState("0");//傾き表示(input)
  const [pb,setPb]=useState("0");//切片表示(input)
  const [px,setPx]=useState("0");//x座標表示(input)
  const [py,setPy]=useState("0");//y座標表示(input)
  const g_data:graphdata[]=[
    {
      setP:setPa,
      setNum:setNumA,
      title:'傾き',
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
  const func=():void=>calculate_function(
    numA,
    numX,
    numY,
    setPb,
    setY_array,
  );
  return (
    <>
      <Head>
        <title>1次関数を求める(1)</title>
      </Head>
      <Header title={"1次関数を求める(1)"} link={'/1_function/home'} display={'block'}/>
      <Graph x={label} y={y_array} y2={undefined} scale={1} min={-50} max={50}/>
      <Formula a={pa} b={pb}/>
      <div className={solve_1.content}>
        <div className={solve_1.filt}>
          <p><span className={solve_1.flexspan}>傾き：</span></p>
          <p className={solve_1.boxvalue}>{pa}</p>
        </div>
        <p className={solve_1.flexother}>で</p>
        <div className={solve_1.filt}>
          <p>(</p>
          <p className={solve_1.boxvalue}>{px}</p>
          <p>,</p>
          <p className={solve_1.boxvalue}>{py}</p>
          <p>)</p>
        </div>
        <p className={solve_1.flexother}>を通る1次関数の式(直線の式)</p>
        <Graphtable x={label} y={y_array}/>
        <p className={solve_1.flexother}>誤差が生じることもあるので<br/>大体値が近ければ正解です。</p>
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
            title={'式を求める'}
            caluculate={func}
          />
        </Setting>
        <Comment title={"1次関数を求める(1)"}>
          <MathJaxContext>
            まず、1次関数の式はこうだったですよね。
            <MathJax
              style={{textAlign:"center",fontSize:"30px"}}
            >
              {`\\(y=ax+b\\)`}
            </MathJax>
            <MathJax>
              今回は傾きと1つの座標が分かっているという状況です。1次関数の式を
              算出するには切片を求める必要があります。ではどのように出すのかというと
              中学校のテキストに載っている方法としては式の傾き{`\\(a\\)`}、{`\\(x\\)`}、
              {`\\(y\\)`}に代入して1次方程式を解いて{`\\(b\\)`}を出すというものです。<br/>
              具体例を以下に示したいと思います。<br/>
              傾きが{`\\(2\\)`}で{`\\((3,5)\\)`}を通る直線の式を求めます。
            </MathJax>
            <MathJax
              style={{textAlign:"center",fontSize:"30px"}}
            >
              {`\\(5=6+b\\)`}
            </MathJax>
            <MathJax>
              という式になると思います。これを{`\\(b\\)`}についてあげればよいわけです。そうすると、
            </MathJax>
            <MathJax
              style={{textAlign:"center",fontSize:"30px"}}
            >
              {`\\(b=-1\\)`}
            </MathJax>
            <MathJax>
              となるはずです。よって、1次関数の式は
            </MathJax>
            <MathJax
              style={{textAlign:"center",fontSize:"30px"}}
            >
              {`\\(y=2x-1\\)`}
            </MathJax>
            <MathJax>
              となるはずです。これが一般的な解き方です。ここであまり教わらない解き方を教えます。上記の解き方もできた上で
              使用するのが良いかと思います。<br/>
              例として先ほどと同様、傾きが{`\\(2\\)`}で{`\\((3,5)\\)`}を通る直線の式を求めたい。
            </MathJax>
            <MathJax
              style={{textAlign:"center",fontSize:"30px"}}
            >
              {`\\(y-5=2(x-3)\\)`}
            </MathJax>
            <MathJax>
              という式を立てて、展開して{`\\(y\\)`}について解いてあげると
            </MathJax>
            <MathJax
              style={{textAlign:"center",fontSize:"30px"}}
            >
              {`\\(y=2x-1\\)`}
            </MathJax>
            <MathJax>
              となります。一般化すると傾きが{`\\(a\\)`}で{`\\((x_1,y_1)\\)`}を通る直線の式は
            </MathJax>
            <MathJax
              style={{textAlign:"center",fontSize:"30px"}}
            >
              {`\\(y-y_1=ax-x_1\\)`}
            </MathJax>
              この解き方を覚えていおくと時間が短縮し計算ミスも減るかと思います。見直しに使うのもよいでしょう。
          </MathJaxContext>
        </Comment>   
      </div>
    </>
  );
}

export default Solve_1;