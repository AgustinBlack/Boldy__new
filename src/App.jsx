import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Notification from './components/Notification/Notification'
import Footer from './components/Footer/Footer'
import Preguntas from './components/Preguntas/Preguntas'
import FormUserSesion from './components/FormUserSesion/FormUserSesion'
import { UseNotificationProvider } from './context/UseNotification'
import { FiltrersProvider } from './context/FiltrersProd'
import { UseLoaderSpinnerProvider } from './context/UseLoaderSpinner'
import AdminView from './components/AdminView/AdminView'
import { AuthProvider } from './context/AuthContext'
import Home from './components/Home/Home'
import Us from './components/Us/Us'

function App() {
  return (
    <BrowserRouter>
      <UseNotificationProvider>
        <FiltrersProvider>
          <AuthProvider>
            <Navbar/>
            <Notification/>
            <UseLoaderSpinnerProvider>
              <Routes>
                <Route path='/seccion/Productos' element={<ItemListContainer children={'Listado de productos'} />}/>
                <Route path='/type/:typeId' element={<ItemListContainer/>} />
                <Route path='/detail/:productoId' element={<ItemDetailContainer/>} />
                <Route path='/' element={<Home/>} />
                <Route path='/seccion/Preguntas' element={<Preguntas/>} />
                <Route path='/seccion/User' element={<FormUserSesion/>}/>
                <Route path='/seccion/gestorProductos' element={<AdminView/>} />
                <Route path='/seccion/Nosotros' element={<Us/>} />
              </Routes>
            </UseLoaderSpinnerProvider>
          </AuthProvider>
        </FiltrersProvider>
        <Footer/>
      </UseNotificationProvider>
    </BrowserRouter>
  )
}

export default App
