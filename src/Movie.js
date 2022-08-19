import React from 'react'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

function Movie() {
    const { imdbIDs ,Title} = useLocation().state
    const [values, setvalue] = useState([])
    console.log(Title)
    // const Api = `https://www.omdbapi.com/?i=${imdbIDs}&apikey=16dba0bc&`;
    // const apival = async (url) => {
    //     try {
    //         const raw = await fetch(url)
    //         const data = await raw.json()
    //         const {Poster, Title, imdbID, Year} = data
    //         console.log(Title)
    //         setvalue(Title)
    //         console.log(values)
            
            
            
    //     } catch (error) {
    //         console.log(error)
    //     }
        
    // }
    // useEffect(() => {
    //     apival(Api)
    //     return () => {
    //     }
    // }, [])


    return (
        <>{}

            {/* {Object.values(value).map((cur) => {
                const { Poster, Title, imdbID, Year } = cur;
               console.log(cur)
            }) */}
            {/* } */}
        </>)

}

export default Movie