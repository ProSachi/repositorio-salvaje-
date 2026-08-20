import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Santiago from './components/Santiago'
import Hero from './components/Hero'
import jonatan from './components/jonatan'

function App() {

  return (
    <>
      <BrowserRouter>
        <Link to="/hero"> Hero </Link>
        <br />
        <Link to="/santiago"> Santiago </Link>
        <br />
        <Link to="/jonatan"> Jonatan </Link>


        <Routes>
          <Route path="/hero" element={<Hero />} />
          <Route path="/santiago" element={<Santiago />} />
          <Route path="/jonatan" element={<jonatan />} />
        </Routes>
        
      </BrowserRouter>


    </>
  )
}

export default App
