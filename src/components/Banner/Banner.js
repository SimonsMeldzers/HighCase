import React from 'react'
import { Button, Grid, Typography } from '@mui/material';

import '../Banner/Banner.css'

function Banner() {
  return (
    <Grid container className='banner_container'>
        <Grid item xl={12}>
            <img className='banner_image banner_image_l' src="https://www.fashiongonerogue.com/wp-content/uploads/2019/05/Model-Striped-Shirt-Sunglasses-Phone-Case.jpg" alt="" />
            <img className='banner_image banner_image_r' src="https://holrmagazine.com/wp-content/uploads/2022/07/AdobeStock_451904099-759x500.jpeg" alt="" />
        </Grid>
        <div className='banner_text_div'>
            <Typography className='banner_text' variant='h4' component='h1'>New designs available <br></br> right now!</Typography>
            <Button className='banner_button' variant='outlined' size='large' color='warning'> Shop Now</Button>
        </div>
    </Grid>
  )
}

export default Banner;