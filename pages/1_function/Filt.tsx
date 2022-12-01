import { NextPage } from "next";
import Head from "next/head";
import Header from "../../components/Header";
import frac from "../../components/styles/Frac.css";

const Filt:NextPage = () => {
  
  return (
    
    <>
      <Head>
        <title>傾き(変化の割合)について</title>
      </Head>
      <Header title={"傾きについて"} link={'/1_function/home'}/>
      <div className={frac.content}>
        <div>
          <div className={frac.child}>
            <p className={frac.input}>
              y
            </p>
          </div>
          <div className={frac.mother}>
            <p className={frac.input}>
              x
            </p>
          </div>
        </div>
        <p>=</p>
        <p className={frac.input1}>
          abc
        </p>
      </div>  
    </>
  );
}

export default Filt;