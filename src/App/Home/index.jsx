import React from 'react'
import NavBar from '../../components/NavBar'
import CustomSlider from '../../components/CustomSlider'
import Button from '../../components/Button'
import Cards from '../../components/Cards'
// import CarouselGatitos from '../../components/CarouselGatitos'
import data from '../../api/data'
import textos from '../../api/textos'
import dataCards from '../../api/dataCards'

const Home = () => {
  const { botonStyles, textosStyles, dataCardsStyles } = styles
  return (
    <>
      <NavBar />
      <CustomSlider sliders={data} />
      <section className={textosStyles}>
        {
          textos.map( ( texto, indice ) => <Button key={indice} className={botonStyles} texto={texto.texto} accion={() => console.log( "Hola mundo3" )} /> )
        }
      </section>
      <div>
        <div className={dataCardsStyles}>
          {
            dataCards.map( item => (
              <Cards text={item.text} src={item.src} alt={item.alt} />
            ) )
          }
        </div>
      </div>
      {/* <CarouselGatitos/> */}
    </>
  )
}

const styles = {
  botonStyles: 'bg-green-700 text-white px-2 py-1 min-w-20 rounded-full text-sm',
  textosStyles: 'flex gap-2 justify-around px-10  py-4',
  dataCardsStyles: 'flex flex-col md:flex-row  m-auto w-[98%] gap-2'
}


export default Home
