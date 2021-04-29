import React from "react" ;

const Dugmad = ({setPrikazToDo,prikazToDo,prikazNedeljniPlan,setPrikazNedeljniPlan}) =>{

const skloniIliPrikaziToDo = ()=>{
//ova funkcija uma ulogu toggle znaci samo ce da sklanja ili prikazuje elemente sa ekrana po pritisku na dugme

if(prikazToDo === 1){
   setPrikazToDo(0) ; 
 }
 else if(prikazToDo === 0){
 setPrikazToDo(1);   
 setPrikazNedeljniPlan(0) ;  
 }

}

  const skloniIliPrikaziPlan= ()=>{
    if(prikazNedeljniPlan=== 1){
      setPrikazNedeljniPlan(0) ; 
    }else if(prikazNedeljniPlan=== 0){
      setPrikazNedeljniPlan(1) ; 
      setPrikazToDo(0) ; 
    }
  }

return(
    
      <div className="side-bar">
        <a  href="#" onClick={skloniIliPrikaziToDo}><span>To Do</span></a>    

        <a  href="#" onClick={skloniIliPrikaziPlan}><span>Nedeljni Plan</span></a>     

             
        
        
      </div>
) ; 

}

export default Dugmad ; 