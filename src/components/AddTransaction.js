import React, { useState,useContext } from "react";
import {TransactionContext} from "../context/transContext";
 
export const AddTransaction=()=>{
    let {transaction,addTrans}=useContext(TransactionContext);

    let [new_amount,set_amount]=useState(0);
    let[new_desc,set_desc]=useState("");

    function handleAddition(event){
        event.preventDefault();
        addTrans({
            amount:new_amount,
            desc:new_desc
        })
    }
    return(
        <div>
   <h3 id="tran-add">
                Add New Transaction
                <hr/>
            </h3>
            <form className="tran-form" onSubmit={handleAddition}>
            <label htmlFor="description">Enter Description</label>
            <input type="text"
                    id="description"
                    required="required"
                    onChange={(ev)=>{set_desc(ev.target.value)}}
                    />
            <label htmlFor="transactionamount">
                Transaction Amount <br/> (- for Expense/+ for Income)
            </label>
            <input type="number"
                    id="transactionamount"
                    required="required"
                    onChange={(ev)=>{set_amount(ev.target.value)}}
                    />
                    <button className="add-btn">Add Transaction</button>
        </form>
        </div>
     

    )
}