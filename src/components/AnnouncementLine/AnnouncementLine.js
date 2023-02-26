import { Typography } from '@mui/material';
import React from 'react'

import '../AnnouncementLine/AnnouncementLine.css'
function AnnouncementLine({text}) {
  return (
    <>
    <div className='announcement_div'>
        <Typography variant='h6'>
            {text}
        </Typography>
    </div>
    {/* Neccesary because of position:absolute for announcement_div */}
    <div className='separator'></div>
    </>
  )
}

export default AnnouncementLine;