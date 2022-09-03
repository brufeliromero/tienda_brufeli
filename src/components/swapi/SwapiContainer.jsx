import React from 'react'
import { useEffect, useState } from 'react'

const SwapiContainer = () => {

  const [chars, setChars] = useState([{name:'Cargando...'}])

  useEffect( () => {
    setTimeout(() => {
      getCharts();    
    }, 5000);
    
    console.log('Mouniting...')
    
  }, [])
  
  const getCharts = () => {
    // console.log('getCharts');
    const URL = 'https://swapi.dev/api/people/'
    fetch( URL )
      .then( response => response.json())
      .then( data => {
        console.log(data.results)
        setChars(data.results)
      })
  }

  return (
    <>
      <div>StarWars API </div>
      <br />
      {/* {if(chars){}else{'cargando...'}} */}
      {chars.map( c => <li key={c.url}>{c.name}</li>  )}
    </>
    
  )
}

export default SwapiContainer