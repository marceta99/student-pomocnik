import React, { useState, useEffect } from 'react';
import ToDo from './Todo';

const ToDoList = ({todos,setTodos}) => {
    
   



return(
    <div className="to-do-list-container">
        {todos.map(todo => (
          <ToDo todo={todo} todos={todos} setTodos={setTodos}></ToDo>  
        ))}

    </div>
) ; 

}
export  default ToDoList ; 