import { Carousel } from 'nuka-carousel'
import React from 'react'

const CarouselGatitos = () => {
  return (
    <>
      <Carousel autoplay showArrows>
        <img src="/src/assets/gatico1.webp" alt='gatico1' className='w-full h-24'/>
        <img src="/src/assets/gatico2.webp" alt='gatico2' className='w-full h-24' />
        <img src="/src/assets/gatico3.webp" alt='gatico3' className='w-full h-24' />
        <img src="/src/assets/gatico1.webp" alt='gatico1' className='w-full h-24' />
        <img src="/src/assets/gatico2.webp" alt='gatico2' className='w-full h-24' />
        <img src="/src/assets/gatico3.webp" alt='gatico3' className='w-full h-24' />
        <img src="/src/assets/gatico1.webp" alt='gatico1' className='w-full h-24' />
        <img src="/src/assets/gatico2.webp" alt='gatico2' className='w-full h-24' />
        <img src="/src/assets/gatico3.webp" alt='gatico3' className='w-full h-24' />
      </Carousel>
    </>
  )
}

export default CarouselGatitos
