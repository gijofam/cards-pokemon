import React, {useState,useEffect} from 'react'
import axios from 'axios'

const SelectPokemon = ({setOptionType, optionType,setPokeSearch}) => {
  
  const [typesPokemon, setTypesPokemon] = useState()
  
  useEffect(() => {
    const url = 'https://pokeapi.co/api/v2/type'
      axios.get(url)
      .then(res => setTypesPokemon(res.data))
      .catch(err => console.log(err))

  
  }, [])
  
  const handleChange = e => {
    setOptionType(e.target.value)
    setPokeSearch()
  }

  return (
//       <select name="select">
//         <option value="value1">Value 1</option>
//         <option value="value2" selected>Value 2</option>
//         <option value="value3">Value 3</option>
// <     </select>
    <select value={optionType} className='pokedex-select' onChange={handleChange}>
       <option className='pokedex-select__option'  value='All' >All pokemons</option> 
      {
        typesPokemon?.results.map(type =>(
          <option value={type.name} key={type.url}>{type.name}</option> 
        ))
      }
    </select>
  )
}

export default SelectPokemon