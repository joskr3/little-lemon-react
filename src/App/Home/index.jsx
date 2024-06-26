import React from 'react'
import NavBar from '../../components/NavBar'
import { Carousel } from 'nuka-carousel'

const Home = () => {
  return (
    <>
      <NavBar />
      
      <Carousel autoplay showArrows wrapMode="wrap">
        <img src='/src/assets/dessetr1.jpg' width={600}  alt='postre 1' />
        <img src='/src/assets/dessert2.jpg' width={1200}  alt='postre 2' />
        <img src='/src/assets/dessetr1.jpg' width={1000} alt='postre 3' />
        <img src='/src/assets/dessert2.jpg' width={1100} alt='postre 4' />
        <img src='/src/assets/dessert3.jpg' width={700} alt='postre 5' />
      </Carousel>
    </>
  )
}

export default Home
