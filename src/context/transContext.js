import React,{ createContext, useReducer } from "react";
import transReduce from './transReducer.js'
let in_transactions=[];

export const TransactionContext=createContext(in_transactions);

export const TransactionProvider=({children})=>{
    let[state,dispatch]=useReducer(transReduce,in_transactions);
   function addTrans(transObj){
       dispatch(
           {
               type:"ADD",
               payload:{desc:transObj.desc,amount:transObj.amount}
           }
       )
   }

   return (
       <TransactionContext.Provider value={{transaction:state,addTrans}}>
           {children}
       </TransactionContext.Provider>
   )


}