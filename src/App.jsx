import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Santiago from './components/Santiago'
import Hero from './components/Hero'
import TarjetaVacia from './components/TarjetaVacia/TarjetaVacia'

function App() {

  return (
    <>
      <BrowserRouter>
        <Link to="/hero"> Hero </Link>
        <br />
        <Link to="/santiago"> Santiago </Link>
        <br />
        <Link to="/TarjetaVacia"> Pitorro </Link>
        <br />



        <Routes>
          <Route path="/hero" element={<Hero />} />
          <Route path="/santiago" element={<Santiago />} />
          <Route path="/TarjetaVacia" element={<TarjetaVacia />} />

        </Routes>
        
      </BrowserRouter>


    </>
  )
}

export default App
