/** Explicación general Formulario reutilizable para iniciar sesión, registrar una cuenta o enviar un mensaje; valida los datos antes de mostrar confirmación. */
import './Formulario.css'
import { useState } from 'react'
import { validarCorreo, validarRUN } from '../utils/validaciones'

// Relaciona el tipo de formulario con el título visible.
const titulos = { login: 'Iniciar sesión', registro: 'Crear cuenta', contacto: 'Contacto' }

// Un mismo componente sirve para login, registro y contacto según la prop tipo.
export default function Formulario({ tipo }) {
  // Guarda el mensaje de validación que se mostrará al usuario.
  const [mensaje, setMensaje] = useState('')
  // Indica si el último envío fue válido para aplicar estilos de éxito o error.
  const [correcto, setCorrecto] = useState(false)

  // Se ejecuta al enviar el formulario y evita que el navegador recargue la página.
  function enviar(evento) {
    evento.preventDefault()
    // FormData lee los campos del formulario a partir de sus atributos name.
    const formulario = new FormData(evento.currentTarget)
    const correo = formulario.get('correo') || ''

    // Rechaza correos cuyo dominio no esté dentro de los permitidos.
    if (!validarCorreo(correo)) {
      setMensaje('Correo no permitido. Usa @duoc.cl, @profesor.duoc.cl o @gmail.com.')
      setCorrecto(false)
      return
    }
    // Solo el registro requiere validar el RUN chileno.
    if (tipo === 'registro' && !validarRUN(formulario.get('run') || '')) {
      setMensaje('El RUN ingresado no es válido.')
      setCorrecto(false)
      return
    }
    // El formulario de contacto exige que el comentario no esté vacío.
    if (tipo === 'contacto' && !String(formulario.get('comentario') || '').trim()) {
      setMensaje('Ingresa un comentario.')
      setCorrecto(false)
      return
    }

    // Muestra un mensaje diferente según el tipo de formulario enviado.
    setMensaje(tipo === 'contacto' ? 'Mensaje validado correctamente.' : tipo === 'registro' ? 'Registro validado correctamente.' : 'Inicio de sesión validado correctamente.')
    setCorrecto(true)
    if (tipo === 'login' && new URLSearchParams(window.location.search).get('redirect') === 'admin') window.location.href = '/admin'
  }

  return (
    <main className="container form-section formulario-page">
      {/* El evento onSubmit ejecuta la función enviar antes de recargar la página. */}
      <form className="form-card" onSubmit={enviar}>
        <p className="eyebrow">LEVELUP GAMING</p><h1>{titulos[tipo]}</h1>
        {/* Renderizado condicional: estos campos solo existen en el registro. */}
        {tipo === 'registro' && <><label>Nombre<input name="nombre" required maxLength="50" /></label><label>Apellidos<input name="apellidos" required maxLength="100" /></label><label>RUN<input name="run" required minLength="7" maxLength="9" placeholder="19011022K" /></label></>}
        <label>Correo<input name="correo" type="email" required maxLength="100" placeholder="usuario@gmail.com" /></label>
        {/* El contacto no solicita contraseña; login y registro sí. */}
        {tipo !== 'contacto' && <label>Contraseña<input name="password" type="password" required minLength="4" maxLength="10" /></label>}
        {tipo === 'registro' && <label>Dirección<input name="direccion" required maxLength="300" /></label>}
        {tipo === 'contacto' && <><label>Nombre<input name="nombre" required maxLength="100" /></label><label>Comentario<textarea name="comentario" required maxLength="500" rows="5" /></label></>}
        <button className="btn" type="submit">{tipo === 'registro' ? 'Registrarme' : tipo === 'contacto' ? 'Enviar mensaje' : 'Ingresar'}</button>
        {/* El mensaje aparece solo después de intentar enviar el formulario. */}
        {mensaje && <p className={correcto ? 'form-message success' : 'form-message error'} role="status">{mensaje}</p>}
        {tipo === 'login' && <p className="form-note">¿No tienes cuenta? <a href="/registro">Regístrate</a></p>}
      </form>
    </main>
  )
}
