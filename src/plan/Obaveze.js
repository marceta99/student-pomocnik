import React, { useState, useEffect } from 'react';
const Obaveze = ({dugmeObavezaID,setDugmeObavezaID}) => {

const [toogleObaveze,setToggleObaveze] = useState(0) ; 
const [brojac,setBrojac] = useState(0) ; 

    


function kliknuoDugme(e){
    
    setDugmeObavezaID(e.target.id) ;
    console.log(e) ; 
    e.target.classList.add("kliknuta-obaveza") ;   
}

return(
    <div>
         
        
        <div className="obaveze-container">
  
            <button className="obaveza" id="odmor" onClick={e=>kliknuoDugme(e)}  >odmor</button>
            <button className="obaveza" id="ucenje" onClick={e=>kliknuoDugme(e)}  >ucenje</button>
            <button className="obaveza" id="skola" onClick={e=>kliknuoDugme(e)}>skola</button>
            <button className="obaveza" id="drugari" onClick={e=>kliknuoDugme(e)} >drugari</button>
            <button className="obaveza" id="posao"onClick={e=>kliknuoDugme(e)} >posao</button>
            <button className="obaveza" id="teretana"  onClick={e=>kliknuoDugme(e)}>teretana</button>

        

            
        </div>

        
    </div>
) ; 


}
export default Obaveze ; 
