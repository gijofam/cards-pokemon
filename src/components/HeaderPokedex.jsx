import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setNameMaestro } from '../store/slices/nameMaestro.slice'

const HeaderPokedex = () => {

  const dispatch = useDispatch()
  const changeAtInitialValue = () =>{
    dispatch(setNameMaestro(''))
  }
  return (
    <div className='header-pokedex'>
        <div className='header-pokedex__fondo'>

        </div>
        <div className='header-pokedex__logo'>
          <Link onClick={changeAtInitialValue} to='/'>
            <img className='header-pokedex__img'src="./img/pokedex.png" alt="" />
          </Link>
        </div>
        <div className='header-pokedex__cicle'>
            <div className='pokedex-circle__child'>

            </div>
        </div>
    </div>
  )
}

export default HeaderPokedex