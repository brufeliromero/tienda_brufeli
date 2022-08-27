// import logo from './logo.svg';
// import './App.css';
import { useState } from 'react';
import Cards from './components/Cards';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import Saludos from './components/Saludos';

function App() {

  const mensaje = 'Bienvenido a mi app'

  const nameTienda = 'Tienda Virtual Brufeli Romero L.'
  

  const estilo = {
    backgroundColor: '#888',
    padding: '20px'
  }

  const log = () => { console.log('Hola'); }
  const log2 = () => { console.log('Hi'); }

  const [counter, setCounter] = useState(0)

  const sumarPruducto = () =>{
    console.log('hiciste click')
    setCounter(counter + 1)
  }

  const restarProducto = () =>{
    // console.log('hiciste click')
    if(counter != 0){
      setCounter(counter - 1)
    }
  }



  return (
    <div>
      <NavBar valorCounter={counter}/>
      <div className='m-5'>
        <strong>Contador: {counter}</strong>
      </div>
      <button onClick={sumarPruducto} className='btn my-5'>Agregar</button>
      <button onClick={restarProducto} className='btn my-5'>Retirar</button>
      <main className='container mx-auto px-4'>
        <ItemListContainer greeting={'Lista de Productos'} />
      </main>
    </div>
  );
}

export default App;
