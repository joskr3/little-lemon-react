import React from 'react'
import NavBar from '../../components/NavBar'
import CustomSlider from '../../components/CustomSlider'
import Button from '../../components/Button'
import Cards from '../../components/Cards'

const dataCards = [
  {
    text: 'Test the flawor of the best vegetables in town',
    src: "/src/assets/postre.jpg",
    alt: 'imagen 1'
  },
  {
    text: 'Test the flawor of the best meat in town',
    src: '/src/assets/dessert2.jpg',
    alt: 'imagen 2'
  },
  {
    text: 'Test the flawor of the best asian food in town',
    src: '/src/assets/dessert3.jpg',
    alt: 'imagen 3'
  },

]


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

        <div className='flex flex-col md:flex-row  m-auto w-[98%] gap-2'>


          {
            dataCards.map( item => (
              <Cards text={item.text} src={item.src} alt={item.alt} />
            ) )
          }
        </div>
      </div>
    </>
  )
}

export default Home
