import React, { useContext } from 'react'
import { NavLink, useParams} from 'react-router-dom'
import { Appcon } from './ApiFetch'
import './App.css'


const Home = () => {
  const value = useContext(Appcon)
  const { movie } = value

  console.log(value)
  return (
    <>
      Home



      <div className="mains">

      {movie.map((cur) => {
        const { Poster, Title, imdbID,Year } = cur;
        return <><NavLink to={`movie/:${Title}`} state = {{Title:Title,imdbIDs :imdbID,Poster:Poster}}>


          
        <div className="card">
          <div className="card-img">
            <img src={Poster} alt="imgs" />
          </div>
          <h4>{Title}</h4>
          <div className="disc">
            {Year},{imdbID}
          </div>
        </div>

        </NavLink>
        </>
      })}

      </div>



    </>
  )
}

export default Home;