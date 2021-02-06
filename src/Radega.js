import React from 'react'

import { About } from './components/About';
import { Contact } from './components/Contact';
import { Copyright } from './components/Copyright';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { Porfolio } from './components/Porfolio';


export const Radega = () => {


    return (
      <>
        <Navbar />
        <Header />

        <Porfolio />

        <About />

        <Contact />

        <Footer />

        <Copyright />
      </>
    )
}
