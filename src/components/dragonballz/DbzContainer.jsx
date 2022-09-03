import React, { useEffect, useState } from 'react'
import DbzCardList from './DbzCardList'

const DbzContainer = () => {

    const [chars, setChars] = useState([])

    console.log('Hola DbzContainer');

    useEffect(() => {
      
        const URL = 'https://rickandmortyapi.com/api/character'
        fetch( URL)
          .then(res => res.json() )
          .then(data => {
            console.log(data);
            setChars(data.results)
        })          
      }, [])  

  return (
    <>
        <DbzCardList chars={chars} />
    </>
  )
}

export default DbzContainer