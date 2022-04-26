import React, { useContext } from "react";
import {TransactionContext} from "../context/transContext";

export const TransactionHistory=() =>{

    let {transaction,addTrans}=useContext(TransactionContext);
    return(
        <div>
            <h3 id="tran-history">
                Transcation History
                <hr/>
            </h3>
            <ul className="transaction-list">
                {transaction.map((transObj,ind)=>{
                    return(
                        <li key={ind}>
                            <span>{transObj.desc}</span>
                            <span><span className="dollar">$ </span>{transObj.amount}</span>
                        </li>
                    )
                })

                }
            </ul>
           

        </div>
    )
}