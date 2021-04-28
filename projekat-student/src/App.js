import './App.css';
import Dugmad from "./dugmad"  ; 
import MainToDo from './ToDoLista/MainToDo';
import { useState } from 'react';
import NedeljniPlan from './plan/NedeljniPlan';







function App() {
 const [prikazToDo,setPrikazToDo] = useState(1) ;  
 const [prikazH1,setPrikazH1] = useState(1) ;  
 

  return (  
    <div className="App">
        
        <Dugmad prikazToDo= {prikazToDo} setPrikazToDo={setPrikazToDo} prikazH1={prikazH1}
         setPrikazH1={setPrikazH1}></Dugmad>
        
        <MainToDo prikazToDo={prikazToDo}></MainToDo>
        
        <h1 className={prikazH1===1 ?"prikaziii":"skloni"}>MARCETAAAA</h1>
        
        <NedeljniPlan></NedeljniPlan>
    </div>
  );
}

export default App;
