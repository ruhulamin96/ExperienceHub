import React from 'react'
import Article from './Article/Article'
import Carousel from './NavBar/Carousel'
import Sidebar from './Sidebar/Sidebar'

function Home() {
    return (
        <div>
            
            <Carousel></Carousel>
            <Sidebar></Sidebar>
            <Article></Article>
           
        </div>
    )
}

export default Home
