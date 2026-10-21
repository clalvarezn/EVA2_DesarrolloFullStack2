/** Explicación general: Muestra un artículo individual buscando su identificador en los datos exportados por Blogs.jsx. */
import './Articulo.css'
import { articulos } from './Blogs'

// Define el componente o función que se utilizará en esta parte de la aplicación.
export default function Articulo({ id }) {
  const articulo = articulos.find(item => item.id === Number(id))
  return (
    <main className="container section articulo-page"><a href="/blogs">← Volver a blogs</a>
      {articulo ? <article className="article"><p className="eyebrow">BLOG LEVELUP</p><h1>{articulo.titulo}</h1><p>{articulo.texto}</p></article> : <p>Artículo no encontrado.</p>}
    </main>
  )
}
