import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Santiago from './components/Santiago'
import Hero from './components/Hero'
import Salchibro from './components/salchibro'

function App() {
  return (
    <>
      <BrowserRouter>
        <Link to="/hero">Hero</Link>
        <br />
        <Link to="/santiago">Santiago</Link>
        <br />
        <Link to="/salchibro">Salchibro</Link>
        <br />

        <Routes>
          <Route path="/hero" element={<Hero />} />
          <Route path="/santiago" element={<Santiago />} />
          <Route path="/salchibro" element={<Salchibro />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
