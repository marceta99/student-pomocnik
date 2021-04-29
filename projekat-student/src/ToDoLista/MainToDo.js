import React, { useState, useEffect } from 'react';
import ToDoForma from './ToDoForma';
import ToDoList from './ToDoList';


const MainToDo = ({prikazToDo}) => {

 const [inputText,setInputText] = useState("") ;
 const [todos,setTodos] = useState([]) ;
 /*const [status,setStatus] = useState("Svi") ;
 const [filteredToDos,setFilteredToDos] = useState([]) ;
*/

    return(
        <div className={ (prikazToDo===1) ? "main-to-do-container" : "skloni"}>
            <ToDoForma inputText={inputText} setInputText={setInputText}
            todos={todos} setTodos={setTodos}></ToDoForma>    

            <ToDoList todos={todos} setTodos={setTodos}></ToDoList>
        
         </div>
    
        ); 
}
export default MainToDo ; 