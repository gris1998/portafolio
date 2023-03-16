import React from 'react'
import '../App.css'
import myphoto from '../../src/assets/myphoto.png'

const Home = () => {
  return (


    <div className='home'>
     
      <h2 className='saludo'>Hi, i'm Grisel Pulvirenti</h2>
      <br />
      <br />
      <h1 className='tituloa'>Programadora full stack</h1>
      <div className='space'>
        <div className='margintodo'>


          <h3 className='center2'>About me</h3>
          <p className='margip'>
            I am 24 years old,
            I am a lover of healthy lifestyle, I play basketball, I go to
            the gym very regularly, besides. I have a
            lot of social life,I also enjoy staying home,
            playing video games,watch anime and share
            with my family </p>
        </div>

        <div className='myphoto'>
          <img src={myphoto} alt="" />
        </div>
      </div>
    </div>

  )
}

export default Home
