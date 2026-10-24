/** Explicación general: Muestra los productos agregados, permite modificar cantidades y calcula el total de la compra. */
import './Carrito.css'
import { formatoPrecio } from '../data/productos'
import { eliminarProducto, modificarCantidadProducto, vaciarCarrito as crearCarritoVacio } from '../utils/carrito'

// Define el componente o función que se utilizará en esta parte de la aplicación.
export default function Carrito({ carrito, setCarrito }) {
  const cambiarCantidad = (id, cantidad) => setCarrito(actual => modificarCantidadProducto(actual, id, cantidad))
  const eliminar = id => setCarrito(actual => eliminarProducto(actual, id))
  // Suma precio por cantidad para calcular el importe total del carrito.
  const total = carrito.reduce((suma, producto) => suma + producto.precio * producto.cantidad, 0)

  // Define el componente o función que se utilizará en esta parte de la aplicación.
  function vaciarCarrito() {
    if (window.confirm('¿Vaciar el carrito?')) setCarrito(crearCarritoVacio())
  }

  return (
    <main className="container section carrito-page">
      <p className="eyebrow">TU COMPRA</p>
      <h1>🛒 Carrito de compras</h1>
      {!carrito.length ? (
        <div className="empty-state">
          <h2>Tu carrito está vacío</h2>
          <p>Agrega productos para comenzar tu compra.</p>
          <a className="btn" href="/productos">Ver productos</a>
        </div>
      ) : (
        <>
          <div className="cart-list">{carrito.map(producto => (
            <article className="cart-item" key={producto.id}>
              <div>
                <h3>{producto.nombre}</h3>
                <p>{formatoPrecio(producto.precio)} por unidad</p>
              </div>
              <div className="quantity">
                <button onClick={() => cambiarCantidad(producto.id, producto.cantidad - 1)} aria-label="Restar">−</button>
                <span>{producto.cantidad}</span>
                <button onClick={() => cambiarCantidad(producto.id, producto.cantidad + 1)} aria-label="Sumar">+</button>
              </div>
              <strong>{formatoPrecio(producto.precio * producto.cantidad)}</strong>
              <button className="remove-btn" onClick={() => eliminar(producto.id)}>Eliminar</button>
            </article>
          ))}</div>
          <div className="cart-summary">
            <h2>Total: {formatoPrecio(total)}</h2>
            <button className="btn" onClick={() => window.alert('La pasarela de pago no está conectada en esta versión académica.')}>💳 Continuar al pago</button>
            <button className="btn btn-secondary" onClick={vaciarCarrito}>Vaciar carrito</button>
          </div>
        </>
      )}
    </main>
  )
}
