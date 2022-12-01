import { NextPage } from "next";
import Link from "next/link";
const index:NextPage = () => {
  return (
    <div>
     <div>
      <Link href="/1_function/writegraph">
        1次関数のグラフについて
      </Link>
     </div>
     <div>
      <Link href="/1_function/Filt">
        変化の割合(傾き)について
      </Link>
     </div>
      
    </div>
  );
}

export default index;