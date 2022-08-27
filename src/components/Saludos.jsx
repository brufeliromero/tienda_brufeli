import React from 'react'

const Saludos = ({name, lastName, fn}) => {

    if(fn){
        fn()
    }

  return (
    <h1>¡Saludos Components {name} {lastName}!</h1>
  )
}

export default Saludos