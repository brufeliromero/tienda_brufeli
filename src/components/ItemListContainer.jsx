import React from 'react'
import ItemList from './ItemList'
import { useState, useEffect } from 'react'
import productsJson from "../products.json"


const ItemListContainer = ({greeting}) => {

  const [product, setProduct] = useState([])

    const getProducts =  (data, time) => new Promise( (resolve, reject) => {
        setTimeout(() => {
            if(data){
                resolve(data)
            }else{
                reject('Error')
            }

        }, time);
    })

    useEffect(() => {
      getProducts(productsJson, 3000).then( (res) => {
        setProduct(res)
      }).catch( (err) => {
        console.log(err, ': No hay productos');
      }) 
    }, [])

  return (
    <>
      <div className='text-xl'>{greeting}</div>
      <div className=''>
        <ItemList products={product}  />
      </div>
    </>
  )
}

export default ItemListContainer