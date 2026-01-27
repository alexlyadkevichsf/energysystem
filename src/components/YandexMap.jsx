import { useEffect, useRef } from 'react'
import './YandexMap.css'

const cities = [
  { name: 'Минск', coords: [53.90019, 27.56653] },
  { name: 'Смолевичи', coords: [54.0167, 28.0833] },
  { name: 'Жодино', coords: [54.0984, 28.3167] },
  { name: 'Борисов', coords: [54.2144309, 28.508436] },
  { name: 'Логойск', coords: [54.195, 27.8481] },
  { name: 'Червень', coords: [53.705, 28.4319] }
]

function YandexMap() {
  const mapRef = useRef(null)
  const mapInstance = useRef(null)

  useEffect(() => {
    // Загружаем Яндекс.Карты API
    const loadYandexMaps = () => {
      return new Promise((resolve) => {
        if (window.ymaps) {
          resolve(window.ymaps)
          return
        }

        const script = document.createElement('script')
        script.src = 'https://api-maps.yandex.ru/2.1/?apikey=4205ce1b-0fc8-4099-b7f9-6c30fa8ca26b&lang=ru_RU'
        script.async = true
        script.onload = () => {
          window.ymaps.ready(() => resolve(window.ymaps))
        }
        document.head.appendChild(script)
      })
    }

    loadYandexMaps().then((ymaps) => {
      if (mapInstance.current || !mapRef.current) return

      // Создаём карту
      mapInstance.current = new ymaps.Map(mapRef.current, {
        center: [53.90019, 27.56653],
        zoom: 8,
        controls: ['zoomControl', 'fullscreenControl']
      })

      // Добавляем метки городов
      cities.forEach((city) => {
        const placemark = new ymaps.Placemark(
          city.coords,
          {
            balloonContent: `<strong>${city.name}</strong>`
          },
          {
            preset: 'islands#redDotIcon'
          }
        )
        mapInstance.current.geoObjects.add(placemark)
      })
    })

    return () => {
      if (mapInstance.current) {
        mapInstance.current.destroy()
        mapInstance.current = null
      }
    }
  }, [])

  return <div ref={mapRef} className="yandex-map" />
}

export default YandexMap
