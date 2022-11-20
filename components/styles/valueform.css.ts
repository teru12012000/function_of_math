import {style} from "@vanilla-extract/css";

const formstyle={
  contain:style({
    width:"400px",
    margin:"30px auto",
    textAlign:"center",
  }),
  form:style({
    display:"flex",
  }),
  text:style({
    width:"30px",
    height:"30px",
    border:"2px solid black",
  })
}

export default formstyle;