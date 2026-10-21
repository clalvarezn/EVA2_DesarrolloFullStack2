// Configuración de Karma siguiendo la estructura del ejemplo entregado por el profesor.
module.exports = function (config) {
  config.set({
    // Jasmine define describe/it/expect y webpack prepara JSX antes de ejecutarlo.
    frameworks: ["jasmine", "webpack"],

    // Karma ejecuta únicamente los archivos de prueba dentro de src/test.
    files: [{ pattern: "src/test/**/*.spec.jsx", watched: false }],

    // Cada prueba JSX pasa por webpack para poder importar componentes React.
    preprocessors: {
      "src/test/**/*.spec.jsx": ["webpack"]
    },

    // Configuración de webpack para interpretar JS/JSX y recopilar cobertura.
    webpack: {
      mode: "development",
      devtool: "inline-source-map",
      resolve: { extensions: [".js", ".jsx"] },
      module: {
        rules: [
          // Los CSS se tratan como texto durante los tests; no se renderiza el CSS en el navegador de prueba.
          { test: /\.css$/, type: "asset/source" },
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                babelrc: false,
                configFile: false,
                presets: [
                  "@babel/preset-env",
                  ["@babel/preset-react", { runtime: "automatic" }]
                ],
                // Istanbul registra qué líneas de los componentes se ejecutan durante las pruebas.
                plugins: [["istanbul", {
                  include: ["src/componentes/**/*.jsx", "src/admin/**/*.jsx", "src/App.jsx", "src/utils/**/*.js"],
                  exclude: ["src/test/**/*.spec.jsx"]
                }]]
              }
            }
          }
        ]
      }
    },

    // Plugins que conectan Jasmine, webpack, Chrome y el reporte de cobertura.
    plugins: [
      "karma-jasmine",
      "karma-webpack",
      "karma-chrome-launcher",
      "karma-coverage",
      "karma-spec-reporter"
    ],

    // Muestra cada caso de prueba y un resumen de cobertura en la terminal.
    reporters: ["spec", "coverage"],
    coverageReporter: {
      dir: "coverage",
      reporters: [
        { type: "html", subdir: "html" },
        { type: "text-summary" }
      ]
    },

    // Ejecuta Chrome sin interfaz gráfica, útil para automatización.
    browsers: ["ChromeHeadlessNoSandbox"],
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: "ChromeHeadless",
        flags: ["--no-sandbox", "--disable-dev-shm-usage", "--disable-gpu", "--headless=new"]
      }
    },

    // Finaliza al terminar la suite de pruebas.
    singleRun: true
  });
};
