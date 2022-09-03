// import logo from './logo.svg';
// import './App.css';
import { useEffect, useState } from 'react';
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

  const [counter, setCounter] = useState(1)

  const [products, setProducts] = useState([])

  useEffect( () => {
    console.log('efectos al montaje');

    const getProducts = new Promise( (resolve, reject)=>{
      const rand = Math.random()
      console.log(rand)

      if(rand > 0.1){
        resolve(['mouse', 'teclado', 'monitor', 'cpu'])
      }else{
        reject('Promesa rechazada')
      }
    })

    getProducts
      .then(data => {
        console.log(data)
        setProducts(data)
      })
      .catch(err =>{console.log(err)})
      .finally(()=>{console.log('finally siempre sucede')})

  }, [])

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
    <div>
      <NavBar valorCounter={counter}/>
      <div className='m-5'>
        <h3>Producto Tienda</h3>
        <button onClick={restarProducto} className='btn m-5'>-</button>
        <strong>Contador: {counter}</strong>
        <button onClick={sumarPruducto} className='btn m-5'>+</button>
      </div>
      
      
      <br />
      
        {/* {products.map(p=><div className='bg-slate-300 text-lg my-2 py-2'>{p}</div>)} */}
      
      <main className='container mx-auto px-4'>
        <ItemListContainer greeting={'Lista de Productos'} />

      </main>
    </div>
  );
}

export default App;
