import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Us from './components/Us/Us'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Notification from './components/Notification/Notification'
import Footer from './components/Footer/Footer'
import Preguntas from './components/Preguntas/Preguntas'
import { UseNotificationProvider } from './context/UseNotification'
import { FiltrersProvider } from './context/FiltrersProd'
import FormUserSesion from './components/FormUserSesion/FormUserSesion'

function App() {
  return (
    <BrowserRouter>
      <UseNotificationProvider>
        <FiltrersProvider>
          <Navbar/>
          <Notification/>
          <Routes>
            <Route path='/seccion/Productos' element={<ItemListContainer children={'Listado de productos'} />}/>
            <Route path='/type/:typeId' element={<ItemListContainer/>} />
            <Route path='/detail/:productoId' element={<ItemDetailContainer/>} />
            <Route path='/' element={<Us/>} />
            <Route path='/seccion/Preguntas' element={<Preguntas/>} />
            <Route path='/seccion/User' element={<FormUserSesion/>}/>
          </Routes>
        </FiltrersProvider>
        <Footer/>
      </UseNotificationProvider>
    </BrowserRouter>
  )
}

export default App
