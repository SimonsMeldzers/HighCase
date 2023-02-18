import React from 'react'

import './Home.css'

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Banner/Banner';

const Home = () => {
   
  return (
    <>
    <Navbar/>
    <Banner/>

    <Footer/>
    </>
  )
}

export default Home;