# LevelUp Gaming — React + Vite

<strong>Integrantes:<br>
-Claudio Álvarez<br>
-Gabriel Barrera<br>
-Nicolas Fernandez<br></strong>

<strong>
Caso 2: "LevelUp Gaming" – Tienda de Componentes y Videojuegos
Contexto de la empresa:<br>
LevelUp Gaming es una tienda especializada en hardware de computación (tarjetas gráficas, periféricos RGB, monitores) y merchandising geek. Quieren un portal web intuitivo donde los clientes puedan revisar stock y armar sus carritos, mientras que sus administradores gestionan el inventario de piezas tecnológicas de alto valor.<br>

Público Objetivo:<br>
Gamers, entusiastas de la tecnología, streamers y creadores de contenido.

Adaptación a los Requisitos de la Evaluación:<br>
Página Principal (Home): Presentación de ofertas relámpago y marcas asociadas (Logitech, Asus, etc.).

Categorías sugeridas:<br>
Periféricos, Hardware PC, Sillas Gamer, Accesorios.

Blogs / Noticias:<br>
-Blog 1: "Guía para elegir tu primera tarjeta de vídeo en 2026".
-Blog 2: "Mantenimiento preventivo: ¿Cada cuánto limpiar tu PC?".

Regla de Negocio Específica (Admin / Productos):<br>
Dado que el hardware agota stock rápido, la validación del Stock Crítico (ej. advertencia visual si el stock es menor o igual a 3 unidades) cobra vital importancia en el panel administrativo.
</strong>

## Ejecutar el proyecto

```bash
npm install
npm run dev
```

## Organización

- `src/componentes/`: componentes visuales y secciones individuales de la aplicación.
- `src/data/`: datos del catálogo.
- `src/utils/`: funciones reutilizables de validación.
- `src/App.jsx`: estado global del carrito y selección de la vista según la ruta.
- `src/App.css`: estilos de los componentes y páginas.
- `src/index.css`: estilos globales.

La autenticación, administración y pago siguen siendo demostraciones académicas; no están conectados a un servidor ni a una base de datos.


## Estructura de pruebas (formato del profesor)

Los archivos de prueba están agrupados en `src/test/` y usan la extensión `*.spec.jsx`, igual que el proyecto de ejemplo. La configuración `karma.conf.cjs` ejecuta Jasmine mediante webpack, transforma JSX con Babel y genera un reporte de cobertura en `coverage/`.

### Ejecutar el proyecto

```bash
npm install
npm run dev
```

### Ejecutar las pruebas

```bash
npm test
```

### Ver el informe de pruebas

```bash
Start-Process .\coverage\html\index.html
```

Se necesita Google Chrome o Chromium instalado para que Karma pueda iniciar `ChromeHeadlessNoSandbox`. Las pruebas están escritas con el patrón `describe` / `it` / `render` / `screen` / `expect`, y cada archivo limpia el DOM con `afterEach(() => cleanup())`.
