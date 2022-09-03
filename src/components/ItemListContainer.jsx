import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = ({greeting}) => {
  return (
    <>
      <div className='text-xl'>{greeting}</div>
      <ItemCount stock='10' initial='1' />
    </>
  )
}

export default ItemListContainer