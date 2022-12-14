  import {Dispatch,SetStateAction} from 'react';
  export const x_array:number[]=[...Array(11)].map((_,index:number)=>(index-5));
  export const label:string[]=x_array.map((item:number,index:number)=>String(item));
  export const x2_array:number[]=[...Array(1001)].map((_,index:number)=>((index-500)/100))
  export const label2:string[]=x2_array.map((item:number,index:number)=>String(item))
  export const numberbutton:string[]=[
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '-',
    '.',
    '/',
    'C',
  ];
  
  export type graphdata={
    setP:Dispatch<SetStateAction<string>>;
    setNum:Dispatch<SetStateAction<number>>;
    title:string;
  }