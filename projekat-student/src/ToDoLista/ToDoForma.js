import React, { useState, useEffect } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

const ToDoForma = (props) => {

    const {inputText,setInputText,setTodos,todos,setStatus} = props ;

    const inputHandler = (e)=>{
        console.log(e.target.value) ;
        setInputText(e.target.value) ;   
    }
    const submitHandler = (e)=>{
        e.preventDefault() ; 
        setTodos([
            ...todos,
            {
                tekst : inputText ,
                completed : false , 
                id: Math.random() 
            }
        ]
        ); 
         console.log(todos) ; 
    }

    return(
        <div >
            <form onSubmit={submitHandler} className="input-container">
                <input type="text" placeholder="unesi" onChange={inputHandler} className="unos-teksta" ></input>
                <button type="submit">
                    <FaPlusCircle></FaPlusCircle>
                </button>
            </form>
        </div>
    ); 
}
export default ToDoForma ; 