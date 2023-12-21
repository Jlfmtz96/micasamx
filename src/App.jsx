import { Ciudades } from './components/Ciudades'
import { Contacto } from './components/Contacto'
import { Desarrollos } from './components/Desarrollos'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Nosotros } from './components/Nosotros'
import { Reseñas } from './components/reseñas'
import './index.css'

function App() {
  return (
    <>
      <Header />
      <div className='container mx-auto lg:px-10 lg:mt-10'>
        <Desarrollos />
        <Contacto />
        <Nosotros />
        <Ciudades />
        <Reseñas />
        <Faq />
      </div>
      <Footer />      
    </>
  )
}

export default App
