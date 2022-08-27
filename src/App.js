// import logo from './logo.svg';
// import './App.css';
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

  return (
    <div>
      <NavBar/>
      <main className='container mx-auto px-4'>
        <ItemListContainer greeting={'Lista de Productos'} />
      </main>
    </div>
  );
}

export default App;
