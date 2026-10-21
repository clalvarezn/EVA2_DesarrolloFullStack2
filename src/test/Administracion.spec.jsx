/* Estructura de pruebas siguiendo el ejemplo del profesor: describe agrupa los casos e it define cada prueba individual. */
import React from 'react';
import {render, screen, cleanup} from '@testing-library/react';
import Administracion from '../admin/Administracion';

describe('Administracion', () => {
  
  // Limpia el DOM después de cada caso, igual que en el ejemplo del profesor.
  afterEach(() => cleanup());
afterEach(() => sessionStorage.removeItem('levelupAdminAutenticado'));
  /* Caso de prueba automatizado: verifica un comportamiento concreto del componente. */
  it('muestra el panel si existe una sesión administrativa', () => {
    sessionStorage.setItem('levelupAdminAutenticado', 'true');
    render(<Administracion />);
    expect(screen.getByRole('heading', { name: 'Panel administrativo' })).toBeTruthy();
    expect(screen.getByRole('heading', { name: 'Gestión de productos' })).toBeTruthy();
  });
});
