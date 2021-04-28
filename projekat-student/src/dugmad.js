import React from "react" ;

const Dugmad = ({setPrikazToDo,prikazToDo,prikazH1,setPrikazH1}) =>{

const skloniIliPrikaziToDo = ()=>{
//ova funkcija uma ulogu toggle znaci samo ce da sklanja ili prikazuje elemente sa ekrana po pritisku na dugme

if(prikazToDo === 1){
   setPrikazToDo(0) ; 
 }
 else if(prikazToDo === 0){
 setPrikazToDo(1);   
 setPrikazH1(0) ; 
 }

}
const skloniIliPrikaziH1 = ()=>{
  //ova funkcija uma ulogu toggle znaci samo ce da sklanja ili prikazuje elemente sa ekrana po pritisku na dugme
  
  if(prikazH1 === 1){
     setPrikazH1(0) ; 
   }
   else if(prikazH1 === 0){
   setPrikazH1(1);   
   setPrikazToDo(0) ;  
   }
  
  }

return(
    
      <div className="side-bar">
        <button onClick={skloniIliPrikaziToDo}>To Do</button>     
             
        <button onClick={skloniIliPrikaziH1}>TO DO H1</button>     
        <button>TO DO LISTA</button>     
        
      </div>
) ; 

}

export default Dugmad ; 