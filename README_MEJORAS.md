# Mejoras educativas del proyecto LevelUp Gaming

## Qué se agregó

1. `GUIA_CODIGO_LINEA_POR_LINEA.md`: referencia numerada línea por línea para los archivos JavaScript/JSX originales. Incluye el código de cada línea y una explicación de su función habitual. Está separada del código ejecutable para no romper JSX ni modificar la lógica solo para añadir comentarios.
2. Hojas CSS independientes para cada componente de interfaz, incluyendo `Articulo`, `Carrito`, `Catalogo`, `DetalleProducto`, `Footer`, `Formulario`, `Header`, `Inicio`, `Nosotros`, `Producto`, `Blogs`, `AdminLogin` y `Administracion`. `App` mantiene `App.css` y el proyecto conserva `index.css` para reglas globales.
3. Pruebas automatizadas con Jasmine y React Testing Library en archivos `*.spec.jsx` / `*.spec.js`. Los casos cubren renderizado, contenido esperado, búsqueda, interacción del menú, carrusel, formulario, validaciones y área administrativa.
4. En `karma.conf.cjs` se agregó una regla para que webpack pueda procesar imports CSS durante las pruebas; Vite seguirá aplicando las hojas de estilo al ejecutar la aplicación.

## Cómo ejecutar el proyecto

Desde la carpeta raíz del proyecto:

```bash
npm install
npm run dev
```

## Cómo ejecutar las pruebas

El proyecto usa Karma, Jasmine y Chrome Headless. Una vez instaladas las dependencias y teniendo disponible el navegador Chromium/Chrome compatible:

```bash
npm test
```

Si el sistema no tiene Chrome/Chromium instalado, Karma no podrá iniciar el navegador sin instalarlo o ajustar el launcher.

## Alcance y advertencias

- Las pruebas son una base inicial de pruebas de componentes; revisa los resultados en tu computador y amplía los casos según la rúbrica del ramo.
- El acceso de administración existente usa credenciales en el cliente y `sessionStorage`. Es solo una demostración académica, no un sistema seguro de autenticación real.
- La tienda usa datos de catálogo estáticos y no integra una API o pasarela de pago real.
- No se cambió intencionalmente la lógica comercial existente; los cambios principales son documentación, estilos separados y pruebas.

## Inventario inicial de pruebas

- `src/App.spec.jsx`: estructura general de la aplicación.
- `src/componentes/Blogs.spec.jsx`: listado, artículo existente y artículo inexistente.
- `src/componentes/Producto.spec.jsx`: datos de tarjeta y callback de agregar.
- `src/componentes/Catalogo.spec.jsx`: título, buscador y búsqueda sin coincidencias.
- `src/componentes/Carrito.spec.jsx`: carrito vacío y productos existentes.
- `src/componentes/Formulario.spec.jsx`: inicio de sesión, correo inválido y formulario de registro.
- `src/componentes/Header.spec.jsx`: enlaces, contador y apertura del menú.
- `src/componentes/Inicio.spec.jsx`: carrusel y navegación a la siguiente imagen.
- `src/componentes/DetalleProducto.spec.jsx`: detalle y botón de agregar.
- `src/componentes/Footer.spec.jsx`: identidad y derechos reservados.
- `src/componentes/Nosotros.spec.jsx`: contenido informativo.
- `src/admin/AdminLogin.spec.jsx`: campos de acceso y credenciales inválidas.
- `src/admin/Administracion.spec.jsx`: renderizado del panel con sesión.
- `src/utils/validaciones.spec.js`: dominios de correo y validación de RUN.
