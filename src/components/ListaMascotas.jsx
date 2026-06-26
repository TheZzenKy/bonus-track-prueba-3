import PropTypes from 'prop-types'
import MascotaCard from './MascotaCard.jsx'

function ListaMascotas({ mascotas = [] }) {
  return (
    <section>
      {mascotas.map((mascota) => (
        <MascotaCard
          key={mascota.id}
          nombre={mascota.nombre}
          raza={mascota.raza}
          edad={mascota.edad}
          especie={mascota.especie}
          descripcion={mascota.descripcion}
          caracteristicas={mascota.caracteristicas}
          adopcionUrgente={mascota.adopcionUrgente}
        />
      ))}
    </section>
  )
}

ListaMascotas.propTypes = {
  mascotas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      nombre: PropTypes.string,
      raza: PropTypes.string,
      edad: PropTypes.number,
      especie: PropTypes.oneOf(['Perro', 'Gato', 'Otro']),
      descripcion: PropTypes.string,
      caracteristicas: PropTypes.arrayOf(PropTypes.string),
      adopcionUrgente: PropTypes.bool,
    })
  ),
}

export default ListaMascotas