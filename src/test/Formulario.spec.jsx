/* Estructura de pruebas siguiendo el ejemplo del profesor: describe agrupa los casos e it define cada prueba individual. */
import React from 'react';
import {render, screen, fireEvent, cleanup} from '@testing-library/react';
import Formulario from '../componentes/Formulario';

describe('Formulario', () => {
  
  // Limpia el DOM después de cada caso, igual que en el ejemplo del profesor.
  afterEach(() => cleanup());
/* Caso de prueba automatizado: verifica un comportamiento concreto del componente. */
  it('presenta los campos del inicio de sesión', () => {
    render(<Formulario tipo="login" />);
    expect(screen.getByRole('heading', { name: 'Iniciar sesión' })).toBeTruthy();
    expect(screen.getByPlaceholderText('usuario@gmail.com')).toBeTruthy();
  });
  /* Caso de prueba automatizado: verifica un comportamiento concreto del componente. */
  it('rechaza un correo con dominio no permitido', () => {
    render(<Formulario tipo="login" />);
    fireEvent.change(screen.getByPlaceholderText('usuario@gmail.com'), { target: { value: 'persona@ejemplo.com' } });
    fireEvent.change(screen.getByLabelText('Contraseña'), { target: { value: 'clave123' } });
    fireEvent.click(screen.getByRole('button', { name: 'Ingresar' }));
    expect(screen.getByText(/Correo no permitido/)).toBeTruthy();
  });
  /* Caso de prueba automatizado: verifica un comportamiento concreto del componente. */
  it('muestra los campos adicionales en registro', () => {
    render(<Formulario tipo="registro" />);
    expect(screen.getByRole('heading', { name: 'Crear cuenta' })).toBeTruthy();
    expect(screen.getByLabelText('RUN')).toBeTruthy();
  });
});
