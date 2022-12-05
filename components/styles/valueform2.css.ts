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
    fontSize:"20px",
    border:"2px solid black",
  }),
  input1:style({
    width:"70px",
    height:"30px",
    fontSize:"20px",
    marginLeft:"10px",
    textAlign:"center",
    border:"2px solid black",
  }),
  mother:style({
    width:"80px",
    margin:"10px auto",

    //borderBottom:"2px solid black",
    textAlign:"center",
  }),
  content1:style({
    width:"100%",
    marginTop:"30px",
    '@media':{
      'screen and (min-width:450px)':{
        display:"flex",
        justifyContent:"center",
      }
    }
  }),
  p:style({
    marginTop:"-10px",
    fontSize:"30px",
  }),
  p1:style({
    marginTop:"0px",
    textAlign:"center",
    width:"70px",
    height:"30px",
    border:"2px solid black",
    fontSize:"20px",
  }),
  inputvalue:style({
    display:"flex",
    justifyContent:"center",
  }),
  valueform:style({
    textAlign:"center",
  }),
  h2:style({
    width:"80%",
    margin:"auto",
    border:"2px solid black",
    backgroundColor:"yellow",
    color:"blue",
    ':hover':{
      backgroundColor:"aqua",
      color:"white",
      transition:"0.6s",
    }
  }),
  box:style({
    width:"80%",
    margin:"auto",
    border:"2px solid black",
  }),

  
}

export default frac;