import React, { useState, useEffect } from 'react';
import { FaMicrophone,FaMicrophoneSlash } from 'react-icons/fa';


const SpeechRecognition = window.SpeechRecognition  ||  window.webkitSpeechRecognition ; 

const recognition = new SpeechRecognition() ; //mic
const onoStoHocemoDaSeIzgovori= new SpeechSynthesisUtterance() ; 
onoStoHocemoDaSeIzgovori.lang="sr-Serbian" ; 
//recognition.continuous = true ;  
//recognition.interimResults = true ;
recognition.lang="sr-Serbian" ;
//window.speechSynthesis.speak(onoStoHocemoDaSeIzgovori) ; 
const StudentkoGlas = () => {
    const [snima,setSnima] = useState(false) ; 
    

    const GlasovneKomande = ()=>{
        if(snima){
            recognition.start() ;      //ako je pritsnuto dugme onda kreni sa snimanjem zvuka
            console.log("krenulo je snimanje zvuka") ; 
            recognition.onresult=(e)=>{
            recognition.stop() ;  
            setSnima(proslaVrednost => !proslaVrednost) ;
                const izgovorenTekst = e.results[0][0].transcript ;
                console.log(izgovorenTekst) ; 
               


                if(izgovorenTekst.includes("sati")){
                    const vreme= new Date() ; 
                    onoStoHocemoDaSeIzgovori.text=` Now is the      ${vreme.getHours()}  hours 
                     and     ${vreme.getMinutes()}       minutes` ;
            
                     window.speechSynthesis.speak(onoStoHocemoDaSeIzgovori) ; 
                }
                else if(izgovorenTekst.includes("sport vesti")){
                    window.open("https://sportklub.rs/") ; 
                }
                else if(izgovorenTekst.includes("YouTube")){
                    window.open("https://www.youtube.com/");  
                }else if(izgovorenTekst.includes("rođendan")){
                    const audioo = new Audio("/pesmarodj.mp3") ; 
                     audioo.play() ; 
                }
                else if(izgovorenTekst.includes("mrzi me ")){
                    const audioo2 = new Audio("/uci.mp3") ; 
                    audioo2.play() ; 
                }



            }
    
    
        }else {
            console.log("zavrsilo se snimane") ; 
            recognition.stop() ;  
        

        }
    }
 
    useEffect(()=>{
     GlasovneKomande() ; 
    },[snima]);
    return(
     <div>
         <img src="/logo1.png" id="logo" onClick={(e)=>{
                 setSnima(proslaVrednost => !proslaVrednost) ;
         }} ></img>
          {snima ?<FaMicrophone className="famic"></FaMicrophone> : <FaMicrophoneSlash></FaMicrophoneSlash>  }
     </div>

    ) ; 
}

export default StudentkoGlas ; 
