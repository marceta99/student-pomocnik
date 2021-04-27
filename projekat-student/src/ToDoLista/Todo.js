import React, { useState, useEffect } from 'react';
import {FaCheckSquare,FaTrashAlt} from 'react-icons/fa';


const ToDo = ({todo,todos,setTodos}) => {
    
    const obrisiToDo = ()=>{
  
        setTodos(todos.filter(elementNiza => {  //znaci ako je id tog elementa isit kao id onog sto smo 
            if(elementNiza.id !== todo.id){     //kliknuli onda njega nece da vrati u niz i tako ce da 
                return elementNiza ;            //ga izbrise iz niza sto i hocemo 
            }
        } ))

    }
   
    const checkToDo =()=>{
          
        setTodos(todos.filter(elementNiza =>{
            if(elementNiza.id === todo.id){
                elementNiza.completed = true ; 
            }
            return elementNiza ; 
        } ))

    }


    return(
        <div className={todo.completed===true ? "zavrsen" : "nije-zavrsen"}>
           <h2 className="ime-to-do">{todo.tekst}</h2>
           
           <button onClick={checkToDo}  className="complete-btn">
            <FaCheckSquare></FaCheckSquare >
           </button>
           <button onClick={obrisiToDo} className="trash-btn">
            <FaTrashAlt></FaTrashAlt>
           </button>

        </div>
    

    );
}
export default ToDo  ; 