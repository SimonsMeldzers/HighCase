import { Button, Container, Typography } from '@mui/material';
import React from 'react'

import '../ProductsFilter/ProductsFilter.css'

function ProductsFilter() {
  return (
    <>
    <Container maxWidth='xl'>
        <div className='products_filter_header'>
            <Typography className='products_filter_title' variant='h3' component='h1'>
                Phone Cases
            </Typography>
            <Typography className='products_filter_text'>
                Shop new and seasonal cases
            </Typography>
        </div>
        <div className='products_filter_buttons_div'>
        {Array.from(Array(8)).map((_, index) => (
            <Button key={index} className='products_filter_button' variant='outlined'> Click Me</Button>
        ))}
        </div>
    </Container>
    <div className='products_filter_line'></div>
    </>
  )
}

export default ProductsFilter;