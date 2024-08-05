import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Us from './components/Us/Us'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ProductSave from './components/ProductSave/ProductSave'
import { FavProvider } from './context/FavContent'
import { UseNotificationProvider } from './context/UseNotification'
import Notification from './components/Notification/Notification'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <BrowserRouter>
      <UseNotificationProvider>
        <FavProvider>
          <Navbar/>
          <Notification/>
          <Routes>
            <Route path='/' element={<ItemListContainer children={'Listado de productos'} />}/>
            <Route path='/seccion/Nosotros' element={<Us/>} />
            <Route path='/type/:typeId' element={<ItemListContainer/>} />
            <Route path='/detail/:productoId' element={<ItemDetailContainer/>} />
            <Route path='/seccion/Guardados' element={<ProductSave/>} />
          </Routes>
        </FavProvider>
        <Footer/>
      </UseNotificationProvider>
    </BrowserRouter>
  )
}

export default App
