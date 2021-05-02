import React, { useState, useEffect } from 'react';
import { FaMicrophone,FaMicrophoneSlash } from 'react-icons/fa';



const SpeechRecognition = window.SpeechRecognition  ||  window.webkitSpeechRecognition;

const recognition = new SpeechRecognition() ; //mic

recognition.lang="sr-Serbian" ;
recognition.continuous = true ;  
recognition.interimResults = true ;



const GlasovneBeleske = ({prikazBeleske}) => {

const [snima,setSnima] = useState(false) ;
const [usmeneBeleske,setUsmeneBeleske] = useState(null) ;
const [sacuvaneBeleske,setSacuvaneBeleske] = useState([]) ;
const [pisaneBeleske,setPisaneBeleske] = useState(null) ;

const handleListen = ()=>{
    if(snima){
        recognition.start() ;      //ako je pritsnuto dugme onda kreni sa snimanjem zvuka
        console.log("krenulo je snimanje zvuka") ; 
        recognition.onresult=(e)=>{
            const izgovorenTekst = e.results[0][0].transcript ;
            setUsmeneBeleske(izgovorenTekst) ; 
            console.log(izgovorenTekst) ; 


        }


    }else {
        console.log("zavrsilo se snimane") ; 
        recognition.stop() ;  
    }
}

useEffect(()=>{
  handleListen() ;  
},[snima]);

const handleSaveNote =()=>{
    setSacuvaneBeleske([...sacuvaneBeleske,usmeneBeleske]) ;
    setUsmeneBeleske("") ;  
}

    const inputHandler = (e)=>{
        console.log(e.target.value) ;
       
       setPisaneBeleske(e.target.value) ;    
    }
    const submitHandler = (e)=>{
        e.preventDefault() ; 
        setSacuvaneBeleske([...sacuvaneBeleske, usmeneBeleske, pisaneBeleske]) ;
        
    }


    
return(
    <div className={(prikazBeleske ===1) ? "beleske-container": "skloni"} >
        <div className="box">
        <form >
            <h2>Glasovne beleske</h2>

            {snima ?<FaMicrophone className="famic"></FaMicrophone> : <FaMicrophoneSlash></FaMicrophoneSlash>  }
           <div className="dugmici-cont">
            <button  onClick={(e)=>{
                handleSaveNote() ;
                submitHandler(e) ; 
            }
                } className="dugme-beleske" type="submit">Sacuvaj beleske</button>

            <button  onClick={()=> setSnima(prevState => !prevState )} 
            className="dugme-beleske"> Pokreni/Stop</button>
            </div>
            
            <p>{usmeneBeleske}</p>
            <div className="tekst-container">
                <h2>Tekstualne beleske</h2>
                <input type="text" placeholder="unesi belesku" onChange={inputHandler} className="unos"></input>
            </div>
         </form>
        </div>
        <div className="box">
            <h2>Beleske</h2>
            {sacuvaneBeleske.map(usmeneBeleske => (
                <p key={Math.random()}> {usmeneBeleske} </p>
            ))}  
          
        </div>

        
    </div>
    ) ; 

}
export default GlasovneBeleske ; 
