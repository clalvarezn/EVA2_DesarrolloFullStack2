/** Explicación general: Tarjeta reutilizable que muestra imagen, descripción, precio y acciones de cada producto. */
// Importa los estilos que pertenecen únicamente a la tarjeta de producto.
import './Producto.css'
// Reutiliza la función que formatea los precios como pesos chilenos.
import { formatoPrecio } from '../data/productos'

// Recibe el objeto producto y la función onAgregar mediante props.
export default function Producto({ producto, onAgregar }) {
  // article agrupa semánticamente la información de una tarjeta de producto.
  return <article className="producto-card">
    <img src={producto.imagen} alt={producto.nombre} loading="lazy" onError={e => { e.currentTarget.style.display = 'none' }} />
    <div className="producto-info"><p className="eyebrow">HARDWARE GAMER</p><h3>{producto.nombre}</h3><p>{producto.descripcion}</p><strong>{formatoPrecio(producto.precio)}</strong>
    <div className="producto-actions"><a className="btn-small btn-outline" href={`/producto/${producto.id}`}>Ver producto</a><button className="btn-small" onClick={() => onAgregar(producto)}>Añadir al carrito</button></div></div>
  </article>
}
