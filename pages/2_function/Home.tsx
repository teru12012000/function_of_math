import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Header from "../../components/Header";
import {function2, linkdata } from "../../data/linkdata";
import func1 from "../../styles/function1.css";

const index:NextPage = () => {
  return (
    <>
      <Head>
        <title>2次関数目次</title>
        <meta name="description" content="2次関数のページです" />
      </Head>
      <Header title={"2次関数"} link={"/"} display={'block'}/>
        <div className={func1.content}>
          <div className={func1.box}>
            <h2 className={func1.h2}>menu list!</h2>
            {function2.map((item:linkdata,index:number)=>(
              <div key={index} className={func1.linkbox}>
                <Link href={item.link} className={func1.link}>
                  {item.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
    </>
    
  );
}

export default index;