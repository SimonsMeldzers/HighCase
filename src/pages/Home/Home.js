import React from 'react'

import './Home.css'

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Banner/Banner';
import TrendingItems from '../../components/TrendingItems/TrendingItems';
import ExploreCategories from '../../components/ExploreCategories/ExploreCategories';
import InfoSection from '../../components/InfoSection/InfoSection';

const Home = () => {
   
  return (
    <>
    <Navbar/>
    <Banner/>
    <TrendingItems/>
    <ExploreCategories/>
    <InfoSection/>
    <Footer/>
    </>
  )
}

export default Home;