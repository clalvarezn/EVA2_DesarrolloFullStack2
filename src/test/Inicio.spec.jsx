/* Estructura de pruebas siguiendo el ejemplo del profesor: describe agrupa los casos e it define cada prueba individual. */
import React from 'react';
import {render, screen, fireEvent, cleanup} from '@testing-library/react';
import Inicio from '../componentes/Inicio';

describe('Inicio', () => {
  
  // Limpia el DOM después de cada caso, igual que en el ejemplo del profesor.
  afterEach(() => cleanup());
/* Caso de prueba automatizado: verifica un comportamiento concreto del componente. */
  it('muestra el carrusel de promociones', () => {
    render(<Inicio agregar={() => {}} />);
    expect(screen.getByRole('region', { name: 'Promociones destacadas' })).toBeTruthy();
    expect(screen.getByRole('button', { name: 'Imagen siguiente' })).toBeTruthy();
  });
  /* Caso de prueba automatizado: verifica un comportamiento concreto del componente. */
  it('permite avanzar a la siguiente imagen', () => {
    render(<Inicio agregar={() => {}} />);
    fireEvent.click(screen.getByRole('button', { name: 'Imagen siguiente' }));
    expect(screen.getByRole('button', { name: 'Mostrar imagen 2' }).getAttribute('aria-current')).toBe('true');
  });
});
