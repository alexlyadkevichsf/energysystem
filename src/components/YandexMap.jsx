import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import './YandexMap.css'

// Фикс иконок маркеров в Vite
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow
})

const cities = [
  { name: 'Минск', coords: [53.90019, 27.56653] },
  { name: 'Смолевичи', coords: [54.0167, 28.0833] },
  { name: 'Жодино', coords: [54.0984, 28.3167] },
  { name: 'Борисов', coords: [54.2144309, 28.508436] },
  { name: 'Логойск', coords: [54.195, 27.8481] },
  { name: 'Червень', coords: [53.705, 28.4319] }
]

function YandexMap() {
  return (
    <MapContainer
      center={[53.90019, 27.56653]}
      zoom={8}
      className="yandex-map"
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {cities.map((city) => (
        <Marker key={city.name} position={city.coords}>
          <Popup><strong>{city.name}</strong></Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

export default YandexMap
