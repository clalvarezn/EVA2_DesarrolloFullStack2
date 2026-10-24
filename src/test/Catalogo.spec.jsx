/* Estructura de pruebas siguiendo el ejemplo del profesor: describe agrupa los casos e it define cada prueba individual. */
import React from 'react';
import {render, screen, fireEvent, cleanup} from '@testing-library/react';
import Catalogo from '../componentes/Catalogo';

describe('Componente Catalogo', () => {
  
  // Limpia el DOM después de cada caso, igual que en el ejemplo del profesor.
  afterEach(() => cleanup());
/* Caso de prueba 1: verifica un comportamiento concreto del componente. */
  it('muestra el título y el campo de búsqueda', () => {
    render(
      <Catalogo 
      agregar={() => {}} 
      />
    );


    expect(screen.getByRole('heading', { name: 'Productos' })).toBeTruthy();
    expect(screen.getByRole('textbox', { name: 'Buscar productos' })).toBeTruthy();
  });

  /* Caso de prueba 2: comprobar la búsqueda de productos. */
  it("Filtra los productos al escribir en el buscador", () => {

    /* Mostramos el catálogo y entregamos una función vacía. */
    render(
      <Catalogo 
      agregar={() => {}} 
      />
    );

    /* Buscamos el campo de búsqueda. */
    const campo = screen.getByRole("textbox", {
        name: "Buscar productos"
    });

    /* Escribimos el nombre de un producto existente. */
    fireEvent.change(campo, {
        target: { value: "Teclado RGB Pro" }
    });

    /* Comprobamos que el producto buscado aparece. */
    const producto = screen.getByRole("heading", {
        name: "Teclado RGB Pro"
    });

    expect(producto.textContent).toBe("Teclado RGB Pro");

    /* Comprobamos que otro producto ya no aparece. */
    expect(screen.queryByRole("heading", {name: "RTX Gaming Pro"})).toBeNull();

  });

});
