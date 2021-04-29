import './App.css';
import Dugmad from "./dugmad"  ; 
import MainToDo from './ToDoLista/MainToDo';
import { useState } from 'react';
import NedeljniPlan from './plan/NedeljniPlan';
import Muzika from './muzika/Muzika';







function App() {
 const [prikazToDo,setPrikazToDo] = useState(0) ;  
 
 const [prikazNedeljniPlan,setPrikazNedeljniPlan] = useState(0) ;
 

  return (  
    <div className="App">
        
        <Dugmad prikazToDo= {prikazToDo} setPrikazToDo={setPrikazToDo} 
         prikazNedeljniPlan={prikazNedeljniPlan} setPrikazNedeljniPlan={setPrikazNedeljniPlan}
         ></Dugmad>
        
        <MainToDo prikazToDo={prikazToDo}></MainToDo>
        
        <NedeljniPlan prikazNedeljniPlan={prikazNedeljniPlan}></NedeljniPlan>

        <Muzika></Muzika>
    </div>
  );
}

export default App;
