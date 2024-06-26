import React from 'react'
import NavBar from '../../components/NavBar'
import { Carousel } from 'nuka-carousel'
import CustomSlider from '../../components/CustomSlider'

const Home = () => {

  const data = [ {
    ruta: "/src/assets/dessetr1.jpg",
    newWidth: 1200,
    alt: 'postre 1'
  },
  // {
  //   ruta: "/src/assets/dessert2.jpg",
  //   newWidth: 1000,
  //   alt: 'postre 2'
  // },
  // {
  //   ruta: "/src/assets/dessert3.jpg",
  //   newWidth: 1500,
  //   alt: 'postre 3'
  // }
  //   ,
  // {
  //   ruta: "/src/assets/dessert3.jpg",
  //   newWidth: 1100,
  //   alt: 'postre 3'
  // }
  //   ,
  // {
  //   ruta: "/src/assets/dessert3.jpg",
  //   newWidth: 800,
  //   alt: 'postre 3'
  // }
  //   ,
  // {
  //   ruta: "/src/assets/dessert3.jpg",
  //   newWidth: 600,
  //   alt: 'postre 3'
  // }
  ]

  return (
    <>
      <NavBar />
      <CustomSlider sliders={data} />
    </>
  )
}

export default Home
