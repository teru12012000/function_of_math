import { style } from "@vanilla-extract/css";

const comment={
  form:style({
    width:"80%",
    margin:"auto",
    textAlign:"center",
  }),
  formla:style({
    textAlign:"center",
    fontSize:"25px",
    width:"80%",
    margin:"auto",
    overflow:"auto",
    '::-webkit-scrollbar':{
      display:"none",
    }   
  }),
  h2:style({
    border:"2px solid gray",
    margin:"0",
    marginTop:"50px",
    backgroundColor:"yellow",
    color:"blue",
    ':hover':{
      backgroundColor:"aqua",
      color:"white",
      transition:"0.6s",

    }
  }),
  section:style({
    border:"2px solid gray",
    margin:"0",
  }),
  main:style({
    textAlign:"left",
  }),
  link:style({
    backgroundColor:"yellow",
    color:"blue",
    ':hover':{
      backgroundColor:"aqua",
      color:"white",
      transition:"0.6s",
      
    }
  }),
}

export default comment;