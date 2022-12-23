import { NextPage } from "next";
import Head from "next/head";
import { Dispatch, SetStateAction, useState } from "react";
import Graphform from "../../components/Graphform";
import Header from "../../components/Header";
import inputform from "../../components/styles/inputform.css";
import formstyle from "../../components/styles/valueform.css";
import Comment from "../../components/Comment";
import { MathJaxContext, MathJax } from "better-react-mathjax";
import Filt_component from "../../components/Filt_component";
import Setting from "../../components/Setting";
import { calculate_flit } from "../../data/function";
import Caluculate from "../../components/Caluculate";
type Graph_data={
  setP:Dispatch<SetStateAction<string>>;
  setNum:Dispatch<SetStateAction<number>>;
  title:string;
}
const Filt:NextPage = () => {
  const [numx1,setNumx1]=useState<number>(0);
  const [numx2,setNumx2]=useState<number>(0);
  const [numy1,setNumy1]=useState<number>(0);
  const [numy2,setNumy2]=useState<number>(0);
  const [px1,setPx1]=useState<string>("0");
  const [px2,setPx2]=useState<string>("0");
  const [py1,setPy1]=useState<string>("0");
  const [py2,setPy2]=useState<string>("0");
  const [strmother,setStrmother]=useState<string>("0")
  const [strchild,setStrchild]=useState<string>("0")
  const [ans,setAns]=useState<string>("実不")
  const flit=():void=>calculate_flit(
    numx1,
    numx2,
    numy1,
    numy2,
    setStrmother,
    setStrchild,
    setAns,
    undefined,
  );
  
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
        <title>傾き(変化の割合)について</title>
        <meta name="description" content="傾きについてです" />
      </Head>
      <Header title={"傾きについて"} link={'/1_function/home'} display={'block'}/>
      <div className={formstyle.contain}>
        <Filt_component
          strchild={strchild}
          strmother={strmother}
          ans={ans}
          px1={px1}
          px2={px2}
          py1={py1}
          py2={py2}
        />
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
            title={'傾きを求める'}
            caluculate={flit}
          />
        </Setting>
      </div>
      <Comment title={'グラフの傾きについて'}>
        <MathJaxContext>
          グラフの傾きは変化の割合ともいわれます。その式は以下の通りです。
          <MathJax
            style={{textAlign:"center",fontSize:"30px"}}
          >
            {"\\(傾き=\\frac{yの増加量}{xの増加量}\\)"}
          </MathJax>
          <MathJax>
            増加量とは何かというと増えた量のことをいいます。つまり、その値は
            どれだけ増えたのかということです。例えば{`\\(x\\)`}が{`\\(-1\\)`}から{`\\(5\\)`}
            増えたといったら{"\\(5-(-1)=6\\)"}で増加量は{"\\(6\\)"}となります。
            よって、{`\\(x\\)`}と{`\\(y\\)`}のそれぞれの増加量を算出して公式に当てはめてあげれば
            いいというわけです。実際に2つの座標を設定し傾きを求めてみましょう。
          </MathJax>
        </MathJaxContext>
    </Comment>
    </>
  );
}

export default Filt;