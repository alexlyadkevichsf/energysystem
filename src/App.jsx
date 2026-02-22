import { useState } from 'react'
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
  const [activeTab, setActiveTab] = useState('home')

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home setActiveTab={setActiveTab} />
      case 'electromontage':
        return <Electromontage />
      case 'electroheating':
        return <ElectroHeating />
      case 'smarthome':
        return <SmartHome />
      case 'heating-water':
        return <HeatingWaterSupply />
      case 'ventilation':
        return <Ventilation />
      case 'design':
        return <EngineeringDesign />
      case 'contacts':
        return <Contacts />
      default:
        return <Home />
    }
  }

  return (
    <div className="app">
      <a href="#main-content" className="skip-link">Перейти к основному содержимому</a>
      <Header setActiveTab={setActiveTab} />
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <main id="main-content" className="main-content" role="main" tabIndex={-1}>
        {renderContent()}
      </main>
      <Footer />
    </div>
  )
}

export default App

