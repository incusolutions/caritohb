import logo from './logo.svg';

import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import './App.css';

import groovyWalkAnimation from "./data2.json";
import groovyWalkAnimation2 from "./data3.json";

import { BsWhatsapp } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";

const openInNewTab = (url) => {
  window.open(url, "_blank", "noreferrer");
};



function App() {
  return (
    <div className="App">
       
       <div className='forty'>

             <h1>forty</h1>

             <div className='message'> YOU ARE INVITED TO CELEBRATE THE 40TH BIRTHDAY OF</div>

             <div className='caro'>Diana Carolina James</div>

             <div className='contact'> 
               <ul>
                  <li>Sunday, september 15 / 4:00 pm - 9:00 pm </li>
                
                  <li> Restaurante hhjkj / Calle 123 green  </li>
                 
               </ul> 
               
             </div>
             <Lottie style={{position: 'absolute',width: '100%', height:'100%', zIndex:'2', top: '-100px', margin: '0 auto', left:'0px', right:'0px', opacity:'70%'}} animationData={groovyWalkAnimation2} loop={true} autoPlay />
            
            <div className='contactitem'>
                  
                    
                    <a onClick={() => openInNewTab("https://wa.me/+573002034011?text=Confirmo")} ><BsWhatsapp style={{width:'45px' , height:'45px'}}/></a> 
                    <a onClick={() => openInNewTab("https://goo.gl/maps/gw8dUQmwfMtRRzWR8")} >  <FaMapMarkerAlt style={{width:'45px' , height:'45px'}}/></a> 
                  

            </div>
           
             

       </div>

       
      
       
    

    </div>
  );
}

export default App;
