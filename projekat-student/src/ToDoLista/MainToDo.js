import React, { useState, useEffect } from 'react';
import ToDoForma from './ToDoForma';
import ToDoList from './ToDoList';


const MainToDo = () => {

 const [inputText,setInputText] = useState("") ;
 const [todos,setTodos] = useState([]) ;
 const [status,setStatus] = useState("Svi") ;
 const [filteredToDos,setFilteredToDos] = useState([]) ;


    return(
        <div className="main-to-do-container">
        <ToDoForma inputText={inputText} setInputText={setInputText}
         todos={todos} setTodos={setTodos} setStatus={setStatus}></ToDoForma>    

         <ToDoList todos={todos} setTodos={setTodos}></ToDoList>
    
         </div>
    
        ); 
}
export default MainToDo ; 