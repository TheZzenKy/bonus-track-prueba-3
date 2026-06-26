import { mascotas } from './data/mascota.js'
import ListaMascotas from './components/ListaMascotas.jsx'

console.log('mascotas cargadas:', mascotas)

function App() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <header style={{ marginBottom: '1.5rem' }}>
        <h1 style={{ margin: 0 }}>AdoptaPet</h1>
        <p style={{ margin: '0.5rem 0 0' }}>
          Lista de mascotas disponible para adopción.
        </p>
      </header>

      <ListaMascotas mascotas={mascotas} />
    </main>
  )
}

export default App
