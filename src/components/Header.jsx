import './Header.css'

function Header({ setActiveTab }) {
  const handleLogoClick = () => {
    if (setActiveTab) {
      setActiveTab('home')
    }
  }

  return (
    <header className="header">
      <div className="header-top-bar">
        <div className="header-top-container">
          <div className="header-top-content">
            <div className="logo-top">
              <h1 
                onClick={handleLogoClick}
                style={{ cursor: 'pointer' }}
              >
                EnergySystem
              </h1>
              <p className="tagline">Профессиональные инженерные решения</p>
            </div>
            <div className="header-right-section">
              <div className="header-phones-and-social">
                <div className="header-phones">
                  <a href="tel:+375445818994" className="phone-link">+375 (44) 581-89-94</a>
                </div>
                <div className="social-icons-header">
                  <a 
                    href="https://www.instagram.com/_electro_alex" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-icon-link-header social-icon-link-instagram"
                    aria-label="Instagram"
                  >
                    <img src="/instagram.png" alt="Instagram" className="social-icon-header social-icon-instagram" />
                  </a>
                  <a 
                    href="https://t.me/EnergySystemMinsk_bot" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-icon-link-header"
                    aria-label="Telegram"
                  >
                    <img src="/telegram.png" alt="Telegram" className="social-icon-header" />
                  </a>
                  <a 
                    href="viber://chat?number=375445818994" 
                    className="social-icon-link-header"
                    aria-label="Viber"
                  >
                    <img src="/viber.png" alt="Viber" className="social-icon-header" />
                  </a>
                </div>
              </div>
              <p className="header-promo">По промокоду EnergySystem2026 скидка 10% на монтажные работы</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

