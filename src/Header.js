import React from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LanguageIcon from '@mui/icons-material/Language';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
      <Link to='/'>
        <div className='logo_div'>
          
          <img 
              className='header_icon'
              src='/images/logo.png'
              
              alt='airbnb'>
          </img>
          <h2>AirbnbClone</h2>
          
        </div>
        </Link>
        <div className='header_center'>
          <input type='text'/>
          <SearchIcon/>
        </div>
        <div className='header_right'>
          <p>Become a host</p>  
          <LanguageIcon />
          <ExpandMoreIcon />
          <Avatar></Avatar>
        </div>
    </div>
  )
}

export default Header