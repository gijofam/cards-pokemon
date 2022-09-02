import React from 'react'

const SearchPokemon = ({setPokeSearch,setOptionType}) => {

  const handleSubmit = (e) =>{
    e.preventDefault()
    setPokeSearch(e.target.searchName.value.trim().toLowerCase())
    e.target.searchName.value = ''
    // reset()
    setOptionType('All')
  }
  return (
    <form className='pokedex-form' onSubmit={handleSubmit}>
        {/* <div> */}
         <input className='pokedex-form__input' type="text" id='searchName' placeholder='Busca un pokemon' />
         <button className='pokedex-form__btn'><i className='bx bx-search-alt'></i> buscar</button>
        {/* </div> */}
    </form>
  )
}

export default SearchPokemon