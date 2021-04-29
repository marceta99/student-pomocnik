import React, { useState, useEffect } from 'react';
import Obaveze from './Obaveze';
import Raspored from './Raspored';

const NedeljniPlan = ({prikazNedeljniPlan}) => {
    
 
  const [dugmeObavezaID,setDugmeObavezaID] = useState("") ; 

return(
    <div className= { (prikazNedeljniPlan===1) ? "nedeljni-plan-container": "skloni"}> 
     
        <Obaveze dugmeObavezaID={dugmeObavezaID} setDugmeObavezaID={setDugmeObavezaID}></Obaveze>

        <Raspored dugmeObavezaID={dugmeObavezaID} setDugmeObavezaID={setDugmeObavezaID}></Raspored>



    </div>
) ; 


}
export default NedeljniPlan ; 