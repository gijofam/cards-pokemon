import React from 'react'

const TypePokemon = ({type,index,array}) => {
  return (
    (index === (array.length -1))
     ?<li>{type.type.name}</li>
     :<li>{type.type.name}/</li>
  )
}

export default TypePokemon