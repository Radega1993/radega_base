import React from 'react'

import { About } from './About';
import { Contact } from './Contact';
import { Copyright } from './Copyright';
import { Footer } from './Footer';
import { Header } from './Header';
import { Navbar } from './Navbar';
import { Porfolio } from './Porfolio';


export const HomeScreen = () => {


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
