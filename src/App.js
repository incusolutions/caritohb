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

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const words = [
  "The Prince and Princess of Wales welcomed their first son, Prince William, into the world.",
  "The UK government announced plans to restore and preserve the historic Stonehenge monument.",
  "The Queen visited the Republic of Ireland, becoming the first British monarch to do so since the country gained independence in 1922.",
  "The Royal Shakespeare Company performed a production of 'A Midsummer Night's Dream' at the Barbican Theatre in London, receiving critical acclaim.",
  "The UK hosted the Commonwealth Heads of Government Meeting in New Delhi, India.",
  "The Scottish band Simple Minds released their album 'Sparkle in the Rain,' which became a commercial and critical success.",
  "The British athlete Daley Thompson won the decathlon at the World Championships in Helsinki, Finland.",
  "The British fashion designer Vivienne Westwood showcased her collection in Paris, earning rave reviews.",
  "The British film 'Educating Rita' was released, starring Michael Caine and Julie Walters.",
  "The Welsh singer Bonnie Tyler released her hit song 'Total Eclipse of the Heart,' which topped charts around the world.",
  "The UK government announced plans to establish the Na4tional Lottery, which would fund various cultural and charitable initiatives.",
  "The British writer Martin Amis published his novel 'Money: A Suicide Note,' which became a bestseller.",
  "The British tennis player Greg Rusedski won the Junior US Open singles title.",
  "The UK government announced plans to build a high-speed rail line between London and the Channel Tunnel.",
  "The British band Tears for Fears released their album 'The Hurting,' which received critical acclaim and commercial success.",
  "The UK government announced plans to build a new national sports stadium, which would later become Wembley Stadium.",
  "The British swimmer Sharon Davies won three gold medals at the European Championships in Rome, Italy.",
  "The UK government introduced a new scheme to support the development of renewable energy technologies.",
  "The British artist David Hockney unveiled his painting 'The Arrival of Spring in Woldgate, East Yorkshire in 2011 (twenty eleven),' which would later be displayed at the Royal Academy of Arts.",
  "The British charity Comic Relief held its first ever Red Nose Day, raising millions of pounds for various charitable causes."
  
]


function App() {
  return (
    <div className="App">
       
       <div className='forty'>

             <h1>forty and fabulous</h1>

             <div className='message'> YOU ARE INVITED TO CELEBRATE MY 40TH BIRTHDAY </div>

             <div className='caro'>Diana James</div>

             <div className='contact'> 
               <ul>
                  <li>Friday 21st of july from 7:30pm </li>
                
                  <li> Alderney Tha Mannor Social Club   </li>

                  <li> 287 Herbert Avenue. BH12 4HT </li>
               </ul> 
               
             </div>
             <Lottie style={{position: 'absolute',width: '100%', height:'100%', zIndex:'2', top: '-100px', margin: '0 auto', left:'0px', right:'0px', opacity:'70%'}} animationData={groovyWalkAnimation2} loop={true} autoPlay />
            
            <div className='contactitem'>
                    
                    <a onClick={() => openInNewTab("https://wa.me/+573002034011?text= Good things happened in 83: "+words[getRandomInt(19)]+ ' Other good thing, I WAS BORN !. '+ 'Do you confirm your attendance? ')} ><BsWhatsapp style={{width:'45px' , height:'45px'}}/></a> 
                    <a onClick={() => openInNewTab("https://goo.gl/maps/hUD4ToagBhKV2iZN9")} >  <FaMapMarkerAlt style={{width:'45px' , height:'45px'}}/></a> 
                 
            </div>
           
             

       </div>

       
      
       
    

    </div>
  );
}

export default App;
