import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Experience from './components/Experience'
import MyProyect from './components/MyProyect'
import Footer from './components/Footer'
import Studies from './components/Studies'
import NotFound from './components/NotFound'
import Header from './components/Header'
import Contacto from './components/Contacto'
const RouterApp = () => {

    return (
        
        <BrowserRouter>
        <Header/>
            <Routes>

                <Route path='/' element={<Home />} />
                <Route path='/Myproyect' element={<MyProyect />} />
                <Route path='/Studies' element={<Studies />} />
                <Route path='*' element={<NotFound />} />
                <Route path='/Experience' element={<Experience />} />
                <Route path='/Contacto' element={<Contacto />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default RouterApp