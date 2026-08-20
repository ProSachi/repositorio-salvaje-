import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Hero from './components/Hero'
import JuanZapata from './components/JuanZapata/JuanZapata'

function App() {

  return (
    <>
      <BrowserRouter>
        <Link to="/hero"> Hero </Link>
        <br />
        <Link to="/santiago"> Santiago </Link>
        <br />
        <Link to='/JuanZapata'>Juan Zapata</Link>

        <Routes>
          <Route path="/hero" element={<Hero />} />git 
          <Route path="/JuanZapata" element={<JuanZapata />} />
        </Routes>
        
      </BrowserRouter>


    </>
  )
}

export default App
