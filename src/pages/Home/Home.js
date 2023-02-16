import React from 'react'
import { Button, Typography } from '@mui/material';

import './Home.css'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const Home = () => {
   
  return (
    <>
    <Navbar/>
    <Typography variant="h5" component="h1"> Home </Typography>
    <Button className='myBtn' variant='outlined' type='submit' color='primary'> Hello! </Button>

    <Footer/>
    </>
  )
}

export default Home;