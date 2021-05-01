import React, { useState, useEffect } from 'react';
import { FaMicrophone,FaMicrophoneSlash } from 'react-icons/fa';



const SpeechRecognition = window.SpeechRecognition  ||  window.webkitSpeechRecognition;

const recognition = new SpeechRecognition() ; //mic

recognition.lang="en-US" ;//probao sam sa srpskim ali nazalost ne prepoznaje ga (niti bosansim,hrtvatski...)
/*recognition.continuous = true ;  
recognition.interimResults = true ;*/



const GlasovneBeleske = () => {

const [isListening,setIsListening] = useState(false) ;
const [note,setNote] = useState(null) ;
const [savedNotes,setSavedNotes] = useState([]) ;


const handleListen = ()=>{
    if(isListening){
        recognition.start() ;      //ako je pritsnuto dugme onda kreni sa snimanjem zvuka
        console.log("krenulo je snimanje zvuka") ; 
        recognition.onresult=(e)=>{
            const izgovorenTekst = e.results[0][0].transcript ;
            setNote(izgovorenTekst) ; 
            console.log(izgovorenTekst) ; 
        }


    }else {
        console.log("zavrsilo se snimane") ; 
        recognition.stop() ;  
    }
}

useEffect(()=>{
  handleListen() ;  
},[isListening]);

const handleSaveNote =()=>{
    setSavedNotes([...savedNotes,note]) ;
    setNote("") ;  
}
    
return(
    <div className="beleske-container">
        <div className="box">
            <h2>Trenutna Beleska</h2>
            {isListening ?<FaMicrophone></FaMicrophone> : <FaMicrophoneSlash></FaMicrophoneSlash>  }

            <button  onClick={handleSaveNote} className="dugme-beleske">Sacuvaj beleske</button>

            <button  onClick={()=> setIsListening(prevState => !prevState )} 
            className="dugme-beleske"> Pokreni/Stop</button>
            
            <p>{note}</p>
        </div>
        <div className="box">
            <h2>Beleske</h2>
            {savedNotes.map(note => (
                <p key={note}> {note} </p>
            ))}  
          
        </div>

        
    </div>
    ) ; 

}
export default GlasovneBeleske ; 
