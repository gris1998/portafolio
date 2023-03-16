import React from 'react'
import ws from '../assets/ws.png'
import g from '../assets/logogithub10.png'
import i from '../assets/logoi.png'
import l from '../assets/logol.png'
const Footer = () => {
  return (
    <div className='footer'>
      <a href="https://www.linkedin.com/in/grisel-pulvirenti-gonz%C3%A1lez-0967791aa/">
        <img className='imgf' src={l} alt="" />
      </a>

      <a href="https://github.com/gris1998">
        <img className='imgf' src={g} />
      </a>

      
        <a href="https://wa.link/ap1jlf">
            <img className='imgf' src={ws} alt="" />
        </a>
    

      <a href="https://www.instagram.com/pulvirentigrisel/">
        <img className='imgf' src={i} alt="" />
      </a>
    </div>

  )
}

export default Footer