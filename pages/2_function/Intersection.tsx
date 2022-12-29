import { NextPage } from "next";
import Head from "next/head";
import Header from "../../components/Header";
import { useState } from "react";
import { graphdata, label2, x2_array } from "../../data/writegraph_value";
import Graph from "../../components/Graph";
import Formula2 from "../../components/Formula2";
import Formula from "../../components/Formula";
import solve_1 from "../../styles/Solve1.css";
import { intersection_2 } from "../../data/function";
import Setting from "../../components/Setting";
import Graphform from "../../components/Graphform";
import Caluculate from "../../components/Caluculate";
import Modal from "react-modal";
import head from "../../components/styles/header.css";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import comment from "../../components/styles/comment.css";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    width:"80%",
    height:"80%",
    right: "auto",
    bottom: "auto",
    overflow:'auto',
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  }
};
Modal.setAppElement('#__next')
const Intersection:NextPage = () => {
  const [editModalIsOpen, setEditModalIsOpen] = useState<boolean>(false);
  const openmodal=()=>{
    setEditModalIsOpen(true);
  }
  const closemodal=()=>{
    setEditModalIsOpen(false);
  }
  const [y_array1,setY_array1]=useState(x2_array.map((item:number,index:number)=>0));//Yの値
  const [y_array2,setY_array2]=useState(x2_array.map((item:number,index:number)=>0));//Yの値
  const [numA1,setNumA1]=useState(0);//型変換したやつ
  const [numA2,setNumA2]=useState(0);//型変換したやつ
  const [numB2,setNumB2]=useState(0);//型変換したやつ
  const [pa1,setPa1]=useState("0");//傾き表示(input)
  const [pa2,setPa2]=useState("0");
  const [pb2,setPb2]=useState("0");
  const [x,setX]=useState(["0","0","0"]);
  const [px,setPx]=useState(["0","同じ"]);
  const [py,setPy]=useState(["0","同じ"]);
  const num_str:string[]=[
    "➀",
    "➁",
    "➂"
  ];
  const write=():void=>intersection_2(
    numA1,
    numA2,
    numB2,
    setPx,
    setPy,
    setY_array1,
    setY_array2,
    setX,
  )
  const g_data:graphdata[]=[
    {
      setP:setPa1,
      setNum:setNumA1,
      title:'2次関数の定数',
    },
    {
      setP:setPa2,
      setNum:setNumA2,
      title:'傾き',
    },
    {
      setP:setPb2,
      setNum:setNumB2,
      title:'切片',
    },
  ]

  return (
    <div>
      <Head>
        <title>2つのグラフの交点</title>
        <meta name="description" content="グラフの交点についてです。" />
      </Head>
      <Header title={'2つのグラフの交点'} link={'/2_function/Home'} display={'block'}/>
      <Graph x={label2} y={y_array1} y2={y_array2} scale={1} min={-50} max={50}/>
      <Formula2 pa={pa1}/>
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
        {[...Array(2)].map((_,index:number)=>(
          <div className={solve_1.filt} key={index}>
            <p>(</p>
            <p className={solve_1.boxvalue}>{px[index]}</p>
            <p>,</p>
            <p className={solve_1.boxvalue}>{py[index]}</p>
            <p>)</p>
        </div>
        ))}
        <div className={head.modalcontent}>
          <h2 
            style={{textAlign:"center"}}
          >解の公式の結果</h2>
          <MathJaxContext>
            <MathJax className={comment.formla}>
              {`\\(x=\\frac{➀\\pm \\sqrt{➁}}{➂}\\)`}
            </MathJax>
          </MathJaxContext>
          {num_str.map((item:string,index:number)=>(
            <div 
              key={index}
              style={{display:"flex",justifyContent:"center"}}
            >
              <p>{item}：</p>
              <p>{x[index]}</p>
            </div>
          ))}
          <div
            style={{textAlign:"center", margin:"30px"}}
          >
            ※素因数分解や約分などは自分で行ってください。<br/>
            (プログラムできたら変えるかもしれません。)
          </div>
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
            caluculate={write}
          />
        </Setting>
      </div>
    </div>
  );
}

export default Intersection;