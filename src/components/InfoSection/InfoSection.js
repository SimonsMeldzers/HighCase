import { Container, Grid, Typography } from '@mui/material';
import React from 'react'

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import '../InfoSection/InfoSection.css'
function InfoSection() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Grid container sx={{marginTop:'25px'}}>
        <Grid item md={3} sm={5} xs={12} pl={10} mb={5} id='explore_categories_heading_grid' sx={{display: 'flex', flexDirection: 'column'}}>
            <Typography className='explore_categories_heading' variant='h3' component='h1'> High Case </Typography>
            <span style={{width:'45%', height:'3px', backgroundColor:'#939B62'}}></span>
        </Grid>

        <Container maxWidth='xl'>
            <Typography component={'span'} variant='body1' id='wide_text'>
            &nbsp;&nbsp;&nbsp;&nbsp;At High Case, we strive to offer the best fashion accessories that won't break the bank. Our collection of phone cases is a testament to this. We understand that your phone is always within reach, whether you're browsing Instagram, taking selfies, or replying to important group chats. That's why we offer a range of phone cases to protect your phone from damage, without compromising on style. Our cases are designed to reflect the latest trends and are both practical and cute.
            <div></div>
            <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;Our goal is to help you find your perfect phone case, whether it's a chic, sophisticated, groovy, or animal-print design. We believe that your phone case is an extension of your personality, and our playful accessories are an excellent way to express yourself. Our cases are not only stylish, but also tough and durable, ensuring your phone stays scratch-free and protected. We offer Tough Phone Cases for those who are prone to accidents, Personalised Phone Cases for those who want to make a statement, and Clear Phone Cases for those who want to show off the natural beauty of their phone. We also offer environmentally friendly, sustainable cases for those who care about the planet.
            <div></div>
            <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;With so many options to choose from, there is something for everyone. Our phone cases make great gifts for your friends too! Don't forget to tag us on social media so we can see how our amazing products look in action. Spice up your life and your accessories with one of our practical and pretty phone cases today!
            </Typography>

            <Accordion id='accordion_text' expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    At High Case
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>That's why we offer a range of...</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    &nbsp;&nbsp;&nbsp;&nbsp;At High Case, we strive to offer the best fashion accessories that won't break the bank. Our collection of phone cases is a testament to this. We understand that your phone is always within reach, whether you're browsing Instagram, taking selfies, or replying to important group chats. That's why we offer a range of phone cases to protect your phone from damage, without compromising on style. Our cases are designed to reflect the latest trends and are both practical and cute.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion id='accordion_text' expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
                >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>Our Goal</Typography>
                <Typography sx={{ color: 'text.secondary' }}>
                    Our cases are not only...
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                &nbsp;&nbsp;&nbsp;&nbsp;Our goal is to help you find your perfect phone case, whether it's a chic, sophisticated, groovy, or animal-print design. We believe that your phone case is an extension of your personality, and our playful accessories are an excellent way to express yourself. Our cases are not only stylish, but also tough and durable, ensuring your phone stays scratch-free and protected. We offer Tough Phone Cases for those who are prone to accidents, Personalised Phone Cases for those who want to make a statement, and Clear Phone Cases for those who want to show off the natural beauty of their phone. We also offer environmentally friendly, sustainable cases for those who care about the planet.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion id='accordion_text' expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
                >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    Wide selection
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>
                    Always something for everyone...
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                &nbsp;&nbsp;&nbsp;&nbsp;With so many options to choose from, there is something for everyone. Our phone cases make great gifts for your friends too! Don't forget to tag us on social media so we can see how our amazing products look in action. Spice up your life and your accessories with one of our practical and pretty phone cases today!
                </Typography>
                </AccordionDetails>
            </Accordion>
        </Container>

    </Grid>
  )
}

export default InfoSection;