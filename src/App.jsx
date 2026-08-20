import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Santiago from './components/Santiago'
import Hero from './components/Hero'
import BotonYouTube from './components/btnYoutube/BotonYouTube'

function App() {

  return (
    <>
      <BrowserRouter>
        <Link to="/hero"> Hero </Link>
        <br />
        <Link to="/santiago"> Santiago </Link>
        <br />
        <Link to="/btnyoutube">No oprimir</Link>

        <Routes>
          <Route path="/hero" element={<Hero />} />
          <Route path="/santiago" element={<Santiago />} />
          <Route path="/btnyoutube" element={<BotonYouTube />} />
        </Routes>
        
      </BrowserRouter>


    </>
  )
}

export default App
