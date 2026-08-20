import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Santiago from './components/Santiago'
import Hero from './components/Hero'

function App() {

  return (
    <>
      <BrowserRouter>
        <Link to="/hero"> Hero </Link>
        <br />
        <Link to="/santiago"> Santiago </Link>
        <link to="/ModoOscuro-AAL"> Alejandro Aristizabal </link>
        <br />


        <Routes>
          <Route path="/hero" element={<Hero />} />
          <Route path="/santiago" element={<Santiago />} />
          <Routen path="/ModoOscuro-AAL" element={<ModoOscuro-AAL />}/>
        </Routes>
        
      </BrowserRouter>


    </>
  )
}

export default App
