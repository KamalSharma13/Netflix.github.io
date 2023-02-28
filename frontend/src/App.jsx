import { useState } from 'react'

import './App.css'
import {Routes,Route} from 'react-router-dom'
import Netflix from './pages/Netflix'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Player from './pages/Player'
import Movies from './pages/Movies'
import TVShows from './pages/TVshows'
import UserListedMovies from './pages/UserListedMovies'

function App() {

  return (
   <div>
   
   <Routes>
<Route  exact path='/login' element ={ <Login/>}/>
<Route  exact path='/signup' element ={ <Signup/>}/>
<Route exact path='/player' element = {<Player/>}/>
<Route exact path='/movies' element = {<Movies/>}/>
<Route exact path='/tv' element = {<TVShows/>}/>
<Route exact path='/mylist' element = {<UserListedMovies/>}/>
<Route exact path="/new" element={<Player />} />

<Route  exact path='/' element ={ <Netflix/>}/>

   </Routes>
   

   </div>)
}

export default App
