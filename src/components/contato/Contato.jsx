import React from 'react'
import './contato.scss'
import { GoogleMap, LoadScript } from '@react-google-maps/api';



const containerStyle = {
  width: '80%',
  height: '350px'
};
const center = {
  lat: -22.8113577,
  lng: -47.064421
};

export default function Contato() {


  return (
    <div id='contato'>
          <div className="container">
          
          <h1>Contato</h1>
          <h2>Mande uma mensagem através do linkedin: <a href="https://www.linkedin.com/in/andrebandeli/">https://www.linkedin.com/in/andrebandeli/</a></h2>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illo eum. Quis facere, modi voluptatem inventore magni ullam, explicabo sit a, vel repellat officiis perferendis autem! Ipsam provident voluptates magnam!</h3>
             
      
            
          </div>
          <div className="container">
                
                <div className="foto">

                </div>
          </div>
    </div>
  )
}