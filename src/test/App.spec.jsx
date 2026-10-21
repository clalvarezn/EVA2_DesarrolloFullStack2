/* Estructura de pruebas siguiendo el ejemplo del profesor: describe agrupa los casos e it define cada prueba individual. */
import React from 'react';
import {render, screen, cleanup} from '@testing-library/react';
import App from '../App';

describe('App', () => {
  
  // Limpia el DOM después de cada caso, igual que en el ejemplo del profesor.
  afterEach(() => cleanup());
/* Caso de prueba automatizado: verifica un comportamiento concreto del componente. */
  it('renderiza la estructura compartida de la aplicación', () => {
    window.history.pushState({}, '', '/');
    render(<App />);
    expect(screen.getByRole('link', { name: /LEVEL.*GAMING/ })).toBeTruthy();
    expect(screen.getByText(/Derechos reservados/)).toBeTruthy();
  });
});
