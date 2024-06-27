import React from 'react'
import NavBar from '../../components/NavBar'
import CustomSlider from '../../components/CustomSlider'
import Button from '../../components/Button'

const Home = () => {

  const data = [ {
    ruta: "/src/assets/postre.jpg",
    newWidth: 1200,
    alt: 'postre 1'
  },
  {
    ruta: "/src/assets/dessert2.jpg",
    newWidth: 1000,
    alt: 'postre 2'
  },
  {
    ruta: "/src/assets/dessert3.jpg",
    newWidth: 1500,
    alt: 'postre 3'
  }
  ]
  const textos = [
    {
      texto: "vegano"
    },
    {
      texto: "Carnes"
    },
    {
      texto: "Asiatica"
    }
  ]


  return (
    <>
      <NavBar />
      <CustomSlider sliders={data} />
      <section className='flex gap-2 justify-around px-10  py-4 '>
        {
          textos.map( ( texto, indice ) => <Button key={indice} className='bg-green-700 text-white px-2 py-1 min-w-20 rounded-full text-sm' texto={texto.texto} accion={() => console.log( "Hola mundo3" )} /> )
        }
      </section>

      <div>

        <div className='flex gap-4 border border-solid m-auto w-[98%]'>
          {/* <img src='../../assets/dessetr1.jpg' alt='postre 2' width={500} height={500} /> */}
          <img src='/src/assets/postre.jpg' alt='postre' width={100} />
          <p className='p-6'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi nulla accusamus
          </p>
        </div>
      </div>
    </>
  )
}

export default Home
