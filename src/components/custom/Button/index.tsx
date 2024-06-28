import React from 'react'

interface Props {
  className: string,
  texto: string,
  accion: () => void
}

const Button = ({texto="",className,accion}:Props) => {
  return (
    <button type='button' className={className} onClick={accion} >
      {texto}
    </button>
  )
}

export default Button
