import React from 'react'
import '../App.css'
import myphoto from '../../src/assets/myphoto.png'
const Body = () => {
  return (
    <div>

      <h2 className='saludo'>Hi, i'm Grisel Pulvirenti</h2>
      <div className='space'>
        <div className='margitodo'>
          <h1 className='tituloa'>Programadora full stark</h1>

          <h3 className='center2'>About me</h3>
          <p className='margip'>
            I am 24 years old, I love to play<br />
            I go to the gym very regularly, <br />
            besides. I have a lot of social life,<br />
            I also enjoy staying home, playing <br />
            video games,watch anime and share <br />
            with my family </p>
        </div>

        <div className='myphoto'>
          <img src={myphoto} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Body
