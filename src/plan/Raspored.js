import React, { useState, useEffect } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

const Raspored = ({dugmeObavezaID,setDugmeObavezaID}) => {
    const [boja,setBoja] = useState(" ") ; 

function obojiPolje(e) {
    
    

   switch (dugmeObavezaID) {
          
           case "odmor":
           e.target.style.backgroundColor = "yellow" ;     
           e.target.textContent = "odmor" ;  

           break ;    
           
           case "ucenje":
            e.target.style.backgroundColor = "red" ; 
            e.target.textContent = "ucenje" ;          
            break ; 
            
            case "skola":
                e.target.style.backgroundColor = "orange" ; 
                e.target.textContent = "skola" ;          
                break ; 
           
           case "drugari":
            e.target.style.backgroundColor = "green" ; 
            e.target.textContent = "drugari" ;  


            break ;  
           
           case "posao":
            e.target.style.backgroundColor = "aqua" ;       
            e.target.textContent = "posao" ;   
            break ;
           
           case "teretana":
            e.target.style.backgroundColor = "pink" ;    
            e.target.textContent = "teretana" ;       
            break ;
         
       
   }
}

return(
    <div className="raspored-container">
        <div className="dani-container">
            <span className="corner"></span>
                    <div className="dan">Ponedeljak</div>
                    <div className="dan">Utorak</div>
                    <div className="dan">Sreda</div>
                    <div className="dan">Četvrtak</div>
                    <div className="dan">Petak</div>
                    <div className="dan">Subota</div>
                    <div className="dan">Nedelja</div>
        </div>

            <div className="deo-dan">
                <span className="vreme">8am-12pm </span>
                <div className={`obaveza   ` } onClick={e => obojiPolje(e)}></div>
                <div className={`obaveza   ` } onClick={e => obojiPolje(e)} ></div>
                <div className={`obaveza   ` } onClick={e => obojiPolje(e)}></div>
                <div className={`obaveza   ` } onClick={e => obojiPolje(e)}></div>
                <div className={`obaveza   ` } onClick={e => obojiPolje(e)}></div>
                <div className={`obaveza   ` } onClick={e => obojiPolje(e)}></div>
                <div className={`obaveza   ` } onClick={e => obojiPolje(e)}></div>
            </div>
            <div class="deo-dan">
                <span class="vreme">12pm-2pm </span>
                <div class={`obaveza   ` } onClick={e => obojiPolje(e)}></div>
                <div class={`obaveza   ` } onClick={e => obojiPolje(e)}></div>
                <div class={`obaveza   ` } onClick={e => obojiPolje(e)}></div>
                <div class={`obaveza   ` } onClick={e => obojiPolje(e)}></div>
                <div class={`obaveza   ` } onClick={e => obojiPolje(e)}></div>
                <div class={`obaveza   ` } onClick={e => obojiPolje(e)}></div>
                <div class={`obaveza   ` } onClick={e => obojiPolje(e)}></div>
            </div>
            <div class="deo-dan">
                <span class="vreme">2pm-6pm </span>
                <div class={`obaveza   ` } onClick={e => obojiPolje(e)}></div>
                <div class={`obaveza   ` } onClick={e => obojiPolje(e)}></div>
                <div class={`obaveza   ` } onClick={e => obojiPolje(e)}></div>
                <div class={`obaveza   ` } onClick={e => obojiPolje(e)}></div>
                <div class={`obaveza   ` } onClick={e => obojiPolje(e)}></div>
                <div class={`obaveza   ` } onClick={e => obojiPolje(e)}></div>
                <div class={`obaveza   ` } onClick={e => obojiPolje(e)}></div>
            </div>
            <div class="deo-dan">
                <span class="vreme">6pm-9pm </span>
                <div class={`obaveza   ` } onClick={e => obojiPolje(e)}></div>
                <div class={`obaveza   ` } onClick={e => obojiPolje(e)}></div>
                <div class={`obaveza   ` } onClick={e => obojiPolje(e)}></div>
                <div class={`obaveza   ` } onClick={e => obojiPolje(e)}></div>
                <div class={`obaveza   ` } onClick={e => obojiPolje(e)}></div>
                <div class={`obaveza   ` } onClick={e => obojiPolje(e)}></div>
                <div class={`obaveza   ` } onClick={e => obojiPolje(e)}></div>
            </div>
            <div class="deo-dan">
                <span class="vreme">9pm-11pm </span>
                <div class={`obaveza   ` } onClick={e => obojiPolje(e)}></div>
                <div class={`obaveza   ` } onClick={e => obojiPolje(e)}></div>
                <div class={`obaveza   ` } onClick={e => obojiPolje(e)}></div>
                <div class={`obaveza   ` } onClick={e => obojiPolje(e)}></div>
                <div class={`obaveza   ` } onClick={e => obojiPolje(e)}></div>
                <div class={`obaveza   ` } onClick={e => obojiPolje(e)}></div>
                <div class={`obaveza   ` } onClick={e => obojiPolje(e)}></div>
            </div>
      
    </div>
) ;

}
export default Raspored ; 