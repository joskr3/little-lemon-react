import React from 'react'

interface Props {
  nuevoAncho?: number
  alt: string
  ruta: string
}

const CustomImage = ({ ruta, nuevoAncho, alt }: Props) => {
  return (
    <div className='flex flex-col justify-around basis-0 min-w-full grow'>
      <img className={`relative h-52 md:h-96  my-auto object-cover opacity-75`} width={nuevoAncho} src={ruta} alt={alt} />
    </div>
  )
}

export default CustomImage
