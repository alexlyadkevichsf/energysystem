import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const closeMenu = () => setIsMenuOpen(false)

  const navItems = [
    { path: '/', label: 'Главная' },
    { path: '/electromontage', label: 'Электромонтаж' },
    { path: '/electroheating', label: 'Электроотопление' },
    { path: '/smarthome', label: 'Умный дом' },
    { path: '/heating-water', label: 'Отопление' },
    { path: '/ventilation', label: 'Вентиляция' },
    { path: '/design', label: 'Проектирование' },
    { path: '/reviews', label: 'Отзывы' },
    { path: '/contacts', label: 'Контакты' }
  ]

  return (
    <>
      {isMenuOpen && (
        <div 
          className="nav-overlay"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
      <nav className="navigation">
        <div className="nav-container">
          <button 
            className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Открыть меню"
            aria-expanded={isMenuOpen}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
          <ul className={`nav-list ${isMenuOpen ? 'nav-list-open' : ''}`}>
            {navItems.map(item => (
              <li key={item.path} className="nav-item">
                <NavLink
                  to={item.path}
                  className={({ isActive }) => `nav-button ${isActive ? 'active' : ''}`}
                  onClick={closeMenu}
                  aria-current={location.pathname === item.path ? 'page' : undefined}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navigation
