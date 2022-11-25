import { style } from "@vanilla-extract/css";

const graphtable={
  table:style({
    margin:"auto",
    width:"80%",
    tableLayout:"fixed",
    borderCollapse:"collapse",
   
  }),
  title:style({
    width:"60px",
    height:"60px",
    tableLayout:"fixed",
    whiteSpace:"nowrap",
    overflow:"hidden",
  }),
  value:style({
    width:"60px",
    height:"60px",
    tableLayout:"fixed",
    whiteSpace:"nowrap",
    overflow:"hidden",
  }),
  form:style({
    whiteSpace:"nowrap",
    overflow:"auto",
  })
}

export default graphtable;