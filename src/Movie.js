import React from 'react'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

function Movie() {
  const { imdbIDs } = useLocation().state
  const [values, setvalue] = useState([])
  // console.log(Title)
  const Api = `https://www.omdbapi.com/?i=${imdbIDs}&apikey=16dba0bc&`;
  const getapi = (url) => {
    axios.get(url).then((response) => {
      setvalue(response.data)
      console.log(response.data)

    })
  }
  const { Title, Poster, Year, Plot } = values
  useEffect(() => {

    return () => {
      getapi(Api)
    }
  }, [])


  return (
    <>
    <div class="card mb-3" style={{"width":"80vw",height:"70vh",display:"flex"}}>
  <div class="row g-0">
    <div class="col-md-4" style={{display:"flex",alignItems:'center',"width":"40vw",height:"70vh",flexDirection:"column"}}>
      <img src={Poster} class="img-fluid rounded-start" style={{"width":"30vw",height:"60vh",margin:"auto",display:"flex",alignItems:'center'}} alt="..."/>
    </div>
    <div class="col-md-8" style={{"width":"30vw"}}>
      <div class="card-body">
        <h5 class="card-title">{Title}</h5>
        <p class="card-text">{Plot}.</p>
        <p class="card-text"><small class="text-muted">{Year}</small></p>
      </div>
    </div>
  </div>
</div>

    </>)

}

export default Movie