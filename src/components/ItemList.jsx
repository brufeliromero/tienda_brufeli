import React from 'react'
import Item from './Item'

const ItemList = ({products}) => {
    const flex = {display: "flex", justifyContent: "space-evenly"}
  return (
    <div className='grid gap-3 grid-cols-4 grid-rows-4' >
        {products.length ? 
            products.map( 
            (product) => <Item key={product.id} {...product} />
            ) : (
                <h2>Cargando...</h2>
            )}
    </div>
  )
}

export default ItemList