/* Estructura de pruebas siguiendo el ejemplo del profesor: describe agrupa los casos e it define cada prueba individual. */
import React from 'react';
import {render, screen, cleanup} from '@testing-library/react';
import DetalleProducto from '../componentes/DetalleProducto';

describe('DetalleProducto', () => {
  
  // Limpia el DOM después de cada caso, igual que en el ejemplo del profesor.
  afterEach(() => cleanup());
/* Caso de prueba automatizado: verifica un comportamiento concreto del componente. */
  it('muestra un detalle de producto con acción de compra', () => {
    render(<DetalleProducto id="1" agregar={() => {}} />);
    expect(screen.getByRole('button', { name: 'Añadir al carrito' })).toBeTruthy();
  });
});
