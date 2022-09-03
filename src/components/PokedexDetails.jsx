import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BarStats from './pokemonDetails/BarStats'
import Movement from './pokemonDetails/Movement'
import PreviousBtn from './pokemonDetails/PreviousBtn'

const PokedexDetails = () => {

  const {name} = useParams()
  
  const [pokeInfo, setPokeInfo] = useState()
  
  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}/`
    axios.get(url)
      .then(res => setPokeInfo(res.data))
      .catch(err => console.log(err))
  }, [])
  
  return (
    <article className='detail-pokemon'>
      <img className='detail-pokemon-img' src={pokeInfo?.sprites.other['official-artwork']['front_default']} alt="" />
      <div className='detail-pokemon__header'>
        <div className={`detail-pokemon__footer-img bg-${pokeInfo?.types[0].type.name} `}></div>
        <p className='detail-pokemon__header-order'>#{pokeInfo?.order}</p>
        <hr className='detail-pokemon__header-line' />
        <h2 className='detail-pokemon__header-title'>{pokeInfo?.name}</h2>
        <ul className='detail-pokemon__header-info'>
          <li className='dp__header-info__item'>
            <h5 className='info__item-title'>Peso</h5>
            <h3 className='info__item-dato'>{pokeInfo?.height}</h3>
          </li>
          <li className='dp__header-info__item'>
            <h5 className='info__item-title'>Altura</h5>
            <h3 className='info__item-dato'>{pokeInfo?.height}</h3>
          </li>
        </ul>
        <div className='detail-pokemon__header-body'>
          <div className='body__type'>
            <h4>Tipo</h4>
            <ul className='body__type__list'>
                {
                  pokeInfo?.types.map(type =>(
                    <li className={`type__list-item bg-${type.type.name} `} key={type.type.url}>{type.type.name}</li>
                  ))
                }
            </ul>
          </div>
          <div className='body__abilities'>
            <h4 className='body__abilities-title'>Habilidades</h4>   
            <ul className='body__abilities__list'>
                {
                  pokeInfo?.abilities.map(ability =>(
                    <li className='abilities__list-item' key={ability.ability.url}>{ability.ability.name}</li>
                  ))
                }
            </ul>
          </div>
        </div>
        <footer className='dp__footer'>
          <hr className='dp__footer__line'/>
          <h2 className='dp__footer__title'>Stats</h2>
          <div className='dp__footer__stats'>
              {
                pokeInfo?.stats.map(stat =>(
                  <BarStats stat={stat} key={stat.stat.url}/>
                ))
              }
          </div>
        </footer>
      </div>
      <div className='container-pokemon__movements'>
        <h2 className='movements__title'>Movement</h2>
        <hr className='movements__line'/>
        <div className='card__move'>
             {
                pokeInfo?.moves.map(move =>(
                  <Movement move={move} key={move.move.url}/>
                ))
              }
        </div>
      </div>
      <PreviousBtn/>
    </article>
  )
}

export default PokedexDetails