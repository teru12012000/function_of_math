import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import { homelink, linkdata } from '../data/linkdata'
import func1 from '../styles/function1.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>中学関数アプリ</title>
        <meta name="description" content="中学数学で習う関数のアプリです" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title={'中学関数アプリ'} link={''} display={'none'}/>
      <div className={func1.content}>
          <div className={func1.box}>
            <h2 className={func1.h2}>menu list!</h2>
            {homelink.map((item:linkdata,index:number)=>(
              <div key={index} className={func1.linkbox}>
                <Link href={item.link} className={func1.link}>
                  {item.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
    </>
  )
}
