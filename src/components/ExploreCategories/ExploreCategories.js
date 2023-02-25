import { Button, Grid, Paper, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react'

import '../ExploreCategories/ExploreCategories.css'

function ExploreCategories() {
    const imageUrl = 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MM2J3?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1629923697000';
  return (
    <Grid container sx={{marginTop:'25px'}}>
        <Grid item md={3} sm={5} xs={12} pl={10} mb={5} id='explore_categories_heading_grid' sx={{display: 'flex', flexDirection: 'column'}}>
            <Typography className='explore_categories_heading' variant='h3' component='h1'> Explore </Typography>
            <span style={{width:'45%', height:'3px', backgroundColor:'#939B62'}}></span>
        </Grid>

        <Container maxWidth='xl'>
            <Grid container spacing={{ xs: 2, md: 3 }}>
                {Array.from(Array(8)).map((_, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                    <Paper
                    elevation={1}
                    className='explore_element_paper'
                      sx={{
                        backgroundImage: `url("${imageUrl}")`,
                      }}>
                        <Button className='explore_element_button' variant='outlined' color='secondary'> Click ME</Button>
                      </Paper>
                </Grid>
                ))}
            </Grid>
        </Container>
    </Grid>
  )
}

export default ExploreCategories;