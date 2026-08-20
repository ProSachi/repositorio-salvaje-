import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Hero from './components/Hero'
import Jonatan from './components/jonatan'

import Aura from './components/Aura'
import Juan from './components/juan'
import Gojo from './components/gojo'
import VillaButton from './components/VillaButton'
import ModoOscuro from './components/ModoOscuro-AAL'
import BotonYouTube from './components/btnYoutube/BotonYouTube'
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
        <Link to="/ModoOscuro-AAL"> Alejandro Aristizabal </Link>
        <br />
        <Link to="/gojo"> Gojo </Link>
        <br />
        <Link to="/chocorramo"> Chocorramo </Link>
        <br />
        <Link to="/jonatan"> Jonatan </Link>
        <Link to="/Aura"> Aura </Link>

        <Link to="/juan"> Juan </Link>
        
        <VillaButton />

        <Link to="/btnyoutube">No oprimir</Link>

        <Link to="footeragd"> FooterAgd </Link>


        <Routes>
          <Route path="/hero" element={<Hero />} />
          <Route path="/santiago" element={<Santiago />} />
          <Route path="/jonatan" element={<Jonatan />} />
          <Route path="/chocorramo" element={<Chocorramo />} />
          <Route path="/Aura" element={<Aura />} />

          <Route path="/juan" element={<Juan />} />
          <Route path="/gojo" element={<Gojo />} />

          
          <Route path="/ModoOscuro-AAL" element={<ModoOscuro />}/>
          <Route path="/btnyoutube" element={<BotonYouTube />} />
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