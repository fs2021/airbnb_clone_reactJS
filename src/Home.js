// rfce (es7 react snippets)
import React from 'react';
import './Home.css';
import Banner from './Banner';
import Card from './Card';

function Home() {
  return (
    <div className='home'>
        
        <Banner />

        <div className='home_section'>
          <Card src='https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            title='Home' description='Home description hardcoded' 
           />
          <Card />
          <Card />

        </div>
        <div className='home_section'>
          <Card src='https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
              title='Home' description='Home description hardcoded'
              price='$111/night' 
            />
          <Card />
          <Card />

        </div>
    </div>
  )
}

export default Home