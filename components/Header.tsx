import { FC } from "react";
import head from "./styles/header.css";

type Props={
  title:string;
}


const Header:FC<Props> = ({title}) => {
  return (
    <header className={head.content}>
      <h1>{title}</h1>
    </header>
  );
}

export default Header;