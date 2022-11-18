import { NextPage } from "next";
import Link from "next/link";
import Graph from "../../components/Graph";


const index:NextPage = () => {
  const x_array:number[]=[...Array(11)].map((_,index:number)=>(index-5));
  let y_array:number[]=x_array.map((item:number,index:number)=>(2*item+5));
  const label:string[]=x_array.map((item:number,index:number)=>String(item));

  return (
    <div>
      <Link href="/1_function/writegraph">
        1時間数のグラフについて
      </Link>
    </div>
  );
}

export default index;