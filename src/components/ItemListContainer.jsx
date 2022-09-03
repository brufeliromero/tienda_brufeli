import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = ({greeting}) => {
  return (
    <>
      <div className='text-xl'>{greeting}</div>
      <ItemCount />
    </>
  )
}

export default ItemListContainer