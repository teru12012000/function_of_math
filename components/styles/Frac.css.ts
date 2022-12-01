import { style } from "@vanilla-extract/css";

const frac={
  content:style({
    width:"100%",
    display:"flex",
    marginTop:"30px",
    justifyContent:"center",
  }),
  child:style({
    width:"80px",
    margin:"auto",
    borderBottom:"2px solid black",
    textAlign:"center",
  }),
  input:style({
    width:"60px",
    margin:"auto",
    marginBottom:"10px",
    border:"1px solid black",
  }),
  input1:style({
    width:"70px",
    height:"30px",
    marginLeft:"10px",
    textAlign:"center",
    border:"1px solid black",
  }),
  mother:style({
    width:"80px",
    margin:"10px auto",

    //borderBottom:"2px solid black",
    textAlign:"center",
  })
}

export default frac;