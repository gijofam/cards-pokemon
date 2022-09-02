import React, {useState, useEffect} from 'react'
import axios from 'axios'
import StatPokemon from './StatPokemon'
import TypePokemon from './TypePokemon'
import { useNavigate } from 'react-router-dom'



const CardPokemon = ({pokemon}) => {
  const navigate = useNavigate()
  const [infoPokemon, setInfoPokemon] = useState()
  useEffect(() => {
      const url = pokemon
      axios.get(url)
      .then(res => setInfoPokemon(res.data))
      .catch(err => console.log(err))
    }, [])
// ********acordar se de comentar el consolelog
  //  console.log(infoPokemon)
  //  console.log(`card-pokemon bg-${infoPokemon.types[0].type.name}`)
   
   const infoAllPokemon = (e) => {
      navigate(`/pokedex/${infoPokemon?.name}`)
    }  

  return (
    // <article onClick={infoAllPokemon} className='card-pokemon' >
    <article onClick={infoAllPokemon} className={`card-pokemon bg-${infoPokemon?.types[0].type.name}`} >
        {/* <div className='card-pokemon__header-container__img'> */}
         <img className='card-pokemon__header-img' src={infoPokemon?.sprites.other['official-artwork']['front_default']} alt="not found" />
        {/* </div> */}
        <div className='card-pokemon__content'>
          <header className='card-pokemon__header'>
              <h2 className='card-pokemon__header-title'>{infoPokemon?.name}</h2>
              <p className='card-pokemon__header-type'>Type</p>
              <ul className='card-pokemon__header-type-content'>
                  {
                    infoPokemon?.types.map((type,index,array) => (
                      <TypePokemon type={type} key={type.type.url} index={index} array={array} />
                    ))  
                  }
              </ul>
          </header>
          <footer className='card-pokemon__footer'>
              <ul className='card-pokemon__footer-stat'>
                  {
                  infoPokemon?.stats.map(stat => (
                      <StatPokemon stat = {stat} key={stat.stat.url}/>
                  )) 
                  }
              </ul>
          </footer>
        </div>
    </article>
  )
}

export default CardPokemon