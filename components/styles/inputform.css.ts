import { style } from "@vanilla-extract/css";

const inputform={
  text:style({
    width:"80px",
    height:"30px",
    fontSize:"20px",
    textAlign:"center",
    marginTop:"20px",
    border:"2px solid black",
    backgroundColor:"white",
  }),
  numberbutton:style({
    width:"30px",
    height:"30px",
    margin:"3px",
    borderRadius:"50%",
    backgroundColor:"yellow",
    border:"1px solid yellow",
    color:"blue",
    ':hover':{
      backgroundColor:"aqua",
      border:"1px solid aqua",
      color:"white",
      transition:"0.6s",
    },
    ':disabled':{
      backgroundColor:"gray",
      border:"1px solid gray",
      color:"black",
    }
  }),
  confirmform:style({
    margin:"10px auto",
    width:"80%",
    borderBottom:"2px solid gray",
  }),
  confirmbutton:style({
    margin:"10px",
    height:"40px",
    width:"120px",
    backgroundColor:"yellow",
    color:"blue",
    border:"1px solid yellow",
    borderRadius:"20%",
    ':hover':{
      backgroundColor:"lime",
      border:"1px solid lime",
      color:"red",
      transition:"0.6s",
    },
  }),
  paintgraph:style({
    margin:"10px",
    height:"40px",
    width:"120px",
    backgroundColor:"yellow",
    color:"blue",
    border:"1px solid yellow",
    borderRadius:"20%",
    ':hover':{
      backgroundColor:"lime",
      border:"1px solid lime",
      color:"red",
      transition:"0.6s",
    },
  })
}



export default inputform;