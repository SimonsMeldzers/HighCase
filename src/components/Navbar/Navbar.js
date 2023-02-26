import React from 'react';
import '../Navbar/Navbar.css';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { Link } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

import '../Navbar/Navbar.css'
const pages = [
  {
    pageName: 'Products',
    link: '/products'
  }, 
  {
    pageName: 'About Us',
    link: '/about-us'
  }, 
  {
    pageName: 'Contacts',
    link: '/contacts'
  }];

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    return (
      <AppBar color='primary' position='static' className='appbar'>
        <Container maxWidth="xl">
          <Toolbar disableGutters>

            {/* Menu for mobile */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="white"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.pageName} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center"><Link to={page.link} style={{color:'inherit', decoration:'none', textDecoration:'none'}}>{page.pageName}</Link></Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              className='navbar_title'
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'Dancing Script',
                letterSpacing: '.3rem',
                color: 'white',
                textDecoration: 'none',
              }}
            >
              <Link to='/' className='navbar_title_link' style={{textDecoration:'none', color: 'white'}}>High Case</Link>
            </Typography>
            {/* Menu for desktop */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Link style={{textDecoration : 'none'}} to={page.link}>
                  <Button
                    key={page.pageName}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page.pageName}
                  </Button>
                </Link>
              ))}
            </Box>
            
            <Typography
              variant="h6"
              noWrap
              className='navbar_title'
              sx={{
                
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'Dancing Script',
                fontSize: '2rem',
                letterSpacing: '.3rem',
                color: 'white',
                textDecoration: 'none',
                flexGrow: 1.5,
              }}
            >
            <Link to='/' className='navbar_title_link' style={{textDecoration:'none', color: 'white'}}>High Case</Link>
            </Typography>

            <Box sx={{ flexGrow: 0 }}>
                <IconButton sx={{ p: 0, mr: 1 }}>
                  <SearchIcon sx={{color:'white'}}/>
                </IconButton>
                <IconButton sx={{ p: 0 }}>
                  <ShoppingCartOutlinedIcon sx={{color:'white'}}/>
                </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
}

export default Navbar;