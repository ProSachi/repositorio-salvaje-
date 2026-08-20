import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Santiago from './components/Santiago'
import Hero from './components/Hero'
import ResenaModal from './components/ResenaModal'

function App() {

  return (
    <>
      <BrowserRouter>
        <Link to="/hero"> Hero </Link>
        <br />
        <Link to="/santiago"> Santiago </Link>
        <br />
        <Link to="/resenamodal"> Mauricio </Link>
        <br />

        <Routes>
          <Route path="/hero" element={<Hero />} />
          <Route path="/santiago" element={<Santiago />} />
          <Route path="/resenamodal" element={<ResenaModal />} />
        </Routes>
        
      </BrowserRouter>


    </>
  )
}

export default App
