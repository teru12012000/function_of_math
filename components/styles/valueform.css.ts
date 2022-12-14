import {style} from "@vanilla-extract/css";

const formstyle={
  contain:style({
    width:"100%",
    marginTop:"30px",
    textAlign:"center",
  }),
  form:style({
    display:"flex",
    justifyContent:"center",
    textAlign:"center",
    fontSize:"20px",
  }),
  text:style({
    width:"80px",
    height:"30px",
    border:"2px solid black",
    textAlign:"center",
    whiteSpace:"nowrap",
    overflow:"auto",
    '::-webkit-scrollbar':{
      display:"none",
    }
  }),
}

export default formstyle;