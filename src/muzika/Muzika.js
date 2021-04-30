import React, { useState, useEffect } from 'react';
import { FaBackward,FaForward,FaPlay,FaPause } from 'react-icons/fa';

const Muzika  = ({prikazMuzika}) => {
    
    const pesme = ["/3.mp3","/2.mp3","/1.mp3"] ; 
    const slike = ["/muzika1.jpg","/muzika3.jpg","/muzika2.jpg"] ;
    const imenaPesama=["chill bit","clasic" ,"study music"]  ;  

    const [audio,setAudio] = useState(new Audio()) ;
    const [indexPesme,setIndexPesme] = useState(0) ;
    
    const [x,setX] = useState(0) ; 
    function pustiPesmu(){
        audio.src = pesme[indexPesme] ;  
        audio.play() ; 
    }
    function tooglePustiPauziraj(){
       
        if(audio.paused){  //boolean vraca true ako je puziran false ako nije 
            
            pustiPesmu() ; 
            setX(1) ;  
        }else {

            audio.pause() ;  
            setX(0)  ; 
        }
    }
    //timeupdate evenet se opaljuje kada se promeni trajanje neke pesme
    //currentTime vraca trenutno vreme u seknudama pesme  a duration ukupno trajanje pesme
    
   const [pozicija,setPozicija] = useState(0) ; 
   audio.addEventListener("timeupdate",()=>{
    setPozicija(audio.currentTime/audio.duration); 
    unesiVremeTrajanja(Math.round(audio.currentTime)) ; 
    ukupnoVremeTrajanja(Math.round(audio.duration)) ;   
   }) ; 

   //vreme trajanja pesme 
   const [minuti,setMinuti] = useState(0) ;  
   const [sekunde,setSekunde] = useState(0) ;
   const [ukupniMinuti,setUkupniMinuti] = useState(0) ;  
   const [ukupnesekunde,setUkupneSekunde] = useState(0) ;  

   function unesiVremeTrajanja(sec){

    setMinuti(Math.floor(sec/60)) ; //ovo floor ce da zaokzuri npr ako imamo 2.54 minuta na 2 minuta 
    setSekunde(sec%60) ;   //moduo ce da nam ostavi ostakatak od minuta npr 2 minuta i 10 sekundi
    
    
   }
   
   function ukupnoVremeTrajanja(sec){
        setUkupniMinuti(Math.floor(sec/60)) ;  
        setUkupneSekunde(sec%60)  ;  
   }
   function sledecaPesma(){
        const x = indexPesme +1 ; 
       setIndexPesme(x) ;   
       if(indexPesme > 1){
        setIndexPesme(0) ; 
        audio.src= pesme[indexPesme] ;  
        audio.play() ; 
       }else {
       
       audio.src= pesme[indexPesme] ;  
       audio.play() ; 
       }

   }
   function proslaPesma(){
    setIndexPesme(indexPesme-1) ;   
    if(indexPesme<0){
     setIndexPesme(2) ; 
    }
    
    audio.src= pesme[indexPesme] ;  
    audio.play() ; 


}
return(
    <div className={(prikazMuzika ===1) ? "music-container": "skloni" }>

        <div className="slika"> 
            <img src={`${slike[indexPesme]}`} id="slike"></img>
        </div>
        
        <div>
        <h4>{indexPesme}</h4>
        <h4>{imenaPesama[indexPesme]}</h4>

        
        </div>
        
        <div className="linija">
           <div className="tacka" style={{width:`${pozicija*100}%`}}></div>
        </div>

        <div className="vreme">
                {`${minuti}:${sekunde}`}&nbsp;{`${ukupniMinuti}:${ukupnesekunde}`}
        </div>

    

        <div className="audio-dugmici">
           <div className="play-dugmici">
                 <div onClick={proslaPesma} ><FaBackward ></FaBackward></div>

                <div className="pusti-stopiraj" onClick={tooglePustiPauziraj}>
                    {x===0 ? <FaPlay></FaPlay> : <FaPause></FaPause>}
                    </div>

                 <div onClick={sledecaPesma}><FaForward></FaForward></div>
            </div>

        </div>

    </div>
) ;

}

export default Muzika ; 

