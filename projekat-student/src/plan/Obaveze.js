import React, { useState, useEffect } from 'react';
const Obaveze = ({dugmeObavezaID,setDugmeObavezaID}) => {

    


function kliknuoDugme(e){
    setDugmeObavezaID(e.target.id) ;
    console.log(dugmeObavezaID) ;  
}

return(
    <div>
         <h1>Select a task</h1>
        
        <div className="obaveze-container">
  
            <button className="obaveza" id="odmor" onClick={e=>kliknuoDugme(e)}  >odmor</button>
            <button className="obaveza" id="ucenje" onClick={e=>kliknuoDugme(e)}  >ucenje</button>
            <button className="obaveza" id="tv" onClick={e=>kliknuoDugme(e)}>tv</button>
            <button className="obaveza" id="drugari" onClick={e=>kliknuoDugme(e)} >drugari</button>
            <button className="obaveza" id="posao"onClick={e=>kliknuoDugme(e)} >posao</button>
            <button className="obaveza" id="teretana"  onClick={e=>kliknuoDugme(e)}>teretana</button>

        

            
        </div>

        <h3>Add selected task to a schedule</h3>
    </div>
) ; 


}
export default Obaveze ; 
