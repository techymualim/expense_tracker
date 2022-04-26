import React, { useContext } from "react";
import {TransactionContext} from "../context/transContext";

export const AccSum=() => {

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

    return(
        <div className="in-ex-container">
        <div className="inc">
            <h4>Income <br/><span className="bal-am"><span className="dollar">$</span> {Number(sum)}</span></h4>
        
        </div>
        <div className="exp">
        <h4>Expense <br/><span className="bal-am"><span className="dollar">$</span> {Number(diff)}</span></h4>

        </div>
        </div>

    )
}