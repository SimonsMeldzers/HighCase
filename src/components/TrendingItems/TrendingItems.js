import React from 'react'

import { Button, Container, Grid, Typography } from '@mui/material'
import {Swiper, SwiperSlide} from 'swiper/react';
import { FreeMode } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';

import 'bootstrap/dist/css/bootstrap.min.css';

import '../TrendingItems/TrendingItems.css'
import TrendingItemsCard from './TrendingItemsCard/TrendingItemsCard';

function TrendingItems() {
  return (
    <Grid container sx={{display: 'flex', flexDirection: 'column'}} pl={0} pr={3} mt={3}>
        <Grid item md={3} sm={5} xs={12} pl={10} id='trending_items_heading_grid' sx={{display: 'flex', flexDirection: 'column'}}>
            <Typography className='trending_items_heading' variant='h3' component='h1'> Trending Items </Typography>
            <span style={{width:'90%', height:'3px', backgroundColor:'#939B62'}}></span>
        </Grid>

        <Container maxWidth='xl' className='trending_items_slider_container'>
            <Swiper
                style={{padding:'5px 0px 5px 5px', marginTop:'20px'}}
                freeMode={true}
                grabCursor={true}
                modules={[FreeMode]}
                className='mySwiper'
                breakpoints={{
                    0:{
                        slidesPerView: 1.6,
                        spaceBetween: 100,
                    },
                    385:{
                        slidesPerView: 1.2,
                        spaceBetween: -60,
                    },
                    500:{
                        slidesPerView: 2.1,
                        spaceBetween: 10,
                    },
                    768:{
                        slidesPerView: 3.3,
                        spaceBetween: 15,
                    },
                    1024:{
                        slidesPerView: 4.3,
                        spaceBetween: 15,
                    },
                    1280:{
                        slidesPerView: 4.3,
                        spaceBetween: 15,
                    },
                                       
                }}
                
            >  

            <SwiperSlide style={{marginRight:'100px'}}>
                <TrendingItemsCard name='Dinosaur Couples cases' category='Pair cases' price='22.99€'/>
            </SwiperSlide>
            <SwiperSlide style={{marginRight:'100px'}}>
                <TrendingItemsCard name='Dinosaur Couples cases' category='Pair cases' price='22.99€'/>
            </SwiperSlide>
            <SwiperSlide style={{marginRight:'100px'}}>
                <TrendingItemsCard name='Dinosaur Couples cases' category='Pair cases' price='22.99€'/>
            </SwiperSlide>
            <SwiperSlide style={{marginRight:'100px'}}>
                <TrendingItemsCard name='Dinosaur Couples cases' category='Pair cases' price='22.99€'/>
            </SwiperSlide>
            <SwiperSlide style={{marginRight:'100px'}}>
                <TrendingItemsCard name='Dinosaur Couples cases' category='Pair cases' price='22.99€'/>
            </SwiperSlide>
            <SwiperSlide style={{marginRight:'100px'}}>
                <TrendingItemsCard name='Dinosaur Couples cases' category='Pair cases' price='22.99€'/>
            </SwiperSlide>
            


            

            </Swiper>
        </Container>
    </Grid>
  )
}

export default TrendingItems