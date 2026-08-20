import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Santiago from './components/Santiago'
import Hero from './components/Hero'
import ModoOscuro from './components/ModoOscuro-AAL'

function App() {

  return (
    <>
      <BrowserRouter>
        <Link to="/hero"> Hero </Link>
        <br />
        <Link to="/santiago"> Santiago </Link>
        <br />
        <Link to="/ModoOscuro-AAL"> Alejandro Aristizabal </Link>
        <br />



        <Routes>
          <Route path="/hero" element={<Hero />} />
          <Route path="/santiago" element={<Santiago />} />
          <Route path="/ModoOscuro-AAL" element={<ModoOscuro />}/>
        </Routes>
        
      </BrowserRouter>


    </>
  )
}

export default App
