import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import HeaderPokedex from './HeaderPokedex'
import CardPokemon from './pokedex/CardPokemon'
import TestPaginate1 from './pokedex/TestPaginate1'
import SearchPokemon from './pokedex/SearchPokemon'
import SelectPokemon from './pokedex/SelectPokemon'



const Pokedex = () => {
  
  // stado para guardar todos los pokemons
  const [pokedex, setPokedex] = useState()
  // aqui obtenemos el nombre del maestro que se ingreso en el home
  const nameMaestro = useSelector(state => state.nameMaestro)
  //stados para la pagination
  //  const [post, setpost] = useState(second)
  // este estado sirve para almacenar el nombre del pokemon ingresado en el input buscar
  const [pokeSearch, setPokeSearch] = useState()
  // estado para capturar el typo de pokemon seleccionado
  const [optionType, setOptionType] = useState('All')
  



  useEffect(() => {
    if(optionType !== 'All'){
      const url = `https://pokeapi.co/api/v2/type/${optionType}`
      axios.get(url)
        .then(res => {
          const arr = res.data.pokemon.map(e => e.pokemon)
          setPokedex({results:arr}) 
        })      
        .catch(err => console.log(err))
      
    }else if(pokeSearch){
      
        const url = `https://pokeapi.co/api/v2/pokemon/${pokeSearch}`
        const obj = {
          results: [
            {        
              url
            }
          ]
        }
        setPokedex(obj)
    }else{
          const url = 'https://pokeapi.co/api/v2/pokemon'
          axios.get(url)
            .then(res => {
              let arrayUrlPokemons = []
              for(let i=1;i<=898; i++){
                arrayUrlPokemons.push({url: `https://pokeapi.co/api/v2/pokemon/${i}`})
              }
              const allPokemons = {
                results : arrayUrlPokemons
              }
              setPokedex(allPokemons) })      
            .catch(err => console.log(err))
         }
    
  }, [pokeSearch,optionType])
   
  //  console.log(pokedex)

  return (
    <div className='pokedex-container' >
      
      <header className='pokedex__header'>
        <h2 className='pokedex__header-info'><span>Bienvenido {nameMaestro},</span> aquí podras encontrar tu pokemon favorito</h2>
        <div className='pokedex__header-body'>
          <SearchPokemon setPokeSearch={setPokeSearch} setOptionType={setOptionType}/>
          <SelectPokemon setOptionType={setOptionType} optionType={optionType} setPokeSearch={setPokeSearch}/>
        </div>
      </header>
      {/* <section className='pokemons-container'>
        {          
              pokedex?.results.map(pokemon => (
                  <CardPokemon pokemon={pokemon.url} key={pokemon.url}/>
                ))                      
        }
      </section> */}
      <section className='pokemons-container'>
        {/* <h1>AQUI PROBANDO LA PAGINATION</h1> */}
        <TestPaginate1 pokemons={pokedex?.results}/>
      </section>
    </div>
  )
}

export default Pokedex