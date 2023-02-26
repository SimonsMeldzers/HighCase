import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { Button, Grid, IconButton, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react'

import '../ProductsBody/ProductsBody.css'
function ProductsBody() {
    const imageUrl = 'https://i.etsystatic.com/17053985/r/il/5b531c/3563321119/il_794xN.3563321119_cn7t.jpg';
  return (
    <>
    <div className='products_body_container'>

            <Grid container spacing={{ xs: 2, md: 2 }} sx={{width:'100% !important'}}>
                {Array.from(Array(21)).map((_, index) => (
                <Grid item xs={6} sm={6} md={4} lg={3} key={index}>
                    <Grid item className='products_body_element' >
                        <Link to=''>
                        <Paper
                        elevation={0}
                        className='products_body_paper'
                        sx={{
                            backgroundImage: `url("${imageUrl}")`,
                        }}>
                        </Paper>
                        </Link>
                        <Typography id='products_text' className='products_body_element_title' variant='h5'> <Link id='category_link' to=''> Hello </Link> </Typography>
                        <Typography id='products_text' className='products_body_element_category' variant=''> <Link to='' id='category_link'> This is a category </Link></Typography>
                        <div className='products_body_element_price_div'>
                            <Typography id='products_text' variant='h5' className='products_body_element_price'>
                                <Link to='' id='category_link'> 19.99€ </Link>
                            </Typography>
                            <IconButton aria-label="add to shopping cart" className='products_body_element_cart'>
                                <AddShoppingCartIcon />
                            </IconButton>
                        </div>
                        <div style={{height:'15px'}}>

                        </div>
                    </Grid>

                      
                </Grid>
                ))}
            </Grid>

    </div>
    </>
  )
}

export default ProductsBody;