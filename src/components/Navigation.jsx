import { useState } from 'react'
import './Navigation.css'

function Navigation({ activeTab, setActiveTab }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'Главная' },
    { id: 'electromontage', label: 'Электромонтаж' },
    { id: 'electroheating', label: 'Электроотопление' },
    { id: 'smarthome', label: 'Умный дом' },
    { id: 'heating-water', label: 'Отопление' },
    { id: 'ventilation', label: 'Вентиляция' },
    { id: 'design', label: 'Проектирование' },
    { id: 'contacts', label: 'Контакты' }
  ]

  const handleNavClick = (itemId) => {
    setActiveTab(itemId)
    setIsMenuOpen(false)
  }

  return (
    <>
      {isMenuOpen && (
        <div 
          className="nav-overlay"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
      <nav className="navigation">
        <div className="nav-container">
          <button 
            className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Открыть меню"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
          <ul className={`nav-list ${isMenuOpen ? 'nav-list-open' : ''}`}>
            {navItems.map(item => (
              <li key={item.id} className="nav-item">
                <button
                  className={`nav-button ${activeTab === item.id ? 'active' : ''}`}
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navigation

