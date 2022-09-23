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
          
              <h4>Barão Geraldo, Campinas, São Paulo</h4>
             
      
            
          </div>
          <div className="container">
                  <LoadScript
                      googleMapsApiKey="AIzaSyAT62NzSfccBJZg1brAX-McZY6oUcAJvmw"
                    >
              <GoogleMap
                      mapContainerStyle={containerStyle}
                      center={center}
                      zoom={14}
              >
                { /* Child components, such as markers, info windows, etc. */ }
                <></>
              </GoogleMap>
            </LoadScript>
          </div>
    </div>
  )
}