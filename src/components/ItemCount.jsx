import React from 'react'
import { useState } from 'react';


const ItemCount = ( { stock, initial,  onAdd } ) => {

  const [counter, setCounter] = useState(1)


  const sumarPruducto = () =>{
    // console.log('hiciste click')
    console.log(stoke);
    if(counter < 5){
      setCounter(counter + 1)
    }
  }

  const restarProducto = () =>{
    // console.log('hiciste click')
    if(counter != 1){
      setCounter(counter - 1)
    }
  }

  const stoke = 5;


  return (
    <div className='m-5'>
        <h3>Producto Tienda</h3>
        <button onClick={restarProducto} className='btn m-5'>-</button>
        <strong>Contador: {counter}</strong>
        <button onClick={sumarPruducto} className='btn m-5'>+</button>
      </div>
  )
}

export default ItemCount