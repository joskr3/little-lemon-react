import React from 'react'

interface Props {
  titulo: string
  descripcion: string
  boton: React.JSX.Element
  nuevoAncho: number
  alt: string
  ruta: string
}


const CustomImage = ({ titulo, descripcion, boton, ruta, nuevoAncho, alt }: Props) => {
  return (
    <div className='h-fit'>
      <div className='flex flex-col gap-4 justify-around absolute z-50 mx-2 mt-3'>
        <h1 className='text-white text-sm md:text-2xl'>
          {titulo}
        </h1>
        <p className='text-white text-sm md:text-2xl'>
          {descripcion}
        </p>
        <div className=''>
          {
            boton
          }
        </div>
      </div>
      <img className={`relative max-h-40 h-52 md:h-96  my-auto object-cover`} width={nuevoAncho} src={ruta} alt={alt}  />
    </div>
  )
}

export default CustomImage
