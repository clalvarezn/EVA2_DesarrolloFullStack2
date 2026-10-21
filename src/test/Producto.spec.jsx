/* Estructura de pruebas siguiendo el ejemplo del profesor: describe agrupa los casos e it define cada prueba individual. */
import React from 'react';
import {render, screen, fireEvent, cleanup} from '@testing-library/react';
import Producto from '../componentes/Producto';

describe('Producto', () => {
  
  // Limpia el DOM después de cada caso, igual que en el ejemplo del profesor.
  afterEach(() => cleanup());
const producto = { id: 1, nombre: 'Producto de prueba', descripcion: 'Descripción de prueba', precio: 10000, imagen: '/imagen.jpg' };
  /* Caso de prueba automatizado: verifica un comportamiento concreto del componente. */
  it('muestra nombre, descripción y acciones', () => {
    render(<Producto producto={producto} onAgregar={() => {}} />);
    expect(screen.getByRole('heading', { name: 'Producto de prueba' })).toBeTruthy();
    expect(screen.getByText('Descripción de prueba')).toBeTruthy();
    expect(screen.getByRole('link', { name: 'Ver producto' })).toBeTruthy();
  });
  /* Caso de prueba automatizado: verifica un comportamiento concreto del componente. */
  it('llama a onAgregar cuando se presiona añadir al carrito', () => {
    const agregar = jasmine.createSpy('agregar');
    render(<Producto producto={producto} onAgregar={agregar} />);
    fireEvent.click(screen.getByRole('button', { name: 'Añadir al carrito' }));
    expect(agregar).toHaveBeenCalledWith(producto);
  });
});
