import * as React from 'react';
import { useState } from 'react';
import { Styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import {Link} from 'react-router-dom';
import Scrapeddetails from './Scrapeddetails';

function Homepage() {
  let [userInput,setuserinput]=useState();

    return (
      
      <div className="home">
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
         WEBCODE2
          </Typography>
          <Link to='/Scrapeddetails'>
          <IconButton size="large" aria-label="search" color="inherit">
            <SearchIcon />
          </IconButton>
          </Link>
          <IconButton
            size="large"
            aria-label="display more actions"
            edge="end"
            color="inherit"
            
          >
            
          </IconButton>
          <TextField id="filled-basic" label="Platform" variant="filled" onChange={(e)=>setuserinput(userInput=e.target.value)}/>
        </Toolbar>
      </AppBar>
    </Box>
    <h1>Hello here i have only scraped the amazon data</h1>
    <h3>To View Scraped Details Click The Search Button In Navbar !!!!!</h3>
      </div>
    );
  }
  
  export default Homepage;