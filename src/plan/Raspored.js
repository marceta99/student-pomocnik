import React, { useState, useEffect } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

const Raspored = ({dugmeObavezaID,setDugmeObavezaID}) => {
    const [boja,setBoja] = useState(" ") ; 

function obojiPolje(e) {
    
    

   switch (dugmeObavezaID) {
          
           case "odmor":
           e.target.style.backgroundColor = "yellow" ;     
           

           break ;    
           
           case "ucenje":
            e.target.style.backgroundColor = "red" ;         
            break ; 
            
            case "tv":
                e.target.style.backgroundColor = "orange" ;         
                break ; 
           
           case "drugari":
            e.target.style.backgroundColor = "green" ;         
            break ;  
           
           case "posao":
            e.target.style.backgroundColor = "aqua" ;        
            break ;
           
           case "teretana":
            e.target.style.backgroundColor = "pink" ;         
            break ;
         
       
   }
}

return(
    <div className="raspored-container">
        <div className="dani-container">
            <span className="corner"></span>
                    <div className="dan">Monday</div>
                    <div className="dan">Tuesday</div>
                    <div className="dan">Wednesday</div>
                    <div className="dan">thursday</div>
                    <div className="dan">Friday</div>
                    <div className="dan">Saturday</div>
                    <div className="dan">Sunday</div>
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