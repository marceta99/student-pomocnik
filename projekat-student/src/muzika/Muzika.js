import React, { useState, useEffect } from 'react';
import { FaBackward,FaForward,FaPlay,FaVolumeUp,FaPause } from 'react-icons/fa';

const Muzika  = () => {
    
    const pesme = ["/1.mp3","/3.mp3","/2.mp3"] ; 
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

return(
    <div className="music-container">

        <div className="slika"> 
            <img src="/muzika1.jpg" id="slike"></img>
        </div>
        
        <div>
        <h4>Ime pesme</h4>
        <p>Izovodjac</p>
        </div>
        
        <div className="vreme">
            00:00
            <span> </span>
            00:00
        </div>

        <div className="linija">
            <div className="tacka"></div>
        </div>

        <div className="audio-dugmici">
           <div className="play-dugmici">
                 <div ><FaBackward ></FaBackward></div>

                <div className="pusti-stopiraj" onClick={tooglePustiPauziraj}>
                    {x===0 ? <FaPlay></FaPlay> : <FaPause></FaPause>}
                    </div>

                 <div><FaForward></FaForward></div>
            </div>

            <div className="zvuk-dugmici">
                <div><button className="smanji-ton">-</button></div>
                <div><FaVolumeUp></FaVolumeUp></div>
                <div><button className="povecaj-ton">+</button></div>
            </div>
        </div>

    </div>
) ;

}

export default Muzika ; 
