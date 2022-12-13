import { style } from "@vanilla-extract/css";

const head={
  content:style({
    backgroundColor:"black",
    color:"white",
    padding:"5px",
    display:"flex",
    justifyContent:"space-between",
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
  }),
  information:style({
    fontSize:"45px",
    marginTop:"25px",
    marginRight:"10px",
    ':hover':{
      color:"aqua",
      transition:"0.4s",
    }
  }),
  buttonform:style({
    width:"100%",
    textAlign:"center",
  }),
  button:style({
    backgroundColor:"yellow",
    width:"50px",
    border:"1px solid yellow",
    color:'blue',
    ':hover':{
      backgroundColor:"aqua",
      color:"white",
      transition:"0.6s",
    }
  }),
  modalcontent:style({
    width:"600px",
    margin:"auto",
    '@media':{
      "screen and (max-width:600px)":{
        width:"80%",
      }
    }
  })
}

export default head;