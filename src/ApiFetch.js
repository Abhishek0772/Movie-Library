import React, {  useEffect, useState } from 'react'

const Api = `https://www.omdbapi.com/?i=tt3896198&apikey=16dba0bc&s=`;


const Appcon = React.createContext();
const AppProvider = ({ children }) => {
    const [query,setquery] = useState('iron man')
    const [movie, setmovie] = useState([]);
    const [error,seterror] =useState("True")
    const getdata = async (url) => {

        try {
            const rawdata = await fetch(url);
            const data = await rawdata.json()
            if (data.Response === "True") {
                setmovie(data.Search);
                seterror("false")
            }
            else if (data.Response==="False"){

            }
        }
        catch (error) {
            console.log(error);
        }

    }
    useEffect(() => {
       const time = setTimeout(() => {
            getdata(`${Api}${query}`)
            
        }, 3000);
        return ()=> clearTimeout(time);
    }, [query])
    if (query === ''){
        setquery('spider man')
    }
    return <Appcon.Provider value={{movie  ,setquery ,query}} >{children}</Appcon.Provider>
}
export { Appcon, AppProvider};
