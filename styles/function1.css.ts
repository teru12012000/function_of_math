import { style } from "@vanilla-extract/css";

const func1={
  content:style({
    textAlign:"center",
  }),
  box:style({
    width:"400px",
    margin:"30px auto",
    border:"2px solid gray",
    borderRadius:"15%",
    '@media':{
      'screen and (max-width:400px)':{
        width:"80%",
      }
    }
  }),
  h2:style({
    zIndex:"100px",
    width:"200px",
    backgroundColor:"white",
    margin:"-20px auto",
  }),
  linkbox:style({
    marginTop:"30px",
  }),
  link:style({
    fontSize:"20px",
    backgroundColor:"yellow",
    color:"blue",
    ':hover':{
      backgroundColor:"aqua",
      color:"white",
      transition:"0.4s",
    },
    '@media':{
      'screen and (max-width:400px)':{
        fontSize:"15px",
      }
    }
  })
}

export default func1;