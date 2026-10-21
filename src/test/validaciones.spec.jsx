/* Estructura de pruebas siguiendo el ejemplo del profesor: describe agrupa los casos e it define cada prueba individual. */
import { validarCorreo, validarRUN } from '../utils/validaciones';

describe('validaciones', () => {
  /* Caso de prueba automatizado: verifica un comportamiento concreto del componente. */
  it('acepta los dominios de correo autorizados', () => {
    expect(validarCorreo('persona@duoc.cl')).toBeTrue();
    expect(validarCorreo('persona@gmail.com')).toBeTrue();
  });
  /* Caso de prueba automatizado: verifica un comportamiento concreto del componente. */
  it('rechaza dominios de correo no autorizados', () => {
    expect(validarCorreo('persona@ejemplo.com')).toBeFalse();
  });
  /* Caso de prueba automatizado: verifica un comportamiento concreto del componente. */
  it('acepta un RUN válido y rechaza uno inválido', () => {
    expect(validarRUN('11111111-1')).toBeTrue();
    expect(validarRUN('11111111-2')).toBeFalse();
  });
});
