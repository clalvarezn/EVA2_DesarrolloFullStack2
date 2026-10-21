/** Explicación general: Pie de página común que se muestra debajo del contenido de las rutas. */
import './Footer.css'
// Define el componente o función que se utilizará en esta parte de la aplicación.
export default function Footer() {
  return (
    <footer className="site-footer footer-component">
      <div className="container">
        <h3>LEVELUP GAMING</h3>
        <p>Hardware, periféricos y cultura gamer en un solo lugar.</p>
        <p>© 2026 LevelUp Gaming - Derechos reservados</p>
      </div>
    </footer>
  )
}
