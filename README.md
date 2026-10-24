# LevelUp Gaming — React + Vite

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
