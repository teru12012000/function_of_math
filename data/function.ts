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

//2次関数の変域
export const cal_domain=(
  numminX:number,
  nummaxX:number,
  numA:number,
  setX:Dispatch<SetStateAction<number[]>>,
  setLabel:Dispatch<SetStateAction<string[]>>,
  setY:Dispatch<SetStateAction<number[]>>,
  setMiny:Dispatch<SetStateAction<string>>,
  setMaxy:Dispatch<SetStateAction<string>>,
)=>{
  const delta:number=Math.abs(nummaxX-numminX);
  const half_delta:number=Number((delta/2).toFixed(0))*100;
  let x:number[]=[...Array(delta*100+1)].map((_,index:number)=>(
    numminX+(index/100)
  ));
  const x_string:string[]=x.map((item:number,index:number)=>(
    String(item)
  ));
  const y:number[]=x.map((item:number)=>(
    numA*item*item
  ))
  if(nummaxX<numminX){
    window.alert('最大値と最小値が逆になってね？');
    setMaxy("範囲確認");
    setMiny("範囲確認");
  }
  else{
    setX(x);
    setLabel(x_string);
    setY(y);
    const miny:number=Math.min.apply(null,y);
    const maxy:number=Math.max.apply(null,y);
    setMaxy(String(maxy));
    setMiny(String(miny));
  }
}

export const intersection_2=(
  numA:number,
  numA1:number,
  numA2:number,
  setX:Dispatch<SetStateAction<string[]>>,
  setY:Dispatch<SetStateAction<string[]>>,
  setY1_array:Dispatch<SetStateAction<number[]>>,
  setY2_array:Dispatch<SetStateAction<number[]>>,
  setX2:Dispatch<SetStateAction<string[]>>,
)=>{
  const Y1:number[]=x2_array.map((item:number)=>(
    numA*item*item
  ));
  const Y2:number[]=x2_array.map((item:number)=>(
    numA1*item+numA2
  ));
  setY1_array(Y1);
  setY2_array(Y2);
  //ここから判別式
  const D:number=(-1*numA1*-1*numA1)-(4*numA*-1*numA2);
  setX2([
    String(numA1),
    String(D),
    String(2*numA)
  ])
  if(D>0){
    const x_num:number[]=[
      (numA1-Math.sqrt(D))/(2*numA),
      (numA1+Math.sqrt(D))/(2*numA),
    ]
    const y_num:number[]=x_num.map((item:number)=>(
      (numA*Number(item)*Number(item))
    ))
    const x_str:string[]=x_num.map((item:number)=>(
      item.toFixed(3)
    ));
    const y_str:string[]=y_num.map((item:number)=>(
      item.toFixed(3)
    ))
    setX(x_str);
    setY(y_str);
  }else if(D===0){
    const x_num:number=(numA1-Math.sqrt(D))/(2*numA);
    const y_num:number=numA*x_num*x_num;
    const x_str:string[]=[
      x_num.toFixed(3),
      '同じ',
    ];
    const y_str:string[]=[
      y_num.toFixed(3),
      '同じ',
    ];
    setX(x_str);
    setY(y_str);
  }else{
    window.alert('この二つのグラフに交点はありません')
    const x_str:string[]=[
      '交点なし',
      '交点なし',
    ];
    const y_str:string[]=[
      '交点なし',
      '交点なし',
    ];
    setX(x_str);
    setY(y_str);
  }
  
  
}
