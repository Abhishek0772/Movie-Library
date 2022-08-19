import React from 'react'
import {  Route ,Routes} from 'react-router-dom'
import Home from './Home'
import Movie from './Movie'
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './Search';
import "./App.css"

function App() {
  return (
    <>
    <Search/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/Movie/:id" element={<Movie/>} />
    </Routes>
    </>
  )
}

export default App