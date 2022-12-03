import comment from "./styles/comment.css";
import {FC,ReactNode,useState} from "react";
type Props={
  title:string;
  children:ReactNode;
}
const Comment:FC<Props> = ({title,children}) => {
  const [display,setDisplay]=useState("none");
  const handleClick=()=>{
    if(display==='none'){
      setDisplay('block');
    }else{
      setDisplay('none');
    }
  }
  return (
    <div className={comment.form}>
    <h2 
      className={comment.h2}
      onClick={()=>handleClick()}
    >解説</h2>
    <div 
      className={comment.section}
      style={{
        display:display,
      }}
    >
    <h3>{title}</h3>
      <section className={comment.main}>
        {children}
      </section>
    </div>
    <p>※解説をクリック！</p>
  </div>
  );
}

export default Comment;