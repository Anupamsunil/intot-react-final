import React from 'react';
import Navbar from './Navbar';
import Carousel from './Carousel';
import Card from './Card';
import Portfolio from './Portfolio';



function Header(){
    return(
        <div>
            <Navbar />
            <Carousel />
            <Card />
            <Portfolio />
        
            
        </div>
    )
}
export default Header;