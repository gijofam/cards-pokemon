import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import ProtectedRoutes from './components/ProtectedRoutes'
import Pokedex from './components/Pokedex'
import PokedexDetails from './components/PokedexDetails'
import {useSelector} from 'react-redux'


function App() {

  const nameMaestro = useSelector(state => state.nameMaestro)
  // console.log('valor es: '+nameMaestro);
  
  return (
    <div className="App">
      {/* <h1></h1> */}
      <div className={nameMaestro?'header-none':'header-primary'}>
        <img className='header__img-primary' src="./img/pokemon.png" alt="" />
      </div>
      {/* <div className={nameMaestro?'header-secondary':'header-none'}>
        <div className='header__fondo'></div>
        <img className='header__circle' src="./img/pokebola.png" alt="" />        
        <img className='header__img-secondary' src="./img/pokedex.png" alt="" />
      </div> */}

      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route element={<ProtectedRoutes nameMaestro={nameMaestro}/>}>
          <Route path='/pokedex' element={<Pokedex/>}/>   
          <Route path='/pokedex/:name' element={<PokedexDetails/>}/>   
        </Route>
      </Routes>
     {/* <footer className={nameMaestro ? 'App__footer-none' :'App__footer'}>
        <div className='footer__fondo'></div>
        <img className='footer__circle' src="./img/pokebola.png" alt="" />        
     </footer> */}

     {/* <div className='footer-pokedex'>
        <div className='footer-pokedex__fondo'>

        </div>
        <div className='footer-pokedex__cicle'>
            <div className='circle__child'>

            </div>
        </div>
    </div> */}
       {/* <div className='header-pokedex'> */}
       <div className={nameMaestro ? 'App__footer-none' :'header-pokedex'}>
        <div className='header-pokedex__fondo'>

        </div>
        <div className='header-pokedex__logo'>
            <img className='header-pokedex__img'src="./img/pokedex.png" alt="" />
        </div>
        <div className='header-pokedex__cicle'>
            <div className='pokedex-circle__child'>

            </div>
        </div>
    </div>
    </div>
  )
}

export default App
