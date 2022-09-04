import React from 'react'
import ItemCount from './ItemCount'

const Item = ({title, img, price, stock}) => {
  return (
    <div className='m-5 bg-gray-200 text-center rounded-md py-2'>
      <h3 className='mb-3 font-semibold'>{title}</h3>
      <img src={img} alt="" className='rounded-md' style={{width:'200px', margin:'0 auto'}} />
      <h3 className='mt-2'>{price}</h3>
      <div className='text-center'>
        <ItemCount stock={stock} initial='1' />
      </div>      
      <button className='btn w-full'>Agregar al Carrito</button>
    </div>
  )
}

export default Item