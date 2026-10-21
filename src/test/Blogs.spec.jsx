/* Estructura de pruebas siguiendo el ejemplo del profesor: describe agrupa los casos e it define cada prueba individual. */
import React from 'react';
import {render, screen, cleanup} from '@testing-library/react';
import Blogs, { articulos } from '../componentes/Blogs';
import Articulo from '../componentes/Articulo';

describe('Blogs y Articulo', () => {
  
  // Limpia el DOM después de cada caso, igual que en el ejemplo del profesor.
  afterEach(() => cleanup());
/* Caso de prueba automatizado: verifica un comportamiento concreto del componente. */
  it('muestra el encabezado y los artículos disponibles', () => {
    render(<Blogs />);
    expect(screen.getByRole('heading', { name: 'Blogs y Noticias' })).toBeTruthy();
    expect(screen.getAllByRole('link', { name: 'Leer artículo' }).length).toBeGreaterThan(0);
  });
  it('muestra una imagen por artículo con su fuente y texto alternativo', () => {
    render(<Blogs />);
    const imagenes = screen.getAllByRole('img');

    expect(imagenes.length).toBe(articulos.length);
    articulos.forEach((articulo, indice) => {
      expect(imagenes[indice].getAttribute('src')).toBe(articulo.imagen);
      expect(imagenes[indice].getAttribute('alt')).toBe(articulo.titulo);
    });
  });
  /* Caso de prueba automatizado: verifica un comportamiento concreto del componente. */
  it('muestra el detalle del artículo solicitado', () => {
    render(<Articulo id="1" />);
    expect(screen.getByText(/Guía para elegir tu primera tarjeta de vídeo/)).toBeTruthy();
  });
  /* Caso de prueba automatizado: verifica un comportamiento concreto del componente. */
  it('informa cuando el artículo no existe', () => {
    render(<Articulo id="999" />);
    expect(screen.getByText('Artículo no encontrado.')).toBeTruthy();
  });
});
