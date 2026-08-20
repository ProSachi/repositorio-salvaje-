import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Hero from './components/Hero'
import TarjetaVacia from './components/TarjetaVacia/TarjetaVacia'
import FooterAgd from './components/FooterAgd'
import Carolina from './components/Carolina'
import ReactRoadmap from './components/ReactRoadmap'

function App() {

  return (
    <>
      <BrowserRouter>
        <Link to="/hero"> Hero </Link>
        <br />
        <Link to="/reactroadmap"> Santiago </Link>
        <br />
        <Link to="/carolina">Carolina</Link>
        <br />
        <Link to="/TarjetaVacia"> Pitorro </Link>
        <br />

        <Link to="footeragd"> FooterAgd </Link>


        <Routes>
          <Route path="/hero" element={<Hero />} />
          <Route path="/TarjetaVacia" element={<TarjetaVacia />} />

          <Route path="/footeragd" element={<FooterAgd/>} />
          <Route path="/carolina" element={<Carolina />} />
          <Route path="/reactroadmap" element={<ReactRoadmap />} />
        </Routes>

      </BrowserRouter>


    </>
  )
}

export default App
