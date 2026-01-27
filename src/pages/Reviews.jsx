import './Reviews.css'

function Reviews() {
  const mockReviews = [
    {
      id: 1,
      name: 'Александр П.',
      date: '15.12.2024',
      text: 'Отличная работа! Выполнили монтаж электрики в новом доме быстро и качественно. Все аккуратно, все работает. Рекомендую!',
      rating: 5
    },
    {
      id: 2,
      name: 'Мария К.',
      date: '10.12.2024',
      text: 'Устанавливали систему электроотопления. Очень довольна результатом. Экономичное и эффективное решение. Специалисты настоящие профессионалы.',
      rating: 5
    },
    {
      id: 3,
      name: 'Дмитрий В.',
      date: '05.12.2024',
      text: 'Сделали полную автоматизацию дома. Умный дом работает на ура! Можно управлять всем со смартфона. Очень удобно.',
      rating: 5
    },
    {
      id: 4,
      name: 'Елена С.',
      date: '28.11.2024',
      text: 'Ремонтировали систему отопления и водоснабжения. Все сделано в срок, качественно. Гарантия предоставлена.',
      rating: 5
    },
    {
      id: 5,
      name: 'Игорь М.',
      date: '20.11.2024',
      text: 'Проектировали инженерные сети для офисного здания. Проект согласовали без проблем. Очень профессиональный подход.',
      rating: 5
    },
    {
      id: 6,
      name: 'Ольга Н.',
      date: '15.11.2024',
      text: 'Установили систему вентиляции в квартире. Теперь дышится намного легче! Работа выполнена чисто, без лишнего шума.',
      rating: 5
    }
  ]

  return (
    <div className="page reviews-page">
      <h1>Отзывы наших клиентов</h1>
      
      <section className="content-section">
        <p className="reviews-intro">
          Мы ценим доверие наших клиентов и гордимся каждым отзывом. 
          Ваше мнение помогает нам становиться лучше!
        </p>

        <div className="reviews-grid">
          {mockReviews.map(review => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                <div className="review-author">
                  <div className="author-avatar">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="author-name">{review.name}</div>
                    <div className="review-date">{review.date}</div>
                  </div>
                </div>
                <div className="review-rating">
                  {'★'.repeat(review.rating)}
                </div>
              </div>
              <div className="review-text">
                {review.text}
              </div>
            </div>
          ))}
        </div>

        <div className="reviews-note">
          <p>
            <strong>Хотите оставить отзыв?</strong><br />
            Свяжитесь с нами по телефону <a href="tel:+375445818994">+375 (44) 581-89-94</a> 
            или напишите на <a href="mailto:Kylinkovichmax@mail.ru">Kylinkovichmax@mail.ru</a>
          </p>
        </div>
      </section>
    </div>
  )
}

export default Reviews

