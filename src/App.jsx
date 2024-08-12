import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Us from './components/Us/Us'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ProductSave from './components/ProductSave/ProductSave'
import Notification from './components/Notification/Notification'
import Footer from './components/Footer/Footer'
import Preguntas from './components/Preguntas/Preguntas'
import { FavProvider } from './context/FavContent'
import { UseNotificationProvider } from './context/UseNotification'
import { FiltrersProvider } from './context/FiltrersProd'

function App() {
  return (
    <BrowserRouter>
      <UseNotificationProvider>
        <FiltrersProvider>
          <FavProvider>
            <Navbar/>
            <Notification/>
            <Routes>
              <Route path='/' element={<ItemListContainer children={'Listado de productos'} />}/>
              <Route path='/type/:typeId' element={<ItemListContainer/>} />
              <Route path='/detail/:productoId' element={<ItemDetailContainer/>} />
              <Route path='/seccion/Guardados' element={<ProductSave/>} />
              <Route path='/seccion/Nosotros' element={<Us/>} />
              <Route path='/seccion/Preguntas' element={<Preguntas/>} />
            </Routes>
          </FavProvider>
        </FiltrersProvider>
        <Footer/>
      </UseNotificationProvider>
    </BrowserRouter>
  )
}

export default App