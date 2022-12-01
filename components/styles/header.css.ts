import { style } from "@vanilla-extract/css";

const head={
  content:style({
    backgroundColor:"black",
    color:"white",
    padding:"5px",
  }),
  link:style({
    width:"100px",
    display:"flex",
    ':hover':{
      color:"aqua",
      transition:"0.6s",
    }
  }),
  p:style({
    margin:"10px",
    marginLeft:"2px",
  })
}

export default head;