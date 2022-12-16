import { NextPage } from "next";
import Graph from "../../components/Graph";
import { useState } from "react";
import formstyle from "../../components/styles/valueform.css";
import Graphtable from "../../components/graphtable";
import { label, label2, x2_array, x_array } from "../../data/writegraph_value";
import Graphform from "../../components/Graphform";
import Head from "next/head";
import Comment from "../../components/Comment";
import Header from "../../components/Header";
import { MathJaxContext, MathJax } from "better-react-mathjax";
import { writegraph2 } from "../../data/function";
import Caluculate from '../../components/Caluculate';
import {Dispatch,SetStateAction} from 'react'
import Setting from "../../components/Setting";
import G_2 from "../../styles/function2.css";
type Graph_data={
  setP:Dispatch<SetStateAction<string>>;
  setNum:Dispatch<SetStateAction<number>>;
  title:string;
}
const Index:NextPage = () => {
  const [numA,setNumA]=useState(0);//型変換したやつ
  const [pa,setPa]=useState("0");//傾き表示(input)
  const [y_array,setY_array]=useState(x_array.map((item:number,index:number)=>0));//Yの値
  const [y2_array,setY2_array]=useState(x2_array.map((item:number,index:number)=>0));//Yの値
  const write=():void=>writegraph2(
    numA,
    setY_array,
    setY2_array,
  )
  const g_data:Graph_data[]=[
    {
      setP:setPa,
      setNum:setNumA,
      title:"定数",
    },
  ]
  return (
    <div>
      <Head>
        <title>2次関数のグラフ</title>
      </Head>
      <Header title={'2次関数のグラフ'} link={'/2_function/Home'} display={'block'}/>
      <Graph x={label2} y={y2_array}y2={undefined} scale={1} min={-50} max={50}/>
      <div className={G_2.Formula}>
        <MathJaxContext>
          <MathJax>
            {`\\(y=\\)`}
          </MathJax>
          <p className={G_2.minibox}>{pa}</p>
          <MathJax>
            {`\\(x^2\\)`}
          </MathJax>
        </MathJaxContext>
      </div>
      <div
        style={{
          textAlign:"center",
        }}
      >
        <Graphtable x={label} y={y_array}/>
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
              title={'グラフ描画'}
              caluculate={write}
            />
          </div>
        </Setting>
      </div>
      <Comment title={"2次関数のグラフについて"}>
        <MathJaxContext>
        まず、2次関数の式は以下のようになります。
          <MathJax
            style={{textAlign:"center",fontSize:"30px"}}
          >
            {`\\(y=ax^2\\)`}
          </MathJax>
          <MathJax>
            {"\\(a\\)"}は今回はただの定数です。傾きではありません。
            ここはよく間違えやすいところです。注意しましょう。2次関数のグラフは
            放物線を描きます。{"\\(a\\)"}が正であれば下に凸,{"\\(a\\)"}が負であれば上に凸
            のグラフになります。言語化が難しいので実際に色々値を代入して確認してみてください。
            尚{"\\(x\\)"}軸ラベルが分けわかめなことになっていると思うのですが形はあっているので、
            表の方の値を参考にしてみてください。
          </MathJax>
        </MathJaxContext>
    </Comment>  
     </div>
     
  );
}
export default Index;