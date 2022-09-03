import React from 'react'
import DbzCard from './DbzCard';

const DbzCardList = ( {chars} ) => {

    console.log('Hola DbzCardList');

  return (
    <>
      {chars.map(c=><DbzCard name={c.name} ></DbzCard>)}

      {/* <DbzCard /> */}
    </>
  )
}

export default DbzCardList