import './App.css';
import Dugmad from "./dugmad"  ; 
import MainToDo from './ToDoLista/MainToDo';

import NedeljniPlan from './plan/NedeljniPlan';
//import Muzika from './muzika/Muzika'; /////////////////////////////

import { useRef, useEffect,useState } from "react";
import * as tf from "@tensorflow/tfjs";
import * as cocossd from "@tensorflow-models/coco-ssd";
import Webcam from "react-webcam";
import "./App.css";
import Muzika from './muzika/Muzika';
import GlasovneBeleske from './GlasovneBeleske';








function App() {
 const [prikazToDo,setPrikazToDo] = useState(0) ;  
 const [prikazNedeljniPlan,setPrikazNedeljniPlan] = useState(0) ;
 const [prikazMuzika,setPrikazMuzika] = useState(0) ;
 
 const[pokreniRezimUcenja,setPokreniRezimUcenja] = useState(0) ; 

const [audioo,setAudio] = useState(new Audio()) ;
const [audioo2,setAudio2] = useState(new Audio()) ;

audioo.src = "/sirena.mp3"  ;  
audioo2.src = "/telefon.mp3" ; 

//const [intervalId,setIntervalId] = useState(0) ; 
var intervalId ; 
const webcamRef = useRef(null)
 

 
  const pokreniCoco = async () => {
    
    
    const net = await cocossd.load();
    console.log("coco se loadovao");
    
    /*if(pokreniRezimUcenja%2 === 0){
      setPrekini(1) ;   
      return 0 ; */
      
    intervalId = setInterval(() => {

          console.log("pocelo detektovanje") ; 
          detektuj(net);
    }, 10)  ; 
    
};

  const detektuj = async (net) => {
    if(pokreniRezimUcenja === 1){
      
    
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null 
      && webcamRef.current.video.readyState === 4
    ) {
      
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;
      

      
      
     
      if(pokreniRezimUcenja===2){
        return ; 
      }
      else{
        const obj = await net.detect(video);
        console.log(obj) ; 
      if(obj.length > 0){
                 
     
           
            if( proveraDaLiUci(obj) === 1){    //ako je ispred lap topa 
                audioo.pause() ; 
                if(proveraDaLiKoristiTelefon(obj) === 1 ){
                  audioo2.play() ;      //ako je ispred lap topa a drzi telefon
                }else {
                  audioo2.pause() ;     //ako je ispred lap topa i uci a ne drzi telefon 
                }

            }else {
              audioo.play() ; //ako ucenik nije ispred lap topa 

            }

      
    }
    else {audioo.play() ;} 
  }
}
} };

  if(pokreniRezimUcenja === 1){
    pokreniCoco() ;  
  } 
 


  const proveraDaLiUci= (objekat)=>{
    
    //kreira novi niz sa elementima koji ocitaju osobu tj ucenika koji uci ispred lap topa
    const niz = objekat.filter(ob => ob.class.includes("person"));
    
    //i ako ima barem jedna osoba u tom nizu onda znaci da ucenik sedi ispred lap topa i uci 
    if(niz.length>0){
      return 1 ; 
    }else {
      return 0 ; 
    }
} 
  const proveraDaLiKoristiTelefon = (objekat)=>{
    const niz = objekat.filter(ob => ob.class.includes("cell phone"));
     
    if(niz.length>0){
      return 1 ; 
    }else {
      return 0 ; 
    }
   
 
 
   } 
   
  return (  
    <div className="App">
        
     
        
        <GlasovneBeleske></GlasovneBeleske>

        <div>
      <header className="App-header">
        <Webcam id="kamera"
          ref={webcamRef}
          muted={true} 
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />

      </header>
    </div>



     

        <Dugmad prikazToDo= {prikazToDo} setPrikazToDo={setPrikazToDo} 
         prikazNedeljniPlan={prikazNedeljniPlan} setPrikazNedeljniPlan={setPrikazNedeljniPlan}
         prikazMuzika={prikazMuzika} setPrikazMuzika={setPrikazMuzika}
          setPokreniRezimUcenja={setPokreniRezimUcenja} pokreniRezimUcenja={pokreniRezimUcenja}
          intervalId={intervalId}></Dugmad>
        
        <MainToDo prikazToDo={prikazToDo}></MainToDo>
        
        <NedeljniPlan prikazNedeljniPlan={prikazNedeljniPlan}></NedeljniPlan>
        
        <Muzika prikazMuzika={prikazMuzika} setPrikazMuzika={setPrikazMuzika}></Muzika>
        
        <GlasovneBeleske></GlasovneBeleske>
        
    </div>
  );
}

export default App;
