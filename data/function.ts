import { Dispatch, SetStateAction } from "react";
import { x2_array, x_array } from "./writegraph_value";

var a:number=0;
//傾きの計算
export const calculate_flit=(
  numx1:number,
  numx2:number,
  numy1:number,
  numy2:number,
  setStrmother:Dispatch<SetStateAction<string>>,
  setStrchild:Dispatch<SetStateAction<string>>,
  setAns:Dispatch<SetStateAction<string>>,
  setPa:Dispatch<SetStateAction<string>>|undefined,
):void=>{
  a=0;
  const mother:number=numx2-numx1;
  const child:number=numy2-numy1;
  setStrmother(String(mother.toFixed(3)));
  setStrchild(String(child.toFixed(3)));
  if(mother===0){
    window.alert("分母が0になるような値は入力しないでください！！！");
    setAns("実不")
  }else{
    var numans:number=(child/mother);
    var strans:string=numans.toFixed(3)
    a=numans;
    setAns(strans);
    if(setPa){
      setPa(strans);
    }
  }
}
//傾きと1つの座標がわかっている1次関数の式を求める
export const calculate_function=(
  numA:number|undefined,
  numX:number,
  numY:number,
  setPb:Dispatch<SetStateAction<string>>,
  setY_array:Dispatch<SetStateAction<number[]>>,
):void=>{
  if(numA){
    const b:number=-1*(numA*numX)+numY;
    setPb(b.toFixed(3));
    setY_array(x_array.map((item:number,index:number)=>(
      Number((numA*item+b).toFixed(3))
    )))
  }else{
    const b:number=-1*(a*numX)+numY;
    setPb(b.toFixed(3));
    setY_array(x_array.map((item:number,index:number)=>(
      Number((a*item+b).toFixed(3))
    )))
  }
}

//2つの座標から直線の式を求める
export const caluculate_function2=(
  numx1:number,
  numx2:number,
  numy1:number,
  numy2:number,
  setStrmother:Dispatch<SetStateAction<string>>,
  setStrchild:Dispatch<SetStateAction<string>>,
  setAns:Dispatch<SetStateAction<string>>,
  numA:number,
  numX:number,
  numY:number,
  setPa:Dispatch<SetStateAction<string>>,
  setPb:Dispatch<SetStateAction<string>>,
  setY_array:Dispatch<SetStateAction<number[]>>,
  setNumA:Dispatch<SetStateAction<number>>,
  setNumX:Dispatch<SetStateAction<number>>,
  setNumY:Dispatch<SetStateAction<number>>,
):void=>{
  calculate_flit(
    numx1,
    numx2,
    numy1,
    numy2,
    setStrmother,
    setStrchild,
    setAns,
    setPa,
  );
  calculate_function(
    undefined,
    numx1,
    numy1,
    setPb,
    setY_array,
  )
}
//1次関数のグラフ描画
export const writegraph=(
  numA:number,
  numB:number,
  setY_array:Dispatch<SetStateAction<number[]>>
)=>{
  setY_array(x_array.map((item:number,index:number)=>(
    Number((numA*item+numB).toFixed(3))
  )))
}
//平行なグラフの計算
export const parallel=(
  numA:number,
  numB:number,
  numX:number,
  numY:number,
  setPa:Dispatch<SetStateAction<string>>,
  setPb:Dispatch<SetStateAction<string>>,
  setY_array1:Dispatch<SetStateAction<number[]>>,
  setY_array2:Dispatch<SetStateAction<number[]>>,
)=>{
  setPa(numA.toFixed(3))
  calculate_function(
    numA,
    numX,
    numY,
    setPb,
    setY_array2,
  )
  writegraph(
    numA,
    numB,
    setY_array1,
  )
}



//2次関数のグラフ描画
export const writegraph2=(
  numA:number,
  setY_array:Dispatch<SetStateAction<number[]>>,
  setY2_array:Dispatch<SetStateAction<number[]>>
)=>{
  setY_array(x_array.map((item:number,index:number)=>(
    Number((numA*item*item).toFixed(3))
  )));
  setY2_array(x2_array.map((item:number,index:number)=>(
    Number((numA*item*item).toFixed(3))
  )));
}

//1次関数のグラフの交点
export const two_graph=(
  numA1:number,
  numB1:number,
  setY_array1:Dispatch<SetStateAction<number[]>>,
  numA2:number,
  numB2:number,
  setY_array2:Dispatch<SetStateAction<number[]>>,
  setX:Dispatch<SetStateAction<string>>,
  setY:Dispatch<SetStateAction<string>>,
)=>{

  const x:number=(numB2-numB1)/(numA1-numA2);
  const y:number=numA1*x+numB1;
  if(numA1-numA2===0){
    window.alert('それはグラフが平行なので交点はないぞ！');
  }
  setX(x.toFixed(3));
  setY(y.toFixed(3));
  writegraph(
    numA1,
    numB1,
    setY_array1
  );
  writegraph(
    numA2,
    numB2,
    setY_array2
  )
}
