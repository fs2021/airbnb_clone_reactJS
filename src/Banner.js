//rfce
import { Button } from '@mui/material'
import React, { useState } from 'react'
import './Banner.css'
import Search  from './Search';
import { useNavigate } from 'react-router-dom';

function Banner() {
  const history = useNavigate();
  const [showSearch, setShowSearch] = useState(false); 

  return (
    <div className='banner'>
      <div className='banner_search'>
        {showSearch && <Search />}
        <Button onClick={()=>
        setShowSearch(!showSearch)}
        variant='outlined'
        className='banner_searchButton'>
          {showSearch ? 'Hide' : 'Search Dates'}
          
        </Button>
      </div>
      <div className='banner_main'>
        <div className='banner_info'>
            <h1>This is banner info and some more words.</h1>
            <h5>Some inspirational text here. Some inspirational text here.</h5>
            <Button 
            variant='outlined' onClick={() => history('./search')}>
                Explore nearby
            </Button> 
        </div>
      </div>
    </div>
  )
}

export default Banner