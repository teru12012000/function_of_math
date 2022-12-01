import { FC } from "react";
import head from "./styles/header.css";
import KeyboardDoubleArrowLeftRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftRounded';
import Link from "next/link";
type Props={
  title:string;
  link:string;
}


const Header:FC<Props> = ({title,link}) => {
  return (
    <>
      <header className={head.content}>
        <h1>{title}</h1>
      </header>
      <Link href={link} className={head.link}>
        <KeyboardDoubleArrowLeftRoundedIcon
          sx={{fontSize:40}}
        />
        <p className={head.p}>
          back
        </p>
      </Link>
    </>
  );
}

export default Header;