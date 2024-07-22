import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Us from './components/Us/Us'
import ItemList from './components/ItemList/ItemList'
import ProductSave from './components/ProductSave/ProductSave'
import Item from './components/Item/Item'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/seccion/Nosotros' element={<Us/>} />
        <Route path='/seccion/Productos' element={<ItemList/>} />
        <Route path='/seccion/Guardados' element={<ProductSave/>} />
        <Route path='/detail/:productoId'element={<Item/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
