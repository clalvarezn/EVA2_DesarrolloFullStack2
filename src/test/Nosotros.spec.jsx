/* Estructura de pruebas siguiendo el ejemplo del profesor: describe agrupa los casos e it define cada prueba individual. */
import React from 'react';
import {render, screen, cleanup} from '@testing-library/react';
import Nosotros from '../componentes/Nosotros';

describe('Nosotros', () => {
  
  // Limpia el DOM después de cada caso, igual que en el ejemplo del profesor.
  afterEach(() => cleanup());
/* Caso de prueba automatizado: verifica un comportamiento concreto del componente. */
  it('muestra la información de la tienda', () => {
    render(<Nosotros />);
    expect(screen.getByRole('heading', { name: 'Nosotros' })).toBeTruthy();
    expect(screen.getByRole('heading', { name: '¿Quiénes somos?' })).toBeTruthy();
  });
});
