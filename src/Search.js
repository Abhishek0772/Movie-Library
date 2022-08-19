import React, { useContext, useState } from 'react'
import { Appcon } from './ApiFetch'
import "./App.css"
function Search() {
  const [newquery,setnewquery] = useState(query)
  const { query , setquery} = useContext(Appcon)
  
  setTimeout(() => {
    setquery(newquery)
  }, 3000);
  if (setquery===""){
    setquery("love")

  }

  return (
    <>
    <div className="search">
      <form action="#" onSubmit={(e)=>{e.preventDefault()}}>
      <input type="text" value={newquery} onChange={(e)=>{setnewquery(e.target.value)}}  />
      </form>

    </div>

    
    </>
  )
}

export default Search