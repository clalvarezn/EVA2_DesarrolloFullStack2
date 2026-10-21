/* Estructura de pruebas siguiendo el ejemplo del profesor: describe agrupa los casos e it define cada prueba individual. */
import React from 'react';
import {render, screen, cleanup} from '@testing-library/react';
import Footer from '../componentes/Footer';

describe('Footer', () => {
  
  // Limpia el DOM después de cada caso, igual que en el ejemplo del profesor.
  afterEach(() => cleanup());
/* Caso de prueba automatizado: verifica un comportamiento concreto del componente. */
  it('muestra el nombre de la tienda y el aviso de derechos', () => {
    render(<Footer />);
    expect(screen.getByText('LEVELUP GAMING')).toBeTruthy();
    expect(screen.getByText(/Derechos reservados/)).toBeTruthy();
  });
});
