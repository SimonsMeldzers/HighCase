import React from 'react'
import { Button, Paper, Typography } from '@mui/material';

import '../TrendingItemsCard/TrendingItemsCard.css'

function TrendingItemsCard({name, category, price, imageUrl}) {
    const imageurl = 'https://www.dhresource.com/webp/m/0x0/f2/albu/g15/M00/2F/93/rBVa3l-QDXqAbfpgAArgLfJiYjc229.jpg'
  return (
    <Paper className='paper_container' elevation={3}>
        <img src={imageurl} alt="" style={{width:'100%'}}/>
        <Typography id='card_name' variant='h6' component='h2'>
            {name}
        </Typography>
        <Typography id='card_category' variant='body2'>
            {category}
        </Typography>
        <Button id='card_price' color='secondary' size='large'>{price}</Button>
    </Paper>
  )
}

export default TrendingItemsCard;