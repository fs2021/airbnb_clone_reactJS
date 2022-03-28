import React from 'react'
import './SearchPage.css'
import { Button } from '@mui/material'
import SearchResult from './SearchResult'

function SearchPage() {
  return (
    <div className='searchPage'>
        <div className='searchPage_info'>
            <p>Hardcoded info about dates, guests and results of search</p>
            <h2>Found Stays Nearby</h2>
            <Button variant='outlined'>Cancellation Flexibility</Button>
            <Button variant='outlined'>Type of place</Button>
            <Button variant='outlined'>Price</Button>
            <Button variant='outlined'>Rooms and beds</Button>
            <Button variant='outlined'>More filters</Button>

        </div>
        <SearchResult 
          img='https://images.unsplash.com/photo-1648401818367-e70e5eb5d16c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
          location='Private room hardcoded info'
          title='hardcoded title about'
          description='1 guest, 1 bedroom, wifi, ...'
          star={4.73}
          price='$30/night'
          total='$117 / total'
        />

        <SearchResult 
          img='https://images.unsplash.com/photo-1648401818367-e70e5eb5d16c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
          location='Private room hardcoded info fg hgththr gthyj'
          title='hardcoded title about'
          description='1 guest, 1 bedroom, wifi, ... gfgtg edparking dfre f'
          star={4.73}
          price='$30/night'
          total='$117 / total'
        />
    
    </div>
  )
}

export default SearchPage