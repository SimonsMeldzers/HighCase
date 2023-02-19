import React from 'react'

import './Home.css'

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Banner/Banner';
import TrendingItems from '../../components/TrendingItems/TrendingItems';

const Home = () => {
   
  return (
    <>
    <Navbar/>
    <Banner/>
    <TrendingItems/>
    <Footer/>
    </>
  )
}

export default Home;