import React from 'react'
import './footer.scss'

export default function Footer() {
  return (
    <div className='footer'>

        <div className="container">
        
        <div className="col-3">

          <img src="assets/github.png" alt="" />
          <img src="assets/linkedin.png" alt="" />
          <img src="assets/whatsapp.png" alt="" />
        </div>
        <div className="col-9">
          <h3>Copyright 2022, André Bandeli</h3>
        </div>
            
        </div>

    </div>
  )
}
