import React from 'react'
import './footer.scss'

export default function Footer() {
  return (
    <div className='footer'>

        <div className="container">
        
        <div className="col-3">

          <a href="https://github.com/andre-bandeli" target="__blank">
          <img src="assets/git-ft.png" alt="github" /></a>
          <a href="https://www.linkedin.com/in/andrebandeli/" target="__blank">
          <img src="assets/in-ft.png" alt="linkedin" /></a>
        </div>
        <div className="col-9">
          <h3>© 2022 Copyright: André Bandeli</h3>
        </div>
            
        </div>

    </div>
  )
}
