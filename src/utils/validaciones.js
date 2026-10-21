/** Explicación general: Funciones auxiliares que validan los dominios de correo permitidos y el dígito verificador del RUN chileno. */
// Comprueba que el correo termine en uno de los dominios autorizados.
// Devuelve true si el correo termina en uno de los dominios autorizados.
export function validarCorreo(correo) {
  return /^[^\s@]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/i.test(correo)
}

// Normaliza el RUN y comprueba que su dígito verificador sea correcto.
// Normaliza el RUN y calcula el dígito verificador con el algoritmo módulo 11.
export function validarRUN(run) {
  // Convierte a mayúsculas y elimina puntos, guiones u otros caracteres no válidos.
  const limpio = run.toUpperCase().replace(/[^0-9K]/g, '')
  if (limpio.length < 7 || limpio.length > 9) return false

  // Separa el cuerpo numérico del RUN de su último carácter verificador.
  const cuerpo = limpio.slice(0, -1)
  let suma = 0
  let multiplicador = 2

  // Recorre los dígitos de derecha a izquierda y multiplica por la secuencia 2 a 7.
  for (let i = cuerpo.length - 1; i >= 0; i--) {
    suma += Number(cuerpo[i]) * multiplicador
    multiplicador = multiplicador === 7 ? 2 : multiplicador + 1
  }

  // Convierte el resto de la suma en el dígito verificador esperado.
  const resultado = 11 - (suma % 11)
  const digitoVerificador = resultado === 11 ? '0' : resultado === 10 ? 'K' : String(resultado)
  // Compara el dígito calculado con el último carácter ingresado.
  return limpio.slice(-1) === digitoVerificador
}
