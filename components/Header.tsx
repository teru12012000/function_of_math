import { FC, useState } from "react";
import head from "./styles/header.css";
import KeyboardDoubleArrowLeftRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import Link from "next/link";
import Modal from "react-modal";

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
type Props={
  title:string;
  link:string;
  display:string;
}

Modal.setAppElement('#__next')
const Header:FC<Props> = ({title,link,display}) => {
  const [editModalIsOpen, setEditModalIsOpen] = useState<boolean>(false);
  const openmodal=()=>{
    setEditModalIsOpen(true);
  }
  const closemodal=()=>{
    setEditModalIsOpen(false);
  }

  return (
    <>
      <header className={head.content}>
        <h1>{title}</h1>
        <div>
          <InfoRoundedIcon 
            className={head.information}
            onClick={()=>openmodal()}
          />
        </div>
      </header>
      <div
        style={{display:display}}
      >
        <Link 
          href={link} 
          className={head.link}
        >
          <KeyboardDoubleArrowLeftRoundedIcon
            sx={{fontSize:40}}
          />
          <p className={head.p}>
            back
          </p>
        </Link>
      </div>
      
      <Modal
        isOpen={editModalIsOpen}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className={head.modalcontent}>
          <h2 
            style={{textAlign:"center"}}
          >このアプリを使用するにあたって！</h2>
          <h3>勉強手順</h3>
          <ol>
            <li>解説を読む(解説に例題があれば一緒に解く)</li>
            <li>自分で値を設定する</li>
            <li>計算ボタンは押さずに自分で計算する</li>
            <li>答え終わったら計算するボタンをクリック</li>
            <li>自分が答えた回答とその値があっているかを確認</li>
          </ol>
          <h3>注意</h3>
          計算するのボタンを押すと基本的には答えは小数で出力されます.<br/>
          分数で答えた場合には小数に直してあっているかどうかを確認してください.<br/>
          <h3>その他のアドバイス</h3>
          <ul>
            <li>解説で分からないものがあったら前に戻る</li>
            <li>それでもわからないなら自分の教科書で確認</li>
            <li>ただ、やり方を覚えるだけでなくグラフの形やその式の意味も考えると尚良し！</li>
          </ul>
          <div className={head.buttonform}>
          <button
            className={head.button}
            onClick={()=>closemodal()}
          >
            戻る
          </button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Header;