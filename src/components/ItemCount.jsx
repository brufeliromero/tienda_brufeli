import React from 'react'
import { useState } from 'react';


const ItemCount = ( { stock, initial,  onAdd } ) => {

  const [counter, setCounter] = useState(Number(initial))


  const sumarPruducto = () =>{
    // console.log('hiciste click')
    // console.log(stock)
    if(counter < Number(stock)){
      setCounter(counter + 1)
    }
  }

  const restarProducto = () =>{
    // console.log('hiciste click')
    if(counter != 1){
      setCounter(counter - 1)
    }
  }

  return (
    
      <div className='text-center'>
        <button onClick={restarProducto} className='btn mx-5 mb-5'>-</button>
        <strong>Contador: {counter}</strong>
        <button onClick={sumarPruducto} className='btn mx-5 mb-5'>+</button>
      </div>
      
  )
}

export default ItemCount