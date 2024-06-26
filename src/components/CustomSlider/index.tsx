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


const CustomSlider = ({ sliders }: Props) => {
  return (
    <Carousel autoplay showArrows swiping>
      {
        sliders.map((slider) => <CustomImage titulo="Titulo" descripcion='hola' boton={<Button className='bg-green-700 text-white px-2 rounded-full' texto='Click' accion={() => console.log("Hola mundo")} />} nuevoAncho={slider.newWidth} alt={slider?.alt} ruta={slider.ruta} />)
      }
    </Carousel>
  )
}

export default CustomSlider
