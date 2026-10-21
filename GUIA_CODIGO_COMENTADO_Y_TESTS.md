# Guía comentada línea por línea — LevelUp Gaming

Esta guía acompaña los comentarios incorporados en los archivos fuente. Cada línea de los archivos JS, JSX y CSS se lista con una explicación orientativa. Las pruebas siguen el patrón del ejemplo del profesor: `src/test/*.spec.jsx`, `describe`, `it`, `render`, `screen`, `expect` y limpieza con `afterEach`.

## Conceptos básicos de las pruebas

- `describe(...)`: agrupa pruebas relacionadas bajo el nombre del componente o función.
- `it(...)`: define un comportamiento concreto que debe cumplirse.
- `render(<Componente />)`: monta el componente en el entorno de prueba.
- `screen.getByRole(...)`: busca un elemento usando su función accesible, por ejemplo botón o encabezado.
- `expect(...).toBeTruthy()`: comprueba que un elemento o valor exista/sea verdadero.
- `jasmine.createSpy(...)`: crea una función espía para comprobar si se llamó y con qué argumentos.
- `afterEach(() => cleanup())`: limpia el DOM después de cada prueba para evitar interferencias.
- `karma.conf.cjs`: configura Jasmine, webpack, Babel, Chrome headless y el informe de cobertura.

## `src/App.css`

```css
0001 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0002 | .container {
0003 |     width: min(1120px, 92%);
0004 |     margin-inline: auto
0005 | }
0006 | 
0007 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0008 | .site-header {
0009 |     position: sticky;
0010 |     top: 0;
0011 |     z-index: 20;
0012 |     background: rgba(12, 15, 21, .96);
0013 |     backdrop-filter: blur(12px);
0014 |     border-bottom: 1px solid #252b36
0015 | }
0016 | 
0017 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0018 | .nav-container {
0019 |     min-height: 76px;
0020 |     display: flex;
0021 |     align-items: center;
0022 |     justify-content: space-between;
0023 |     gap: 24px
0024 | }
0025 | 
0026 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0027 | .logo {
0028 |     font-size: 1.35rem;
0029 |     font-weight: 900;
0030 |     letter-spacing: 1px;
0031 |     white-space: nowrap
0032 | }
0033 | 
0034 | .logo span,
0035 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0036 | .hero-content h1 span {
0037 |     color: #35ed11
0038 | }
0039 | 
0040 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0041 | .nav-links {
0042 |     display: flex;
0043 |     align-items: center;
0044 |     gap: 20px
0045 | }
0046 | 
0047 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0048 | .nav-links a {
0049 |     font-size: .93rem;
0050 |     color: #e3e7ec;
0051 |     transition: color .2s
0052 | }
0053 | 
0054 | .nav-links a:hover,
0055 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0056 | .section-heading>a:hover {
0057 |     color: #35ed11
0058 | }
0059 | 
0060 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0061 | .nav-cart {
0062 |     border: 1px solid #35ed11;
0063 |     border-radius: 8px;
0064 |     padding: 8px 12px
0065 | }
0066 | 
0067 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0068 | .nav-cart b {
0069 |     color: #35ed11
0070 | }
0071 | 
0072 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0073 | .menu-toggle {
0074 |     display: none;
0075 |     background: none;
0076 |     border: 1px solid #424a55;
0077 |     color: white;
0078 |     border-radius: 8px;
0079 |     padding: 5px 10px;
0080 |     font-size: 1.3rem
0081 | }
0082 | 
0083 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0084 | .hero-banner {
0085 |     min-height: 460px;
0086 |     display: grid;
0087 |     grid-template-columns: 1fr 1fr;
0088 |     align-items: center;
0089 |     gap: 36px;
0090 |     padding: 52px max(4%, calc((100% - 1120px)/2));
0091 |     background: radial-gradient(circle at 80% 50%, #243b0f 0%, #0b0d12 60%);
0092 |     overflow: hidden
0093 | }
0094 | 
0095 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0096 | .hero-content {
0097 |     width: 100%;
0098 |     max-width: 560px
0099 | }
0100 | 
0101 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0102 | .eyebrow {
0103 |     color: #35ed11;
0104 |     font-size: .78rem;
0105 |     font-weight: 800;
0106 |     letter-spacing: 2px;
0107 |     margin-bottom: 10px
0108 | }
0109 | 
0110 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0111 | .hero-content>p:not(.eyebrow) {
0112 |     font-size: 1.1rem;
0113 |     max-width: 520px
0114 | }
0115 | 
0116 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0117 | .hero-art img {
0118 |     width: 100%;
0119 |     height: 320px;
0120 |     object-fit: cover;
0121 |     border-radius: 18px;
0122 |     border: 1px solid #35402e;
0123 |     box-shadow: 0 20px 70px #0008
0124 | }
0125 | 
0126 | .btn,
0127 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0128 | .btn-small {
0129 |     display: inline-flex;
0130 |     justify-content: center;
0131 |     align-items: center;
0132 |     gap: 8px;
0133 |     background: #35ed11;
0134 |     color: #0a0d0b;
0135 |     border: 1px solid #35ed11;
0136 |     border-radius: 8px;
0137 |     padding: 11px 18px;
0138 |     font-weight: 800;
0139 |     transition: transform .2s, filter .2s
0140 | }
0141 | 
0142 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0143 | .btn {
0144 |     margin-top: 12px
0145 | }
0146 | 
0147 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0148 | .btn-small {
0149 |     font-size: .85rem;
0150 |     padding: 9px 12px
0151 | }
0152 | 
0153 | .btn:hover,
0154 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0155 | .btn-small:hover {
0156 |     filter: brightness(.9);
0157 |     transform: translateY(-1px)
0158 | }
0159 | 
0160 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0161 | .btn-outline {
0162 |     background: transparent;
0163 |     color: #35ed11
0164 | }
0165 | 
0166 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0167 | .btn-secondary {
0168 |     background: transparent;
0169 |     color: #f4f4f4;
0170 |     border-color: #59616c;
0171 |     margin-left: 8px
0172 | }
0173 | 
0174 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0175 | .section {
0176 |     padding-top: 58px;
0177 |     padding-bottom: 64px
0178 | }
0179 | 
0180 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0181 | .section-heading {
0182 |     display: flex;
0183 |     justify-content: space-between;
0184 |     align-items: end;
0185 |     gap: 16px
0186 | }
0187 | 
0188 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0189 | .section-heading h2 {
0190 |     margin-bottom: 0
0191 | }
0192 | 
0193 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0194 | .section-heading>a {
0195 |     color: #35ed11
0196 | }
0197 | 
0198 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0199 | .product-grid {
0200 |     display: grid;
0201 |     grid-template-columns: repeat(auto-fit, minmax(235px, 1fr));
0202 |     gap: 22px;
0203 |     margin-top: 25px
0204 | }
0205 | 
0206 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0207 | .brands {
0208 |     background: #11151d;
0209 |     padding: 35px 0;
0210 |     text-align: center;
0211 |     border-block: 1px solid #252b36
0212 | }
0213 | 
0214 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0215 | .brand-list {
0216 |     display: flex;
0217 |     justify-content: center;
0218 |     gap: clamp(20px, 5vw, 55px);
0219 |     flex-wrap: wrap;
0220 |     font-weight: 900;
0221 |     color: #b9c0ca;
0222 |     margin-top: 18px
0223 | }
0224 | 
0225 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0226 | .site-footer {
0227 |     background: #0b0d12d9;
0228 |     border-top: 1px solid #252b36;
0229 |     padding: 30px 0
0230 | }
0231 | 
0232 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0233 | .footer-inner {
0234 |     display: flex;
0235 |     align-items: center;
0236 |     justify-content: space-between;
0237 |     gap: 16px;
0238 |     flex-wrap: wrap
0239 | }
0240 | 
0241 | .footer-inner p,
0242 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0243 | .footer-inner small {
0244 |     margin: 0;
0245 |     color: #9ca3af
0246 | }
0247 | 
0248 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0249 | .form-section {
0250 |     padding: 60px 0 80px;
0251 |     display: flex;
0252 |     justify-content: center
0253 | }
0254 | 
0255 | .form-card,
0256 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0257 | .about-card {
0258 |     background: #151a22;
0259 |     border: 1px solid #292f39;
0260 |     border-radius: 14px;
0261 |     padding: clamp(22px, 4vw, 36px);
0262 |     color: white
0263 | }
0264 | 
0265 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0266 | .form-card {
0267 |     width: min(540px, 100%)
0268 | }
0269 | 
0270 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0271 | .form-card h1 {
0272 |     font-size: 2.3rem
0273 | }
0274 | 
0275 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0276 | .form-card label {
0277 |     display: block;
0278 |     margin: 16px 0 0;
0279 |     color: #e5e7eb;
0280 |     font-weight: 600
0281 | }
0282 | 
0283 | .form-card input,
0284 | .form-card textarea,
0285 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0286 | .search-input {
0287 |     display: block;
0288 |     width: 100%;
0289 |     margin-top: 6px;
0290 |     border: 1px solid #3a424f;
0291 |     background: #0d1118;
0292 |     color: #fff;
0293 |     border-radius: 8px;
0294 |     padding: 12px;
0295 |     outline: none
0296 | }
0297 | 
0298 | .form-card input:focus,
0299 | .form-card textarea:focus,
0300 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0301 | .search-input:focus {
0302 |     border-color: #35ed11;
0303 |     box-shadow: 0 0 0 2px #35ed1122
0304 | }
0305 | 
0306 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0307 | .form-card .btn {
0308 |     width: 100%;
0309 |     margin-top: 22px
0310 | }
0311 | 
0312 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0313 | .form-message {
0314 |     margin: 16px 0 0;
0315 |     padding: 10px;
0316 |     border-radius: 8px
0317 | }
0318 | 
0319 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0320 | .success {
0321 |     background: #14351a;
0322 |     color: #a5ff9a
0323 | }
0324 | 
0325 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0326 | .error {
0327 |     background: #421e24;
0328 |     color: #ffb8bf
0329 | }
0330 | 
0331 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0332 | .form-note {
0333 |     font-size: .9rem;
0334 |     margin-top: 16px
0335 | }
0336 | 
0337 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0338 | .form-note a {
0339 |     color: #35ed11
0340 | }
0341 | 
0342 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0343 | .search-input {
0344 |     max-width: 450px;
0345 |     margin: 24px 0
0346 | }
0347 | 
0348 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0349 | .empty-state {
0350 |     text-align: center;
0351 |     padding: 55px 20px;
0352 |     background: #151a22;
0353 |     border: 1px solid #292f39;
0354 |     border-radius: 14px
0355 | }
0356 | 
0357 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0358 | .cart-list {
0359 |     margin-top: 28px
0360 | }
0361 | 
0362 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0363 | .cart-item {
0364 |     display: flex;
0365 |     align-items: center;
0366 |     gap: 20px;
0367 |     justify-content: space-between;
0368 |     padding: 20px 0;
0369 |     border-bottom: 1px solid #303743
0370 | }
0371 | 
0372 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0373 | .cart-item h3 {
0374 |     margin: 0;
0375 |     color: #fff
0376 | }
0377 | 
0378 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0379 | .cart-item p {
0380 |     margin: 4px 0 0
0381 | }
0382 | 
0383 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0384 | .cart-item>strong {
0385 |     white-space: nowrap
0386 | }
0387 | 
0388 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0389 | .quantity {
0390 |     display: flex;
0391 |     align-items: center;
0392 |     gap: 12px
0393 | }
0394 | 
0395 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0396 | .quantity button {
0397 |     background: #252b36;
0398 |     color: #fff;
0399 |     border: 1px solid #414a57;
0400 |     border-radius: 6px;
0401 |     width: 32px;
0402 |     height: 32px
0403 | }
0404 | 
0405 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0406 | .remove-btn {
0407 |     border: 0;
0408 |     background: none;
0409 |     color: #ff8c8c
0410 | }
0411 | 
0412 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0413 | .cart-summary {
0414 |     text-align: right;
0415 |     margin-top: 25px
0416 | }
0417 | 
0418 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0419 | .cart-summary h2 {
0420 |     font-size: 1.5rem
0421 | }
0422 | 
0423 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0424 | .detail {
0425 |     display: grid;
0426 |     grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
0427 |     gap: 40px;
0428 |     align-items: center;
0429 |     margin-top: 24px
0430 | }
0431 | 
0432 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0433 | .detail>img {
0434 |     width: 100%;
0435 |     max-height: 440px;
0436 |     object-fit: contain;
0437 |     background: #fff;
0438 |     border-radius: 14px;
0439 |     padding: 24px
0440 | }
0441 | 
0442 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0443 | .detail h2 {
0444 |     color: #35ed11
0445 | }
0446 | 
0447 | .blog-grid,
0448 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0449 | .admin-grid {
0450 |     display: grid;
0451 |     grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
0452 |     gap: 22px;
0453 |     margin-top: 25px
0454 | }
0455 | 
0456 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0457 | .blog-grid .about-card {
0458 |     display: flex;
0459 |     flex-direction: column;
0460 |     align-items: flex-start
0461 | }
0462 | 
0463 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0464 | .blog-grid .btn-small {
0465 |     margin-top: auto
0466 | }
0467 | 
0468 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0469 | .article {
0470 |     max-width: 800px;
0471 |     margin: 30px auto;
0472 |     padding: 32px;
0473 |     background: #151a22;
0474 |     border: 1px solid #292f39;
0475 |     border-radius: 14px
0476 | }
0477 | 
0478 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0479 | .article p {
0480 |     font-size: 1.08rem
0481 | }
0482 | 
0483 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0484 | .admin-grid a:hover {
0485 |     border-color: #35ed11
0486 | }
0487 | 
0488 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0489 | .lead {
0490 |     font-size: 1.1rem
0491 | }
0492 | 
0493 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0494 | @media(max-width:850px) {
0495 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0496 |     .menu-toggle {
0497 |         display: block
0498 |     }
0499 | 
0500 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0501 |     .nav-links {
0502 |         display: none;
0503 |         position: absolute;
0504 |         top: 75px;
0505 |         left: 0;
0506 |         right: 0;
0507 |         padding: 18px 4%;
0508 |         background: #0d1118;
0509 |         border-bottom: 1px solid #303743;
0510 |         flex-direction: column;
0511 |         align-items: stretch;
0512 |         gap: 14px
0513 |     }
0514 | 
0515 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0516 |     .nav-links.abierto {
0517 |         display: flex
0518 |     }
0519 | 
0520 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0521 |     .nav-links a {
0522 |         padding: 6px 0
0523 |     }
0524 | 
0525 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0526 |     .hero-banner {
0527 |         grid-template-columns: 1fr;
0528 |         padding: 48px 4%;
0529 |         gap: 26px
0530 |     }
0531 | 
0532 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0533 |     .hero-art img {
0534 |         height: 250px
0535 |     }
0536 | 
0537 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0538 |     .detail {
0539 |         grid-template-columns: 1fr
0540 |     }
0541 | 
0542 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0543 |     .detail>img {
0544 |         max-height: 320px
0545 |     }
0546 | 
0547 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0548 |     .cart-item {
0549 |         flex-wrap: wrap
0550 |     }
0551 | 
0552 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0553 |     .cart-item>div:first-child {
0554 |         flex: 1 1 55%
0555 |     }
0556 | }
0557 | 
0558 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0559 | @media(max-width:520px) {
0560 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0561 |     .section {
0562 |         padding-top: 40px;
0563 |         padding-bottom: 45px
0564 |     }
0565 | 
0566 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0567 |     .section-heading {
0568 |         align-items: start;
0569 |         flex-direction: column
0570 |     }
0571 | 
0572 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0573 |     .footer-inner {
0574 |         flex-direction: column;
0575 |         align-items: flex-start
0576 |     }
0577 | 
0578 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0579 |     .brand-list {
0580 |         gap: 18px
0581 |     }
0582 | 
0583 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0584 |     .cart-item {
0585 |         gap: 12px
0586 |     }
0587 | 
0588 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0589 |     .cart-summary {
0590 |         text-align: left
0591 |     }
0592 | 
0593 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0594 |     .btn-secondary {
0595 |         margin: 10px 0 0
0596 |     }
0597 | 
0598 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0599 |     .hero-art img {
0600 |         height: 200px
0601 |     }
0602 | }
0603 | 
0604 | 
0605 | /* Estilos específicos del componente raíz y sus contenedores de página. */
0606 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0607 | .app-page { min-height: 60vh; }
```

**Explicación línea por línea:**

- **Línea 1:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 2:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 3:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 4:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 5:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 6:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 7:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 8:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 9:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 10:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 11:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 12:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 13:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 14:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 15:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 16:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 17:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 18:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 19:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 20:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 21:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 22:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 23:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 24:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 25:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 26:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 27:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 28:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 29:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 30:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 31:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 32:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 33:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 34:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 35:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 36:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 37:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 38:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 39:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 40:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 41:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 42:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 43:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 44:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 45:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 46:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 47:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 48:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 49:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 50:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 51:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 52:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 53:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 54:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 55:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 56:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 57:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 58:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 59:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 60:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 61:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 62:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 63:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 64:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 65:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 66:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 67:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 68:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 69:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 70:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 71:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 72:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 73:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 74:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 75:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 76:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 77:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 78:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 79:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 80:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 81:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 82:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 83:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 84:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 85:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 86:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 87:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 88:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 89:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 90:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 91:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 92:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 93:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 94:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 95:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 96:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 97:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 98:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 99:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 100:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 101:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 102:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 103:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 104:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 105:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 106:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 107:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 108:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 109:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 110:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 111:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 112:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 113:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 114:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 115:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 116:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 117:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 118:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 119:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 120:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 121:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 122:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 123:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 124:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 125:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 126:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 127:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 128:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 129:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 130:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 131:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 132:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 133:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 134:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 135:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 136:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 137:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 138:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 139:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 140:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 141:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 142:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 143:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 144:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 145:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 146:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 147:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 148:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 149:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 150:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 151:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 152:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 153:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 154:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 155:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 156:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 157:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 158:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 159:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 160:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 161:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 162:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 163:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 164:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 165:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 166:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 167:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 168:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 169:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 170:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 171:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 172:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 173:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 174:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 175:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 176:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 177:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 178:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 179:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 180:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 181:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 182:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 183:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 184:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 185:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 186:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 187:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 188:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 189:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 190:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 191:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 192:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 193:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 194:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 195:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 196:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 197:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 198:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 199:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 200:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 201:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 202:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 203:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 204:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 205:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 206:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 207:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 208:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 209:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 210:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 211:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 212:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 213:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 214:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 215:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 216:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 217:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 218:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 219:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 220:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 221:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 222:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 223:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 224:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 225:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 226:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 227:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 228:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 229:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 230:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 231:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 232:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 233:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 234:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 235:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 236:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 237:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 238:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 239:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 240:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 241:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 242:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 243:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 244:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 245:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 246:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 247:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 248:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 249:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 250:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 251:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 252:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 253:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 254:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 255:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 256:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 257:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 258:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 259:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 260:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 261:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 262:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 263:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 264:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 265:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 266:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 267:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 268:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 269:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 270:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 271:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 272:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 273:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 274:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 275:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 276:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 277:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 278:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 279:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 280:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 281:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 282:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 283:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 284:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 285:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 286:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 287:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 288:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 289:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 290:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 291:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 292:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 293:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 294:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 295:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 296:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 297:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 298:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 299:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 300:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 301:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 302:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 303:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 304:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 305:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 306:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 307:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 308:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 309:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 310:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 311:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 312:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 313:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 314:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 315:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 316:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 317:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 318:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 319:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 320:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 321:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 322:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 323:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 324:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 325:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 326:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 327:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 328:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 329:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 330:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 331:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 332:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 333:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 334:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 335:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 336:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 337:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 338:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 339:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 340:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 341:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 342:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 343:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 344:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 345:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 346:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 347:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 348:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 349:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 350:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 351:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 352:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 353:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 354:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 355:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 356:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 357:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 358:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 359:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 360:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 361:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 362:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 363:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 364:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 365:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 366:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 367:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 368:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 369:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 370:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 371:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 372:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 373:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 374:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 375:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 376:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 377:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 378:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 379:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 380:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 381:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 382:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 383:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 384:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 385:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 386:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 387:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 388:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 389:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 390:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 391:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 392:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 393:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 394:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 395:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 396:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 397:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 398:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 399:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 400:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 401:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 402:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 403:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 404:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 405:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 406:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 407:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 408:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 409:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 410:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 411:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 412:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 413:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 414:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 415:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 416:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 417:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 418:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 419:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 420:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 421:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 422:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 423:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 424:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 425:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 426:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 427:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 428:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 429:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 430:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 431:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 432:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 433:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 434:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 435:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 436:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 437:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 438:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 439:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 440:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 441:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 442:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 443:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 444:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 445:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 446:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 447:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 448:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 449:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 450:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 451:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 452:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 453:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 454:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 455:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 456:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 457:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 458:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 459:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 460:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 461:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 462:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 463:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 464:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 465:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 466:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 467:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 468:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 469:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 470:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 471:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 472:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 473:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 474:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 475:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 476:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 477:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 478:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 479:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 480:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 481:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 482:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 483:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 484:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 485:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 486:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 487:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 488:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 489:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 490:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 491:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 492:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 493:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 494:** Regla adaptable: aplica estilos solo cuando se cumple una condición de pantalla.
- **Línea 495:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 496:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 497:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 498:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 499:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 500:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 501:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 502:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 503:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 504:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 505:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 506:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 507:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 508:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 509:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 510:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 511:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 512:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 513:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 514:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 515:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 516:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 517:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 518:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 519:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 520:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 521:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 522:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 523:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 524:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 525:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 526:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 527:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 528:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 529:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 530:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 531:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 532:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 533:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 534:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 535:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 536:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 537:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 538:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 539:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 540:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 541:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 542:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 543:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 544:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 545:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 546:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 547:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 548:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 549:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 550:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 551:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 552:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 553:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 554:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 555:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 556:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 557:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 558:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 559:** Regla adaptable: aplica estilos solo cuando se cumple una condición de pantalla.
- **Línea 560:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 561:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 562:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 563:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 564:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 565:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 566:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 567:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 568:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 569:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 570:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 571:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 572:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 573:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 574:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 575:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 576:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 577:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 578:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 579:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 580:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 581:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 582:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 583:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 584:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 585:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 586:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 587:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 588:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 589:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 590:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 591:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 592:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 593:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 594:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 595:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 596:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 597:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 598:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 599:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 600:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 601:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 602:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 603:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 604:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 605:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 606:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 607:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.

## `src/App.jsx`

```jsx
0001 | // Hooks de React: estado, efectos secundarios y valores calculados a partir del estado.
0002 | import { useEffect, useMemo, useState } from 'react'
0003 | import './App.css'
0004 | import Header from './componentes/Header'
0005 | import Footer from './componentes/Footer'
0006 | import Inicio from './componentes/Inicio'
0007 | import Catalogo from './componentes/Catalogo'
0008 | import Carrito from './componentes/Carrito'
0009 | import Formulario from './componentes/Formulario'
0010 | import Nosotros from './componentes/Nosotros'
0011 | import Blogs from './componentes/Blogs'
0012 | import Articulo from './componentes/Articulo'
0013 | import DetalleProducto from './componentes/DetalleProducto'
0014 | import Administracion from './admin/Administracion'
0015 | import AdminLogin from './admin/AdminLogin'
0016 | 
0017 | // Recupera el carrito guardado en el navegador; si no existe o el JSON está dañado, empieza vacío.
0018 | function leerCarrito() {
0019 |   try { return JSON.parse(localStorage.getItem('levelupCarrito') || '[]') }
0020 |   catch { return [] }
0021 | }
0022 | 
0023 | // Componente raíz: administra el carrito y decide qué página mostrar según la URL.
0024 | export default function App() {
0025 |   // useState conserva los productos del carrito durante la navegación.
0026 |   const [carrito, setCarrito] = useState(leerCarrito)
0027 | 
0028 |   // Sincroniza el carrito con localStorage cada vez que cambia.
0029 |   useEffect(() => {
0030 |     localStorage.setItem('levelupCarrito', JSON.stringify(carrito))
0031 |   }, [carrito])
0032 | 
0033 |   // Agrega un producto nuevo o incrementa la cantidad si ya estaba en el carrito.
0034 |   const agregar = producto => {
0035 |     setCarrito(actual => {
0036 |       const existente = actual.find(item => item.id === producto.id)
0037 |       return existente
0038 |         ? actual.map(item => item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item)
0039 |         : [...actual, { ...producto, cantidad: 1 }]
0040 |     })
0041 |     window.alert(`${producto.nombre} fue añadido al carrito.`)
0042 |   }
0043 | 
0044 |   // Suma las cantidades de todos los productos para mostrar el contador del encabezado.
0045 |   const cantidadCarrito = useMemo(() => carrito.reduce((suma, producto) => suma + producto.cantidad, 0), [carrito])
0046 |   // Lee la ruta actual y elimina una barra final para comparar rutas de forma consistente.
0047 |   const ruta = decodeURI(window.location.pathname).replace(/\/$/, '') || '/'
0048 |   // Separa la URL en partes; se usa para rutas dinámicas como /producto/1.
0049 |   const segmentos = ruta.split('/')
0050 |   let pagina
0051 | 
0052 |   // Cada condición relaciona una ruta con el componente que representa esa página.
0053 |   if (ruta === '/') pagina = <Inicio agregar={agregar} />
0054 |   else if (ruta === '/productos') pagina = <Catalogo agregar={agregar} />
0055 |   else if (ruta === '/carrito') pagina = <Carrito carrito={carrito} setCarrito={setCarrito} />
0056 |   else if (ruta === '/login') pagina = <Formulario tipo="login" />
0057 |   else if (ruta === '/registro') pagina = <Formulario tipo="registro" />
0058 |   else if (ruta === '/contacto') pagina = <Formulario tipo="contacto" />
0059 |   else if (ruta === '/nosotros') pagina = <Nosotros />
0060 |   else if (ruta === '/blogs') pagina = <Blogs />
0061 |   else if (segmentos[1] === 'blogs' && segmentos[2]) pagina = <Articulo id={segmentos[2]} />
0062 |   else if (segmentos[1] === 'producto' && segmentos[2]) pagina = <DetalleProducto id={segmentos[2]} agregar={agregar} />
0063 |   else if (ruta === '/admin') pagina = <AdminLogin />
0064 |   else if (ruta === '/admin/dashboard') pagina = <Administracion />
0065 |   else pagina = <main className="container section"><h1>Página no encontrada</h1><a className="btn" href="/">Volver al inicio</a></main>
0066 | 
0067 |   // El encabezado y el pie se mantienen en todas las páginas; 'pagina' cambia según la ruta.
0068 |   return <><Header cantidad={cantidadCarrito} />{pagina}<Footer /></>
0069 | }
```

**Explicación línea por línea:**

- **Línea 1:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 2:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 3:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 4:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 5:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 6:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 7:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 8:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 9:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 10:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 11:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 12:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 13:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 14:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 15:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 16:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 17:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 18:** Declara una función o componente; el nombre identifica la responsabilidad que implementa.
- **Línea 19:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 20:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 21:** Cierra el bloque, llamada o elemento que comenzó anteriormente.
- **Línea 22:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 23:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 24:** Declara una función o componente; el nombre identifica la responsabilidad que implementa.
- **Línea 25:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 26:** Declara estado de React: la variable contiene el valor actual y la función asociada permite actualizarlo.
- **Línea 27:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 28:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 29:** Ejecuta un efecto secundario cuando se monta el componente o cambian las dependencias indicadas.
- **Línea 30:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 31:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 32:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 33:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 34:** Declara una variable que guarda un dato, función o resultado intermedio.
- **Línea 35:** Función flecha: define una función breve que puede ejecutarse como manejador o transformación de datos.
- **Línea 36:** Declara una variable que guarda un dato, función o resultado intermedio.
- **Línea 37:** Devuelve un valor o la interfaz JSX que React debe renderizar.
- **Línea 38:** Función flecha: define una función breve que puede ejecutarse como manejador o transformación de datos.
- **Línea 39:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 40:** Cierra el bloque, llamada o elemento que comenzó anteriormente.
- **Línea 41:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 42:** Cierra el bloque, llamada o elemento que comenzó anteriormente.
- **Línea 43:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 44:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 45:** Declara una variable que guarda un dato, función o resultado intermedio.
- **Línea 46:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 47:** Declara una variable que guarda un dato, función o resultado intermedio.
- **Línea 48:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 49:** Declara una variable que guarda un dato, función o resultado intermedio.
- **Línea 50:** Declara una variable que guarda un dato, función o resultado intermedio.
- **Línea 51:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 52:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 53:** Control de flujo: decide qué instrucciones se ejecutan según una condición.
- **Línea 54:** Control de flujo: decide qué instrucciones se ejecutan según una condición.
- **Línea 55:** Control de flujo: decide qué instrucciones se ejecutan según una condición.
- **Línea 56:** Control de flujo: decide qué instrucciones se ejecutan según una condición.
- **Línea 57:** Control de flujo: decide qué instrucciones se ejecutan según una condición.
- **Línea 58:** Control de flujo: decide qué instrucciones se ejecutan según una condición.
- **Línea 59:** Control de flujo: decide qué instrucciones se ejecutan según una condición.
- **Línea 60:** Control de flujo: decide qué instrucciones se ejecutan según una condición.
- **Línea 61:** Control de flujo: decide qué instrucciones se ejecutan según una condición.
- **Línea 62:** Control de flujo: decide qué instrucciones se ejecutan según una condición.
- **Línea 63:** Control de flujo: decide qué instrucciones se ejecutan según una condición.
- **Línea 64:** Control de flujo: decide qué instrucciones se ejecutan según una condición.
- **Línea 65:** Control de flujo: decide qué instrucciones se ejecutan según una condición.
- **Línea 66:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 67:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 68:** Devuelve un valor o la interfaz JSX que React debe renderizar.
- **Línea 69:** Cierra el bloque, llamada o elemento que comenzó anteriormente.

## `src/admin/AdminLogin.css`

```css
0001 | /* Hoja de estilos exclusiva de AdminLogin. */
0002 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0003 | .admin-login-page { min-height: 60vh; display: grid; place-items: center; padding: 2rem 1rem; }
0004 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0005 | .admin-login-card { width: min(100%, 440px); display: grid; gap: .8rem; padding: 2rem; border: 1px solid #343b4b; border-radius: 1rem; }
0006 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0007 | .admin-login-card input { padding: .8rem; border-radius: .4rem; }
```

**Explicación línea por línea:**

- **Línea 1:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 2:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 3:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 4:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 5:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 6:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 7:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.

## `src/admin/AdminLogin.jsx`

```jsx
0001 | /** Explicación general: Formulario de acceso de demostración al área administrativa; las credenciales son solo académicas y no equivalen a seguridad de servidor. */
0002 | import './AdminLogin.css'
0003 | import { useState } from 'react'
0004 | import './admin.css'
0005 | 
0006 | // Acceso de demostración para el proyecto académico; no sustituye autenticación de servidor.
0007 | // Credenciales de demostración solicitadas por el ejemplo académico; no usar en producción.
0008 | const CORREO_ADMIN = 'admin@duoc.cl'
0009 | const CLAVE_ADMIN = 'Admin1234'
0010 | 
0011 | // Pantalla de acceso al área administrativa.
0012 | export default function AdminLogin() {
0013 |   // Declara estado o lógica reactiva para controlar lo que muestra la interfaz.
0014 |   const [mensaje, setMensaje] = useState('')
0015 |   // Comprueba las credenciales al enviar el formulario.
0016 |   function ingresar(e) {
0017 |     e.preventDefault()
0018 |     // Lee correo y contraseña desde los campos identificados por name.
0019 |     const datos = new FormData(e.currentTarget)
0020 |     const correo = String(datos.get('correo') || '').trim().toLowerCase()
0021 |     const clave = String(datos.get('password') || '')
0022 |     // Si coinciden, guarda una marca de sesión y navega al panel administrativo.
0023 |     if (correo === CORREO_ADMIN && clave === CLAVE_ADMIN) {
0024 |       sessionStorage.setItem('levelupAdminAutenticado', 'true')
0025 |       window.location.href = '/admin/dashboard'
0026 |     } else {
0027 |       // Si no coinciden, muestra un mensaje de error sin recargar la página.
0028 |       setMensaje('Correo o contraseña incorrectos. Revisa las credenciales de demostración.')
0029 |     }
0030 |   }
0031 |   return <main className="admin-login-page"><form className="admin-login-card" onSubmit={ingresar}>
0032 |     <h1>Iniciar sesión</h1>
0033 |     <label htmlFor="admin-correo">Correo</label><input id="admin-correo" name="correo" type="email" autoComplete="username" required />
0034 |     <label htmlFor="admin-password">Contraseña</label><input id="admin-password" name="password" type="password" autoComplete="current-password" required />
0035 |     <button className="admin-primary-btn" type="submit">Ingresar</button>
0036 |     {mensaje && <p className="admin-login-error" role="alert">{mensaje}</p>}
0037 |   </form></main>
0038 | }
```

**Explicación línea por línea:**

- **Línea 1:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 2:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 3:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 4:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 5:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 6:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 7:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 8:** Declara una variable que guarda un dato, función o resultado intermedio.
- **Línea 9:** Declara una variable que guarda un dato, función o resultado intermedio.
- **Línea 10:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 11:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 12:** Declara una función o componente; el nombre identifica la responsabilidad que implementa.
- **Línea 13:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 14:** Declara estado de React: la variable contiene el valor actual y la función asociada permite actualizarlo.
- **Línea 15:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 16:** Declara una función o componente; el nombre identifica la responsabilidad que implementa.
- **Línea 17:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 18:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 19:** Declara una variable que guarda un dato, función o resultado intermedio.
- **Línea 20:** Declara una variable que guarda un dato, función o resultado intermedio.
- **Línea 21:** Declara una variable que guarda un dato, función o resultado intermedio.
- **Línea 22:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 23:** Control de flujo: decide qué instrucciones se ejecutan según una condición.
- **Línea 24:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 25:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 26:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 27:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 28:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 29:** Cierra el bloque, llamada o elemento que comenzó anteriormente.
- **Línea 30:** Cierra el bloque, llamada o elemento que comenzó anteriormente.
- **Línea 31:** Devuelve un valor o la interfaz JSX que React debe renderizar.
- **Línea 32:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 33:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 34:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 35:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 36:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 37:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 38:** Cierra el bloque, llamada o elemento que comenzó anteriormente.

## `src/admin/Administracion.css`

```css
0001 | /* Hoja de estilos exclusiva de Administracion. */
0002 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0003 | .admin-layout { min-height: 70vh; }
0004 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0005 | .admin-main { padding: 2rem; }
0006 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0007 | .admin-stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 1rem; }
0008 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0009 | .admin-stats article { padding: 1rem; border: 1px solid #343b4b; border-radius: .75rem; }
```

**Explicación línea por línea:**

- **Línea 1:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 2:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 3:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 4:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 5:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 6:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 7:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 8:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 9:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.

## `src/admin/Administracion.jsx`

```jsx
0001 | /** Explicación general: Panel de administración que verifica la sesión de demostración y muestra estadísticas y productos. */
0002 | import './Administracion.css'
0003 | import { useEffect } from 'react'
0004 | import { productos } from '../data/productos'
0005 | import './admin.css'
0006 | 
0007 | // Panel de administración: comprueba la marca de sesión antes de mostrar el contenido.
0008 | export default function Administracion() {
0009 |   // Declara estado o lógica reactiva para controlar lo que muestra la interfaz.
0010 |   useEffect(() => {
0011 |     if (sessionStorage.getItem('levelupAdminAutenticado') !== 'true') window.location.replace('/admin')
0012 |   }, [])
0013 |   const cerrarSesion = () => { sessionStorage.removeItem('levelupAdminAutenticado'); window.location.href = '/admin' }
0014 |   if (sessionStorage.getItem('levelupAdminAutenticado') !== 'true') return null
0015 |   return <div className="admin-layout">
0016 |     <header className="admin-topbar"><a className="admin-brand" href="/admin/dashboard">LEVEL<span>UP</span> ADMIN</a><button onClick={cerrarSesion}>Cerrar sesión</button></header>
0017 |     <aside className="admin-sidebar"><a href="/admin/dashboard">▦ Dashboard</a><a href="/productos">▣ Productos de la tienda</a><a href="/">↗ Ver tienda</a></aside>
0018 |     <main className="admin-main"><p className="admin-eyebrow">LEVELUP GAMING / ADMINISTRACIÓN</p><h1>Panel administrativo</h1>
0019 |       <div className="admin-stats"><article><span>Productos en catálogo</span><strong>{productos.length}</strong></article><article><span>Sesión</span><strong>Activa</strong></article><article><span>Stock crítico</span><strong>—</strong></article></div>
0020 |       <section className="admin-panel"><h2>Gestión de productos</h2><p>Consulta los productos publicados en el catálogo de la tienda.</p><div className="admin-table-wrap"><table><thead><tr><th>Producto</th><th>Precio</th><th>Acceso</th></tr></thead><tbody>{productos.map(producto => <tr key={producto.id}><td>{producto.nombre}</td><td>{Number(producto.precio).toLocaleString('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 })}</td><td><a href={`/producto/${producto.id}`}>Ver ficha</a></td></tr>)}</tbody></table></div></section>
0021 |     </main>
0022 |   </div>
0023 | }
```

**Explicación línea por línea:**

- **Línea 1:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 2:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 3:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 4:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 5:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 6:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 7:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 8:** Declara una función o componente; el nombre identifica la responsabilidad que implementa.
- **Línea 9:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 10:** Ejecuta un efecto secundario cuando se monta el componente o cambian las dependencias indicadas.
- **Línea 11:** Control de flujo: decide qué instrucciones se ejecutan según una condición.
- **Línea 12:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 13:** Declara una variable que guarda un dato, función o resultado intermedio.
- **Línea 14:** Control de flujo: decide qué instrucciones se ejecutan según una condición.
- **Línea 15:** Devuelve un valor o la interfaz JSX que React debe renderizar.
- **Línea 16:** Asocia una acción de usuario con una función que responde al evento.
- **Línea 17:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 18:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 19:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 20:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 21:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 22:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 23:** Cierra el bloque, llamada o elemento que comenzó anteriormente.

## `src/admin/admin.css`

```css
0001 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0002 | .admin-login-page{min-height:calc(100vh - 100px);display:flex;align-items:center;justify-content:center;padding:48px 20px;background:#0b0d10}.admin-login-card{width:min(750px,100%);padding:26px 25px 34px;background:#161b23;border:1px solid #2b313c;border-radius:17px;color:#f7f8fa}.admin-login-card h1{font-size:clamp(2rem,4vw,3rem);font-weight:400;line-height:1.2;margin:0 0 30px}.admin-login-card label{display:block;font-weight:700;margin:18px 0 9px}.admin-login-card input{display:block;width:100%;height:63px;padding:12px 15px;color:#fff;background:#0d1117;border:1px solid #343b47;border-radius:9px;outline:none}.admin-login-card input:focus{border-color:#35ed11;box-shadow:0 0 0 2px #35ed1126}.admin-primary-btn{margin-top:43px;border:0;border-radius:10px;padding:17px 28px;background:#35ed11;color:#050805;font-size:1.1rem;font-weight:800;cursor:pointer}.admin-primary-btn:hover{background:#55ff32}.admin-login-error{color:#ff8f8f;margin:18px 0 0}.admin-layout{min-height:calc(100vh - 100px);background:#0b0d10;color:#f5f7fa}.admin-topbar{height:78px;padding:0 5%;display:flex;align-items:center;justify-content:space-between;background:#11161e;border-bottom:1px solid #2a303a}.admin-brand{font-size:1.35rem;font-weight:900;letter-spacing:.5px;color:#fff;text-decoration:none}.admin-brand span{color:#35ed11}.admin-topbar button{border:0;border-radius:8px;padding:11px 16px;background:#35ed11;color:#070907;font-weight:800;cursor:pointer}.admin-sidebar{display:flex;gap:8px;flex-wrap:wrap;padding:16px 5%;background:#141922;border-bottom:1px solid #2a303a}.admin-sidebar a{padding:10px 14px;color:#d4d8df;text-decoration:none;border-radius:7px}.admin-sidebar a:hover{background:#232b36;color:#35ed11}.admin-main{max-width:1200px;margin:auto;padding:40px 24px 70px}.admin-eyebrow{color:#35ed11;font-size:.8rem;font-weight:800;letter-spacing:1.5px}.admin-main h1{font-size:2.2rem;margin:8px 0 28px}.admin-stats{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px}.admin-stats article,.admin-panel{padding:24px;background:#161b23;border:1px solid #2b313c;border-radius:12px}.admin-stats span{display:block;color:#b6bfcc}.admin-stats strong{display:block;margin-top:12px;font-size:2rem;color:#35ed11}.admin-panel{margin-top:24px}.admin-panel h2{margin-top:0}.admin-panel p{color:#b6bfcc}.admin-table-wrap{overflow-x:auto} .admin-panel table{width:100%;border-collapse:collapse;margin-top:20px}.admin-panel th,.admin-panel td{text-align:left;padding:14px 12px;border-bottom:1px solid #303744}.admin-panel th{color:#35ed11}.admin-panel td a{color:#35ed11}@media(max-width:650px){.admin-login-card{padding:24px 20px}.admin-stats{grid-template-columns:1fr}.admin-main{padding:28px 16px}}
```

**Explicación línea por línea:**

- **Línea 1:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 2:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.

## `src/componentes/Articulo.css`

```css
0001 | /* Estilos propios del componente Articulo. */
0002 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0003 | .article { max-width: 850px; margin: 2rem auto; padding: 2rem; background: var(--surface, #151923); border-radius: 1rem; }
0004 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0005 | .article h1 { line-height: 1.2; }
```

**Explicación línea por línea:**

- **Línea 1:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 2:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 3:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 4:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 5:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.

## `src/componentes/Articulo.jsx`

```jsx
0001 | /** Explicación general: Muestra un artículo individual buscando su identificador en los datos exportados por Blogs.jsx. */
0002 | import './Articulo.css'
0003 | import { articulos } from './Blogs'
0004 | 
0005 | // Define el componente o función que se utilizará en esta parte de la aplicación.
0006 | export default function Articulo({ id }) {
0007 |   const articulo = articulos.find(item => item.id === Number(id))
0008 |   return (
0009 |     <main className="container section articulo-page"><a href="/blogs">← Volver a blogs</a>
0010 |       {articulo ? <article className="article"><p className="eyebrow">BLOG LEVELUP</p><h1>{articulo.titulo}</h1><p>{articulo.texto}</p></article> : <p>Artículo no encontrado.</p>}
0011 |     </main>
0012 |   )
0013 | }
```

**Explicación línea por línea:**

- **Línea 1:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 2:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 3:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 4:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 5:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 6:** Declara una función o componente; el nombre identifica la responsabilidad que implementa.
- **Línea 7:** Declara una variable que guarda un dato, función o resultado intermedio.
- **Línea 8:** Devuelve un valor o la interfaz JSX que React debe renderizar.
- **Línea 9:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 10:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 11:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 12:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 13:** Cierra el bloque, llamada o elemento que comenzó anteriormente.

## `src/componentes/Blogs.css`

```css
0001 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0002 | .blog-grid {
0003 |   display: grid;
0004 |   grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
0005 |   gap: 22px;
0006 |   margin-top: 25px;
0007 | }
0008 | 
0009 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0010 | .blog-grid .about-card {
0011 |   display: flex;
0012 |   flex-direction: column;
0013 |   align-items: flex-start;
0014 | }
0015 | 
0016 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0017 | .blog-grid .btn-small {
0018 |   margin-top: auto;
0019 | }
0020 | /* Reglas complementarias específicas de Blogs. */
0021 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0022 | .blogs-page h1 { margin-bottom: 1.25rem; }
0023 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0024 | .blog-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.25rem; }
```

**Explicación línea por línea:**

- **Línea 1:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 2:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 3:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 4:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 5:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 6:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 7:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 8:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 9:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 10:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 11:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 12:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 13:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 14:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 15:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 16:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 17:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 18:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 19:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 20:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 21:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 22:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 23:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 24:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.

## `src/componentes/Blogs.jsx`

```jsx
0001 | /** Explicación general: Define los artículos disponibles y dibuja una tarjeta por cada artículo usando map(). */
0002 | import './Blogs.css'
0003 | 
0004 | const articulos = [
0005 |   {
0006 |     id: 1,
0007 |     titulo: 'Guía para elegir tu primera tarjeta de vídeo',
0008 |     texto: 'Antes de elegir una tarjeta gráfica, considera la resolución en la que jugarás, el rendimiento esperado, la memoria disponible, el consumo energético y la compatibilidad con tu equipo.',
0009 |   },
0010 |   {
0011 |     id: 2,
0012 |     titulo: 'Mantenimiento preventivo: ¿cada cuánto limpiar tu PC?',
0013 |     texto: 'Mantener el equipo limpio ayuda a controlar las temperaturas. Revisa periódicamente filtros, ventiladores y rejillas; desconecta el equipo antes de limpiarlo y evita líquidos sobre los componentes.',
0014 |   },
0015 | ]
0016 | 
0017 | export { articulos }
0018 | 
0019 | // Define el componente o función que se utilizará en esta parte de la aplicación.
0020 | export default function Blogs() {
0021 |   return (
0022 |     <main className="container section blogs-page">
0023 |       <p className="eyebrow">NOTICIAS Y CONSEJOS</p>
0024 |       <h1>Blogs y Noticias</h1>
0025 |       <div className="blog-grid">
0026 |         {articulos.map((articulo) => (
0027 |           <article className="about-card" key={articulo.id}>
0028 |             <h2>{articulo.titulo}</h2>
0029 |             <p>{articulo.texto}</p>
0030 |             <a className="btn-small" href={`/blogs/${articulo.id}`}>
0031 |               Leer artículo
0032 |             </a>
0033 |           </article>
0034 |         ))}
0035 |       </div>
0036 |     </main>
0037 |   )
0038 | }
```

**Explicación línea por línea:**

- **Línea 1:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 2:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 3:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 4:** Declara una variable que guarda un dato, función o resultado intermedio.
- **Línea 5:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 6:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 7:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 8:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 9:** Cierra el bloque, llamada o elemento que comenzó anteriormente.
- **Línea 10:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 11:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 12:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 13:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 14:** Cierra el bloque, llamada o elemento que comenzó anteriormente.
- **Línea 15:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 16:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 17:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 18:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 19:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 20:** Declara una función o componente; el nombre identifica la responsabilidad que implementa.
- **Línea 21:** Devuelve un valor o la interfaz JSX que React debe renderizar.
- **Línea 22:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 23:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 24:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 25:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 26:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 27:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 28:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 29:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 30:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 31:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 32:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 33:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 34:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 35:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 36:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 37:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 38:** Cierra el bloque, llamada o elemento que comenzó anteriormente.

## `src/componentes/Carrito.css`

```css
0001 | /* Estilos propios del componente Carrito. */
0002 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0003 | .cart-list { display: grid; gap: 1rem; }
0004 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0005 | .cart-item { display: grid; grid-template-columns: 1fr auto auto auto; align-items: center; gap: 1rem; padding: 1rem; border: 1px solid #343b4b; border-radius: .8rem; }
0006 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0007 | .quantity { display: flex; align-items: center; gap: .75rem; }
0008 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0009 | .quantity button, .remove-btn { cursor: pointer; }
0010 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0011 | .cart-summary { margin-top: 1.5rem; text-align: right; }
0012 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0013 | .empty-state { padding: 2rem; text-align: center; border: 1px dashed #596174; border-radius: 1rem; }
0014 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0015 | @media (max-width: 700px) { .cart-item { grid-template-columns: 1fr 1fr; } }
```

**Explicación línea por línea:**

- **Línea 1:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 2:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 3:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 4:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 5:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 6:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 7:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 8:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 9:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 10:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 11:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 12:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 13:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 14:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 15:** Regla adaptable: aplica estilos solo cuando se cumple una condición de pantalla.

## `src/componentes/Carrito.jsx`

```jsx
0001 | /** Explicación general: Muestra los productos agregados, permite modificar cantidades y calcula el total de la compra. */
0002 | import './Carrito.css'
0003 | import { formatoPrecio } from '../data/productos'
0004 | 
0005 | // Define el componente o función que se utilizará en esta parte de la aplicación.
0006 | export default function Carrito({ carrito, setCarrito }) {
0007 |   const cambiarCantidad = (id, cantidad) => setCarrito(actual => actual.map(producto => producto.id === id ? { ...producto, cantidad } : producto).filter(producto => producto.cantidad > 0))
0008 |   // Suma precio por cantidad para calcular el importe total del carrito.
0009 |   const total = carrito.reduce((suma, producto) => suma + producto.precio * producto.cantidad, 0)
0010 | 
0011 |   // Define el componente o función que se utilizará en esta parte de la aplicación.
0012 |   function vaciarCarrito() {
0013 |     if (window.confirm('¿Vaciar el carrito?')) setCarrito([])
0014 |   }
0015 | 
0016 |   return (
0017 |     <main className="container section carrito-page">
0018 |       <p className="eyebrow">TU COMPRA</p><h1>🛒 Carrito de compras</h1>
0019 |       {!carrito.length ? (
0020 |         <div className="empty-state"><h2>Tu carrito está vacío</h2><p>Agrega productos para comenzar tu compra.</p><a className="btn" href="/productos">Ver productos</a></div>
0021 |       ) : (
0022 |         <>
0023 |           <div className="cart-list">{carrito.map(producto => (
0024 |             <article className="cart-item" key={producto.id}>
0025 |               <div><h3>{producto.nombre}</h3><p>{formatoPrecio(producto.precio)} por unidad</p></div>
0026 |               <div className="quantity"><button onClick={() => cambiarCantidad(producto.id, producto.cantidad - 1)} aria-label="Restar">−</button><span>{producto.cantidad}</span><button onClick={() => cambiarCantidad(producto.id, producto.cantidad + 1)} aria-label="Sumar">+</button></div>
0027 |               <strong>{formatoPrecio(producto.precio * producto.cantidad)}</strong>
0028 |               <button className="remove-btn" onClick={() => cambiarCantidad(producto.id, 0)}>Eliminar</button>
0029 |             </article>
0030 |           ))}</div>
0031 |           <div className="cart-summary"><h2>Total: {formatoPrecio(total)}</h2><button className="btn" onClick={() => window.alert('La pasarela de pago no está conectada en esta versión académica.')}>💳 Continuar al pago</button><button className="btn btn-secondary" onClick={vaciarCarrito}>Vaciar carrito</button></div>
0032 |         </>
0033 |       )}
0034 |     </main>
0035 |   )
0036 | }
```

**Explicación línea por línea:**

- **Línea 1:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 2:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 3:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 4:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 5:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 6:** Declara una función o componente; el nombre identifica la responsabilidad que implementa.
- **Línea 7:** Declara una variable que guarda un dato, función o resultado intermedio.
- **Línea 8:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 9:** Declara una variable que guarda un dato, función o resultado intermedio.
- **Línea 10:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 11:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 12:** Declara una función o componente; el nombre identifica la responsabilidad que implementa.
- **Línea 13:** Control de flujo: decide qué instrucciones se ejecutan según una condición.
- **Línea 14:** Cierra el bloque, llamada o elemento que comenzó anteriormente.
- **Línea 15:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 16:** Devuelve un valor o la interfaz JSX que React debe renderizar.
- **Línea 17:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 18:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 19:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 20:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 21:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 22:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 23:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 24:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 25:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 26:** Asocia una acción de usuario con una función que responde al evento.
- **Línea 27:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 28:** Asocia una acción de usuario con una función que responde al evento.
- **Línea 29:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 30:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 31:** Asocia una acción de usuario con una función que responde al evento.
- **Línea 32:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 33:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 34:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 35:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 36:** Cierra el bloque, llamada o elemento que comenzó anteriormente.

## `src/componentes/Catalogo.css`

```css
0001 | /* Estilos propios del componente Catalogo. */
0002 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0003 | .search-input { display: block; width: 100%; max-width: 560px; margin: 1.25rem 0 2rem; padding: .85rem 1rem; border: 1px solid #465066; border-radius: .6rem; }
```

**Explicación línea por línea:**

- **Línea 1:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 2:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 3:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.

## `src/componentes/Catalogo.jsx`

```jsx
0001 | /** Explicación general: Filtra el catálogo por nombre o descripción y delega cada tarjeta visual al componente Producto. */
0002 | import './Catalogo.css'
0003 | import { useState } from 'react'
0004 | import Producto from './Producto'
0005 | import { productos } from '../data/productos'
0006 | 
0007 | // Define el componente o función que se utilizará en esta parte de la aplicación.
0008 | export default function Catalogo({ agregar }) {
0009 |   // Guarda el texto que el usuario escribe en el buscador.
0010 |   const [busqueda, setBusqueda] = useState('')
0011 |   // Crea una lista nueva que contiene solo los productos coincidentes con la búsqueda.
0012 |   const lista = productos.filter(producto =>
0013 |     producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
0014 |     producto.descripcion.toLowerCase().includes(busqueda.toLowerCase())
0015 |   )
0016 | 
0017 |   return (
0018 |     <main className="container section catalogo-page">
0019 |       <p className="eyebrow">ENCUENTRA TU EQUIPO</p><h1>Productos</h1>
0020 |       <p className="lead">Hardware y accesorios seleccionados para tu setup.</p>
0021 |       <input className="search-input" value={busqueda} onChange={evento => setBusqueda(evento.target.value)} placeholder="Buscar productos..." aria-label="Buscar productos" />
0022 |       <div className="product-grid">{lista.map(producto => <Producto key={producto.id} producto={producto} onAgregar={agregar} />)}</div>
0023 |       {!lista.length && <p>No se encontraron productos.</p>}
0024 |     </main>
0025 |   )
0026 | }
```

**Explicación línea por línea:**

- **Línea 1:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 2:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 3:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 4:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 5:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 6:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 7:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 8:** Declara una función o componente; el nombre identifica la responsabilidad que implementa.
- **Línea 9:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 10:** Declara estado de React: la variable contiene el valor actual y la función asociada permite actualizarlo.
- **Línea 11:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 12:** Declara una variable que guarda un dato, función o resultado intermedio.
- **Línea 13:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 14:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 15:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 16:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 17:** Devuelve un valor o la interfaz JSX que React debe renderizar.
- **Línea 18:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 19:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 20:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 21:** Asocia una acción de usuario con una función que responde al evento.
- **Línea 22:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 23:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 24:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 25:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 26:** Cierra el bloque, llamada o elemento que comenzó anteriormente.

## `src/componentes/DetalleProducto.css`

```css
0001 | /* Estilos propios del componente DetalleProducto. */
0002 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0003 | .detail { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 2rem; align-items: center; margin-top: 1.5rem; }
0004 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0005 | .detail img { display: block; width: 100%; max-height: 520px; object-fit: contain; border-radius: 1rem; }
0006 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0007 | @media (max-width: 700px) { .detail { grid-template-columns: 1fr; } }
```

**Explicación línea por línea:**

- **Línea 1:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 2:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 3:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 4:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 5:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 6:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 7:** Regla adaptable: aplica estilos solo cuando se cumple una condición de pantalla.

## `src/componentes/DetalleProducto.jsx`

```jsx
0001 | /** Explicación general: Busca un producto por ID y presenta sus datos completos junto con la acción para agregarlo al carrito. */
0002 | import './DetalleProducto.css'
0003 | import { productos, formatoPrecio } from '../data/productos'
0004 | 
0005 | // Define el componente o función que se utilizará en esta parte de la aplicación.
0006 | export default function DetalleProducto({ id, agregar }) {
0007 |   const producto = productos.find(item => item.id === Number(id)) || productos[0]
0008 |   if (!producto) return <main className="container section detalle-producto-page"><h1>Producto no encontrado</h1><a href="/productos">Volver a productos</a></main>
0009 | 
0010 |   return (
0011 |     <main className="container section"><a href="/productos">← Volver a productos</a>
0012 |       <article className="detail"><img src={producto.imagen} alt={producto.nombre} /><div><p className="eyebrow">HARDWARE PC</p><h1>{producto.nombre}</h1><p>{producto.detalle}</p><h2>{formatoPrecio(producto.precio)}</h2><button className="btn" onClick={() => agregar(producto)}>Añadir al carrito</button></div></article>
0013 |     </main>
0014 |   )
0015 | }
```

**Explicación línea por línea:**

- **Línea 1:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 2:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 3:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 4:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 5:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 6:** Declara una función o componente; el nombre identifica la responsabilidad que implementa.
- **Línea 7:** Declara una variable que guarda un dato, función o resultado intermedio.
- **Línea 8:** Control de flujo: decide qué instrucciones se ejecutan según una condición.
- **Línea 9:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 10:** Devuelve un valor o la interfaz JSX que React debe renderizar.
- **Línea 11:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 12:** Asocia una acción de usuario con una función que responde al evento.
- **Línea 13:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 14:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 15:** Cierra el bloque, llamada o elemento que comenzó anteriormente.

## `src/componentes/Footer.css`

```css
0001 | /* Estilos propios del componente Footer. */
0002 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0003 | .site-footer { margin-top: 4rem; padding: 2.5rem 0; background: #10131b; color: #e8eaf0; }
0004 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0005 | .site-footer p { color: #b9bfcc; }
```

**Explicación línea por línea:**

- **Línea 1:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 2:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 3:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 4:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 5:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.

## `src/componentes/Footer.jsx`

```jsx
0001 | /** Explicación general: Pie de página común que se muestra debajo del contenido de las rutas. */
0002 | import './Footer.css'
0003 | // Define el componente o función que se utilizará en esta parte de la aplicación.
0004 | export default function Footer() {
0005 |   return (
0006 |     <footer className="site-footer footer-component">
0007 |       <div className="container">
0008 |         <h3>LEVELUP GAMING</h3>
0009 |         <p>Hardware, periféricos y cultura gamer en un solo lugar.</p>
0010 |         <p>© 2026 LevelUp Gaming - Derechos reservados</p>
0011 |       </div>
0012 |     </footer>
0013 |   )
0014 | }
```

**Explicación línea por línea:**

- **Línea 1:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 2:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 3:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 4:** Declara una función o componente; el nombre identifica la responsabilidad que implementa.
- **Línea 5:** Devuelve un valor o la interfaz JSX que React debe renderizar.
- **Línea 6:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 7:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 8:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 9:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 10:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 11:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 12:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 13:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 14:** Cierra el bloque, llamada o elemento que comenzó anteriormente.

## `src/componentes/Formulario.css`

```css
0001 | /* Estilos propios del componente Formulario. */
0002 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0003 | .formulario-page { max-width: 680px; margin: 0 auto; }
0004 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0005 | .formulario-page form { display: grid; gap: .8rem; }
0006 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0007 | .formulario-page input, .formulario-page textarea { width: 100%; padding: .8rem; border: 1px solid #465066; border-radius: .5rem; }
0008 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0009 | .formulario-mensaje { margin-top: 1rem; padding: .8rem; border-radius: .5rem; }
```

**Explicación línea por línea:**

- **Línea 1:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 2:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 3:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 4:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 5:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 6:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 7:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 8:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 9:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.

## `src/componentes/Formulario.jsx`

```jsx
0001 | /** Explicación general: Formulario reutilizable para iniciar sesión, registrar una cuenta o enviar un mensaje; valida los datos antes de mostrar confirmación. */
0002 | import './Formulario.css'
0003 | import { useState } from 'react'
0004 | import { validarCorreo, validarRUN } from '../utils/validaciones'
0005 | 
0006 | // Relaciona el tipo de formulario con el título visible.
0007 | const titulos = { login: 'Iniciar sesión', registro: 'Crear cuenta', contacto: 'Contacto' }
0008 | 
0009 | // Un mismo componente sirve para login, registro y contacto según la prop tipo.
0010 | export default function Formulario({ tipo }) {
0011 |   // Guarda el mensaje de validación que se mostrará al usuario.
0012 |   const [mensaje, setMensaje] = useState('')
0013 |   // Indica si el último envío fue válido para aplicar estilos de éxito o error.
0014 |   const [correcto, setCorrecto] = useState(false)
0015 | 
0016 |   // Se ejecuta al enviar el formulario y evita que el navegador recargue la página.
0017 |   function enviar(evento) {
0018 |     evento.preventDefault()
0019 |     // FormData lee los campos del formulario a partir de sus atributos name.
0020 |     const formulario = new FormData(evento.currentTarget)
0021 |     const correo = formulario.get('correo') || ''
0022 | 
0023 |     // Rechaza correos cuyo dominio no esté dentro de los permitidos.
0024 |     if (!validarCorreo(correo)) {
0025 |       setMensaje('Correo no permitido. Usa @duoc.cl, @profesor.duoc.cl o @gmail.com.')
0026 |       setCorrecto(false)
0027 |       return
0028 |     }
0029 |     // Solo el registro requiere validar el RUN chileno.
0030 |     if (tipo === 'registro' && !validarRUN(formulario.get('run') || '')) {
0031 |       setMensaje('El RUN ingresado no es válido.')
0032 |       setCorrecto(false)
0033 |       return
0034 |     }
0035 |     // El formulario de contacto exige que el comentario no esté vacío.
0036 |     if (tipo === 'contacto' && !String(formulario.get('comentario') || '').trim()) {
0037 |       setMensaje('Ingresa un comentario.')
0038 |       setCorrecto(false)
0039 |       return
0040 |     }
0041 | 
0042 |     // Muestra un mensaje diferente según el tipo de formulario enviado.
0043 |     setMensaje(tipo === 'contacto' ? 'Mensaje validado correctamente.' : tipo === 'registro' ? 'Registro validado correctamente.' : 'Inicio de sesión validado correctamente.')
0044 |     setCorrecto(true)
0045 |     if (tipo === 'login' && new URLSearchParams(window.location.search).get('redirect') === 'admin') window.location.href = '/admin'
0046 |   }
0047 | 
0048 |   return (
0049 |     <main className="container form-section formulario-page">
0050 |       {/* El evento onSubmit ejecuta la función enviar antes de recargar la página. */}
0051 |       <form className="form-card" onSubmit={enviar}>
0052 |         <p className="eyebrow">LEVELUP GAMING</p><h1>{titulos[tipo]}</h1>
0053 |         {/* Renderizado condicional: estos campos solo existen en el registro. */}
0054 |         {tipo === 'registro' && <><label>Nombre<input name="nombre" required maxLength="50" /></label><label>Apellidos<input name="apellidos" required maxLength="100" /></label><label>RUN<input name="run" required minLength="7" maxLength="9" placeholder="19011022K" /></label></>}
0055 |         <label>Correo<input name="correo" type="email" required maxLength="100" placeholder="usuario@gmail.com" /></label>
0056 |         {/* El contacto no solicita contraseña; login y registro sí. */}
0057 |         {tipo !== 'contacto' && <label>Contraseña<input name="password" type="password" required minLength="4" maxLength="10" /></label>}
0058 |         {tipo === 'registro' && <label>Dirección<input name="direccion" required maxLength="300" /></label>}
0059 |         {tipo === 'contacto' && <><label>Nombre<input name="nombre" required maxLength="100" /></label><label>Comentario<textarea name="comentario" required maxLength="500" rows="5" /></label></>}
0060 |         <button className="btn" type="submit">{tipo === 'registro' ? 'Registrarme' : tipo === 'contacto' ? 'Enviar mensaje' : 'Ingresar'}</button>
0061 |         {/* El mensaje aparece solo después de intentar enviar el formulario. */}
0062 |         {mensaje && <p className={correcto ? 'form-message success' : 'form-message error'} role="status">{mensaje}</p>}
0063 |         {tipo === 'login' && <p className="form-note">¿No tienes cuenta? <a href="/registro">Regístrate</a></p>}
0064 |       </form>
0065 |     </main>
0066 |   )
0067 | }
```

**Explicación línea por línea:**

- **Línea 1:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 2:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 3:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 4:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 5:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 6:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 7:** Declara una variable que guarda un dato, función o resultado intermedio.
- **Línea 8:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 9:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 10:** Declara una función o componente; el nombre identifica la responsabilidad que implementa.
- **Línea 11:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 12:** Declara estado de React: la variable contiene el valor actual y la función asociada permite actualizarlo.
- **Línea 13:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 14:** Declara estado de React: la variable contiene el valor actual y la función asociada permite actualizarlo.
- **Línea 15:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 16:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 17:** Declara una función o componente; el nombre identifica la responsabilidad que implementa.
- **Línea 18:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 19:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 20:** Declara una variable que guarda un dato, función o resultado intermedio.
- **Línea 21:** Declara una variable que guarda un dato, función o resultado intermedio.
- **Línea 22:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 23:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 24:** Control de flujo: decide qué instrucciones se ejecutan según una condición.
- **Línea 25:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 26:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 27:** Devuelve un valor o la interfaz JSX que React debe renderizar.
- **Línea 28:** Cierra el bloque, llamada o elemento que comenzó anteriormente.
- **Línea 29:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 30:** Control de flujo: decide qué instrucciones se ejecutan según una condición.
- **Línea 31:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 32:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 33:** Devuelve un valor o la interfaz JSX que React debe renderizar.
- **Línea 34:** Cierra el bloque, llamada o elemento que comenzó anteriormente.
- **Línea 35:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 36:** Control de flujo: decide qué instrucciones se ejecutan según una condición.
- **Línea 37:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 38:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 39:** Devuelve un valor o la interfaz JSX que React debe renderizar.
- **Línea 40:** Cierra el bloque, llamada o elemento que comenzó anteriormente.
- **Línea 41:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 42:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 43:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 44:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 45:** Control de flujo: decide qué instrucciones se ejecutan según una condición.
- **Línea 46:** Cierra el bloque, llamada o elemento que comenzó anteriormente.
- **Línea 47:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 48:** Devuelve un valor o la interfaz JSX que React debe renderizar.
- **Línea 49:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 50:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 51:** Asocia una acción de usuario con una función que responde al evento.
- **Línea 52:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 53:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 54:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 55:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 56:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 57:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 58:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 59:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 60:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 61:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 62:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 63:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 64:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 65:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 66:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 67:** Cierra el bloque, llamada o elemento que comenzó anteriormente.

## `src/componentes/Header.css`

```css
0001 | /* Estilos propios del componente Header. */
0002 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0003 | .site-header { position: relative; z-index: 2; }
0004 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0005 | .site-header a { text-decoration: none; }
0006 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0007 | .site-header nav { display: flex; flex-wrap: wrap; align-items: center; gap: 1rem; }
```

**Explicación línea por línea:**

- **Línea 1:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 2:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 3:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 4:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 5:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 6:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 7:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.

## `src/componentes/Header.jsx`

```jsx
0001 | /** Explicación general: Barra de navegación y contador del carrito; el estado local controla la apertura del menú móvil. */
0002 | import './Header.css'
0003 | import { useState } from 'react'
0004 | 
0005 | const enlaces = [
0006 |   ['Inicio', '/'],
0007 |   ['Productos', '/productos'],
0008 |   ['Blogs', '/blogs'],
0009 |   ['Nosotros', '/nosotros'],
0010 |   ['Contacto', '/contacto'],
0011 |   ['Ingresar', '/login'],
0012 | ]
0013 | 
0014 | // Define el componente o función que se utilizará en esta parte de la aplicación.
0015 | export default function Header({ cantidad }) {
0016 |   // Declara estado o lógica reactiva para controlar lo que muestra la interfaz.
0017 |   const [menuAbierto, setMenuAbierto] = useState(false)
0018 | 
0019 |   return (
0020 |     <header className="site-header">
0021 |       <div className="container nav-container">
0022 |         <a className="logo" href="/">LEVEL<span>UP</span> GAMING</a>
0023 |         <button className="menu-toggle" onClick={() => setMenuAbierto(!menuAbierto)} aria-label="Abrir menú" aria-expanded={menuAbierto}>☰</button>
0024 |         <nav className={menuAbierto ? 'nav-links abierto' : 'nav-links'}>
0025 |           {enlaces.map(([texto, url]) => <a key={url} href={url} onClick={() => setMenuAbierto(false)}>{texto}</a>)}
0026 |           <a href="/admin" onClick={() => setMenuAbierto(false)}>Admin</a>
0027 |           <a className="nav-cart" href="/carrito" onClick={() => setMenuAbierto(false)}>🛒 Carrito <b>{cantidad}</b></a>
0028 |         </nav>
0029 |       </div>
0030 |     </header>
0031 |   )
0032 | }
```

**Explicación línea por línea:**

- **Línea 1:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 2:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 3:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 4:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 5:** Declara una variable que guarda un dato, función o resultado intermedio.
- **Línea 6:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 7:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 8:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 9:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 10:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 11:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 12:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 13:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 14:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 15:** Declara una función o componente; el nombre identifica la responsabilidad que implementa.
- **Línea 16:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 17:** Declara estado de React: la variable contiene el valor actual y la función asociada permite actualizarlo.
- **Línea 18:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 19:** Devuelve un valor o la interfaz JSX que React debe renderizar.
- **Línea 20:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 21:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 22:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 23:** Asocia una acción de usuario con una función que responde al evento.
- **Línea 24:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 25:** Asocia una acción de usuario con una función que responde al evento.
- **Línea 26:** Asocia una acción de usuario con una función que responde al evento.
- **Línea 27:** Asocia una acción de usuario con una función que responde al evento.
- **Línea 28:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 29:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 30:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 31:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 32:** Cierra el bloque, llamada o elemento que comenzó anteriormente.

## `src/componentes/Inicio.css`

```css
0001 | /* CARRUSEL PRINCIPAL */
0002 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0003 | .hero-carrusel {
0004 |   width: 100%;
0005 |   padding: 0;
0006 |   margin: 0 auto;
0007 |   overflow: hidden;
0008 | }
0009 | 
0010 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0011 | .carrusel-contenedor {
0012 |   position: relative;
0013 |   width: 100%;
0014 |   height: clamp(220px, 39vw, 500px);
0015 |   overflow: hidden;
0016 |   background: #0b0d12;
0017 | }
0018 | 
0019 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0020 | .carrusel-slide {
0021 |   position: absolute;
0022 |   inset: 0;
0023 |   display: block;
0024 |   opacity: 0;
0025 |   visibility: hidden;
0026 |   transition: opacity 0.7s ease, visibility 0.7s ease;
0027 |   pointer-events: none;
0028 | }
0029 | 
0030 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0031 | .carrusel-slide.activo {
0032 |   opacity: 1;
0033 |   visibility: visible;
0034 |   pointer-events: auto;
0035 |   z-index: 1;
0036 | }
0037 | 
0038 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0039 | .carrusel-slide img {
0040 |   display: block;
0041 |   width: 100%;
0042 |   height: 100%;
0043 |   object-fit: cover;
0044 |   object-position: center;
0045 | }
0046 | 
0047 | 
0048 | /* FLECHAS DE NAVEGACIÓN */
0049 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0050 | .carrusel-flecha {
0051 |   position: absolute;
0052 |   top: 50%;
0053 |   z-index: 2;
0054 |   transform: translateY(-50%);
0055 | 
0056 |   border: none;
0057 |   outline: none;
0058 |   border-radius: 50%;
0059 | 
0060 |   width: 44px;
0061 |   height: 44px;
0062 | 
0063 |   background-color: transparent;
0064 |   color: #ffffff;
0065 | 
0066 |   font-size: 28px;
0067 |   cursor: pointer;
0068 | 
0069 |   transition: color 0.2s ease;
0070 | }
0071 | 
0072 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0073 | .carrusel-flecha:hover {
0074 |   background-color: transparent;
0075 |   color: #35ed11;
0076 | }
0077 | 
0078 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0079 | .carrusel-anterior {
0080 |   left: 20px;
0081 | }
0082 | 
0083 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0084 | .carrusel-siguiente {
0085 |   right: 20px;
0086 | }
0087 | 
0088 | /* INDICADORES */
0089 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0090 | .carrusel-indicadores {
0091 |   position: absolute;
0092 |   bottom: 20px;
0093 |   left: 50%;
0094 |   transform: translateX(-50%);
0095 |   display: flex;
0096 |   justify-content: center;
0097 |   align-items: center;
0098 |   gap: 8px;
0099 |   z-index: 2;
0100 | }
0101 | 
0102 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0103 | .carrusel-indicador {
0104 |   width: 32px;
0105 |   height: 4px;
0106 |   padding: 0;
0107 |   border: none;
0108 |   border-radius: 2px;
0109 |   background-color: #ffffff;
0110 |   opacity: 0.5;
0111 |   cursor: pointer;
0112 |   transition: background-color 0.2s ease, opacity 0.2s ease;
0113 | }
0114 | 
0115 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0116 | .carrusel-indicador.activo {
0117 |   background-color: #35ed11;
0118 |   opacity: 1;
0119 | }
0120 | 
0121 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0122 | .carrusel-indicador:hover {
0123 |   opacity: 1;
0124 | }
0125 | 
0126 | /* RESPONSIVE */
0127 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0128 | @media (max-width: 600px) {
0129 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0130 |   .carrusel-contenedor {
0131 |     height: 240px;
0132 |   }
0133 | 
0134 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0135 |   .carrusel-anterior {
0136 |     left: 10px;
0137 |   }
0138 | 
0139 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0140 |   .carrusel-siguiente {
0141 |     right: 10px;
0142 |   }
0143 | 
0144 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0145 |   .carrusel-flecha {
0146 |     width: 36px;
0147 |     height: 36px;
0148 |     font-size: 16px;
0149 |   }
0150 | }
0151 | 
0152 | /* marcas (sirve para mostrar las marcas de los productos) */
0153 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0154 | .brands {
0155 |     background: #12161d;
0156 |     padding: 45px 0;
0157 |     text-align: center
0158 | }
0159 | 
0160 | /* estos son los botones de marcas (en nuestro proyecto son enlaces) */
0161 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0162 | .brand-list {
0163 |     display: flex;
0164 |     justify-content: center;
0165 |     gap: 45px;
0166 |     flex-wrap: wrap;
0167 |     margin-top: 20px;
0168 |     font-weight: bold;
0169 |     color: #b9c0ca
0170 | }
0171 | 
0172 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0173 | .container {
0174 |     width: min(1120px, 92%);
0175 |     margin-inline: auto
0176 | }
0177 | 
0178 | /* Contenedor principal de categorías */
0179 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0180 | .category-grid {
0181 |   display: grid;
0182 |   grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Distribución uniforme */
0183 |   gap: 1.5rem; /* Espacio uniforme entre los botones */
0184 |   width: 100%;
0185 | }
0186 | 
0187 | /* Enlaces de categoría */
0188 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0189 | .category-grid a {
0190 |   display: block; /* Mantiene la tarjeta como bloque dentro del grid */
0191 |   padding: 28px;
0192 |   background: #151a22;
0193 |   border-radius: 12px;
0194 |   text-align: center;
0195 |   font-size: 18px;
0196 |   color: inherit;
0197 |   text-decoration: none;
0198 |   transition: outline 0.2s ease, transform 0.2s ease;
0199 | }
0200 | 
0201 | /* Borde verde al pasar el mouse */
0202 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0203 | .category-grid a:hover {
0204 |   outline: 2px solid #8cff00;
0205 | }
0206 | /* Reglas complementarias específicas de Inicio. */
0207 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0208 | .hero-carrusel { width: 100%; }
0209 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0210 | .carrusel-contenedor { position: relative; overflow: hidden; }
0211 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0212 | .carrusel-slide img { display: block; width: 100%; }
```

**Explicación línea por línea:**

- **Línea 1:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 2:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 3:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 4:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 5:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 6:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 7:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 8:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 9:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 10:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 11:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 12:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 13:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 14:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 15:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 16:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 17:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 18:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 19:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 20:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 21:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 22:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 23:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 24:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 25:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 26:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 27:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 28:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 29:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 30:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 31:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 32:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 33:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 34:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 35:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 36:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 37:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 38:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 39:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 40:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 41:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 42:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 43:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 44:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 45:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 46:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 47:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 48:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 49:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 50:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 51:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 52:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 53:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 54:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 55:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 56:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 57:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 58:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 59:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 60:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 61:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 62:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 63:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 64:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 65:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 66:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 67:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 68:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 69:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 70:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 71:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 72:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 73:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 74:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 75:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 76:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 77:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 78:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 79:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 80:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 81:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 82:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 83:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 84:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 85:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 86:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 87:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 88:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 89:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 90:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 91:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 92:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 93:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 94:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 95:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 96:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 97:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 98:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 99:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 100:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 101:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 102:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 103:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 104:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 105:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 106:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 107:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 108:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 109:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 110:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 111:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 112:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 113:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 114:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 115:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 116:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 117:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 118:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 119:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 120:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 121:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 122:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 123:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 124:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 125:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 126:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 127:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 128:** Regla adaptable: aplica estilos solo cuando se cumple una condición de pantalla.
- **Línea 129:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 130:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 131:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 132:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 133:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 134:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 135:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 136:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 137:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 138:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 139:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 140:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 141:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 142:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 143:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 144:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 145:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 146:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 147:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 148:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 149:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 150:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 151:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 152:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 153:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 154:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 155:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 156:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 157:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 158:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 159:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 160:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 161:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 162:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 163:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 164:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 165:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 166:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 167:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 168:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 169:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 170:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 171:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 172:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 173:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 174:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 175:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 176:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 177:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 178:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 179:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 180:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 181:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 182:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 183:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 184:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 185:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 186:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 187:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 188:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 189:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 190:** Parte de la hoja de estilos; contribuye a la presentación visual del sitio.
- **Línea 191:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 192:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 193:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 194:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 195:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 196:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 197:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 198:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 199:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 200:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 201:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 202:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 203:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 204:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 205:** Cierra el bloque de reglas CSS abierto anteriormente.
- **Línea 206:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 207:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 208:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 209:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 210:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 211:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 212:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.

## `src/componentes/Inicio.jsx`

```jsx
0001 | /** Explicación general: Página de inicio con carrusel de promociones y selección de productos destacados. */
0002 | import { useEffect, useState } from 'react'
0003 | import './Inicio.css'
0004 | import Producto from './Producto'
0005 | import { productos } from '../data/productos'
0006 | 
0007 | // Datos de las diapositivas: cada objeto guarda la ruta de imagen y su texto alternativo.
0008 | const imagenesCarrusel = [
0009 |   {
0010 |     src: '/imagenes/Imagen1.jpg',
0011 |     alt: 'Setups RGB: ilumina tu espacio de juego',
0012 |   },
0013 |   {
0014 |     src: '/imagenes/Imagen2.jpg',
0015 |     alt: 'Oferta especial: tarjetas gráficas de última generación',
0016 |   },
0017 |   {
0018 |     src: '/imagenes/Imagen3.jpg',
0019 |     alt: 'LevelUp Gaming: sube de nivel tu experiencia gamer',
0020 |   },
0021 | ]
0022 | 
0023 | // Página de inicio; recibe agregar como prop para enviar productos al carrito.
0024 | export default function Inicio({ agregar }) {
0025 |   // Guarda el índice de la diapositiva que se está mostrando.
0026 |   const [indiceActual, setIndiceActual] = useState(0)
0027 | 
0028 |   // Cambiar de imagen automáticamente cada 5 segundos
0029 |   // Inicia el cambio automático de diapositivas y limpia el intervalo al desmontar el componente.
0030 |   useEffect(() => {
0031 |     const intervalo = setInterval(() => {
0032 |       setIndiceActual(indice => (indice + 1) % imagenesCarrusel.length)
0033 |     }, 5000)
0034 | 
0035 |     return () => clearInterval(intervalo)
0036 |   }, [])
0037 | 
0038 |   // Retrocede una diapositiva y vuelve al final si estaba en la primera.
0039 |   const anterior = () => {
0040 |     setIndiceActual(indice =>
0041 |       (indice - 1 + imagenesCarrusel.length) % imagenesCarrusel.length
0042 |     )
0043 |   }
0044 | 
0045 |   // Avanza una diapositiva y vuelve al inicio al llegar a la última.
0046 |   const siguiente = () => {
0047 |     setIndiceActual(indice =>
0048 |       (indice + 1) % imagenesCarrusel.length
0049 |     )
0050 |   }
0051 | 
0052 |   return (
0053 |     <>
0054 |       {/* Carrusel principal: muestra las promociones y controles de navegación. */}
0055 |       <section className="hero-carrusel" aria-label="Promociones destacadas">
0056 |         <div className="carrusel-contenedor">
0057 |           {/* map crea un enlace por cada diapositiva usando su URL como clave estable. */}
0058 |           {imagenesCarrusel.map((imagen, indice) => (
0059 |             <a
0060 |               key={imagen.src}
0061 |               href="/productos"
0062 |               className={`carrusel-slide ${
0063 |                 indice === indiceActual ? 'activo' : ''
0064 |               }`}
0065 |               aria-hidden={indice !== indiceActual}
0066 |               tabIndex={indice === indiceActual ? 0 : -1}
0067 |             >
0068 |               <img src={imagen.src} alt={imagen.alt} />
0069 |             </a>
0070 |           ))}
0071 | 
0072 |           {/* Los botones permiten cambiar manualmente de diapositiva. */}
0073 |           <button
0074 |             type="button"
0075 |             className="carrusel-flecha carrusel-anterior"
0076 |             onClick={anterior}
0077 |             aria-label="Imagen anterior"
0078 |           >
0079 |             &#10094;
0080 |           </button>
0081 | 
0082 |           <button
0083 |             type="button"
0084 |             className="carrusel-flecha carrusel-siguiente"
0085 |             onClick={siguiente}
0086 |             aria-label="Imagen siguiente"
0087 |           >
0088 |             &#10095;
0089 |           </button>
0090 | 
0091 |           <div className="carrusel-indicadores">
0092 |             {imagenesCarrusel.map((imagen, indice) => (
0093 |               <button
0094 |                 key={imagen.src}
0095 |                 type="button"
0096 |                 className={`carrusel-indicador ${
0097 |                   indice === indiceActual ? 'activo' : ''
0098 |                 }`}
0099 |                 onClick={() => setIndiceActual(indice)}
0100 |                 aria-label={`Mostrar imagen ${indice + 1}`}
0101 |                 aria-current={indice === indiceActual ? 'true' : undefined}
0102 |               />
0103 |             ))}
0104 |           </div>
0105 |         </div>
0106 |       </section>
0107 | 
0108 |       {/* Productos destacados: muestra solo los primeros tres productos del catálogo. */}
0109 |       {/* Accesos rápidos a las categorías del catálogo. */}
0110 |       <section className="container section">
0111 |         <div className="section-heading">
0112 |             <h2>⚡ Ofertas relámpago</h2>
0113 |         </div>
0114 | 
0115 |         <div className="product-grid">
0116 |           {productos.slice(0, 3).map(producto => (
0117 |             <Producto
0118 |               key={producto.id}
0119 |               producto={producto}
0120 |               onAgregar={agregar}
0121 |             />
0122 |           ))}
0123 |         </div>
0124 |       </section>
0125 | 
0126 |       {/* Lista visual de marcas asociadas a la tienda. */}
0127 |       <section className="brands">
0128 |         <div className="container">
0129 |           <h2>Marcas asociadas</h2>
0130 |           <div className="brand-list">
0131 |             <span>LOGITECH</span>
0132 |             <span>ASUS</span>
0133 |             <span>AMD</span>
0134 |             <span>NVIDIA</span>
0135 |             <span>MSI</span>
0136 |           </div>
0137 |         </div>
0138 |       </section>
0139 | 
0140 |       <section className="container section">
0141 |         <h2>Categorías</h2>
0142 |         <div className="category-grid">
0143 |           <a href="/productos">🎧 Periféricos</a> 
0144 |           <a href="/productos">🖥️ Hardware PC</a>
0145 |           <a href="/productos">🪑 Sillas Gamer</a>
0146 |           <a href="/productos">🎮 Accesorios</a>
0147 |         </div>
0148 |       </section>
0149 |     </>
0150 |   )
0151 | }
```

**Explicación línea por línea:**

- **Línea 1:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 2:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 3:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 4:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 5:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 6:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 7:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 8:** Declara una variable que guarda un dato, función o resultado intermedio.
- **Línea 9:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 10:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 11:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 12:** Cierra el bloque, llamada o elemento que comenzó anteriormente.
- **Línea 13:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 14:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 15:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 16:** Cierra el bloque, llamada o elemento que comenzó anteriormente.
- **Línea 17:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 18:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 19:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 20:** Cierra el bloque, llamada o elemento que comenzó anteriormente.
- **Línea 21:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 22:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 23:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 24:** Declara una función o componente; el nombre identifica la responsabilidad que implementa.
- **Línea 25:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 26:** Declara estado de React: la variable contiene el valor actual y la función asociada permite actualizarlo.
- **Línea 27:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 28:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 29:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 30:** Ejecuta un efecto secundario cuando se monta el componente o cambian las dependencias indicadas.
- **Línea 31:** Declara una variable que guarda un dato, función o resultado intermedio.
- **Línea 32:** Función flecha: define una función breve que puede ejecutarse como manejador o transformación de datos.
- **Línea 33:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 34:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 35:** Devuelve un valor o la interfaz JSX que React debe renderizar.
- **Línea 36:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 37:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 38:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 39:** Declara una variable que guarda un dato, función o resultado intermedio.
- **Línea 40:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 41:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 42:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 43:** Cierra el bloque, llamada o elemento que comenzó anteriormente.
- **Línea 44:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 45:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 46:** Declara una variable que guarda un dato, función o resultado intermedio.
- **Línea 47:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 48:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 49:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 50:** Cierra el bloque, llamada o elemento que comenzó anteriormente.
- **Línea 51:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 52:** Devuelve un valor o la interfaz JSX que React debe renderizar.
- **Línea 53:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 54:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 55:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 56:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 57:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 58:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 59:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 60:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 61:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 62:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 63:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 64:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 65:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 66:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 67:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 68:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 69:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 70:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 71:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 72:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 73:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 74:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 75:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 76:** Asocia una acción de usuario con una función que responde al evento.
- **Línea 77:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 78:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 79:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 80:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 81:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 82:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 83:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 84:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 85:** Asocia una acción de usuario con una función que responde al evento.
- **Línea 86:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 87:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 88:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 89:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 90:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 91:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 92:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 93:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 94:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 95:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 96:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 97:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 98:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 99:** Asocia una acción de usuario con una función que responde al evento.
- **Línea 100:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 101:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 102:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 103:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 104:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 105:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 106:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 107:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 108:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 109:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 110:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 111:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 112:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 113:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 114:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 115:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 116:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 117:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 118:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 119:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 120:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 121:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 122:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 123:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 124:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 125:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 126:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 127:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 128:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 129:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 130:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 131:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 132:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 133:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 134:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 135:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 136:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 137:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 138:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 139:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 140:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 141:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 142:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 143:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 144:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 145:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 146:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 147:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 148:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 149:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 150:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 151:** Cierra el bloque, llamada o elemento que comenzó anteriormente.

## `src/componentes/Nosotros.css`

```css
0001 | /* Estilos propios del componente Nosotros. */
0002 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0003 | .about-card { margin: 1rem 0; padding: 1.5rem; border: 1px solid #343b4b; border-radius: .9rem; }
```

**Explicación línea por línea:**

- **Línea 1:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 2:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 3:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.

## `src/componentes/Nosotros.jsx`

```jsx
0001 | /** Explicación general: Presenta información descriptiva de la tienda y del propósito del proyecto. */
0002 | import './Nosotros.css'
0003 | // Define el componente o función que se utilizará en esta parte de la aplicación.
0004 | export default function Nosotros() {
0005 |   return (
0006 |     <main className="container section nosotros-page">
0007 |       <h1>Nosotros</h1>
0008 |       <section className="about-card"><h2>¿Quiénes somos?</h2><p>LevelUp Gaming es una tienda especializada en componentes de computación, periféricos RGB, monitores, sillas gamer y merchandising geek.</p>
0009 |         <p>Nuestro objetivo es ofrecer productos para gamers, entusiastas de la tecnología, streamers y creadores de contenido.</p></section>
0010 |       <section className="about-card"><h2>Nuestro equipo</h2><p>Proyecto desarrollado por estudiantes para la evaluación de desarrollo web.</p></section>
0011 |     </main>
0012 |   )
0013 | }
```

**Explicación línea por línea:**

- **Línea 1:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 2:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 3:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 4:** Declara una función o componente; el nombre identifica la responsabilidad que implementa.
- **Línea 5:** Devuelve un valor o la interfaz JSX que React debe renderizar.
- **Línea 6:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 7:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 8:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 9:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 10:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 11:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 12:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 13:** Cierra el bloque, llamada o elemento que comenzó anteriormente.

## `src/componentes/Producto.css`

```css
0001 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0002 | .producto-card{overflow:hidden;display:flex;flex-direction:column;background:#151a22;border:1px solid #292f39;border-radius:14px;transition:transform .2s,border-color .2s}.producto-card:hover{transform:translateY(-4px);border-color:#35ed11}.producto-card>img{width:100%;height:190px;object-fit:contain;background:#fff;padding:12px}.producto-info{padding:18px;display:flex;flex-direction:column;flex:1}.producto-info h3{margin:4px 0 8px;color:#fff}.producto-info p:not(.eyebrow){color:#c7ccd4;min-height:48px}.producto-info strong{font-size:1.25rem;margin:12px 0;color:#fff}.producto-actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:auto}.producto-actions .btn-small{flex:1}
0003 | 
0004 | /* Reglas complementarias específicas de Producto. */
0005 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0006 | .producto-card { overflow: hidden; }
0007 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0008 | .producto-card img { max-width: 100%; object-fit: contain; }
0009 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0010 | .producto-actions { display: flex; flex-wrap: wrap; gap: .5rem; }
```

**Explicación línea por línea:**

- **Línea 1:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 2:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 3:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 4:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 5:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 6:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 7:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 8:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.
- **Línea 9:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 10:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.

## `src/componentes/Producto.jsx`

```jsx
0001 | /** Explicación general: Tarjeta reutilizable que muestra imagen, descripción, precio y acciones de cada producto. */
0002 | // Importa los estilos que pertenecen únicamente a la tarjeta de producto.
0003 | import './Producto.css'
0004 | // Reutiliza la función que formatea los precios como pesos chilenos.
0005 | import { formatoPrecio } from '../data/productos'
0006 | 
0007 | // Recibe el objeto producto y la función onAgregar mediante props.
0008 | export default function Producto({ producto, onAgregar }) {
0009 |   // article agrupa semánticamente la información de una tarjeta de producto.
0010 |   return <article className="producto-card">
0011 |     <img src={producto.imagen} alt={producto.nombre} loading="lazy" onError={e => { e.currentTarget.style.display = 'none' }} />
0012 |     <div className="producto-info"><p className="eyebrow">HARDWARE GAMER</p><h3>{producto.nombre}</h3><p>{producto.descripcion}</p><strong>{formatoPrecio(producto.precio)}</strong>
0013 |     <div className="producto-actions"><a className="btn-small btn-outline" href={`/producto/${producto.id}`}>Ver producto</a><button className="btn-small" onClick={() => onAgregar(producto)}>Añadir al carrito</button></div></div>
0014 |   </article>
0015 | }
```

**Explicación línea por línea:**

- **Línea 1:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 2:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 3:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 4:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 5:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 6:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 7:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 8:** Declara una función o componente; el nombre identifica la responsabilidad que implementa.
- **Línea 9:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 10:** Devuelve un valor o la interfaz JSX que React debe renderizar.
- **Línea 11:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 12:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 13:** Asocia una acción de usuario con una función que responde al evento.
- **Línea 14:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 15:** Cierra el bloque, llamada o elemento que comenzó anteriormente.

## `src/data/productos.js`

```javascript
0001 | /** Explicación general: Datos estáticos del catálogo y función de utilidad para mostrar precios en pesos chilenos. */
0002 | // Catálogo de ejemplo: cada objeto contiene id, nombre, descripción, precio e imagen.
0003 | export const productos = [
0004 |  {id:1,nombre:'RTX Gaming Pro',descripcion:'Tarjeta gráfica de alto rendimiento.',precio:599990,imagen:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvxSxtVf9uB4_gn47kWjeiI3TZJxf_FzAVcgoIkcAApMJ8ecnziGnaQdA&s=10',detalle:'Potencia gráfica para jugar con gran calidad de imagen.'},
0005 |  {id:2,nombre:'Teclado RGB Pro',descripcion:'Teclado mecánico para gamers.',precio:79990,imagen:'https://cdnx.jumpseller.com/fantech-esports/image/39087132/thumb/1440/1440?1754504474',detalle:'Teclas mecánicas y retroiluminación RGB.'},
0006 |  {id:3,nombre:'Mouse Gamer',descripcion:'Mouse ergonómico de alta precisión.',precio:39990,imagen:'https://media.falabella.com/falabellaCL/147668350_01/w=1200,h=1200,fit=pad',detalle:'Precisión y comodidad para largas sesiones.'},
0007 |  {id:4,nombre:'Monitor 27 Gamer',descripcion:'Monitor para gaming competitivo.',precio:249990,imagen:'https://media.falabella.com/falabellaCL/147668350_01/w=1200,h=1200,fit=pad',detalle:'Pantalla amplia para disfrutar tus juegos.'},
0008 |  {id:5,nombre:'Silla Gamer',descripcion:'Comodidad para largas sesiones.',precio:189990,imagen:'https://static.myshop.cl/fotos/3/2/4/7/1/1_1749437617000.png',detalle:'Diseño pensado para sesiones de juego prolongadas.'},
0009 |  {id:6,nombre:'Audífonos Gamer',descripcion:'Audio inmersivo para tus partidas.',precio:69990,imagen:'https://cdnx.jumpseller.com/fantech-esports/image/39087132/thumb/1440/1440?1754504474',detalle:'Audio para sumergirte en cada partida.'}
0010 | ]
0011 | // Formatea un número usando separador de miles chileno y antepone el signo $.
0012 | export const formatoPrecio = n => '$' + Number(n).toLocaleString('es-CL')
```

**Explicación línea por línea:**

- **Línea 1:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 2:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 3:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 4:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 5:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 6:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 7:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 8:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 9:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 10:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 11:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 12:** Función flecha: define una función breve que puede ejecutarse como manejador o transformación de datos.

## `src/index.css`

```css
0001 | @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
0002 | /* Regla de estilo: define la presentación visual del selector siguiente. */
0003 | :root{font-family:Inter,Arial,Helvetica,sans-serif;color:#f4f4f4;background:#0b0d12;font-synthesis:none;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:400}*{box-sizing:border-box}html{min-width:320px;scroll-behavior:smooth}body{margin:0;min-width:320px;min-height:100vh;background:linear-gradient(to bottom,#0b0d12 0%,#0b0d12 70%,#35ed11 100%);background-attachment:fixed;line-height:1.6}a{color:inherit;text-decoration:none}button,input,textarea{font:inherit}button,a{-webkit-tap-highlight-color:transparent}button{cursor:pointer}img{max-width:100%;display:block}h1,h2,h3,p{margin-top:0}h1{font-size:clamp(2.2rem,5vw,3.5rem);line-height:1.1;margin-bottom:18px;color:#fff}h2{font-size:clamp(1.5rem,3vw,2rem);color:#fff}p{color:#c7ccd4}
```

**Explicación línea por línea:**

- **Línea 1:** Declaración CSS: propiedad y valor que controlan la apariencia o distribución visual.
- **Línea 2:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 3:** Selector CSS: define qué elemento o grupo de elementos recibe los estilos siguientes.

## `src/main.jsx`

```jsx
0001 | // StrictMode ayuda a detectar prácticas problemáticas durante el desarrollo.
0002 | import { StrictMode } from 'react'
0003 | // createRoot crea el punto de entrada de React dentro del elemento HTML #root.
0004 | import { createRoot } from 'react-dom/client'
0005 | import './index.css'
0006 | import App from './App.jsx'
0007 | 
0008 | // Renderiza la aplicación principal dentro del contenedor definido en index.html.
0009 | createRoot(document.getElementById('root')).render(
0010 |   <StrictMode>
0011 |     <App />
0012 |   </StrictMode>,
0013 | )
```

**Explicación línea por línea:**

- **Línea 1:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 2:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 3:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 4:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 5:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 6:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 7:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 8:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 9:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 10:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 11:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 12:** Elemento JSX: describe una parte de la interfaz. Las propiedades (props) configuran su contenido, estilo o comportamiento.
- **Línea 13:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.

## `src/test/AdminLogin.spec.jsx`

```jsx
0001 | /* Estructura de pruebas siguiendo el ejemplo del profesor: describe agrupa los casos e it define cada prueba individual. */
0002 | import React from 'react';
0003 | import {render, screen, fireEvent, cleanup} from '@testing-library/react';
0004 | import AdminLogin from '../admin/AdminLogin';
0005 | 
0006 | describe('AdminLogin', () => {
0007 |   
0008 |   // Limpia el DOM después de cada caso, igual que en el ejemplo del profesor.
0009 |   afterEach(() => cleanup());
0010 | /* Caso de prueba automatizado: verifica un comportamiento concreto del componente. */
0011 |   it('muestra los campos requeridos para ingresar', () => {
0012 |     render(<AdminLogin />);
0013 |     expect(screen.getByLabelText('Correo')).toBeTruthy();
0014 |     expect(screen.getByLabelText('Contraseña')).toBeTruthy();
0015 |   });
0016 |   /* Caso de prueba automatizado: verifica un comportamiento concreto del componente. */
0017 |   it('avisa si las credenciales son incorrectas', () => {
0018 |     render(<AdminLogin />);
0019 |     fireEvent.change(screen.getByLabelText('Correo'), { target: { value: 'mal@duoc.cl' } });
0020 |     fireEvent.change(screen.getByLabelText('Contraseña'), { target: { value: 'incorrecta' } });
0021 |     fireEvent.click(screen.getByRole('button', { name: 'Ingresar' }));
0022 |     expect(screen.getByRole('alert').textContent).toContain('incorrectos');
0023 |   });
0024 | });
```

**Explicación línea por línea:**

- **Línea 1:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 2:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 3:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 4:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 5:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 6:** Agrupa pruebas relacionadas bajo el nombre del componente o función.
- **Línea 7:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 8:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 9:** Función flecha: define una función breve que puede ejecutarse como manejador o transformación de datos.
- **Línea 10:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 11:** Define un caso de prueba individual con un comportamiento esperado.
- **Línea 12:** Monta el componente en un entorno de prueba para poder inspeccionar su interfaz.
- **Línea 13:** Comprueba que el resultado real coincida con el comportamiento esperado.
- **Línea 14:** Comprueba que el resultado real coincida con el comportamiento esperado.
- **Línea 15:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 16:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 17:** Define un caso de prueba individual con un comportamiento esperado.
- **Línea 18:** Monta el componente en un entorno de prueba para poder inspeccionar su interfaz.
- **Línea 19:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 20:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 21:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 22:** Comprueba que el resultado real coincida con el comportamiento esperado.
- **Línea 23:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 24:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.

## `src/test/Administracion.spec.jsx`

```jsx
0001 | /* Estructura de pruebas siguiendo el ejemplo del profesor: describe agrupa los casos e it define cada prueba individual. */
0002 | import React from 'react';
0003 | import {render, screen, cleanup} from '@testing-library/react';
0004 | import Administracion from '../admin/Administracion';
0005 | 
0006 | describe('Administracion', () => {
0007 |   
0008 |   // Limpia el DOM después de cada caso, igual que en el ejemplo del profesor.
0009 |   afterEach(() => cleanup());
0010 | afterEach(() => sessionStorage.removeItem('levelupAdminAutenticado'));
0011 |   /* Caso de prueba automatizado: verifica un comportamiento concreto del componente. */
0012 |   it('muestra el panel si existe una sesión administrativa', () => {
0013 |     sessionStorage.setItem('levelupAdminAutenticado', 'true');
0014 |     render(<Administracion />);
0015 |     expect(screen.getByRole('heading', { name: 'Panel administrativo' })).toBeTruthy();
0016 |     expect(screen.getByRole('heading', { name: 'Gestión de productos' })).toBeTruthy();
0017 |   });
0018 | });
```

**Explicación línea por línea:**

- **Línea 1:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 2:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 3:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 4:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 5:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 6:** Agrupa pruebas relacionadas bajo el nombre del componente o función.
- **Línea 7:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 8:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 9:** Función flecha: define una función breve que puede ejecutarse como manejador o transformación de datos.
- **Línea 10:** Función flecha: define una función breve que puede ejecutarse como manejador o transformación de datos.
- **Línea 11:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 12:** Define un caso de prueba individual con un comportamiento esperado.
- **Línea 13:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 14:** Monta el componente en un entorno de prueba para poder inspeccionar su interfaz.
- **Línea 15:** Comprueba que el resultado real coincida con el comportamiento esperado.
- **Línea 16:** Comprueba que el resultado real coincida con el comportamiento esperado.
- **Línea 17:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 18:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.

## `src/test/App.spec.jsx`

```jsx
0001 | /* Estructura de pruebas siguiendo el ejemplo del profesor: describe agrupa los casos e it define cada prueba individual. */
0002 | import React from 'react';
0003 | import {render, screen, cleanup} from '@testing-library/react';
0004 | import App from '../App';
0005 | 
0006 | describe('App', () => {
0007 |   
0008 |   // Limpia el DOM después de cada caso, igual que en el ejemplo del profesor.
0009 |   afterEach(() => cleanup());
0010 | /* Caso de prueba automatizado: verifica un comportamiento concreto del componente. */
0011 |   it('renderiza la estructura compartida de la aplicación', () => {
0012 |     window.history.pushState({}, '', '/');
0013 |     render(<App />);
0014 |     expect(screen.getByRole('link', { name: /LEVEL.*GAMING/ })).toBeTruthy();
0015 |     expect(screen.getByText(/Derechos reservados/)).toBeTruthy();
0016 |   });
0017 | });
```

**Explicación línea por línea:**

- **Línea 1:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 2:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 3:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 4:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 5:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 6:** Agrupa pruebas relacionadas bajo el nombre del componente o función.
- **Línea 7:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 8:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 9:** Función flecha: define una función breve que puede ejecutarse como manejador o transformación de datos.
- **Línea 10:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 11:** Define un caso de prueba individual con un comportamiento esperado.
- **Línea 12:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 13:** Monta el componente en un entorno de prueba para poder inspeccionar su interfaz.
- **Línea 14:** Comprueba que el resultado real coincida con el comportamiento esperado.
- **Línea 15:** Comprueba que el resultado real coincida con el comportamiento esperado.
- **Línea 16:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 17:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.

## `src/test/Blogs.spec.jsx`

```jsx
0001 | /* Estructura de pruebas siguiendo el ejemplo del profesor: describe agrupa los casos e it define cada prueba individual. */
0002 | import React from 'react';
0003 | import {render, screen, cleanup} from '@testing-library/react';
0004 | import Blogs from '../componentes/Blogs';
0005 | import Articulo from '../componentes/Articulo';
0006 | 
0007 | describe('Blogs y Articulo', () => {
0008 |   
0009 |   // Limpia el DOM después de cada caso, igual que en el ejemplo del profesor.
0010 |   afterEach(() => cleanup());
0011 | /* Caso de prueba automatizado: verifica un comportamiento concreto del componente. */
0012 |   it('muestra el encabezado y los artículos disponibles', () => {
0013 |     render(<Blogs />);
0014 |     expect(screen.getByRole('heading', { name: 'Blogs y Noticias' })).toBeTruthy();
0015 |     expect(screen.getAllByRole('link', { name: 'Leer artículo' }).length).toBeGreaterThan(0);
0016 |   });
0017 |   /* Caso de prueba automatizado: verifica un comportamiento concreto del componente. */
0018 |   it('muestra el detalle del artículo solicitado', () => {
0019 |     render(<Articulo id="1" />);
0020 |     expect(screen.getByText(/Guía para elegir tu primera tarjeta de vídeo/)).toBeTruthy();
0021 |   });
0022 |   /* Caso de prueba automatizado: verifica un comportamiento concreto del componente. */
0023 |   it('informa cuando el artículo no existe', () => {
0024 |     render(<Articulo id="999" />);
0025 |     expect(screen.getByText('Artículo no encontrado.')).toBeTruthy();
0026 |   });
0027 | });
```

**Explicación línea por línea:**

- **Línea 1:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 2:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 3:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 4:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 5:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 6:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 7:** Agrupa pruebas relacionadas bajo el nombre del componente o función.
- **Línea 8:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 9:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 10:** Función flecha: define una función breve que puede ejecutarse como manejador o transformación de datos.
- **Línea 11:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 12:** Define un caso de prueba individual con un comportamiento esperado.
- **Línea 13:** Monta el componente en un entorno de prueba para poder inspeccionar su interfaz.
- **Línea 14:** Comprueba que el resultado real coincida con el comportamiento esperado.
- **Línea 15:** Comprueba que el resultado real coincida con el comportamiento esperado.
- **Línea 16:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 17:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 18:** Define un caso de prueba individual con un comportamiento esperado.
- **Línea 19:** Monta el componente en un entorno de prueba para poder inspeccionar su interfaz.
- **Línea 20:** Comprueba que el resultado real coincida con el comportamiento esperado.
- **Línea 21:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 22:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 23:** Define un caso de prueba individual con un comportamiento esperado.
- **Línea 24:** Monta el componente en un entorno de prueba para poder inspeccionar su interfaz.
- **Línea 25:** Comprueba que el resultado real coincida con el comportamiento esperado.
- **Línea 26:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 27:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.

## `src/test/Carrito.spec.jsx`

```jsx
0001 | /* Estructura de pruebas siguiendo el ejemplo del profesor: describe agrupa los casos e it define cada prueba individual. */
0002 | import React from 'react';
0003 | import {render, screen, fireEvent, cleanup} from '@testing-library/react';
0004 | import Carrito from '../componentes/Carrito';
0005 | 
0006 | describe('Carrito', () => {
0007 |   
0008 |   // Limpia el DOM después de cada caso, igual que en el ejemplo del profesor.
0009 |   afterEach(() => cleanup());
0010 | /* Caso de prueba automatizado: verifica un comportamiento concreto del componente. */
0011 |   it('muestra un mensaje cuando está vacío', () => {
0012 |     render(<Carrito carrito={[]} setCarrito={() => {}} />);
0013 |     expect(screen.getByText('Tu carrito está vacío')).toBeTruthy();
0014 |   });
0015 |   /* Caso de prueba automatizado: verifica un comportamiento concreto del componente. */
0016 |   it('muestra los productos agregados', () => {
0017 |     const item = { id: 1, nombre: 'Mouse prueba', precio: 5000, cantidad: 2 };
0018 |     render(<Carrito carrito={[item]} setCarrito={() => {}} />);
0019 |     expect(screen.getByRole('heading', { name: 'Mouse prueba' })).toBeTruthy();
0020 |     expect(screen.getByText('2')).toBeTruthy();
0021 |   });
0022 | });
```

**Explicación línea por línea:**

- **Línea 1:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 2:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 3:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 4:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 5:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 6:** Agrupa pruebas relacionadas bajo el nombre del componente o función.
- **Línea 7:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 8:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 9:** Función flecha: define una función breve que puede ejecutarse como manejador o transformación de datos.
- **Línea 10:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 11:** Define un caso de prueba individual con un comportamiento esperado.
- **Línea 12:** Monta el componente en un entorno de prueba para poder inspeccionar su interfaz.
- **Línea 13:** Comprueba que el resultado real coincida con el comportamiento esperado.
- **Línea 14:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 15:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 16:** Define un caso de prueba individual con un comportamiento esperado.
- **Línea 17:** Declara una variable que guarda un dato, función o resultado intermedio.
- **Línea 18:** Monta el componente en un entorno de prueba para poder inspeccionar su interfaz.
- **Línea 19:** Comprueba que el resultado real coincida con el comportamiento esperado.
- **Línea 20:** Comprueba que el resultado real coincida con el comportamiento esperado.
- **Línea 21:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 22:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.

## `src/test/Catalogo.spec.jsx`

```jsx
0001 | /* Estructura de pruebas siguiendo el ejemplo del profesor: describe agrupa los casos e it define cada prueba individual. */
0002 | import React from 'react';
0003 | import {render, screen, fireEvent, cleanup} from '@testing-library/react';
0004 | import Catalogo from '../componentes/Catalogo';
0005 | 
0006 | describe('Catalogo', () => {
0007 |   
0008 |   // Limpia el DOM después de cada caso, igual que en el ejemplo del profesor.
0009 |   afterEach(() => cleanup());
0010 | /* Caso de prueba automatizado: verifica un comportamiento concreto del componente. */
0011 |   it('muestra el título y el campo de búsqueda', () => {
0012 |     render(<Catalogo agregar={() => {}} />);
0013 |     expect(screen.getByRole('heading', { name: 'Productos' })).toBeTruthy();
0014 |     expect(screen.getByRole('textbox', { name: 'Buscar productos' })).toBeTruthy();
0015 |   });
0016 |   /* Caso de prueba automatizado: verifica un comportamiento concreto del componente. */
0017 |   it('permite escribir una búsqueda', () => {
0018 |     render(<Catalogo agregar={() => {}} />);
0019 |     const campo = screen.getByRole('textbox', { name: 'Buscar productos' });
0020 |     fireEvent.change(campo, { target: { value: 'texto-imposible-de-encontrar-123' } });
0021 |     expect(screen.getByText('No se encontraron productos.')).toBeTruthy();
0022 |   });
0023 | });
```

**Explicación línea por línea:**

- **Línea 1:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 2:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 3:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 4:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 5:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 6:** Agrupa pruebas relacionadas bajo el nombre del componente o función.
- **Línea 7:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 8:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 9:** Función flecha: define una función breve que puede ejecutarse como manejador o transformación de datos.
- **Línea 10:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 11:** Define un caso de prueba individual con un comportamiento esperado.
- **Línea 12:** Monta el componente en un entorno de prueba para poder inspeccionar su interfaz.
- **Línea 13:** Comprueba que el resultado real coincida con el comportamiento esperado.
- **Línea 14:** Comprueba que el resultado real coincida con el comportamiento esperado.
- **Línea 15:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 16:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 17:** Define un caso de prueba individual con un comportamiento esperado.
- **Línea 18:** Monta el componente en un entorno de prueba para poder inspeccionar su interfaz.
- **Línea 19:** Declara una variable que guarda un dato, función o resultado intermedio.
- **Línea 20:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 21:** Comprueba que el resultado real coincida con el comportamiento esperado.
- **Línea 22:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 23:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.

## `src/test/DetalleProducto.spec.jsx`

```jsx
0001 | /* Estructura de pruebas siguiendo el ejemplo del profesor: describe agrupa los casos e it define cada prueba individual. */
0002 | import React from 'react';
0003 | import {render, screen, cleanup} from '@testing-library/react';
0004 | import DetalleProducto from '../componentes/DetalleProducto';
0005 | 
0006 | describe('DetalleProducto', () => {
0007 |   
0008 |   // Limpia el DOM después de cada caso, igual que en el ejemplo del profesor.
0009 |   afterEach(() => cleanup());
0010 | /* Caso de prueba automatizado: verifica un comportamiento concreto del componente. */
0011 |   it('muestra un detalle de producto con acción de compra', () => {
0012 |     render(<DetalleProducto id="1" agregar={() => {}} />);
0013 |     expect(screen.getByRole('button', { name: 'Añadir al carrito' })).toBeTruthy();
0014 |   });
0015 | });
```

**Explicación línea por línea:**

- **Línea 1:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 2:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 3:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 4:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 5:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 6:** Agrupa pruebas relacionadas bajo el nombre del componente o función.
- **Línea 7:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 8:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 9:** Función flecha: define una función breve que puede ejecutarse como manejador o transformación de datos.
- **Línea 10:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 11:** Define un caso de prueba individual con un comportamiento esperado.
- **Línea 12:** Monta el componente en un entorno de prueba para poder inspeccionar su interfaz.
- **Línea 13:** Comprueba que el resultado real coincida con el comportamiento esperado.
- **Línea 14:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 15:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.

## `src/test/Footer.spec.jsx`

```jsx
0001 | /* Estructura de pruebas siguiendo el ejemplo del profesor: describe agrupa los casos e it define cada prueba individual. */
0002 | import React from 'react';
0003 | import {render, screen, cleanup} from '@testing-library/react';
0004 | import Footer from '../componentes/Footer';
0005 | 
0006 | describe('Footer', () => {
0007 |   
0008 |   // Limpia el DOM después de cada caso, igual que en el ejemplo del profesor.
0009 |   afterEach(() => cleanup());
0010 | /* Caso de prueba automatizado: verifica un comportamiento concreto del componente. */
0011 |   it('muestra el nombre de la tienda y el aviso de derechos', () => {
0012 |     render(<Footer />);
0013 |     expect(screen.getByText('LEVELUP GAMING')).toBeTruthy();
0014 |     expect(screen.getByText(/Derechos reservados/)).toBeTruthy();
0015 |   });
0016 | });
```

**Explicación línea por línea:**

- **Línea 1:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 2:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 3:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 4:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 5:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 6:** Agrupa pruebas relacionadas bajo el nombre del componente o función.
- **Línea 7:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 8:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 9:** Función flecha: define una función breve que puede ejecutarse como manejador o transformación de datos.
- **Línea 10:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 11:** Define un caso de prueba individual con un comportamiento esperado.
- **Línea 12:** Monta el componente en un entorno de prueba para poder inspeccionar su interfaz.
- **Línea 13:** Comprueba que el resultado real coincida con el comportamiento esperado.
- **Línea 14:** Comprueba que el resultado real coincida con el comportamiento esperado.
- **Línea 15:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 16:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.

## `src/test/Formulario.spec.jsx`

```jsx
0001 | /* Estructura de pruebas siguiendo el ejemplo del profesor: describe agrupa los casos e it define cada prueba individual. */
0002 | import React from 'react';
0003 | import {render, screen, fireEvent, cleanup} from '@testing-library/react';
0004 | import Formulario from '../componentes/Formulario';
0005 | 
0006 | describe('Formulario', () => {
0007 |   
0008 |   // Limpia el DOM después de cada caso, igual que en el ejemplo del profesor.
0009 |   afterEach(() => cleanup());
0010 | /* Caso de prueba automatizado: verifica un comportamiento concreto del componente. */
0011 |   it('presenta los campos del inicio de sesión', () => {
0012 |     render(<Formulario tipo="login" />);
0013 |     expect(screen.getByRole('heading', { name: 'Iniciar sesión' })).toBeTruthy();
0014 |     expect(screen.getByPlaceholderText('usuario@gmail.com')).toBeTruthy();
0015 |   });
0016 |   /* Caso de prueba automatizado: verifica un comportamiento concreto del componente. */
0017 |   it('rechaza un correo con dominio no permitido', () => {
0018 |     render(<Formulario tipo="login" />);
0019 |     fireEvent.change(screen.getByPlaceholderText('usuario@gmail.com'), { target: { value: 'persona@ejemplo.com' } });
0020 |     fireEvent.change(screen.getByLabelText('Contraseña'), { target: { value: 'clave123' } });
0021 |     fireEvent.click(screen.getByRole('button', { name: 'Ingresar' }));
0022 |     expect(screen.getByText(/Correo no permitido/)).toBeTruthy();
0023 |   });
0024 |   /* Caso de prueba automatizado: verifica un comportamiento concreto del componente. */
0025 |   it('muestra los campos adicionales en registro', () => {
0026 |     render(<Formulario tipo="registro" />);
0027 |     expect(screen.getByRole('heading', { name: 'Crear cuenta' })).toBeTruthy();
0028 |     expect(screen.getByLabelText('RUN')).toBeTruthy();
0029 |   });
0030 | });
```

**Explicación línea por línea:**

- **Línea 1:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 2:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 3:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 4:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 5:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 6:** Agrupa pruebas relacionadas bajo el nombre del componente o función.
- **Línea 7:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 8:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 9:** Función flecha: define una función breve que puede ejecutarse como manejador o transformación de datos.
- **Línea 10:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 11:** Define un caso de prueba individual con un comportamiento esperado.
- **Línea 12:** Monta el componente en un entorno de prueba para poder inspeccionar su interfaz.
- **Línea 13:** Comprueba que el resultado real coincida con el comportamiento esperado.
- **Línea 14:** Comprueba que el resultado real coincida con el comportamiento esperado.
- **Línea 15:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 16:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 17:** Define un caso de prueba individual con un comportamiento esperado.
- **Línea 18:** Monta el componente en un entorno de prueba para poder inspeccionar su interfaz.
- **Línea 19:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 20:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 21:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 22:** Comprueba que el resultado real coincida con el comportamiento esperado.
- **Línea 23:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 24:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 25:** Define un caso de prueba individual con un comportamiento esperado.
- **Línea 26:** Monta el componente en un entorno de prueba para poder inspeccionar su interfaz.
- **Línea 27:** Comprueba que el resultado real coincida con el comportamiento esperado.
- **Línea 28:** Comprueba que el resultado real coincida con el comportamiento esperado.
- **Línea 29:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 30:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.

## `src/test/Header.spec.jsx`

```jsx
0001 | /* Estructura de pruebas siguiendo el ejemplo del profesor: describe agrupa los casos e it define cada prueba individual. */
0002 | import React from 'react';
0003 | import {render, screen, fireEvent, cleanup} from '@testing-library/react';
0004 | import Header from '../componentes/Header';
0005 | 
0006 | describe('Header', () => {
0007 |   
0008 |   // Limpia el DOM después de cada caso, igual que en el ejemplo del profesor.
0009 |   afterEach(() => cleanup());
0010 | /* Caso de prueba automatizado: verifica un comportamiento concreto del componente. */
0011 |   it('muestra enlaces principales y el contador del carrito', () => {
0012 |     render(<Header cantidad={3} />);
0013 |     expect(screen.getByRole('link', { name: /Productos/ })).toBeTruthy();
0014 |     expect(screen.getByText('3')).toBeTruthy();
0015 |   });
0016 |   /* Caso de prueba automatizado: verifica un comportamiento concreto del componente. */
0017 |   it('cambia el estado expandido del menú al pulsar el botón', () => {
0018 |     render(<Header cantidad={0} />);
0019 |     const boton = screen.getByRole('button', { name: 'Abrir menú' });
0020 |     fireEvent.click(boton);
0021 |     expect(boton.getAttribute('aria-expanded')).toBe('true');
0022 |   });
0023 | });
```

**Explicación línea por línea:**

- **Línea 1:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 2:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 3:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 4:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 5:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 6:** Agrupa pruebas relacionadas bajo el nombre del componente o función.
- **Línea 7:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 8:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 9:** Función flecha: define una función breve que puede ejecutarse como manejador o transformación de datos.
- **Línea 10:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 11:** Define un caso de prueba individual con un comportamiento esperado.
- **Línea 12:** Monta el componente en un entorno de prueba para poder inspeccionar su interfaz.
- **Línea 13:** Comprueba que el resultado real coincida con el comportamiento esperado.
- **Línea 14:** Comprueba que el resultado real coincida con el comportamiento esperado.
- **Línea 15:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 16:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 17:** Define un caso de prueba individual con un comportamiento esperado.
- **Línea 18:** Monta el componente en un entorno de prueba para poder inspeccionar su interfaz.
- **Línea 19:** Declara una variable que guarda un dato, función o resultado intermedio.
- **Línea 20:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 21:** Comprueba que el resultado real coincida con el comportamiento esperado.
- **Línea 22:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 23:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.

## `src/test/Inicio.spec.jsx`

```jsx
0001 | /* Estructura de pruebas siguiendo el ejemplo del profesor: describe agrupa los casos e it define cada prueba individual. */
0002 | import React from 'react';
0003 | import {render, screen, fireEvent, cleanup} from '@testing-library/react';
0004 | import Inicio from '../componentes/Inicio';
0005 | 
0006 | describe('Inicio', () => {
0007 |   
0008 |   // Limpia el DOM después de cada caso, igual que en el ejemplo del profesor.
0009 |   afterEach(() => cleanup());
0010 | /* Caso de prueba automatizado: verifica un comportamiento concreto del componente. */
0011 |   it('muestra el carrusel de promociones', () => {
0012 |     render(<Inicio agregar={() => {}} />);
0013 |     expect(screen.getByRole('region', { name: 'Promociones destacadas' })).toBeTruthy();
0014 |     expect(screen.getByRole('button', { name: 'Imagen siguiente' })).toBeTruthy();
0015 |   });
0016 |   /* Caso de prueba automatizado: verifica un comportamiento concreto del componente. */
0017 |   it('permite avanzar a la siguiente imagen', () => {
0018 |     render(<Inicio agregar={() => {}} />);
0019 |     fireEvent.click(screen.getByRole('button', { name: 'Imagen siguiente' }));
0020 |     expect(screen.getByRole('button', { name: 'Mostrar imagen 2' }).getAttribute('aria-current')).toBe('true');
0021 |   });
0022 | });
```

**Explicación línea por línea:**

- **Línea 1:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 2:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 3:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 4:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 5:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 6:** Agrupa pruebas relacionadas bajo el nombre del componente o función.
- **Línea 7:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 8:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 9:** Función flecha: define una función breve que puede ejecutarse como manejador o transformación de datos.
- **Línea 10:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 11:** Define un caso de prueba individual con un comportamiento esperado.
- **Línea 12:** Monta el componente en un entorno de prueba para poder inspeccionar su interfaz.
- **Línea 13:** Comprueba que el resultado real coincida con el comportamiento esperado.
- **Línea 14:** Comprueba que el resultado real coincida con el comportamiento esperado.
- **Línea 15:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 16:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 17:** Define un caso de prueba individual con un comportamiento esperado.
- **Línea 18:** Monta el componente en un entorno de prueba para poder inspeccionar su interfaz.
- **Línea 19:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 20:** Comprueba que el resultado real coincida con el comportamiento esperado.
- **Línea 21:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 22:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.

## `src/test/Nosotros.spec.jsx`

```jsx
0001 | /* Estructura de pruebas siguiendo el ejemplo del profesor: describe agrupa los casos e it define cada prueba individual. */
0002 | import React from 'react';
0003 | import {render, screen, cleanup} from '@testing-library/react';
0004 | import Nosotros from '../componentes/Nosotros';
0005 | 
0006 | describe('Nosotros', () => {
0007 |   
0008 |   // Limpia el DOM después de cada caso, igual que en el ejemplo del profesor.
0009 |   afterEach(() => cleanup());
0010 | /* Caso de prueba automatizado: verifica un comportamiento concreto del componente. */
0011 |   it('muestra la información de la tienda', () => {
0012 |     render(<Nosotros />);
0013 |     expect(screen.getByRole('heading', { name: 'Nosotros' })).toBeTruthy();
0014 |     expect(screen.getByRole('heading', { name: '¿Quiénes somos?' })).toBeTruthy();
0015 |   });
0016 | });
```

**Explicación línea por línea:**

- **Línea 1:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 2:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 3:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 4:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 5:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 6:** Agrupa pruebas relacionadas bajo el nombre del componente o función.
- **Línea 7:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 8:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 9:** Función flecha: define una función breve que puede ejecutarse como manejador o transformación de datos.
- **Línea 10:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 11:** Define un caso de prueba individual con un comportamiento esperado.
- **Línea 12:** Monta el componente en un entorno de prueba para poder inspeccionar su interfaz.
- **Línea 13:** Comprueba que el resultado real coincida con el comportamiento esperado.
- **Línea 14:** Comprueba que el resultado real coincida con el comportamiento esperado.
- **Línea 15:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 16:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.

## `src/test/Producto.spec.jsx`

```jsx
0001 | /* Estructura de pruebas siguiendo el ejemplo del profesor: describe agrupa los casos e it define cada prueba individual. */
0002 | import React from 'react';
0003 | import {render, screen, fireEvent, cleanup} from '@testing-library/react';
0004 | import Producto from '../componentes/Producto';
0005 | 
0006 | describe('Producto', () => {
0007 |   
0008 |   // Limpia el DOM después de cada caso, igual que en el ejemplo del profesor.
0009 |   afterEach(() => cleanup());
0010 | const producto = { id: 1, nombre: 'Producto de prueba', descripcion: 'Descripción de prueba', precio: 10000, imagen: '/imagen.jpg' };
0011 |   /* Caso de prueba automatizado: verifica un comportamiento concreto del componente. */
0012 |   it('muestra nombre, descripción y acciones', () => {
0013 |     render(<Producto producto={producto} onAgregar={() => {}} />);
0014 |     expect(screen.getByRole('heading', { name: 'Producto de prueba' })).toBeTruthy();
0015 |     expect(screen.getByText('Descripción de prueba')).toBeTruthy();
0016 |     expect(screen.getByRole('link', { name: 'Ver producto' })).toBeTruthy();
0017 |   });
0018 |   /* Caso de prueba automatizado: verifica un comportamiento concreto del componente. */
0019 |   it('llama a onAgregar cuando se presiona añadir al carrito', () => {
0020 |     const agregar = jasmine.createSpy('agregar');
0021 |     render(<Producto producto={producto} onAgregar={agregar} />);
0022 |     fireEvent.click(screen.getByRole('button', { name: 'Añadir al carrito' }));
0023 |     expect(agregar).toHaveBeenCalledWith(producto);
0024 |   });
0025 | });
```

**Explicación línea por línea:**

- **Línea 1:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 2:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 3:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 4:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 5:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 6:** Agrupa pruebas relacionadas bajo el nombre del componente o función.
- **Línea 7:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 8:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 9:** Función flecha: define una función breve que puede ejecutarse como manejador o transformación de datos.
- **Línea 10:** Declara una variable que guarda un dato, función o resultado intermedio.
- **Línea 11:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 12:** Define un caso de prueba individual con un comportamiento esperado.
- **Línea 13:** Monta el componente en un entorno de prueba para poder inspeccionar su interfaz.
- **Línea 14:** Comprueba que el resultado real coincida con el comportamiento esperado.
- **Línea 15:** Comprueba que el resultado real coincida con el comportamiento esperado.
- **Línea 16:** Comprueba que el resultado real coincida con el comportamiento esperado.
- **Línea 17:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 18:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 19:** Define un caso de prueba individual con un comportamiento esperado.
- **Línea 20:** Declara una variable que guarda un dato, función o resultado intermedio.
- **Línea 21:** Monta el componente en un entorno de prueba para poder inspeccionar su interfaz.
- **Línea 22:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 23:** Comprueba que el resultado real coincida con el comportamiento esperado.
- **Línea 24:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 25:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.

## `src/test/validaciones.spec.jsx`

```jsx
0001 | /* Estructura de pruebas siguiendo el ejemplo del profesor: describe agrupa los casos e it define cada prueba individual. */
0002 | import { validarCorreo, validarRUN } from '../utils/validaciones';
0003 | 
0004 | describe('validaciones', () => {
0005 |   /* Caso de prueba automatizado: verifica un comportamiento concreto del componente. */
0006 |   it('acepta los dominios de correo autorizados', () => {
0007 |     expect(validarCorreo('persona@duoc.cl')).toBeTrue();
0008 |     expect(validarCorreo('persona@gmail.com')).toBeTrue();
0009 |   });
0010 |   /* Caso de prueba automatizado: verifica un comportamiento concreto del componente. */
0011 |   it('rechaza dominios de correo no autorizados', () => {
0012 |     expect(validarCorreo('persona@ejemplo.com')).toBeFalse();
0013 |   });
0014 |   /* Caso de prueba automatizado: verifica un comportamiento concreto del componente. */
0015 |   it('acepta un RUN válido y rechaza uno inválido', () => {
0016 |     expect(validarRUN('11111111-1')).toBeTrue();
0017 |     expect(validarRUN('11111111-2')).toBeFalse();
0018 |   });
0019 | });
```

**Explicación línea por línea:**

- **Línea 1:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 2:** Importa un componente, hook, dato o archivo de estilos que este archivo necesita.
- **Línea 3:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 4:** Agrupa pruebas relacionadas bajo el nombre del componente o función.
- **Línea 5:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 6:** Define un caso de prueba individual con un comportamiento esperado.
- **Línea 7:** Comprueba que el resultado real coincida con el comportamiento esperado.
- **Línea 8:** Comprueba que el resultado real coincida con el comportamiento esperado.
- **Línea 9:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 10:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 11:** Define un caso de prueba individual con un comportamiento esperado.
- **Línea 12:** Comprueba que el resultado real coincida con el comportamiento esperado.
- **Línea 13:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 14:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 15:** Define un caso de prueba individual con un comportamiento esperado.
- **Línea 16:** Comprueba que el resultado real coincida con el comportamiento esperado.
- **Línea 17:** Comprueba que el resultado real coincida con el comportamiento esperado.
- **Línea 18:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 19:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.

## `src/utils/validaciones.js`

```javascript
0001 | /** Explicación general: Funciones auxiliares que validan los dominios de correo permitidos y el dígito verificador del RUN chileno. */
0002 | // Comprueba que el correo termine en uno de los dominios autorizados.
0003 | // Devuelve true si el correo termina en uno de los dominios autorizados.
0004 | export function validarCorreo(correo) {
0005 |   return /^[^\s@]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/i.test(correo)
0006 | }
0007 | 
0008 | // Normaliza el RUN y comprueba que su dígito verificador sea correcto.
0009 | // Normaliza el RUN y calcula el dígito verificador con el algoritmo módulo 11.
0010 | export function validarRUN(run) {
0011 |   // Convierte a mayúsculas y elimina puntos, guiones u otros caracteres no válidos.
0012 |   const limpio = run.toUpperCase().replace(/[^0-9K]/g, '')
0013 |   if (limpio.length < 7 || limpio.length > 9) return false
0014 | 
0015 |   // Separa el cuerpo numérico del RUN de su último carácter verificador.
0016 |   const cuerpo = limpio.slice(0, -1)
0017 |   let suma = 0
0018 |   let multiplicador = 2
0019 | 
0020 |   // Recorre los dígitos de derecha a izquierda y multiplica por la secuencia 2 a 7.
0021 |   for (let i = cuerpo.length - 1; i >= 0; i--) {
0022 |     suma += Number(cuerpo[i]) * multiplicador
0023 |     multiplicador = multiplicador === 7 ? 2 : multiplicador + 1
0024 |   }
0025 | 
0026 |   // Convierte el resto de la suma en el dígito verificador esperado.
0027 |   const resultado = 11 - (suma % 11)
0028 |   const digitoVerificador = resultado === 11 ? '0' : resultado === 10 ? 'K' : String(resultado)
0029 |   // Compara el dígito calculado con el último carácter ingresado.
0030 |   return limpio.slice(-1) === digitoVerificador
0031 | }
```

**Explicación línea por línea:**

- **Línea 1:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 2:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 3:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 4:** Declara una función o componente; el nombre identifica la responsabilidad que implementa.
- **Línea 5:** Devuelve un valor o la interfaz JSX que React debe renderizar.
- **Línea 6:** Cierra el bloque, llamada o elemento que comenzó anteriormente.
- **Línea 7:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 8:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 9:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 10:** Declara una función o componente; el nombre identifica la responsabilidad que implementa.
- **Línea 11:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 12:** Declara una variable que guarda un dato, función o resultado intermedio.
- **Línea 13:** Control de flujo: decide qué instrucciones se ejecutan según una condición.
- **Línea 14:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 15:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 16:** Declara una variable que guarda un dato, función o resultado intermedio.
- **Línea 17:** Declara una variable que guarda un dato, función o resultado intermedio.
- **Línea 18:** Declara una variable que guarda un dato, función o resultado intermedio.
- **Línea 19:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 20:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 21:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 22:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 23:** Instrucción o expresión de JavaScript/JSX; revisa el comentario del bloque cercano para entender su función dentro del componente.
- **Línea 24:** Cierra el bloque, llamada o elemento que comenzó anteriormente.
- **Línea 25:** Línea en blanco para separar bloques y facilitar la lectura.
- **Línea 26:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 27:** Declara una variable que guarda un dato, función o resultado intermedio.
- **Línea 28:** Declara una variable que guarda un dato, función o resultado intermedio.
- **Línea 29:** Comentario explicativo; documenta la intención del código sin cambiar su ejecución.
- **Línea 30:** Devuelve un valor o la interfaz JSX que React debe renderizar.
- **Línea 31:** Cierra el bloque, llamada o elemento que comenzó anteriormente.

