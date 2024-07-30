import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Us from './components/Us/Us'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ProductSave from './components/ProductSave/ProductSave'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer children={'Listado de productos'} />}/>
        <Route path='/seccion/Nosotros' element={<Us/>} />
        <Route path='/type/:typeId' element={<ItemListContainer/>} />
        <Route path='/detail/:productoId' element={<ItemDetailContainer/>} />
        <Route path='/seccion/Guardados' element={<ProductSave/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
