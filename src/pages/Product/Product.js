import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { Button, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import React from 'react'
import ImageGallery from 'react-image-gallery';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

import '../Product/Product.css'
const Product = () => {

  const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];

  return (
    <>
      <Navbar/>
      <Grid container mt={4}>
        <Grid item md={6}>
          <ImageGallery items={images} showPlayButton={false} thumbnailPosition='left'/>
        </Grid>
        <Grid item md={6} className='product_right_grid'>
          <div className='product_right_grid_div'>
            <Typography variant='h3' component='h1'> See-thru flowers </Typography>
            <Typography variant='body1'> See-thru cases </Typography>

            <FormControl variant="filled" color='secondary' sx={{ marginTop:'10px'}}>
              <InputLabel id="demo-simple-select-filled-label">Select Phone Type</InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
              <Typography variant='body2' sx={{display:'flex', alignItems:'center'}}> 
                <div style={{backgroundColor:'#939B62', width:'7px', height:'7px', borderRadius:'100%', marginRight:'3px'}}></div> 
                Limited stock | Only 3 left
              </Typography>
            </FormControl>
            
            <Button className='product_cart_button' variant="contained" color='secondary' startIcon={<ShoppingCartIcon color='info'/>} endIcon='9.99€'>
              Add to cart
            </Button>
          </div>
        </Grid>
      </Grid>
      <Footer></Footer>
    </>
  )
}

export default Product;