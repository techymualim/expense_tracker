import React, { useContext } from "react";
import {TransactionContext} from "../context/transContext";

export const Balance= () =>{


    let {transaction,addTrans}=useContext(TransactionContext);



    let amount_tot=transaction.map(transObj => transObj.amount);
     let sum=0;
     let diff=0;
    let income=amount_tot.forEach((item)=>{
        if(Number(item) > 0){
            sum+=Number(item);
        }
     
    });
    
    let expense=amount_tot.forEach((item)=>{
        if(Number(item) < 0){
            diff+=Number(item);
        }
     
    });

    let balance=sum+diff;

    return(
        <div className="Balance">
            <h4>Balance <br/><span id="bal-am">$ <span className="bal-small">{balance}</span></span></h4>
            
        </div>
    )
}