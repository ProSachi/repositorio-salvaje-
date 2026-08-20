import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Santiago from './components/Santiago'
import Hero from './components/Hero'
import Torres from './components/Torres'

function App() {
  return (
    <>
      <BrowserRouter>

        <Link to="/hero">Hero</Link>
        <br />

        <Link to="/santiago">Santiago</Link>
        <br />

        <Link to="/torres">Torres</Link>

        <Routes>
          <Route path="/hero" element={<Hero />} />
          <Route path="/santiago" element={<Santiago />} />
          <Route path="/torres" element={<Torres />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
