import React, { useState, useEffect } from 'react';
import Obaveze from './Obaveze';
import Raspored from './Raspored';

const NedeljniPlan = () => {
    
 
  const [dugmeObavezaID,setDugmeObavezaID] = useState("") ; 
return(
    <div className="nedeljni-plan-container"> 
     
        <Obaveze dugmeObavezaID={dugmeObavezaID} setDugmeObavezaID={setDugmeObavezaID}></Obaveze>

        <Raspored dugmeObavezaID={dugmeObavezaID} setDugmeObavezaID={setDugmeObavezaID}></Raspored>



    </div>
) ; 


}
export default NedeljniPlan ; 