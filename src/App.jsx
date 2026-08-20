import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Santiago from './components/Santiago'
import Hero from './components/Hero'
import Chocorramo from './components/chocorramo' // <--- AGREGA ESTA LÍNEA

function App() {

  return (
    <>
      <BrowserRouter>
        <Link to="/hero"> Hero </Link>
        <br />
        <Link to="/santiago"> Santiago </Link>
        <br />
        <Link to="/chocorramo"> Chocorramo </Link>
        <br />

        <Routes>
          <Route path="/hero" element={<Hero />} />
          <Route path="/santiago" element={<Santiago />} />
          <Route path="/chocorramo" element={<Chocorramo />} />
        </Routes>
        
      </BrowserRouter>
    </>
  )
}

export default App