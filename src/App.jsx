import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Santiago from './components/Santiago'
import Tarjetas from './components/Tarjetas'
import Hero from './components/Hero'

function App() {

  return (
    <>
      <BrowserRouter>
        <Link to="/hero"> Hero </Link>
        <br />
        <Link to="/santiago"> Santiago </Link>
        <br />
        <Link to="/tarjetas"> Tarjetas </Link>
        <br />


        <Routes>
          <Route path="/hero" element={<Hero />} />
          <Route path="/santiago" element={<Santiago />} />
          <Route path="/tarjetas" element={<Tarjetas />} />
        </Routes>
        
      </BrowserRouter>


    </>
  )
}

export default App
