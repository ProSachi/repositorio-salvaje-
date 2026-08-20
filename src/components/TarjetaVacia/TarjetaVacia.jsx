import './TarjetaVacia.css'

function TarjetaVacia() {
  return (
    <article className="tarjeta-producto tarjeta-vacia">
      <div className="tarjeta-vacia-imagen" />
      <div className="tarjeta-producto-info">
        <span className="tarjeta-vacia-linea corta" />
        <span className="tarjeta-vacia-linea" />
        <span className="tarjeta-vacia-linea" />
        <span className="tarjeta-vacia-linea media" />
      </div>
    </article>
  )
}

export default TarjetaVacia
