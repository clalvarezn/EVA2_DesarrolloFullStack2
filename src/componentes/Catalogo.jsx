/** Explicación general: Filtra el catálogo por nombre o descripción y delega cada tarjeta visual al componente Producto. */
import './Catalogo.css'
import { useState } from 'react'
import Producto from './Producto'
import { productos } from '../data/productos'

// Define el componente o función que se utilizará en esta parte de la aplicación.
export default function Catalogo({ agregar }) {
  // Guarda el texto que el usuario escribe en el buscador.
  const [busqueda, setBusqueda] = useState('')
  // Crea una lista nueva que contiene solo los productos coincidentes con la búsqueda.
  const lista = productos.filter(producto =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    producto.descripcion.toLowerCase().includes(busqueda.toLowerCase())
  )

  return (
    <main className="container section catalogo-page">
      <p className="eyebrow">ENCUENTRA TU EQUIPO</p><h1>Productos</h1>
      <p className="lead">Hardware y accesorios seleccionados para tu setup.</p>
      <input className="search-input" value={busqueda} onChange={evento => setBusqueda(evento.target.value)} placeholder="Buscar productos..." aria-label="Buscar productos" />
      <div className="product-grid">{lista.map(producto => <Producto key={producto.id} producto={producto} onAgregar={agregar} />)}</div>
      {!lista.length && <p>No se encontraron productos.</p>}
    </main>
  )
}
