import React,{useState} from "react" ;

const Dugmad = ({setPrikazToDo,prikazToDo,prikazNedeljniPlan,setPrikazNedeljniPlan,
  prikazMuzika,setPrikazMuzika,setPokreniRezimUcenja,pokreniRezimUcenja,intervalId}) =>{

    const [pritisnutRezim,setPritisnutRezim] =useState(0) ;  
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
  const skloniIliPrikaziMuziku= () =>{
    if(prikazMuzika=== 1 ){
      setPrikazMuzika(0) ; 
    }
    else {
      setPrikazMuzika(1) ; 
    }
  }
  const toogleDugme=(e) =>{
   // e.target.style.backgroundColor="#21ebff" ; 
   /* e.target.style.boxShadow="0 0 100px #21ebff,0 0 100px #28ebff" ;  
    e.target.style.transitionDelay="0.5s" ; */
    setPokreniRezimUcenja(1) ;
    console.log("pritinut rezimje : "+pokreniRezimUcenja)  ;
  
    
 /*   if(pokreniRezimUcenja !== 0 && (pokreniRezimUcenja%2 === 0)){
      console.log("JESTE MODUUO OD NULEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE") ; 
      clearInterval(intervalId);
    }*/

    //e.target.classList.toggle("rezim-ucenja") ;
  }
  const prekiniRezim=()=>{
    clearInterval(intervalId);
    setPokreniRezimUcenja(2) ;
   console.log("PREKINI REZIM :"+pokreniRezimUcenja) ; 

  }
return(
    
      <div className="side-bar">
        <a  href="#" onClick={toogleDugme}  
        ><span>Mod Ucenje</span></a>
         <a  href="#" className={(pokreniRezimUcenja===1) ?"ugasi-rezim":"skloni"} onClick={prekiniRezim}  
        ><span>Ugasi</span></a>

        <a  href="#" onClick={skloniIliPrikaziToDo}><span>To Do</span></a>    

        <a  href="#" onClick={skloniIliPrikaziPlan}><span>Nedeljni Plan</span></a>     
        
        <a  href="#" onClick={skloniIliPrikaziMuziku}><span>Muzika</span></a>  
             
        
        
      </div>
) ; 

}

export default Dugmad ; 