import React, {useState, useEffect} from 'react'
import axios from 'axios'
const StatPokemon = ({stat}) => {
  
  return (
    <li className='stat'>
        <p className='stat-title'>{stat.stat.name}</p>
        <p className='stat-info'>{stat['base_stat']}</p>
    </li>
  )
}

export default StatPokemon