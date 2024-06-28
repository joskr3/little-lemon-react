import React from 'react'
interface Props {
  text: string,
  src: string,
  alt: string,

}

function Cards({ text, src, alt }: Props) {
  return (
    <div className='flex p-4 border border-gray-600 gap-2 rounded-lg	 '>
      <img src={src} alt={alt} className='basis-[0%] min-w-[25%] rounded-lg	' />
      <p className='flex-1'>{text}</p>

    </div>
  )
}


export default Cards
