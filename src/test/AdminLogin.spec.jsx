/* Estructura de pruebas siguiendo el ejemplo del profesor: describe agrupa los casos e it define cada prueba individual. */
import React from 'react';
import {render, screen, fireEvent, cleanup} from '@testing-library/react';
import AdminLogin from '../admin/AdminLogin';

describe('AdminLogin', () => {
  
  // Limpia el DOM después de cada caso, igual que en el ejemplo del profesor.
  afterEach(() => cleanup());
/* Caso de prueba automatizado: verifica un comportamiento concreto del componente. */
  it('muestra los campos requeridos para ingresar', () => {
    render(<AdminLogin />);
    expect(screen.getByLabelText('Correo')).toBeTruthy();
    expect(screen.getByLabelText('Contraseña')).toBeTruthy();
  });
  /* Caso de prueba automatizado: verifica un comportamiento concreto del componente. */
  it('avisa si las credenciales son incorrectas', () => {
    render(<AdminLogin />);
    fireEvent.change(screen.getByLabelText('Correo'), { target: { value: 'mal@duoc.cl' } });
    fireEvent.change(screen.getByLabelText('Contraseña'), { target: { value: 'incorrecta' } });
    fireEvent.click(screen.getByRole('button', { name: 'Ingresar' }));
    expect(screen.getByRole('alert').textContent).toContain('incorrectos');
  });
});
