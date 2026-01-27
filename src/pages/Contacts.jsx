import './Contacts.css'

function Contacts() {

  return (
    <div className="page contacts-page">
      <h1>Контакты</h1>
      
      <section className="content-section contacts-section">
        <div className="contacts-grid">
          <div className="contact-info">
            <h2>ИП Кулинкович Максим Николаевич</h2>
            
            <div className="contact-block">
              <h3>Адрес:</h3>
              <p>Минская обл., Смолевичский район<br />
              д. Лужки, ул. Молодежная, 8</p>
            </div>

            <div className="contact-block">
              <h3>Телефон:</h3>
              <p>
                <a href="tel:+375445818994" className="phone-link">+375 (44) 581-89-94</a>
              </p>
            </div>

            <div className="contact-block">
              <h3>Регистрационные данные:</h3>
              <p>
                УНП: 693306123<br />
                Дата регистрации: 19 мая 2025 г.
              </p>
            </div>

            <div className="contact-block">
              <h3>Режим работы:</h3>
              <p>
                Пн-Пт: 9:00 - 18:00<br />
                Сб: 10:00 - 16:00<br />
                Вс: выходной
              </p>
            </div>

            <div className="contact-block">
              <h3>Email:</h3>
              <p>
                <a href="mailto:Kylinkovichmax@mail.ru" className="email-link">Kylinkovichmax@mail.ru</a>
              </p>
            </div>
          </div>

          <div className="certificate-section">
            <h2>Свидетельство о государственной регистрации</h2>
            <div className="certificate-container">
              <img 
                src="/svidetelstro-new.png" 
                alt="Свидетельство о государственной регистрации" 
                className="certificate-image"
              />
            </div>
            <p className="certificate-note">
              Свидетельство о государственной регистрации индивидуального предпринимателя<br />
              в Единый государственный регистр юридических лиц и индивидуальных предпринимателей
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contacts

