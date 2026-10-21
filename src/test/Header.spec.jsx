/* Estructura de pruebas siguiendo el ejemplo del profesor: describe agrupa los casos e it define cada prueba individual. */
import React from 'react';
import {render, screen, fireEvent, cleanup} from '@testing-library/react';
import Header from '../componentes/Header';

describe('Header', () => {
  
  // Limpia el DOM después de cada caso, igual que en el ejemplo del profesor.
  afterEach(() => cleanup());
/* Caso de prueba automatizado: verifica un comportamiento concreto del componente. */
  it('muestra enlaces principales y el contador del carrito', () => {
    render(<Header cantidad={3} />);
    expect(screen.getByRole('link', { name: /Productos/ })).toBeTruthy();
    expect(screen.getByText('3')).toBeTruthy();
  });
  /* Caso de prueba automatizado: verifica un comportamiento concreto del componente. */
  it('cambia el estado expandido del menú al pulsar el botón', () => {
    render(<Header cantidad={0} />);
    const boton = screen.getByRole('button', { name: 'Abrir menú' });
    fireEvent.click(boton);
    expect(boton.getAttribute('aria-expanded')).toBe('true');
  });
});
