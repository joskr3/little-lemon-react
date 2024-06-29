import styles from '@/App/styles'
import React from 'react'

interface Props {
  texto1?: string,
  texto2?: string
}

const { estilosTitulo } = styles


const Titulo = ({ texto1 = "", texto2 = "" }: Props) => {
  return (
    <h1 className={estilosTitulo} >
      {texto1} <span className="text-yellow-400">
        {texto2}
      </span>
    </h1>
  )
}

export default Titulo
