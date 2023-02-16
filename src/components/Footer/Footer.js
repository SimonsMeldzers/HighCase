import React from 'react'

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { Button } from '@mui/material';
import '../Footer/Footer.css'
import { Link } from 'react-router-dom';

export default function Footer() {
  const checkBoxLabel = <Typography sx={{width:'45%'}} variant='body2'>I hereby agree to the terms and conditions for digital communication in accordance with the <u>privacy policy*</u></Typography>
  return (
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: '40px',
          backgroundColor:'#FF7B54',
          color:'white',
          flexGrow: 1
        }}
      >
          <Grid container spacing={2} ml={3} >
            <Grid item lg={8} md={8}>
              <Typography variant="h4" component='h1'>
                Earn 10% off on your next order.
              </Typography>
              <Typography variant='body2' color='' sx={{mt:'10px'}}>
                Sign up to receive personalized e-mails <br></br> about our newest releases!
              </Typography>

              <Grid item>
              <TextField sx={{mt:'15px'}} label="E-mail" variant="outlined" color='info'/>

                <Button sx={{height:'55px', mt:'15px', ml:'5px'}} color='info' endIcon={<KeyboardArrowRightOutlinedIcon/>} variant='outlined'>
                  Send
                </Button>
              </Grid>

              <FormGroup sx={{mt:'10px'}}>
                <FormControlLabel control={<Checkbox color="info" />} label={checkBoxLabel} />
              </FormGroup>
            </Grid>

            <Grid item lg={4} md={4} sx={{}}>
              <Link style={{textDecoration:'none', color:'white'}}><Typography variant='h6' component='h2'> Products </Typography></Link>
              <span style={{fontSize:'23px', margin:'0px 4px 0px 4px'}}>|</span>
              <Link style={{textDecoration:'none', color:'white'}}><Typography variant='h6' component='h2'> About Us </Typography></Link>
              <span style={{fontSize:'23px', margin:'0px 4px 0px 4px'}}>|</span>
              <Link style={{textDecoration:'none', color:'white'}}><Typography variant='h6' component='h2'> Contacts </Typography></Link>
            </Grid>
          </Grid>

          
      </Box>

  );
}