import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Electromontage from './pages/Electromontage'
import ElectroHeating from './pages/ElectroHeating'
import SmartHome from './pages/SmartHome'
import HeatingWaterSupply from './pages/HeatingWaterSupply'
import Ventilation from './pages/Ventilation'
import EngineeringDesign from './pages/EngineeringDesign'
import Contacts from './pages/Contacts'
import Reviews from './pages/Reviews'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <a href="#main-content" className="skip-link">Перейти к основному содержимому</a>
      <Header />
      <Navigation />
      <main id="main-content" className="main-content" role="main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/electromontage" element={<Electromontage />} />
          <Route path="/electroheating" element={<ElectroHeating />} />
          <Route path="/smarthome" element={<SmartHome />} />
          <Route path="/heating-water" element={<HeatingWaterSupply />} />
          <Route path="/ventilation" element={<Ventilation />} />
          <Route path="/design" element={<EngineeringDesign />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
