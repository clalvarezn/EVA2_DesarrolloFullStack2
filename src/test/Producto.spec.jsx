/* Estructura de pruebas siguiendo el ejemplo del profesor: describe agrupa los casos e it define cada prueba individual. */
import React from 'react';
import {render, screen, fireEvent, cleanup} from '@testing-library/react';
import Producto from '../componentes/Producto';

describe('Componente Producto', () => {
  const producto = { id: 1, nombre: 'Producto de prueba', descripcion: 'Descripción de prueba', precio: 10000, imagen: '/imagen.jpg' };

  // Limpia el DOM después de cada caso
  afterEach(() => cleanup());

  /* Caso de prueba 1 verifica un comportamiento concreto del componente. */
  it('muestra nombre, descripción y acciones', () => {
    render(
      <Producto 
      producto={producto} 
      onAgregar={() => {}} 
      />
    );
    
    expect(screen.getByRole('heading', { name: 'Producto de prueba' })).toBeTruthy();
    expect(screen.getByText('Descripción de prueba')).toBeTruthy();
    expect(screen.getByRole('link', { name: 'Ver producto' })).toBeTruthy();
  });


  /* Caso de prueba 2 verifica un comportamiento concreto del componente. */
  it('llama a onAgregar cuando se presiona añadir al carrito', () => {
    const agregar = jasmine.createSpy('agregar');

    render(
      <Producto 
      producto={producto} 
      onAgregar={agregar} 
      />
    );

    fireEvent.click(screen.getByRole('button', { name: 'Añadir al carrito' }));
    expect(agregar).toHaveBeenCalledWith(producto);
  });

  /* Caso de prueba 3: comprobamos que el botón aparece en pantalla. */
  it('muestra el botón Añadir al carrito', () => {

    /* Renderizamos el componente con sus datos de ejemplo. */
    render(
      <Producto
      producto={producto}
      onAgregar={() => {}}
      />
    );

  /* Buscamos el botón por su nombre accesible.
      Debe coincidir con el texto que tiene el componente. */
    const boton = screen.getByRole('button', {
      name: 'Añadir al carrito'
    });

  /* Verificamos que el botón esté habilitado. */
    expect(boton.disabled).toBeFalse();
  });

});
