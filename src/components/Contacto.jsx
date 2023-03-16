import React, { useState } from 'react'
import '../App.css'



function Contacto() {
  const [name, setName] = useState('');
  const [apellido, setApellido] = useState('');
  const [message, setMessage] = useState('');
  const url = `https://wa.me/573135103899?text=hola%20mi%20nombre%20es%20${name}
    %20${apellido}%20Mensaje:%20${message}%20%20`




  return (
    <div className='contacto' >


      <div className='form-group'>
        <label htmlFor="name">Name
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)} />
        </label>
      </div>

      <div className='form-group'>
        <label htmlFor="apellido">last name
          <input
            type="text"
            name="apellido"
            id="apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)} />
        </label>
      </div>

      <div className='form-group'>
        <label htmlFor="message">Your message
          <textarea
            type="text"
            name="message"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)} />
        </label>
      </div>

      <button className='btn' id='botoncontacto' >
        <a href='' target="_blank" rel="noreferrer">Send</a>
      </button>


    </div >
  )
}

export default Contacto