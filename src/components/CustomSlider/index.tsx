import { Carousel } from 'nuka-carousel'
import React from 'react'
import CustomImage from '../CustomImage/index'
import Button from '../Button'

interface SlidersProps {
  ruta: string
  newWidth: number
  alt: string
}

interface Props {
  sliders: SlidersProps[]
}


const Contenido = () => {
  return (
    <div className='flex flex-col gap-4 justify-around absolute z-50 mx-2 mt-3 grow h-full'>
      <h1 className='text-white text-sm md:text-2xl'>
        Cookie lemmon PROMO
      </h1>
      <p className='text-white text-sm md:text-2xl'>
        50% off!
      </p>
      <Button className='bg-green-700 text-white px-2 py-1  rounded-full text-sm w-fit' texto='Comprar YA!' accion={() => console.log("Hola mundo")} />
    </div>
  )
}


const CustomSlider = ({ sliders }: Props) => {
  return (
    <Carousel showArrows swiping>
      <>
        <Contenido />
        {
          sliders.map((slider, index) => <CustomImage key={index} nuevoAncho={slider.newWidth} alt={slider?.alt} ruta={slider.ruta} />)
        }
      </>

    </Carousel>
  )
}

export default CustomSlider
