import PropTypes from 'prop-types'

const estilosPorEspecie = {
  Perro: {
    tarjeta: {
      background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)',
      color: '#f9fafb',
      border: '1px solid #60a5fa',
    },
    etiqueta: {
      background: '#60a5fa',
      color: '#0f172a',
    },
  },
  Gato: {
    tarjeta: {
      background: 'linear-gradient(135deg, #312e81 0%, #4c1d95 100%)',
      color: '#f8fafc',
      border: '1px solid #c084fc',
    },
    etiqueta: {
      background: '#c084fc',
      color: '#1e1b4b',
    },
  },
  Otro: {
    tarjeta: {
      background: 'linear-gradient(135deg, #064e3b 0%, #065f46 100%)',
      color: '#ecfdf5',
      border: '1px solid #34d399',
    },
    etiqueta: {
      background: '#34d399',
      color: '#052e16',
    },
  },
}

function MascotaCard({
  nombre = 'Sin nombre',
  raza = 'Sin raza',
  edad = 0,
  especie = 'Otro',
  descripcion = 'Sin descripción disponible.',
  caracteristicas = [],
  adopcionUrgente = false,
}) {
  const estiloBase = estilosPorEspecie[especie] ?? estilosPorEspecie.Otro
  const estiloUrgente = adopcionUrgente
    ? {
        border: '2px solid #ef4444',
        background: 'linear-gradient(135deg, #7f1d1d 0%, #991b1b 100%)',
      }
    : {}

  return (
    <article
      style={{
        ...estiloBase.tarjeta,
        ...estiloUrgente,
        borderRadius: '16px',
        padding: '1.25rem',
        boxShadow: '0 12px 30px rgba(15, 23, 42, 0.18)',
      }}
    >
      <header style={{ marginBottom: '1rem' }}>
        {adopcionUrgente && (
          <span
            style={{
              display: 'inline-block',
              marginBottom: '0.75rem',
              padding: '0.35rem 0.75rem',
              borderRadius: '999px',
              background: '#fecaca',
              color: '#7f1d1d',
              fontSize: '0.8rem',
              fontWeight: 800,
              letterSpacing: '0.04em',
            }}
          >
            URGENTE
          </span>
        )}
        <span
          style={{
            ...estiloBase.etiqueta,
            display: 'inline-block',
            padding: '0.35rem 0.75rem',
            borderRadius: '999px',
            fontSize: '0.85rem',
            fontWeight: 700,
            marginBottom: '0.75rem',
          }}
        >
          {especie}
        </span>
        <h2 style={{ margin: 0, fontSize: '1.5rem' }}>{nombre}</h2>
        <p style={{ margin: '0.35rem 0 0', opacity: 0.9 }}>{raza}</p>
      </header>

      <div style={{ display: 'grid', gap: '0.5rem' }}>
        <p style={{ margin: 0 }}>
          <strong>Edad:</strong> {edad}
        </p>
        <p style={{ margin: 0 }}>
          <strong>Descripción:</strong> {descripcion}
        </p>
        <p style={{ margin: 0 }}>
          <strong>Adopción urgente:</strong> {adopcionUrgente ? 'Sí' : 'No'}
        </p>
      </div>

      <section style={{ marginTop: '1rem' }}>
        <h3 style={{ margin: '0 0 0.5rem' }}>Características</h3>
        <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
          {caracteristicas.map((caracteristica) => (
            <li key={caracteristica}>{caracteristica}</li>
          ))}
        </ul>
      </section>
    </article>
  )
}

MascotaCard.propTypes = {
  nombre: PropTypes.string,
  raza: PropTypes.string,
  edad: PropTypes.number,
  especie: PropTypes.oneOf(['Perro', 'Gato', 'Otro']),
  descripcion: PropTypes.string,
  caracteristicas: PropTypes.arrayOf(PropTypes.string),
  adopcionUrgente: PropTypes.bool,
}

export default MascotaCard