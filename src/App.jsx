import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Hero from './components/Hero'
import ReactRoadmap from './components/ReactRoadmap'

function App() {

  return (
    <>
      <BrowserRouter>
        <Link to="/hero"> Hero </Link>
        <br />
        <Link to="/reactroadmap"> Santiago </Link>
        <br />


        <Routes>
          <Route path="/hero" element={<Hero />} />
          <Route path="/reactroadmap" element={<ReactRoadmap />} />
        </Routes>

      </BrowserRouter>


    </>
  )
}

export default App
