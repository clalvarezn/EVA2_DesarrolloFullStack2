/* Estructura de pruebas siguiendo el ejemplo del profesor: describe agrupa los casos e it define cada prueba individual. */
import React from 'react';
import {render, screen, cleanup} from '@testing-library/react';
import Carrito from '../componentes/Carrito';
import { agregarProducto, eliminarProducto, modificarCantidadProducto, vaciarCarrito } from '../utils/carrito';

describe('Carrito', () => {
  
  // Limpia el DOM después de cada caso, igual que en el ejemplo del profesor.
  afterEach(() => cleanup());
/* Caso de prueba automatizado: verifica un comportamiento concreto del componente. */
  it('muestra un mensaje cuando está vacío', () => {
    render(<Carrito carrito={[]} setCarrito={() => {}} />);
    expect(screen.getByText('Tu carrito está vacío')).toBeTruthy();
  });
  /* Caso de prueba automatizado: verifica un comportamiento concreto del componente. */
  it('muestra los productos agregados', () => {
    const item = { id: 1, nombre: 'Mouse prueba', precio: 5000, cantidad: 2 };
    render(<Carrito carrito={[item]} setCarrito={() => {}} />);
    expect(screen.getByRole('heading', { name: 'Mouse prueba' })).toBeTruthy();
    expect(screen.getByText('2')).toBeTruthy();
  });

  it('agrega productos nuevos y aumenta la cantidad de productos existentes', () => {
    const item = { id: 1, nombre: 'Mouse prueba', precio: 5000 };
    expect(agregarProducto([], item)).toEqual([{ ...item, cantidad: 1 }]);
    expect(agregarProducto([{ ...item, cantidad: 1 }], item)).toEqual([{ ...item, cantidad: 2 }]);
  });

  it('modifica la cantidad y elimina el producto cuando llega a cero', () => {
    const carrito = [{ id: 1, cantidad: 2 }, { id: 2, cantidad: 1 }];
    expect(modificarCantidadProducto(carrito, 1, 3)).toEqual([{ id: 1, cantidad: 3 }, { id: 2, cantidad: 1 }]);
    expect(modificarCantidadProducto(carrito, 1, 0)).toEqual([{ id: 2, cantidad: 1 }]);
  });

  it('elimina un producto y puede vaciar el carrito', () => {
    const carrito = [{ id: 1 }, { id: 2 }];
    expect(eliminarProducto(carrito, 1)).toEqual([{ id: 2 }]);
    expect(vaciarCarrito()).toEqual([]);
  });
});
