import { NextPage } from "next";
import Head from "next/head";
import { Dispatch, SetStateAction, useState } from "react";
import Caluculate from "../../components/Caluculate";
import Filt_component from "../../components/Filt_component";
import Formula from "../../components/Formula";
import Graph from "../../components/Graph";
import Graphform from "../../components/Graphform";
import Graphtable from "../../components/graphtable";
import Header from "../../components/Header";
import Setting from "../../components/Setting";
import { caluculate_function2 } from "../../data/function";
import { label, x_array } from "../../data/writegraph_value";
import solve_1 from "../../styles/Solve1.css";
import { MathJaxContext, MathJax } from "better-react-mathjax";
import Comment from "../../components/Comment";
type Graph_data={
  setP:Dispatch<SetStateAction<string>>;
  setNum:Dispatch<SetStateAction<number>>;
  title:string;
}


const Solve2:NextPage = () => {
  const [y_array,setY_array]=useState(x_array.map((item:number,index:number)=>0));//Yの値
  const [numx1,setNumx1]=useState<number>(0);
  const [numx2,setNumx2]=useState<number>(0);
  const [numy1,setNumy1]=useState<number>(0);
  const [numy2,setNumy2]=useState<number>(0);
  const [pa,setPa]=useState("0");//傾き表示(input)
  const [pb,setPb]=useState("0");//切片表示(input)
  const [px1,setPx1]=useState<string>("0");
  const [px2,setPx2]=useState<string>("0");
  const [py1,setPy1]=useState<string>("0");
  const [py2,setPy2]=useState<string>("0");
  const [strmother,setStrmother]=useState<string>("0")
  const [strchild,setStrchild]=useState<string>("0")
  const [ans,setAns]=useState<string>("実不");
  const [numA,setNumA]=useState(0);//型変換したやつ
  const [numX,setNumX]=useState(0);//型変換したやつ
  const [numY,setNumY]=useState(0);//型変換したやつ
  const func=():void=>caluculate_function2(
    numx1,
    numx2,
    numy1,
    numy2,
    setStrmother,
    setStrchild,
    setAns,
    numA,
    numX,
    numY,
    setPa,
    setPb,
    setY_array,
    setNumA,
    setNumX,
    setNumY,
  )
  const g_data:Graph_data[]=[
    {
      setP:setPx1,
      setNum:setNumx1,
      title:"1つ目のx座標"
    },
    {
      setP:setPy1,
      setNum:setNumy1,
      title:"1つ目のy座標"
    },
    {
      setP:setPx2,
      setNum:setNumx2,
      title:"2つ目のx座標"
    },
    {
      setP:setPy2,
      setNum:setNumy2,
      title:"2つ目のy座標"
    },
  ]
  return (
    <>
      <Head>
        <title>1次関数を求める(2)</title>
      </Head>
      <Header title={"1次関数を求める(2)"} link={'/1_function/home'} display={'block'}/>
      <Graph x={label} y={y_array} y2={undefined} scale={1} min={-50} max={50}/>
      <div 
        style={{textAlign:"center"}}
      >
        <Formula a={pa} b={pb}/>
        <Filt_component
            strchild={strchild}
            strmother={strmother}
            ans={ans}
            px1={px1}
            px2={px2}
            py1={py1}
            py2={py2}
        />
        <Graphtable x={label} y={y_array}/>
        <p className={solve_1.flexother}>誤差が生じることもあるので<br/>大体値が近ければ正解です。</p>
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
            <Caluculate
              title={'式を求める'}
              caluculate={func}
            />
          </Setting>
          <Comment title={"1次関数を求める(2)"}>
            <MathJaxContext>
              まず、1次関数の式はこうだったですよね。
              <MathJax
                style={{textAlign:"center",fontSize:"30px"}}
              >
                {`\\(y=ax+b\\)`}
              </MathJax>
              <MathJax>
                今回は{`\\(a\\)`}も{`\\(b\\)`}もわかりません。その代わり,{`\\(x\\)`}座標,{`\\(y\\)`}座標が
                それぞれ2つずつわかっています。ではどうやって1次関数の式を出せばいいのか？<br/>
                パターンは3通りあると思います。
                <ul>
                  <li>1次関数の式の{`\\(x\\)`}と{`\\(y\\)`}にそれぞれの座標の値を代入して連立方程式を解く</li>
                  <li>傾き{`\\(a\\)`}を求めて1次方程式を解き切片{`\\(b\\)`}を求める</li>
                  <li>傾き{`\\(a\\)`}を求めて裏技の公式を使う</li>
                </ul>
                1つ1つ見ていくと1つ目場合例えば,{`\\((1,2),(2,3)\\)`}を通るとき,以下の用に代入すればよい。
              </MathJax>
              
              <MathJax
                style={{textAlign:"center",fontSize:"30px"}}
              >
                {`\\(2=a+b\\)`}<br/>
                {`\\(3=2a+b\\)`}
              </MathJax>
              <MathJax>
                この連立方程式を解けばよい。<br/>
                2つ目の解き方に関してはまず、傾きは以下の式で求められましたよね？
              </MathJax>
              <MathJax
                style={{textAlign:"center",fontSize:"30px"}}
              >
                {"\\(傾き=\\frac{yの増加量}{xの増加量}\\)"}
              </MathJax>
              <MathJax>
                これで傾き{`\\(a\\)`}が出るので1次関数の式に代入して
                1次方程式を解いて切片{`\\(b\\)`}を出せば良いです。<br/>
                3つ目の解き方に関しては傾きを出すまでは2つ目と同じでありあとは2つの座標のうち
                1つを使って以下の式に当てはめて変形してあげれば良いです。
              </MathJax>
              <MathJax
                style={{textAlign:"center",fontSize:"30px"}}
              >
                {`\\(y-y_1=ax-x_1\\)`}
              </MathJax>
              <MathJax>
                これらのやり方は今までのやり方を組み合わせたものです。いまいち理解ができてない人は、
                戻ってやり直しましょう。また、座標を変えて自分で1次関数の式を解いてみましょう。
              </MathJax>
            </MathJaxContext>
        </Comment>
      </div>
    </>
  );
}

export default Solve2;