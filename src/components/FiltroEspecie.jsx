import PropTypes from 'prop-types'

const opciones = ['Todas', 'Perro', 'Gato', 'Otro']

function FiltroEspecie({ especieSeleccionada = 'Todas', onChange = () => {} }) {
  return (
    <nav aria-label="Filtro por especie" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      {opciones.map((opcion) => (
        <button
          key={opcion}
          type="button"
          onClick={() => onChange(opcion)}
          aria-pressed={especieSeleccionada === opcion}
          style={{
            border: '1px solid #cbd5e1',
            borderRadius: '999px',
            padding: '0.6rem 1rem',
            background: especieSeleccionada === opcion ? '#0f172a' : '#ffffff',
            color: especieSeleccionada === opcion ? '#ffffff' : '#0f172a',
            cursor: 'pointer',
            fontWeight: 600,
          }}
        >
          {opcion}
        </button>
      ))}
    </nav>
  )
}

FiltroEspecie.propTypes = {
  especieSeleccionada: PropTypes.oneOf(['Todas', 'Perro', 'Gato', 'Otro']),
  onChange: PropTypes.func,
}

export default FiltroEspecie