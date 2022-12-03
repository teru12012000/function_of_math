import { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Graphform from "../../components/Graphform";
import Header from "../../components/Header";
import inputform from "../../components/styles/inputform.css";
import formstyle from "../../components/styles/valueform.css";
import frac from "../../components/styles/valueform2.css";
import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next'
import Comment from "../../components/Comment";
import { MathJaxContext, MathJax } from "better-react-mathjax";

const Filt:NextPage = () => {
  const [numx1,setNumx1]=useState<number>(0);
  const [numx2,setNumx2]=useState<number>(0);
  const [numy1,setNumy1]=useState<number>(0);
  const [numy2,setNumy2]=useState<number>(0);
  const [px1,setPx1]=useState<string>("0");
  const [px2,setPx2]=useState<string>("0");
  const [py1,setPy1]=useState<string>("0");
  const [py2,setPy2]=useState<string>("1");
  const [strmother,setStrmother]=useState<string>("1")
  const [strchild,setStrchild]=useState<string>("0")
  const [ans,setAns]=useState<string>("0")
  const [dis,setDis]=useState<string>("none");
  
  //傾きの計算
  const calculate=()=>{
    const mother:number=numx2-numx1;
    const child:number=numy2-numy1;
    setStrmother(String(mother.toFixed(3)));
    setStrchild(String(child.toFixed(3)));
    if(mother===0){
      window.alert("分母が0になるような値は入力しないでください！！！");
      setAns("実行不能")
    }else{
      var numans:string=(child/mother).toFixed(3);
      setAns(numans);
    }
  }

  //h2ボタンが押されたとき
  const handleclick=()=>{
    if(dis==='none'){
      setDis('block');
    }else{
      setDis('none');
    }
  }
  return (
    
    <>
      <Head>
        <title>傾き(変化の割合)について</title>
      </Head>
      <Header title={"傾きについて"} link={'/1_function/home'}/>
      <div className={formstyle.contain}>
      <h2>傾きの答え</h2>
      <div className={frac.content}>
        <div>
          <div className={frac.child}>
            <p className={frac.input}>
              {strchild}
            </p>
          </div>
          <div className={frac.mother}>
            <p className={frac.input}>
              {strmother}
            </p>
          </div>
        </div>
        <p>=</p>
        <p className={frac.input1}>
          {ans}
        </p>
      </div>
      <div className={frac.valueform}>
        <h2>座標</h2>
        <div className={frac.content1}>
          <div className={frac.inputvalue}>
            <p className={frac.p}>(</p>
            <p className={frac.p1}>{px1}</p>
            <p className={frac.p}>,</p>
            <p className={frac.p1}>{py1}</p>
            <p className={frac.p}>)</p>
          </div>
          <div className={frac.inputvalue}>
            <p className={frac.p}>と</p>
          </div>
          <div className={frac.inputvalue}>
            <p className={frac.p}>(</p>
            <p className={frac.p1}>{px2}</p>
            <p className={frac.p}>,</p>
            <p className={frac.p1}>{py2}</p>
            <p className={frac.p}>)</p>
          </div>
        </div>
      </div>
      <h2 
        className={frac.h2} 
        onClick={()=>handleclick()}  
      >設定</h2>
      <div 
        className={frac.box}
        style={{display:dis}}
      >
        <div>
          <Graphform
            setP={setPx1}
            setNum={setNumx1}
            p={px1}
            num={numx1}
            title={'1つ目のx座標'}         
          />
        </div>
        <div>
          <Graphform
            setP={setPy1}
            setNum={setNumy1}
            p={py1}
            num={numy1}
            title={'1つ目のy座標'}         
          />
        </div>
        <div>
          <Graphform
            setP={setPx2}
            setNum={setNumx2}
            p={px2}
            num={numx2}
            title={'2つ目のx座標'}         
          />
        </div>
        <div>
          <Graphform
            setP={setPy2}
            setNum={setNumy2}
            p={py2}
            num={numy2}
            title={'2つ目のy座標'}         
          />
        </div>
        <div>
          <input 
            type="button" 
            value="傾きを算出！"
            onClick={()=>calculate()}
            className={inputform.paintgraph}
          />
        </div>
      </div>
      <p>※設定をクリック</p>
      </div>
      <Comment title={'グラフの傾きについて'}>
        <MathJaxContext>
          グラフの傾きは変化の割合ともいわれます。その式は以下の通りです。
          <MathJax
            style={{textAlign:"center",fontSize:"30px"}}
          >
            {"\\(変化の割合=\\frac{yの増加量}{xの増加量}\\)"}
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