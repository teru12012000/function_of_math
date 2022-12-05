import { style } from "@vanilla-extract/css";

const solve_1={
  content:style({
    textAlign:"center",
  }),
  filt:style({
    display:"flex",
    justifyContent:"center",
    fontSize:"40px",
    marginBottom:"-40px",
    marginTop:"-40px",
  }),
  boxvalue:style({
    width:"70px",
    height:"30px",
    marginTop:"58px",
    fontSize:"20px",
    border:"1px solid black",
  }),
  flexother:style({
    fontSize:"25px",
    margin:"0",
    '@media':{
      'screen and (max-width:400px)':{
        fontSize:"15px",
      }
    }
  }),
  flexspan:style({
    fontSize:"25px",
    margin:"0",
  }),
  setting:style({
    textAlign:"center",
  })
}

export default solve_1;




