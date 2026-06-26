import { useState } from 'react'
import { mascotas } from './data/mascota.js'
import ListaMascotas from './components/ListaMascotas.jsx'
import FiltroEspecie from './components/FiltroEspecie.jsx'

console.log('mascotas cargadas:', mascotas)

function App() {
  const [especieSeleccionada, setEspecieSeleccionada] = useState('Todas')
  const [nombreBusqueda, setNombreBusqueda] = useState('')

  const normalizarTexto = (texto = '') => texto.trim().slice(0, 40)

  const manejarBusqueda = (event) => {
    setNombreBusqueda(normalizarTexto(event.target.value))
  }

  const mascotasFiltradas = mascotas.filter((mascota) => {
    const coincideEspecie =
      especieSeleccionada === 'Todas' || mascota.especie === especieSeleccionada
    const coincideNombre = mascota.nombre
      .toLowerCase()
      .includes(nombreBusqueda.toLowerCase())

    return coincideEspecie && coincideNombre
  })

  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <header style={{ marginBottom: '1.5rem' }}>
        <h1 style={{ margin: 0 }}>AdoptaPet</h1>
        <p style={{ margin: '0.5rem 0 0' }}>
          Lista de mascotas disponible para adopción.
        </p>
      </header>

      <section style={{ display: 'grid', gap: '1rem', marginBottom: '1.5rem' }}>
        <FiltroEspecie
          especieSeleccionada={especieSeleccionada}
          onChange={setEspecieSeleccionada}
        />

        <label style={{ display: 'grid', gap: '0.4rem', maxWidth: '420px' }}>
          <span>Buscar por nombre</span>
          <input
            type="text"
            value={nombreBusqueda}
            onChange={manejarBusqueda}
            maxLength={40}
            placeholder="Escribe un nombre"
            style={{
              border: '1px solid #cbd5e1',
              borderRadius: '12px',
              padding: '0.8rem 1rem',
              fontSize: '1rem',
            }}
          />
        </label>
      </section>

      <ListaMascotas mascotas={mascotasFiltradas} />
    </main>
  )
}

export default App
