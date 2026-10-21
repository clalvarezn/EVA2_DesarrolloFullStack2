/* Estructura de pruebas siguiendo el ejemplo del profesor: describe agrupa los casos e it define cada prueba individual. */
import React from 'react';
import {render, screen, fireEvent, cleanup} from '@testing-library/react';
import Catalogo from '../componentes/Catalogo';

describe('Catalogo', () => {
  
  // Limpia el DOM después de cada caso, igual que en el ejemplo del profesor.
  afterEach(() => cleanup());
/* Caso de prueba automatizado: verifica un comportamiento concreto del componente. */
  it('muestra el título y el campo de búsqueda', () => {
    render(<Catalogo agregar={() => {}} />);
    expect(screen.getByRole('heading', { name: 'Productos' })).toBeTruthy();
    expect(screen.getByRole('textbox', { name: 'Buscar productos' })).toBeTruthy();
  });
  /* Caso de prueba automatizado: verifica un comportamiento concreto del componente. */
  it('permite escribir una búsqueda', () => {
    render(<Catalogo agregar={() => {}} />);
    const campo = screen.getByRole('textbox', { name: 'Buscar productos' });
    fireEvent.change(campo, { target: { value: 'texto-imposible-de-encontrar-123' } });
    expect(screen.getByText('No se encontraron productos.')).toBeTruthy();
  });
});
