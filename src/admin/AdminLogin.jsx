/** Explicación general: Formulario de acceso de demostración al área administrativa; las credenciales son solo académicas y no equivalen a seguridad de servidor. */
import './AdminLogin.css'
import { useState } from 'react'
import './admin.css'

// Acceso de demostración para el proyecto académico; no sustituye autenticación de servidor.
// Credenciales de demostración solicitadas por el ejemplo académico; no usar en producción.
const CORREO_ADMIN = 'admin@duoc.cl'
const CLAVE_ADMIN = 'Admin1234'

// Pantalla de acceso al área administrativa.
export default function AdminLogin() {
  // Declara estado o lógica reactiva para controlar lo que muestra la interfaz.
  const [mensaje, setMensaje] = useState('')
  // Comprueba las credenciales al enviar el formulario.
  function ingresar(e) {
    e.preventDefault()
    // Lee correo y contraseña desde los campos identificados por name.
    const datos = new FormData(e.currentTarget)
    const correo = String(datos.get('correo') || '').trim().toLowerCase()
    const clave = String(datos.get('password') || '')
    // Si coinciden, guarda una marca de sesión y navega al panel administrativo.
    if (correo === CORREO_ADMIN && clave === CLAVE_ADMIN) {
      sessionStorage.setItem('levelupAdminAutenticado', 'true')
      window.location.href = '/admin/dashboard'
    } else {
      // Si no coinciden, muestra un mensaje de error sin recargar la página.
      setMensaje('Correo o contraseña incorrectos. Revisa las credenciales de demostración.')
    }
  }
  return <main className="admin-login-page"><form className="admin-login-card" onSubmit={ingresar}>
    <h1>Iniciar sesión</h1>
    <label htmlFor="admin-correo">Correo</label><input id="admin-correo" name="correo" type="email" autoComplete="username" required />
    <label htmlFor="admin-password">Contraseña</label><input id="admin-password" name="password" type="password" autoComplete="current-password" required />
    <button className="admin-primary-btn" type="submit">Ingresar</button>
    {mensaje && <p className="admin-login-error" role="alert">{mensaje}</p>}
  </form></main>
}
