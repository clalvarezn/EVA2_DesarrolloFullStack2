# Guía de comprensión línea por línea — LevelUp Gaming

Esta guía recorre las líneas de los archivos JavaScript/JSX de la aplicación. La columna de explicación describe la función habitual de cada línea; cuando una línea contiene una expresión compleja, léela junto con las líneas anteriores y posteriores. Las líneas en blanco se incluyen para mantener la numeración original. Los archivos `*.spec.*` son pruebas automatizadas y no forman parte de la interfaz que se ejecuta en producción.

## Conceptos clave

- **Componente:** función que devuelve JSX y representa una parte de la interfaz.
- **Props:** datos que un componente recibe de su componente padre.
- **Estado (`useState`):** información que puede cambiar y volver a dibujar la interfaz.
- **Efecto (`useEffect`):** lógica para sincronizar React con almacenamiento, temporizadores u otros sistemas.
- **Evento:** acción del usuario como clic, escritura o envío de formulario.
- **CSS:** define colores, tamaños, distribución y comportamiento adaptable; se mantiene separado por componente.
- **Prueba (`*.spec.*`):** verifica que una función o componente se comporte como se espera.

## `src/App.jsx`

| Línea | Código | Explicación |
|---:|---|---|
| 1 | `import { useEffect, useMemo, useState } from 'react'` | Importa una dependencia, componente, hoja de estilos o función que este archivo necesita. |
| 2 | `import './App.css'` | Importa una dependencia, componente, hoja de estilos o función que este archivo necesita. |
| 3 | `import Header from './componentes/Header'` | Importa una dependencia, componente, hoja de estilos o función que este archivo necesita. |
| 4 | `import Footer from './componentes/Footer'` | Importa una dependencia, componente, hoja de estilos o función que este archivo necesita. |
| 5 | `import Inicio from './componentes/Inicio'` | Importa una dependencia, componente, hoja de estilos o función que este archivo necesita. |
| 6 | `import Catalogo from './componentes/Catalogo'` | Importa una dependencia, componente, hoja de estilos o función que este archivo necesita. |
| 7 | `import Carrito from './componentes/Carrito'` | Importa una dependencia, componente, hoja de estilos o función que este archivo necesita. |
| 8 | `import Formulario from './componentes/Formulario'` | Importa una dependencia, componente, hoja de estilos o función que este archivo necesita. |
| 9 | `import Nosotros from './componentes/Nosotros'` | Importa una dependencia, componente, hoja de estilos o función que este archivo necesita. |
| 10 | `import Blogs from './componentes/Blogs'` | Importa una dependencia, componente, hoja de estilos o función que este archivo necesita. |
| 11 | `import Articulo from './componentes/Articulo'` | Importa una dependencia, componente, hoja de estilos o función que este archivo necesita. |
| 12 | `import DetalleProducto from './componentes/DetalleProducto'` | Importa una dependencia, componente, hoja de estilos o función que este archivo necesita. |
| 13 | `import Administracion from './admin/Administracion'` | Importa una dependencia, componente, hoja de estilos o función que este archivo necesita. |
| 14 | `import AdminLogin from './admin/AdminLogin'` | Importa una dependencia, componente, hoja de estilos o función que este archivo necesita. |
| 15 | `` | Línea en blanco: separa visualmente bloques de código para facilitar la lectura. |
| 16 | `function leerCarrito() {` | Declara una función con la lógica que se ejecutará cuando sea llamada. |
| 17 | `  try { return JSON.parse(localStorage.getItem('levelupCarrito') \|\| '[]') }` | Controla errores para que un fallo pueda manejarse sin interrumpir inesperadamente la ejecución. |
| 18 | `  catch { return [] }` | Controla errores para que un fallo pueda manejarse sin interrumpir inesperadamente la ejecución. |
| 19 | `}` | Cierra el bloque, expresión, arreglo o llamada que se abrió anteriormente. |
| 20 | `` | Línea en blanco: separa visualmente bloques de código para facilitar la lectura. |
| 21 | `export default function App() {` | Declara y exporta el componente principal para que otros archivos puedan importarlo. |
| 22 | `  const [carrito, setCarrito] = useState(leerCarrito)` | Crea estado de React: el valor se conserva entre renderizados y su setter provoca una nueva representación. |
| 23 | `` | Línea en blanco: separa visualmente bloques de código para facilitar la lectura. |
| 24 | `  useEffect(() => {` | Define un efecto secundario que React ejecuta después del renderizado según sus dependencias. |
| 25 | `    localStorage.setItem('levelupCarrito', JSON.stringify(carrito))` | Instrucción de la lógica del componente o módulo; revisa el contexto de las líneas contiguas para entender cómo participa en el flujo. |
| 26 | `  }, [carrito])` | Cierra el bloque, expresión, arreglo o llamada que se abrió anteriormente. |
| 27 | `` | Línea en blanco: separa visualmente bloques de código para facilitar la lectura. |
| 28 | `  const agregar = producto => {` | Declara una variable constante cuyo identificador no se reasigna. |
| 29 | `    setCarrito(actual => {` | Actualiza un estado o invoca una función cuyo nombre comienza por set. |
| 30 | `      const existente = actual.find(item => item.id === producto.id)` | Busca el primer elemento que cumple una condición; devuelve undefined si no hay coincidencia. |
| 31 | `      return existente` | Instrucción de la lógica del componente o módulo; revisa el contexto de las líneas contiguas para entender cómo participa en el flujo. |
| 32 | `        ? actual.map(item => item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item)` | Recorre una colección y genera un elemento o valor por cada registro. |
| 33 | `        : [...actual, { ...producto, cantidad: 1 }]` | Instrucción de la lógica del componente o módulo; revisa el contexto de las líneas contiguas para entender cómo participa en el flujo. |
| 34 | `    })` | Cierra el bloque, expresión, arreglo o llamada que se abrió anteriormente. |
| 35 | `    window.alert(\`${producto.nombre} fue añadido al carrito.\`)` | Instrucción de la lógica del componente o módulo; revisa el contexto de las líneas contiguas para entender cómo participa en el flujo. |
| 36 | `  }` | Cierra el bloque, expresión, arreglo o llamada que se abrió anteriormente. |
| 37 | `` | Línea en blanco: separa visualmente bloques de código para facilitar la lectura. |
| 38 | `  const cantidadCarrito = useMemo(() => carrito.reduce((suma, producto) => suma + producto.cantidad, 0), [carrito])` | Memoriza un cálculo y lo vuelve a calcular cuando cambian sus dependencias. |
| 39 | `  const ruta = decodeURI(window.location.pathname).replace(/\/$/, '') \|\| '/'` | Declara una variable constante cuyo identificador no se reasigna. |
| 40 | `  const segmentos = ruta.split('/')` | Declara una variable constante cuyo identificador no se reasigna. |
| 41 | `  let pagina` | Declara una variable cuyo valor puede reasignarse. |
| 42 | `` | Línea en blanco: separa visualmente bloques de código para facilitar la lectura. |
| 43 | `  if (ruta === '/') pagina = <Inicio agregar={agregar} />` | Evalúa una condición para decidir qué bloque de lógica debe ejecutarse. |
| 44 | `  else if (ruta === '/productos') pagina = <Catalogo agregar={agregar} />` | Evalúa una condición para decidir qué bloque de lógica debe ejecutarse. |
| 45 | `  else if (ruta === '/carrito') pagina = <Carrito carrito={carrito} setCarrito={setCarrito} />` | Evalúa una condición para decidir qué bloque de lógica debe ejecutarse. |
| 46 | `  else if (ruta === '/login') pagina = <Formulario tipo="login" />` | Evalúa una condición para decidir qué bloque de lógica debe ejecutarse. |
| 47 | `  else if (ruta === '/registro') pagina = <Formulario tipo="registro" />` | Evalúa una condición para decidir qué bloque de lógica debe ejecutarse. |
| 48 | `  else if (ruta === '/contacto') pagina = <Formulario tipo="contacto" />` | Evalúa una condición para decidir qué bloque de lógica debe ejecutarse. |
| 49 | `  else if (ruta === '/nosotros') pagina = <Nosotros />` | Evalúa una condición para decidir qué bloque de lógica debe ejecutarse. |
| 50 | `  else if (ruta === '/blogs') pagina = <Blogs />` | Evalúa una condición para decidir qué bloque de lógica debe ejecutarse. |
| 51 | `  else if (segmentos[1] === 'blogs' && segmentos[2]) pagina = <Articulo id={segmentos[2]} />` | Evalúa una condición para decidir qué bloque de lógica debe ejecutarse. |
| 52 | `  else if (segmentos[1] === 'producto' && segmentos[2]) pagina = <DetalleProducto id={segmentos[2]} agregar={agregar} />` | Evalúa una condición para decidir qué bloque de lógica debe ejecutarse. |
| 53 | `  else if (ruta === '/admin') pagina = <AdminLogin />` | Evalúa una condición para decidir qué bloque de lógica debe ejecutarse. |
| 54 | `  else if (ruta === '/admin/dashboard') pagina = <Administracion />` | Evalúa una condición para decidir qué bloque de lógica debe ejecutarse. |
| 55 | `  else pagina = <main className="container section"><h1>Página no encontrada</h1><a className="btn" href="/">Volver al inicio</a></main>` | Evalúa una condición para decidir qué bloque de lógica debe ejecutarse. |
| 56 | `` | Línea en blanco: separa visualmente bloques de código para facilitar la lectura. |
| 57 | `  return <><Header cantidad={cantidadCarrito} />{pagina}<Footer /></>` | Instrucción de la lógica del componente o módulo; revisa el contexto de las líneas contiguas para entender cómo participa en el flujo. |
| 58 | `}` | Cierra el bloque, expresión, arreglo o llamada que se abrió anteriormente. |

## `src/admin/AdminLogin.jsx`

| Línea | Código | Explicación |
|---:|---|---|
| 1 | `/** Explicación general: Formulario de acceso de demostración al área administrativa; las credenciales son solo académicas y no equivalen a seguridad de servidor. */` | Comentario: documenta la intención del código; no se ejecuta. |
| 2 | `import './AdminLogin.css'` | Importa una dependencia, componente, hoja de estilos o función que este archivo necesita. |
| 3 | `import { useState } from 'react'` | Importa una dependencia, componente, hoja de estilos o función que este archivo necesita. |
| 4 | `import './admin.css'` | Importa una dependencia, componente, hoja de estilos o función que este archivo necesita. |
| 5 | `` | Línea en blanco: separa visualmente bloques de código para facilitar la lectura. |
| 6 | `// Acceso de demostración para el proyecto académico; no sustituye autenticación de servidor.` | Comentario: documenta la intención del código; no se ejecuta. |
| 7 | `const CORREO_ADMIN = 'admin@duoc.cl'` | Declara una variable constante cuyo identificador no se reasigna. |
| 8 | `const CLAVE_ADMIN = 'Admin1234'` | Declara una variable constante cuyo identificador no se reasigna. |
| 9 | `` | Línea en blanco: separa visualmente bloques de código para facilitar la lectura. |
| 10 | `export default function AdminLogin() {` | Declara y exporta el componente principal para que otros archivos puedan importarlo. |
| 11 | `  const [mensaje, setMensaje] = useState('')` | Crea estado de React: el valor se conserva entre renderizados y su setter provoca una nueva representación. |
| 12 | `  function ingresar(e) {` | Declara una función con la lógica que se ejecutará cuando sea llamada. |
| 13 | `    e.preventDefault()` | Instrucción de la lógica del componente o módulo; revisa el contexto de las líneas contiguas para entender cómo participa en el flujo. |
| 14 | `    const datos = new FormData(e.currentTarget)` | Declara una variable constante cuyo identificador no se reasigna. |
| 15 | `    const correo = String(datos.get('correo') \|\| '').trim().toLowerCase()` | Declara una variable constante cuyo identificador no se reasigna. |
| 16 | `    const clave = String(datos.get('password') \|\| '')` | Declara una variable constante cuyo identificador no se reasigna. |
| 17 | `    if (correo === CORREO_ADMIN && clave === CLAVE_ADMIN) {` | Evalúa una condición para decidir qué bloque de lógica debe ejecutarse. |
| 18 | `      sessionStorage.setItem('levelupAdminAutenticado', 'true')` | Instrucción de la lógica del componente o módulo; revisa el contexto de las líneas contiguas para entender cómo participa en el flujo. |
| 19 | `      window.location.href = '/admin/dashboard'` | Instrucción de la lógica del componente o módulo; revisa el contexto de las líneas contiguas para entender cómo participa en el flujo. |
| 20 | `    } else {` | Cierra el bloque, expresión, arreglo o llamada que se abrió anteriormente. |
| 21 | `      setMensaje('Correo o contraseña incorrectos. Revisa las credenciales de demostración.')` | Actualiza un estado o invoca una función cuyo nombre comienza por set. |
| 22 | `    }` | Cierra el bloque, expresión, arreglo o llamada que se abrió anteriormente. |
| 23 | `  }` | Cierra el bloque, expresión, arreglo o llamada que se abrió anteriormente. |
| 24 | `  return <main className="admin-login-page"><form className="admin-login-card" onSubmit={ingresar}>` | Asigna una clase CSS al elemento para controlar su presentación visual. |
| 25 | `    <h1>Iniciar sesión</h1>` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 26 | `    <label htmlFor="admin-correo">Correo</label><input id="admin-correo" name="correo" type="email" autoComplete="username" required />` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 27 | `    <label htmlFor="admin-password">Contraseña</label><input id="admin-password" name="password" type="password" autoComplete="current-password" required />` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 28 | `    <button className="admin-primary-btn" type="submit">Ingresar</button>` | Asigna una clase CSS al elemento para controlar su presentación visual. |
| 29 | `    {mensaje && <p className="admin-login-error" role="alert">{mensaje}</p>}` | Asigna una clase CSS al elemento para controlar su presentación visual. |
| 30 | `  </form></main>` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 31 | `}` | Cierra el bloque, expresión, arreglo o llamada que se abrió anteriormente. |

## `src/admin/Administracion.jsx`

| Línea | Código | Explicación |
|---:|---|---|
| 1 | `/** Explicación general: Panel de administración que verifica la sesión de demostración y muestra estadísticas y productos. */` | Comentario: documenta la intención del código; no se ejecuta. |
| 2 | `import './Administracion.css'` | Importa una dependencia, componente, hoja de estilos o función que este archivo necesita. |
| 3 | `import { useEffect } from 'react'` | Importa una dependencia, componente, hoja de estilos o función que este archivo necesita. |
| 4 | `import { productos } from '../data/productos'` | Importa una dependencia, componente, hoja de estilos o función que este archivo necesita. |
| 5 | `import './admin.css'` | Importa una dependencia, componente, hoja de estilos o función que este archivo necesita. |
| 6 | `` | Línea en blanco: separa visualmente bloques de código para facilitar la lectura. |
| 7 | `export default function Administracion() {` | Declara y exporta el componente principal para que otros archivos puedan importarlo. |
| 8 | `  useEffect(() => {` | Define un efecto secundario que React ejecuta después del renderizado según sus dependencias. |
| 9 | `    if (sessionStorage.getItem('levelupAdminAutenticado') !== 'true') window.location.replace('/admin')` | Evalúa una condición para decidir qué bloque de lógica debe ejecutarse. |
| 10 | `  }, [])` | Cierra el bloque, expresión, arreglo o llamada que se abrió anteriormente. |
| 11 | `  const cerrarSesion = () => { sessionStorage.removeItem('levelupAdminAutenticado'); window.location.href = '/admin' }` | Declara una variable constante cuyo identificador no se reasigna. |
| 12 | `  if (sessionStorage.getItem('levelupAdminAutenticado') !== 'true') return null` | Evalúa una condición para decidir qué bloque de lógica debe ejecutarse. |
| 13 | `  return <div className="admin-layout">` | Asigna una clase CSS al elemento para controlar su presentación visual. |
| 14 | `    <header className="admin-topbar"><a className="admin-brand" href="/admin/dashboard">LEVEL<span>UP</span> ADMIN</a><button onClick={cerrarSesion}>Cerrar sesión</button></header>` | Asigna una clase CSS al elemento para controlar su presentación visual. |
| 15 | `    <aside className="admin-sidebar"><a href="/admin/dashboard">▦ Dashboard</a><a href="/productos">▣ Productos de la tienda</a><a href="/">↗ Ver tienda</a></aside>` | Asigna una clase CSS al elemento para controlar su presentación visual. |
| 16 | `    <main className="admin-main"><p className="admin-eyebrow">LEVELUP GAMING / ADMINISTRACIÓN</p><h1>Panel administrativo</h1>` | Asigna una clase CSS al elemento para controlar su presentación visual. |
| 17 | `      <div className="admin-stats"><article><span>Productos en catálogo</span><strong>{productos.length}</strong></article><article><span>Sesión</span><strong>Activa</strong></a...` | Asigna una clase CSS al elemento para controlar su presentación visual. |
| 18 | `      <section className="admin-panel"><h2>Gestión de productos</h2><p>Consulta los productos publicados en el catálogo de la tienda.</p><div className="admin-table-wrap"><table...` | Recorre una colección y genera un elemento o valor por cada registro. |
| 19 | `    </main>` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 20 | `  </div>` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 21 | `}` | Cierra el bloque, expresión, arreglo o llamada que se abrió anteriormente. |

## `src/componentes/Articulo.jsx`

| Línea | Código | Explicación |
|---:|---|---|
| 1 | `/** Explicación general: Muestra un artículo individual buscando su identificador en los datos exportados por Blogs.jsx. */` | Comentario: documenta la intención del código; no se ejecuta. |
| 2 | `import './Articulo.css'` | Importa una dependencia, componente, hoja de estilos o función que este archivo necesita. |
| 3 | `import { articulos } from './Blogs'` | Importa una dependencia, componente, hoja de estilos o función que este archivo necesita. |
| 4 | `` | Línea en blanco: separa visualmente bloques de código para facilitar la lectura. |
| 5 | `export default function Articulo({ id }) {` | Declara y exporta el componente principal para que otros archivos puedan importarlo. |
| 6 | `  const articulo = articulos.find(item => item.id === Number(id))` | Busca el primer elemento que cumple una condición; devuelve undefined si no hay coincidencia. |
| 7 | `  return (` | Devuelve el resultado de la función; en un componente React suele ser la interfaz JSX. |
| 8 | `    <main className="container section articulo-page"><a href="/blogs">← Volver a blogs</a>` | Asigna una clase CSS al elemento para controlar su presentación visual. |
| 9 | `      {articulo ? <article className="article"><p className="eyebrow">BLOG LEVELUP</p><h1>{articulo.titulo}</h1><p>{articulo.texto}</p></article> : <p>Artículo no encontrado.</p>}` | Asigna una clase CSS al elemento para controlar su presentación visual. |
| 10 | `    </main>` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 11 | `  )` | Cierra el bloque, expresión, arreglo o llamada que se abrió anteriormente. |
| 12 | `}` | Cierra el bloque, expresión, arreglo o llamada que se abrió anteriormente. |

## `src/componentes/Blogs.jsx`

| Línea | Código | Explicación |
|---:|---|---|
| 1 | `/** Explicación general: Define los artículos disponibles y dibuja una tarjeta por cada artículo usando map(). */` | Comentario: documenta la intención del código; no se ejecuta. |
| 2 | `import './Blogs.css'` | Importa una dependencia, componente, hoja de estilos o función que este archivo necesita. |
| 3 | `` | Línea en blanco: separa visualmente bloques de código para facilitar la lectura. |
| 4 | `const articulos = [` | Declara una variable constante cuyo identificador no se reasigna. |
| 5 | `  {` | Abre una estructura de datos, una desestructuración o un bloque de expresión. |
| 6 | `    id: 1,` | Instrucción de la lógica del componente o módulo; revisa el contexto de las líneas contiguas para entender cómo participa en el flujo. |
| 7 | `    titulo: 'Guía para elegir tu primera tarjeta de vídeo',` | Instrucción de la lógica del componente o módulo; revisa el contexto de las líneas contiguas para entender cómo participa en el flujo. |
| 8 | `    texto: 'Antes de elegir una tarjeta gráfica, considera la resolución en la que jugarás, el rendimiento esperado, la memoria disponible, el consumo energético y la compatibil...` | Instrucción de la lógica del componente o módulo; revisa el contexto de las líneas contiguas para entender cómo participa en el flujo. |
| 9 | `  },` | Cierra el bloque, expresión, arreglo o llamada que se abrió anteriormente. |
| 10 | `  {` | Abre una estructura de datos, una desestructuración o un bloque de expresión. |
| 11 | `    id: 2,` | Instrucción de la lógica del componente o módulo; revisa el contexto de las líneas contiguas para entender cómo participa en el flujo. |
| 12 | `    titulo: 'Mantenimiento preventivo: ¿cada cuánto limpiar tu PC?',` | Instrucción de la lógica del componente o módulo; revisa el contexto de las líneas contiguas para entender cómo participa en el flujo. |
| 13 | `    texto: 'Mantener el equipo limpio ayuda a controlar las temperaturas. Revisa periódicamente filtros, ventiladores y rejillas; desconecta el equipo antes de limpiarlo y evita...` | Instrucción de la lógica del componente o módulo; revisa el contexto de las líneas contiguas para entender cómo participa en el flujo. |
| 14 | `  },` | Cierra el bloque, expresión, arreglo o llamada que se abrió anteriormente. |
| 15 | `]` | Cierra el bloque, expresión, arreglo o llamada que se abrió anteriormente. |
| 16 | `` | Línea en blanco: separa visualmente bloques de código para facilitar la lectura. |
| 17 | `export { articulos }` | Instrucción de la lógica del componente o módulo; revisa el contexto de las líneas contiguas para entender cómo participa en el flujo. |
| 18 | `` | Línea en blanco: separa visualmente bloques de código para facilitar la lectura. |
| 19 | `export default function Blogs() {` | Declara y exporta el componente principal para que otros archivos puedan importarlo. |
| 20 | `  return (` | Devuelve el resultado de la función; en un componente React suele ser la interfaz JSX. |
| 21 | `    <main className="container section">` | Asigna una clase CSS al elemento para controlar su presentación visual. |
| 22 | `      <p className="eyebrow">NOTICIAS Y CONSEJOS</p>` | Asigna una clase CSS al elemento para controlar su presentación visual. |
| 23 | `      <h1>Blogs y Noticias</h1>` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 24 | `      <div className="blog-grid">` | Asigna una clase CSS al elemento para controlar su presentación visual. |
| 25 | `        {articulos.map((articulo) => (` | Recorre una colección y genera un elemento o valor por cada registro. |
| 26 | `          <article className="about-card" key={articulo.id}>` | Asigna una clase CSS al elemento para controlar su presentación visual. |
| 27 | `            <h2>{articulo.titulo}</h2>` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 28 | `            <p>{articulo.texto}</p>` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 29 | `            <a className="btn-small" href={\`/blogs/${articulo.id}\`}>` | Asigna una clase CSS al elemento para controlar su presentación visual. |
| 30 | `              Leer artículo` | Instrucción de la lógica del componente o módulo; revisa el contexto de las líneas contiguas para entender cómo participa en el flujo. |
| 31 | `            </a>` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 32 | `          </article>` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 33 | `        ))}` | Cierra el bloque, expresión, arreglo o llamada que se abrió anteriormente. |
| 34 | `      </div>` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 35 | `    </main>` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 36 | `  )` | Cierra el bloque, expresión, arreglo o llamada que se abrió anteriormente. |
| 37 | `}` | Cierra el bloque, expresión, arreglo o llamada que se abrió anteriormente. |

## `src/componentes/Carrito.jsx`

| Línea | Código | Explicación |
|---:|---|---|
| 1 | `/** Explicación general: Muestra los productos agregados, permite modificar cantidades y calcula el total de la compra. */` | Comentario: documenta la intención del código; no se ejecuta. |
| 2 | `import './Carrito.css'` | Importa una dependencia, componente, hoja de estilos o función que este archivo necesita. |
| 3 | `import { formatoPrecio } from '../data/productos'` | Importa una dependencia, componente, hoja de estilos o función que este archivo necesita. |
| 4 | `` | Línea en blanco: separa visualmente bloques de código para facilitar la lectura. |
| 5 | `export default function Carrito({ carrito, setCarrito }) {` | Declara y exporta el componente principal para que otros archivos puedan importarlo. |
| 6 | `  const cambiarCantidad = (id, cantidad) => setCarrito(actual => actual.map(producto => producto.id === id ? { ...producto, cantidad } : producto).filter(producto => producto.ca...` | Recorre una colección y genera un elemento o valor por cada registro. |
| 7 | `  // Suma precio por cantidad para calcular el importe total del carrito.` | Comentario: documenta la intención del código; no se ejecuta. |
| 8 | `  const total = carrito.reduce((suma, producto) => suma + producto.precio * producto.cantidad, 0)` | Acumula los elementos de una colección en un único resultado, por ejemplo un total. |
| 9 | `` | Línea en blanco: separa visualmente bloques de código para facilitar la lectura. |
| 10 | `  function vaciarCarrito() {` | Declara una función con la lógica que se ejecutará cuando sea llamada. |
| 11 | `    if (window.confirm('¿Vaciar el carrito?')) setCarrito([])` | Evalúa una condición para decidir qué bloque de lógica debe ejecutarse. |
| 12 | `  }` | Cierra el bloque, expresión, arreglo o llamada que se abrió anteriormente. |
| 13 | `` | Línea en blanco: separa visualmente bloques de código para facilitar la lectura. |
| 14 | `  return (` | Devuelve el resultado de la función; en un componente React suele ser la interfaz JSX. |
| 15 | `    <main className="container section carrito-page">` | Asigna una clase CSS al elemento para controlar su presentación visual. |
| 16 | `      <p className="eyebrow">TU COMPRA</p><h1>🛒 Carrito de compras</h1>` | Asigna una clase CSS al elemento para controlar su presentación visual. |
| 17 | `      {!carrito.length ? (` | Abre una estructura de datos, una desestructuración o un bloque de expresión. |
| 18 | `        <div className="empty-state"><h2>Tu carrito está vacío</h2><p>Agrega productos para comenzar tu compra.</p><a className="btn" href="/productos">Ver productos</a></div>` | Asigna una clase CSS al elemento para controlar su presentación visual. |
| 19 | `      ) : (` | Cierra el bloque, expresión, arreglo o llamada que se abrió anteriormente. |
| 20 | `        <>` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 21 | `          <div className="cart-list">{carrito.map(producto => (` | Recorre una colección y genera un elemento o valor por cada registro. |
| 22 | `            <article className="cart-item" key={producto.id}>` | Asigna una clase CSS al elemento para controlar su presentación visual. |
| 23 | `              <div><h3>{producto.nombre}</h3><p>{formatoPrecio(producto.precio)} por unidad</p></div>` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 24 | `              <div className="quantity"><button onClick={() => cambiarCantidad(producto.id, producto.cantidad - 1)} aria-label="Restar">−</button><span>{producto.cantidad}</span...` | Define una función flecha; el código a la derecha se ejecuta cuando se invoca. |
| 25 | `              <strong>{formatoPrecio(producto.precio * producto.cantidad)}</strong>` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 26 | `              <button className="remove-btn" onClick={() => cambiarCantidad(producto.id, 0)}>Eliminar</button>` | Define una función flecha; el código a la derecha se ejecuta cuando se invoca. |
| 27 | `            </article>` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 28 | `          ))}</div>` | Cierra el bloque, expresión, arreglo o llamada que se abrió anteriormente. |
| 29 | `          <div className="cart-summary"><h2>Total: {formatoPrecio(total)}</h2><button className="btn" onClick={() => window.alert('La pasarela de pago no está conectada en esta ...` | Define una función flecha; el código a la derecha se ejecuta cuando se invoca. |
| 30 | `        </>` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 31 | `      )}` | Cierra el bloque, expresión, arreglo o llamada que se abrió anteriormente. |
| 32 | `    </main>` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 33 | `  )` | Cierra el bloque, expresión, arreglo o llamada que se abrió anteriormente. |
| 34 | `}` | Cierra el bloque, expresión, arreglo o llamada que se abrió anteriormente. |

## `src/componentes/Catalogo.jsx`

| Línea | Código | Explicación |
|---:|---|---|
| 1 | `/** Explicación general: Filtra el catálogo por nombre o descripción y delega cada tarjeta visual al componente Producto. */` | Comentario: documenta la intención del código; no se ejecuta. |
| 2 | `import './Catalogo.css'` | Importa una dependencia, componente, hoja de estilos o función que este archivo necesita. |
| 3 | `import { useState } from 'react'` | Importa una dependencia, componente, hoja de estilos o función que este archivo necesita. |
| 4 | `import Producto from './Producto'` | Importa una dependencia, componente, hoja de estilos o función que este archivo necesita. |
| 5 | `import { productos } from '../data/productos'` | Importa una dependencia, componente, hoja de estilos o función que este archivo necesita. |
| 6 | `` | Línea en blanco: separa visualmente bloques de código para facilitar la lectura. |
| 7 | `export default function Catalogo({ agregar }) {` | Declara y exporta el componente principal para que otros archivos puedan importarlo. |
| 8 | `  // Guarda el texto que el usuario escribe en el buscador.` | Comentario: documenta la intención del código; no se ejecuta. |
| 9 | `  const [busqueda, setBusqueda] = useState('')` | Crea estado de React: el valor se conserva entre renderizados y su setter provoca una nueva representación. |
| 10 | `  // Crea una lista nueva que contiene solo los productos coincidentes con la búsqueda.` | Comentario: documenta la intención del código; no se ejecuta. |
| 11 | `  const lista = productos.filter(producto =>` | Filtra una colección y conserva solo los elementos que cumplen la condición. |
| 12 | `    producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) \|\|` | Instrucción de la lógica del componente o módulo; revisa el contexto de las líneas contiguas para entender cómo participa en el flujo. |
| 13 | `    producto.descripcion.toLowerCase().includes(busqueda.toLowerCase())` | Instrucción de la lógica del componente o módulo; revisa el contexto de las líneas contiguas para entender cómo participa en el flujo. |
| 14 | `  )` | Cierra el bloque, expresión, arreglo o llamada que se abrió anteriormente. |
| 15 | `` | Línea en blanco: separa visualmente bloques de código para facilitar la lectura. |
| 16 | `  return (` | Devuelve el resultado de la función; en un componente React suele ser la interfaz JSX. |
| 17 | `    <main className="container section catalogo-page">` | Asigna una clase CSS al elemento para controlar su presentación visual. |
| 18 | `      <p className="eyebrow">ENCUENTRA TU EQUIPO</p><h1>Productos</h1>` | Asigna una clase CSS al elemento para controlar su presentación visual. |
| 19 | `      <p className="lead">Hardware y accesorios seleccionados para tu setup.</p>` | Asigna una clase CSS al elemento para controlar su presentación visual. |
| 20 | `      <input className="search-input" value={busqueda} onChange={evento => setBusqueda(evento.target.value)} placeholder="Buscar productos..." aria-label="Buscar productos" />` | Define una función flecha; el código a la derecha se ejecuta cuando se invoca. |
| 21 | `      <div className="product-grid">{lista.map(producto => <Producto key={producto.id} producto={producto} onAgregar={agregar} />)}</div>` | Recorre una colección y genera un elemento o valor por cada registro. |
| 22 | `      {!lista.length && <p>No se encontraron productos.</p>}` | Abre una estructura de datos, una desestructuración o un bloque de expresión. |
| 23 | `    </main>` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 24 | `  )` | Cierra el bloque, expresión, arreglo o llamada que se abrió anteriormente. |
| 25 | `}` | Cierra el bloque, expresión, arreglo o llamada que se abrió anteriormente. |

## `src/componentes/DetalleProducto.jsx`

| Línea | Código | Explicación |
|---:|---|---|
| 1 | `/** Explicación general: Busca un producto por ID y presenta sus datos completos junto con la acción para agregarlo al carrito. */` | Comentario: documenta la intención del código; no se ejecuta. |
| 2 | `import './DetalleProducto.css'` | Importa una dependencia, componente, hoja de estilos o función que este archivo necesita. |
| 3 | `import { productos, formatoPrecio } from '../data/productos'` | Importa una dependencia, componente, hoja de estilos o función que este archivo necesita. |
| 4 | `` | Línea en blanco: separa visualmente bloques de código para facilitar la lectura. |
| 5 | `export default function DetalleProducto({ id, agregar }) {` | Declara y exporta el componente principal para que otros archivos puedan importarlo. |
| 6 | `  const producto = productos.find(item => item.id === Number(id)) \|\| productos[0]` | Busca el primer elemento que cumple una condición; devuelve undefined si no hay coincidencia. |
| 7 | `  if (!producto) return <main className="container section detalle-producto-page"><h1>Producto no encontrado</h1><a href="/productos">Volver a productos</a></main>` | Evalúa una condición para decidir qué bloque de lógica debe ejecutarse. |
| 8 | `` | Línea en blanco: separa visualmente bloques de código para facilitar la lectura. |
| 9 | `  return (` | Devuelve el resultado de la función; en un componente React suele ser la interfaz JSX. |
| 10 | `    <main className="container section"><a href="/productos">← Volver a productos</a>` | Asigna una clase CSS al elemento para controlar su presentación visual. |
| 11 | `      <article className="detail"><img src={producto.imagen} alt={producto.nombre} /><div><p className="eyebrow">HARDWARE PC</p><h1>{producto.nombre}</h1><p>{producto.detalle}</...` | Define una función flecha; el código a la derecha se ejecuta cuando se invoca. |
| 12 | `    </main>` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 13 | `  )` | Cierra el bloque, expresión, arreglo o llamada que se abrió anteriormente. |
| 14 | `}` | Cierra el bloque, expresión, arreglo o llamada que se abrió anteriormente. |

## `src/componentes/Footer.jsx`

| Línea | Código | Explicación |
|---:|---|---|
| 1 | `/** Explicación general: Pie de página común que se muestra debajo del contenido de las rutas. */` | Comentario: documenta la intención del código; no se ejecuta. |
| 2 | `import './Footer.css'` | Importa una dependencia, componente, hoja de estilos o función que este archivo necesita. |
| 3 | `export default function Footer() {` | Declara y exporta el componente principal para que otros archivos puedan importarlo. |
| 4 | `  return (` | Devuelve el resultado de la función; en un componente React suele ser la interfaz JSX. |
| 5 | `    <footer className="site-footer footer-component">` | Asigna una clase CSS al elemento para controlar su presentación visual. |
| 6 | `      <div className="container">` | Asigna una clase CSS al elemento para controlar su presentación visual. |
| 7 | `        <h3>LEVELUP GAMING</h3>` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 8 | `        <p>Hardware, periféricos y cultura gamer en un solo lugar.</p>` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 9 | `        <p>© 2026 LevelUp Gaming - Derechos reservados</p>` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 10 | `      </div>` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 11 | `    </footer>` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 12 | `  )` | Cierra el bloque, expresión, arreglo o llamada que se abrió anteriormente. |
| 13 | `}` | Cierra el bloque, expresión, arreglo o llamada que se abrió anteriormente. |

## `src/componentes/Formulario.jsx`

| Línea | Código | Explicación |
|---:|---|---|
| 1 | `/** Explicación general: Formulario reutilizable para iniciar sesión, registrar una cuenta o enviar un mensaje; valida los datos antes de mostrar confirmación. */` | Comentario: documenta la intención del código; no se ejecuta. |
| 2 | `import './Formulario.css'` | Importa una dependencia, componente, hoja de estilos o función que este archivo necesita. |
| 3 | `import { useState } from 'react'` | Importa una dependencia, componente, hoja de estilos o función que este archivo necesita. |
| 4 | `import { validarCorreo, validarRUN } from '../utils/validaciones'` | Importa una dependencia, componente, hoja de estilos o función que este archivo necesita. |
| 5 | `` | Línea en blanco: separa visualmente bloques de código para facilitar la lectura. |
| 6 | `const titulos = { login: 'Iniciar sesión', registro: 'Crear cuenta', contacto: 'Contacto' }` | Declara una variable constante cuyo identificador no se reasigna. |
| 7 | `` | Línea en blanco: separa visualmente bloques de código para facilitar la lectura. |
| 8 | `export default function Formulario({ tipo }) {` | Declara y exporta el componente principal para que otros archivos puedan importarlo. |
| 9 | `  const [mensaje, setMensaje] = useState('')` | Crea estado de React: el valor se conserva entre renderizados y su setter provoca una nueva representación. |
| 10 | `  const [correcto, setCorrecto] = useState(false)` | Crea estado de React: el valor se conserva entre renderizados y su setter provoca una nueva representación. |
| 11 | `` | Línea en blanco: separa visualmente bloques de código para facilitar la lectura. |
| 12 | `  // Se ejecuta al enviar el formulario y evita que el navegador recargue la página.` | Comentario: documenta la intención del código; no se ejecuta. |
| 13 | `  function enviar(evento) {` | Declara una función con la lógica que se ejecutará cuando sea llamada. |
| 14 | `    evento.preventDefault()` | Instrucción de la lógica del componente o módulo; revisa el contexto de las líneas contiguas para entender cómo participa en el flujo. |
| 15 | `    const formulario = new FormData(evento.currentTarget)` | Declara una variable constante cuyo identificador no se reasigna. |
| 16 | `    const correo = formulario.get('correo') \|\| ''` | Declara una variable constante cuyo identificador no se reasigna. |
| 17 | `` | Línea en blanco: separa visualmente bloques de código para facilitar la lectura. |
| 18 | `    if (!validarCorreo(correo)) {` | Evalúa una condición para decidir qué bloque de lógica debe ejecutarse. |
| 19 | `      setMensaje('Correo no permitido. Usa @duoc.cl, @profesor.duoc.cl o @gmail.com.')` | Actualiza un estado o invoca una función cuyo nombre comienza por set. |
| 20 | `      setCorrecto(false)` | Actualiza un estado o invoca una función cuyo nombre comienza por set. |
| 21 | `      return` | Devuelve el resultado de la función; en un componente React suele ser la interfaz JSX. |
| 22 | `    }` | Cierra el bloque, expresión, arreglo o llamada que se abrió anteriormente. |
| 23 | `    if (tipo === 'registro' && !validarRUN(formulario.get('run') \|\| '')) {` | Evalúa una condición para decidir qué bloque de lógica debe ejecutarse. |
| 24 | `      setMensaje('El RUN ingresado no es válido.')` | Actualiza un estado o invoca una función cuyo nombre comienza por set. |
| 25 | `      setCorrecto(false)` | Actualiza un estado o invoca una función cuyo nombre comienza por set. |
| 26 | `      return` | Devuelve el resultado de la función; en un componente React suele ser la interfaz JSX. |
| 27 | `    }` | Cierra el bloque, expresión, arreglo o llamada que se abrió anteriormente. |
| 28 | `    if (tipo === 'contacto' && !String(formulario.get('comentario') \|\| '').trim()) {` | Evalúa una condición para decidir qué bloque de lógica debe ejecutarse. |
| 29 | `      setMensaje('Ingresa un comentario.')` | Actualiza un estado o invoca una función cuyo nombre comienza por set. |
| 30 | `      setCorrecto(false)` | Actualiza un estado o invoca una función cuyo nombre comienza por set. |
| 31 | `      return` | Devuelve el resultado de la función; en un componente React suele ser la interfaz JSX. |
| 32 | `    }` | Cierra el bloque, expresión, arreglo o llamada que se abrió anteriormente. |
| 33 | `` | Línea en blanco: separa visualmente bloques de código para facilitar la lectura. |
| 34 | `    setMensaje(tipo === 'contacto' ? 'Mensaje validado correctamente.' : tipo === 'registro' ? 'Registro validado correctamente.' : 'Inicio de sesión validado correctamente.')` | Actualiza un estado o invoca una función cuyo nombre comienza por set. |
| 35 | `    setCorrecto(true)` | Actualiza un estado o invoca una función cuyo nombre comienza por set. |
| 36 | `    if (tipo === 'login' && new URLSearchParams(window.location.search).get('redirect') === 'admin') window.location.href = '/admin'` | Evalúa una condición para decidir qué bloque de lógica debe ejecutarse. |
| 37 | `  }` | Cierra el bloque, expresión, arreglo o llamada que se abrió anteriormente. |
| 38 | `` | Línea en blanco: separa visualmente bloques de código para facilitar la lectura. |
| 39 | `  return (` | Devuelve el resultado de la función; en un componente React suele ser la interfaz JSX. |
| 40 | `    <main className="container form-section">` | Asigna una clase CSS al elemento para controlar su presentación visual. |
| 41 | `      <form className="form-card" onSubmit={enviar}>` | Asigna una clase CSS al elemento para controlar su presentación visual. |
| 42 | `        <p className="eyebrow">LEVELUP GAMING</p><h1>{titulos[tipo]}</h1>` | Asigna una clase CSS al elemento para controlar su presentación visual. |
| 43 | `        {tipo === 'registro' && <><label>Nombre<input name="nombre" required maxLength="50" /></label><label>Apellidos<input name="apellidos" required maxLength="100" /></label>...` | Abre una estructura de datos, una desestructuración o un bloque de expresión. |
| 44 | `        <label>Correo<input name="correo" type="email" required maxLength="100" placeholder="usuario@gmail.com" /></label>` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 45 | `        {tipo !== 'contacto' && <label>Contraseña<input name="password" type="password" required minLength="4" maxLength="10" /></label>}` | Abre una estructura de datos, una desestructuración o un bloque de expresión. |
| 46 | `        {tipo === 'registro' && <label>Dirección<input name="direccion" required maxLength="300" /></label>}` | Abre una estructura de datos, una desestructuración o un bloque de expresión. |
| 47 | `        {tipo === 'contacto' && <><label>Nombre<input name="nombre" required maxLength="100" /></label><label>Comentario<textarea name="comentario" required maxLength="500" rows...` | Abre una estructura de datos, una desestructuración o un bloque de expresión. |
| 48 | `        <button className="btn" type="submit">{tipo === 'registro' ? 'Registrarme' : tipo === 'contacto' ? 'Enviar mensaje' : 'Ingresar'}</button>` | Asigna una clase CSS al elemento para controlar su presentación visual. |
| 49 | `        {mensaje && <p className={correcto ? 'form-message success' : 'form-message error'} role="status">{mensaje}</p>}` | Asigna una clase CSS al elemento para controlar su presentación visual. |
| 50 | `        {tipo === 'login' && <p className="form-note">¿No tienes cuenta? <a href="/registro">Regístrate</a></p>}` | Asigna una clase CSS al elemento para controlar su presentación visual. |
| 51 | `      </form>` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 52 | `    </main>` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 53 | `  )` | Cierra el bloque, expresión, arreglo o llamada que se abrió anteriormente. |
| 54 | `}` | Cierra el bloque, expresión, arreglo o llamada que se abrió anteriormente. |

## `src/componentes/Header.jsx`

| Línea | Código | Explicación |
|---:|---|---|
| 1 | `/** Explicación general: Barra de navegación y contador del carrito; el estado local controla la apertura del menú móvil. */` | Comentario: documenta la intención del código; no se ejecuta. |
| 2 | `import './Header.css'` | Importa una dependencia, componente, hoja de estilos o función que este archivo necesita. |
| 3 | `import { useState } from 'react'` | Importa una dependencia, componente, hoja de estilos o función que este archivo necesita. |
| 4 | `` | Línea en blanco: separa visualmente bloques de código para facilitar la lectura. |
| 5 | `const enlaces = [` | Declara una variable constante cuyo identificador no se reasigna. |
| 6 | `  ['Inicio', '/'],` | Abre una estructura de datos, una desestructuración o un bloque de expresión. |
| 7 | `  ['Productos', '/productos'],` | Abre una estructura de datos, una desestructuración o un bloque de expresión. |
| 8 | `  ['Blogs', '/blogs'],` | Abre una estructura de datos, una desestructuración o un bloque de expresión. |
| 9 | `  ['Nosotros', '/nosotros'],` | Abre una estructura de datos, una desestructuración o un bloque de expresión. |
| 10 | `  ['Contacto', '/contacto'],` | Abre una estructura de datos, una desestructuración o un bloque de expresión. |
| 11 | `  ['Ingresar', '/login'],` | Abre una estructura de datos, una desestructuración o un bloque de expresión. |
| 12 | `]` | Cierra el bloque, expresión, arreglo o llamada que se abrió anteriormente. |
| 13 | `` | Línea en blanco: separa visualmente bloques de código para facilitar la lectura. |
| 14 | `export default function Header({ cantidad }) {` | Declara y exporta el componente principal para que otros archivos puedan importarlo. |
| 15 | `  const [menuAbierto, setMenuAbierto] = useState(false)` | Crea estado de React: el valor se conserva entre renderizados y su setter provoca una nueva representación. |
| 16 | `` | Línea en blanco: separa visualmente bloques de código para facilitar la lectura. |
| 17 | `  return (` | Devuelve el resultado de la función; en un componente React suele ser la interfaz JSX. |
| 18 | `    <header className="site-header">` | Asigna una clase CSS al elemento para controlar su presentación visual. |
| 19 | `      <div className="container nav-container">` | Asigna una clase CSS al elemento para controlar su presentación visual. |
| 20 | `        <a className="logo" href="/">LEVEL<span>UP</span> GAMING</a>` | Asigna una clase CSS al elemento para controlar su presentación visual. |
| 21 | `        <button className="menu-toggle" onClick={() => setMenuAbierto(!menuAbierto)} aria-label="Abrir menú" aria-expanded={menuAbierto}>☰</button>` | Define una función flecha; el código a la derecha se ejecuta cuando se invoca. |
| 22 | `        <nav className={menuAbierto ? 'nav-links abierto' : 'nav-links'}>` | Asigna una clase CSS al elemento para controlar su presentación visual. |
| 23 | `          {enlaces.map(([texto, url]) => <a key={url} href={url} onClick={() => setMenuAbierto(false)}>{texto}</a>)}` | Recorre una colección y genera un elemento o valor por cada registro. |
| 24 | `          <a href="/admin" onClick={() => setMenuAbierto(false)}>Admin</a>` | Define una función flecha; el código a la derecha se ejecuta cuando se invoca. |
| 25 | `          <a className="nav-cart" href="/carrito" onClick={() => setMenuAbierto(false)}>🛒 Carrito <b>{cantidad}</b></a>` | Define una función flecha; el código a la derecha se ejecuta cuando se invoca. |
| 26 | `        </nav>` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 27 | `      </div>` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 28 | `    </header>` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 29 | `  )` | Cierra el bloque, expresión, arreglo o llamada que se abrió anteriormente. |
| 30 | `}` | Cierra el bloque, expresión, arreglo o llamada que se abrió anteriormente. |

## `src/componentes/Inicio.jsx`

| Línea | Código | Explicación |
|---:|---|---|
| 1 | `/** Explicación general: Página de inicio con carrusel de promociones y selección de productos destacados. */` | Comentario: documenta la intención del código; no se ejecuta. |
| 2 | `import { useEffect, useState } from 'react'` | Importa una dependencia, componente, hoja de estilos o función que este archivo necesita. |
| 3 | `import './Inicio.css'` | Importa una dependencia, componente, hoja de estilos o función que este archivo necesita. |
| 4 | `import Producto from './Producto'` | Importa una dependencia, componente, hoja de estilos o función que este archivo necesita. |
| 5 | `import { productos } from '../data/productos'` | Importa una dependencia, componente, hoja de estilos o función que este archivo necesita. |
| 6 | `` | Línea en blanco: separa visualmente bloques de código para facilitar la lectura. |
| 7 | `const imagenesCarrusel = [` | Declara una variable constante cuyo identificador no se reasigna. |
| 8 | `  {` | Abre una estructura de datos, una desestructuración o un bloque de expresión. |
| 9 | `    src: '/imagenes/Imagen1.jpg',` | Instrucción de la lógica del componente o módulo; revisa el contexto de las líneas contiguas para entender cómo participa en el flujo. |
| 10 | `    alt: 'Setups RGB: ilumina tu espacio de juego',` | Instrucción de la lógica del componente o módulo; revisa el contexto de las líneas contiguas para entender cómo participa en el flujo. |
| 11 | `  },` | Cierra el bloque, expresión, arreglo o llamada que se abrió anteriormente. |
| 12 | `  {` | Abre una estructura de datos, una desestructuración o un bloque de expresión. |
| 13 | `    src: '/imagenes/Imagen2.jpg',` | Instrucción de la lógica del componente o módulo; revisa el contexto de las líneas contiguas para entender cómo participa en el flujo. |
| 14 | `    alt: 'Oferta especial: tarjetas gráficas de última generación',` | Instrucción de la lógica del componente o módulo; revisa el contexto de las líneas contiguas para entender cómo participa en el flujo. |
| 15 | `  },` | Cierra el bloque, expresión, arreglo o llamada que se abrió anteriormente. |
| 16 | `  {` | Abre una estructura de datos, una desestructuración o un bloque de expresión. |
| 17 | `    src: '/imagenes/Imagen3.jpg',` | Instrucción de la lógica del componente o módulo; revisa el contexto de las líneas contiguas para entender cómo participa en el flujo. |
| 18 | `    alt: 'LevelUp Gaming: sube de nivel tu experiencia gamer',` | Instrucción de la lógica del componente o módulo; revisa el contexto de las líneas contiguas para entender cómo participa en el flujo. |
| 19 | `  },` | Cierra el bloque, expresión, arreglo o llamada que se abrió anteriormente. |
| 20 | `]` | Cierra el bloque, expresión, arreglo o llamada que se abrió anteriormente. |
| 21 | `` | Línea en blanco: separa visualmente bloques de código para facilitar la lectura. |
| 22 | `export default function Inicio({ agregar }) {` | Declara y exporta el componente principal para que otros archivos puedan importarlo. |
| 23 | `  const [indiceActual, setIndiceActual] = useState(0)` | Crea estado de React: el valor se conserva entre renderizados y su setter provoca una nueva representación. |
| 24 | `` | Línea en blanco: separa visualmente bloques de código para facilitar la lectura. |
| 25 | `  // Cambiar de imagen automáticamente cada 5 segundos` | Comentario: documenta la intención del código; no se ejecuta. |
| 26 | `  useEffect(() => {` | Define un efecto secundario que React ejecuta después del renderizado según sus dependencias. |
| 27 | `    const intervalo = setInterval(() => {` | Declara una variable constante cuyo identificador no se reasigna. |
| 28 | `      setIndiceActual(indice => (indice + 1) % imagenesCarrusel.length)` | Actualiza un estado o invoca una función cuyo nombre comienza por set. |
| 29 | `    }, 5000)` | Cierra el bloque, expresión, arreglo o llamada que se abrió anteriormente. |
| 30 | `` | Línea en blanco: separa visualmente bloques de código para facilitar la lectura. |
| 31 | `    return () => clearInterval(intervalo)` | Devuelve el resultado de la función; en un componente React suele ser la interfaz JSX. |
| 32 | `  }, [])` | Cierra el bloque, expresión, arreglo o llamada que se abrió anteriormente. |
| 33 | `` | Línea en blanco: separa visualmente bloques de código para facilitar la lectura. |
| 34 | `  const anterior = () => {` | Declara una variable constante cuyo identificador no se reasigna. |
| 35 | `    setIndiceActual(indice =>` | Actualiza un estado o invoca una función cuyo nombre comienza por set. |
| 36 | `      (indice - 1 + imagenesCarrusel.length) % imagenesCarrusel.length` | Instrucción de la lógica del componente o módulo; revisa el contexto de las líneas contiguas para entender cómo participa en el flujo. |
| 37 | `    )` | Cierra el bloque, expresión, arreglo o llamada que se abrió anteriormente. |
| 38 | `  }` | Cierra el bloque, expresión, arreglo o llamada que se abrió anteriormente. |
| 39 | `` | Línea en blanco: separa visualmente bloques de código para facilitar la lectura. |
| 40 | `  const siguiente = () => {` | Declara una variable constante cuyo identificador no se reasigna. |
| 41 | `    setIndiceActual(indice =>` | Actualiza un estado o invoca una función cuyo nombre comienza por set. |
| 42 | `      (indice + 1) % imagenesCarrusel.length` | Instrucción de la lógica del componente o módulo; revisa el contexto de las líneas contiguas para entender cómo participa en el flujo. |
| 43 | `    )` | Cierra el bloque, expresión, arreglo o llamada que se abrió anteriormente. |
| 44 | `  }` | Cierra el bloque, expresión, arreglo o llamada que se abrió anteriormente. |
| 45 | `` | Línea en blanco: separa visualmente bloques de código para facilitar la lectura. |
| 46 | `  return (` | Devuelve el resultado de la función; en un componente React suele ser la interfaz JSX. |
| 47 | `    <>` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 48 | `      <section className="hero-carrusel" aria-label="Promociones destacadas">` | Asigna una clase CSS al elemento para controlar su presentación visual. |
| 49 | `        <div className="carrusel-contenedor">` | Asigna una clase CSS al elemento para controlar su presentación visual. |
| 50 | `          {imagenesCarrusel.map((imagen, indice) => (` | Recorre una colección y genera un elemento o valor por cada registro. |
| 51 | `            <a` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 52 | `              key={imagen.src}` | Instrucción de la lógica del componente o módulo; revisa el contexto de las líneas contiguas para entender cómo participa en el flujo. |
| 53 | `              href="/productos"` | Instrucción de la lógica del componente o módulo; revisa el contexto de las líneas contiguas para entender cómo participa en el flujo. |
| 54 | `              className={\`carrusel-slide ${` | Asigna una clase CSS al elemento para controlar su presentación visual. |
| 55 | `                indice === indiceActual ? 'activo' : ''` | Instrucción de la lógica del componente o módulo; revisa el contexto de las líneas contiguas para entender cómo participa en el flujo. |
| 56 | `              }\`}` | Cierra el bloque, expresión, arreglo o llamada que se abrió anteriormente. |
| 57 | `              aria-hidden={indice !== indiceActual}` | Instrucción de la lógica del componente o módulo; revisa el contexto de las líneas contiguas para entender cómo participa en el flujo. |
| 58 | `              tabIndex={indice === indiceActual ? 0 : -1}` | Instrucción de la lógica del componente o módulo; revisa el contexto de las líneas contiguas para entender cómo participa en el flujo. |
| 59 | `            >` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 60 | `              <img src={imagen.src} alt={imagen.alt} />` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 61 | `            </a>` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 62 | `          ))}` | Cierra el bloque, expresión, arreglo o llamada que se abrió anteriormente. |
| 63 | `` | Línea en blanco: separa visualmente bloques de código para facilitar la lectura. |
| 64 | `          <button` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 65 | `            type="button"` | Instrucción de la lógica del componente o módulo; revisa el contexto de las líneas contiguas para entender cómo participa en el flujo. |
| 66 | `            className="carrusel-flecha carrusel-anterior"` | Asigna una clase CSS al elemento para controlar su presentación visual. |
| 67 | `            onClick={anterior}` | Conecta un evento de usuario con una función manejadora. |
| 68 | `            aria-label="Imagen anterior"` | Instrucción de la lógica del componente o módulo; revisa el contexto de las líneas contiguas para entender cómo participa en el flujo. |
| 69 | `          >` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 70 | `            &#10094;` | Instrucción de la lógica del componente o módulo; revisa el contexto de las líneas contiguas para entender cómo participa en el flujo. |
| 71 | `          </button>` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 72 | `` | Línea en blanco: separa visualmente bloques de código para facilitar la lectura. |
| 73 | `          <button` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 74 | `            type="button"` | Instrucción de la lógica del componente o módulo; revisa el contexto de las líneas contiguas para entender cómo participa en el flujo. |
| 75 | `            className="carrusel-flecha carrusel-siguiente"` | Asigna una clase CSS al elemento para controlar su presentación visual. |
| 76 | `            onClick={siguiente}` | Conecta un evento de usuario con una función manejadora. |
| 77 | `            aria-label="Imagen siguiente"` | Instrucción de la lógica del componente o módulo; revisa el contexto de las líneas contiguas para entender cómo participa en el flujo. |
| 78 | `          >` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 79 | `            &#10095;` | Instrucción de la lógica del componente o módulo; revisa el contexto de las líneas contiguas para entender cómo participa en el flujo. |
| 80 | `          </button>` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 81 | `` | Línea en blanco: separa visualmente bloques de código para facilitar la lectura. |
| 82 | `          <div className="carrusel-indicadores">` | Asigna una clase CSS al elemento para controlar su presentación visual. |
| 83 | `            {imagenesCarrusel.map((imagen, indice) => (` | Recorre una colección y genera un elemento o valor por cada registro. |
| 84 | `              <button` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 85 | `                key={imagen.src}` | Instrucción de la lógica del componente o módulo; revisa el contexto de las líneas contiguas para entender cómo participa en el flujo. |
| 86 | `                type="button"` | Instrucción de la lógica del componente o módulo; revisa el contexto de las líneas contiguas para entender cómo participa en el flujo. |
| 87 | `                className={\`carrusel-indicador ${` | Asigna una clase CSS al elemento para controlar su presentación visual. |
| 88 | `                  indice === indiceActual ? 'activo' : ''` | Instrucción de la lógica del componente o módulo; revisa el contexto de las líneas contiguas para entender cómo participa en el flujo. |
| 89 | `                }\`}` | Cierra el bloque, expresión, arreglo o llamada que se abrió anteriormente. |
| 90 | `                onClick={() => setIndiceActual(indice)}` | Define una función flecha; el código a la derecha se ejecuta cuando se invoca. |
| 91 | `                aria-label={\`Mostrar imagen ${indice + 1}\`}` | Instrucción de la lógica del componente o módulo; revisa el contexto de las líneas contiguas para entender cómo participa en el flujo. |
| 92 | `                aria-current={indice === indiceActual ? 'true' : undefined}` | Instrucción de la lógica del componente o módulo; revisa el contexto de las líneas contiguas para entender cómo participa en el flujo. |
| 93 | `              />` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 94 | `            ))}` | Cierra el bloque, expresión, arreglo o llamada que se abrió anteriormente. |
| 95 | `          </div>` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 96 | `        </div>` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 97 | `      </section>` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 98 | `` | Línea en blanco: separa visualmente bloques de código para facilitar la lectura. |
| 99 | `      <section className="container section">` | Asigna una clase CSS al elemento para controlar su presentación visual. |
| 100 | `        <div className="section-heading">` | Asigna una clase CSS al elemento para controlar su presentación visual. |
| 101 | `            <h2>⚡ Ofertas relámpago</h2>` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 102 | `        </div>` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 103 | `` | Línea en blanco: separa visualmente bloques de código para facilitar la lectura. |
| 104 | `        <div className="product-grid">` | Asigna una clase CSS al elemento para controlar su presentación visual. |
| 105 | `          {productos.slice(0, 3).map(producto => (` | Recorre una colección y genera un elemento o valor por cada registro. |
| 106 | `            <Producto` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 107 | `              key={producto.id}` | Instrucción de la lógica del componente o módulo; revisa el contexto de las líneas contiguas para entender cómo participa en el flujo. |
| 108 | `              producto={producto}` | Instrucción de la lógica del componente o módulo; revisa el contexto de las líneas contiguas para entender cómo participa en el flujo. |
| 109 | `              onAgregar={agregar}` | Instrucción de la lógica del componente o módulo; revisa el contexto de las líneas contiguas para entender cómo participa en el flujo. |
| 110 | `            />` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 111 | `          ))}` | Cierra el bloque, expresión, arreglo o llamada que se abrió anteriormente. |
| 112 | `        </div>` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 113 | `      </section>` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 114 | `` | Línea en blanco: separa visualmente bloques de código para facilitar la lectura. |
| 115 | `      <section className="brands">` | Asigna una clase CSS al elemento para controlar su presentación visual. |
| 116 | `        <div className="container">` | Asigna una clase CSS al elemento para controlar su presentación visual. |
| 117 | `          <h2>Marcas asociadas</h2>` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 118 | `          <div className="brand-list">` | Asigna una clase CSS al elemento para controlar su presentación visual. |
| 119 | `            <span>LOGITECH</span>` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 120 | `            <span>ASUS</span>` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 121 | `            <span>AMD</span>` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 122 | `            <span>NVIDIA</span>` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 123 | `            <span>MSI</span>` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 124 | `          </div>` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 125 | `        </div>` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 126 | `      </section>` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 127 | `` | Línea en blanco: separa visualmente bloques de código para facilitar la lectura. |
| 128 | `      <section className="container section">` | Asigna una clase CSS al elemento para controlar su presentación visual. |
| 129 | `        <h2>Categorías</h2>` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 130 | `        <div className="category-grid">` | Asigna una clase CSS al elemento para controlar su presentación visual. |
| 131 | `          <a href="/productos">🎧 Periféricos</a> ` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 132 | `          <a href="/productos">🖥️ Hardware PC</a>` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 133 | `          <a href="/productos">🪑 Sillas Gamer</a>` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 134 | `          <a href="/productos">🎮 Accesorios</a>` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 135 | `        </div>` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 136 | `      </section>` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 137 | `    </>` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 138 | `  )` | Cierra el bloque, expresión, arreglo o llamada que se abrió anteriormente. |
| 139 | `}` | Cierra el bloque, expresión, arreglo o llamada que se abrió anteriormente. |

## `src/componentes/Nosotros.jsx`

| Línea | Código | Explicación |
|---:|---|---|
| 1 | `/** Explicación general: Presenta información descriptiva de la tienda y del propósito del proyecto. */` | Comentario: documenta la intención del código; no se ejecuta. |
| 2 | `import './Nosotros.css'` | Importa una dependencia, componente, hoja de estilos o función que este archivo necesita. |
| 3 | `export default function Nosotros() {` | Declara y exporta el componente principal para que otros archivos puedan importarlo. |
| 4 | `  return (` | Devuelve el resultado de la función; en un componente React suele ser la interfaz JSX. |
| 5 | `    <main className="container section nosotros-page">` | Asigna una clase CSS al elemento para controlar su presentación visual. |
| 6 | `      <h1>Nosotros</h1>` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 7 | `      <section className="about-card"><h2>¿Quiénes somos?</h2><p>LevelUp Gaming es una tienda especializada en componentes de computación, periféricos RGB, monitores, sillas gam...` | Asigna una clase CSS al elemento para controlar su presentación visual. |
| 8 | `        <p>Nuestro objetivo es ofrecer productos para gamers, entusiastas de la tecnología, streamers y creadores de contenido.</p></section>` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 9 | `      <section className="about-card"><h2>Nuestro equipo</h2><p>Proyecto desarrollado por estudiantes para la evaluación de desarrollo web.</p></section>` | Asigna una clase CSS al elemento para controlar su presentación visual. |
| 10 | `    </main>` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 11 | `  )` | Cierra el bloque, expresión, arreglo o llamada que se abrió anteriormente. |
| 12 | `}` | Cierra el bloque, expresión, arreglo o llamada que se abrió anteriormente. |

## `src/componentes/Producto.jsx`

| Línea | Código | Explicación |
|---:|---|---|
| 1 | `/** Explicación general: Tarjeta reutilizable que muestra imagen, descripción, precio y acciones de cada producto. */` | Comentario: documenta la intención del código; no se ejecuta. |
| 2 | `import './Producto.css'` | Importa una dependencia, componente, hoja de estilos o función que este archivo necesita. |
| 3 | `import { formatoPrecio } from '../data/productos'` | Importa una dependencia, componente, hoja de estilos o función que este archivo necesita. |
| 4 | `` | Línea en blanco: separa visualmente bloques de código para facilitar la lectura. |
| 5 | `export default function Producto({ producto, onAgregar }) {` | Declara y exporta el componente principal para que otros archivos puedan importarlo. |
| 6 | `  return <article className="producto-card">` | Asigna una clase CSS al elemento para controlar su presentación visual. |
| 7 | `    <img src={producto.imagen} alt={producto.nombre} loading="lazy" onError={e => { e.currentTarget.style.display = 'none' }} />` | Define una función flecha; el código a la derecha se ejecuta cuando se invoca. |
| 8 | `    <div className="producto-info"><p className="eyebrow">HARDWARE GAMER</p><h3>{producto.nombre}</h3><p>{producto.descripcion}</p><strong>{formatoPrecio(producto.precio)}</strong>` | Asigna una clase CSS al elemento para controlar su presentación visual. |
| 9 | `    <div className="producto-actions"><a className="btn-small btn-outline" href={\`/producto/${producto.id}\`}>Ver producto</a><button className="btn-small" onClick={() => onAgr...` | Define una función flecha; el código a la derecha se ejecuta cuando se invoca. |
| 10 | `  </article>` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 11 | `}` | Cierra el bloque, expresión, arreglo o llamada que se abrió anteriormente. |

## `src/data/productos.js`

| Línea | Código | Explicación |
|---:|---|---|
| 1 | `/** Explicación general: Datos estáticos del catálogo y función de utilidad para mostrar precios en pesos chilenos. */` | Comentario: documenta la intención del código; no se ejecuta. |
| 2 | `export const productos = [` | Expone una constante para que otros módulos puedan reutilizar sus datos. |
| 3 | ` {id:1,nombre:'RTX Gaming Pro',descripcion:'Tarjeta gráfica de alto rendimiento.',precio:599990,imagen:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvxSxtVf9uB4_gn47kW...` | Abre una estructura de datos, una desestructuración o un bloque de expresión. |
| 4 | ` {id:2,nombre:'Teclado RGB Pro',descripcion:'Teclado mecánico para gamers.',precio:79990,imagen:'https://cdnx.jumpseller.com/fantech-esports/image/39087132/thumb/1440/1440?17545...` | Abre una estructura de datos, una desestructuración o un bloque de expresión. |
| 5 | ` {id:3,nombre:'Mouse Gamer',descripcion:'Mouse ergonómico de alta precisión.',precio:39990,imagen:'https://media.falabella.com/falabellaCL/147668350_01/w=1200,h=1200,fit=pad',de...` | Abre una estructura de datos, una desestructuración o un bloque de expresión. |
| 6 | ` {id:4,nombre:'Monitor 27 Gamer',descripcion:'Monitor para gaming competitivo.',precio:249990,imagen:'https://media.falabella.com/falabellaCL/147668350_01/w=1200,h=1200,fit=pad'...` | Abre una estructura de datos, una desestructuración o un bloque de expresión. |
| 7 | ` {id:5,nombre:'Silla Gamer',descripcion:'Comodidad para largas sesiones.',precio:189990,imagen:'https://static.myshop.cl/fotos/3/2/4/7/1/1_1749437617000.png',detalle:'Diseño pen...` | Abre una estructura de datos, una desestructuración o un bloque de expresión. |
| 8 | ` {id:6,nombre:'Audífonos Gamer',descripcion:'Audio inmersivo para tus partidas.',precio:69990,imagen:'https://cdnx.jumpseller.com/fantech-esports/image/39087132/thumb/1440/1440?...` | Abre una estructura de datos, una desestructuración o un bloque de expresión. |
| 9 | `]` | Cierra el bloque, expresión, arreglo o llamada que se abrió anteriormente. |
| 10 | `export const formatoPrecio = n => '$' + Number(n).toLocaleString('es-CL')` | Expone una constante para que otros módulos puedan reutilizar sus datos. |

## `src/main.jsx`

| Línea | Código | Explicación |
|---:|---|---|
| 1 | `import { StrictMode } from 'react'` | Importa una dependencia, componente, hoja de estilos o función que este archivo necesita. |
| 2 | `import { createRoot } from 'react-dom/client'` | Importa una dependencia, componente, hoja de estilos o función que este archivo necesita. |
| 3 | `import './index.css'` | Importa una dependencia, componente, hoja de estilos o función que este archivo necesita. |
| 4 | `import App from './App.jsx'` | Importa una dependencia, componente, hoja de estilos o función que este archivo necesita. |
| 5 | `` | Línea en blanco: separa visualmente bloques de código para facilitar la lectura. |
| 6 | `createRoot(document.getElementById('root')).render(` | Instrucción de la lógica del componente o módulo; revisa el contexto de las líneas contiguas para entender cómo participa en el flujo. |
| 7 | `  <StrictMode>` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 8 | `    <App />` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 9 | `  </StrictMode>,` | Elemento JSX: describe una parte de la interfaz que React transforma en elementos del DOM. |
| 10 | `)` | Cierra el bloque, expresión, arreglo o llamada que se abrió anteriormente. |

## `src/utils/validaciones.js`

| Línea | Código | Explicación |
|---:|---|---|
| 1 | `/** Explicación general: Funciones auxiliares que validan los dominios de correo permitidos y el dígito verificador del RUN chileno. */` | Comentario: documenta la intención del código; no se ejecuta. |
| 2 | `// Comprueba que el correo termine en uno de los dominios autorizados.` | Comentario: documenta la intención del código; no se ejecuta. |
| 3 | `export function validarCorreo(correo) {` | Declara y exporta una función reutilizable. |
| 4 | `  return /^[^\s@]+@(duoc\.cl\|profesor\.duoc\.cl\|gmail\.com)$/i.test(correo)` | Instrucción de la lógica del componente o módulo; revisa el contexto de las líneas contiguas para entender cómo participa en el flujo. |
| 5 | `}` | Cierra el bloque, expresión, arreglo o llamada que se abrió anteriormente. |
| 6 | `` | Línea en blanco: separa visualmente bloques de código para facilitar la lectura. |
| 7 | `// Normaliza el RUN y comprueba que su dígito verificador sea correcto.` | Comentario: documenta la intención del código; no se ejecuta. |
| 8 | `export function validarRUN(run) {` | Declara y exporta una función reutilizable. |
| 9 | `  const limpio = run.toUpperCase().replace(/[^0-9K]/g, '')` | Declara una variable constante cuyo identificador no se reasigna. |
| 10 | `  if (limpio.length < 7 \|\| limpio.length > 9) return false` | Evalúa una condición para decidir qué bloque de lógica debe ejecutarse. |
| 11 | `` | Línea en blanco: separa visualmente bloques de código para facilitar la lectura. |
| 12 | `  const cuerpo = limpio.slice(0, -1)` | Declara una variable constante cuyo identificador no se reasigna. |
| 13 | `  let suma = 0` | Declara una variable cuyo valor puede reasignarse. |
| 14 | `  let multiplicador = 2` | Declara una variable cuyo valor puede reasignarse. |
| 15 | `` | Línea en blanco: separa visualmente bloques de código para facilitar la lectura. |
| 16 | `  for (let i = cuerpo.length - 1; i >= 0; i--) {` | Instrucción de la lógica del componente o módulo; revisa el contexto de las líneas contiguas para entender cómo participa en el flujo. |
| 17 | `    suma += Number(cuerpo[i]) * multiplicador` | Instrucción de la lógica del componente o módulo; revisa el contexto de las líneas contiguas para entender cómo participa en el flujo. |
| 18 | `    multiplicador = multiplicador === 7 ? 2 : multiplicador + 1` | Instrucción de la lógica del componente o módulo; revisa el contexto de las líneas contiguas para entender cómo participa en el flujo. |
| 19 | `  }` | Cierra el bloque, expresión, arreglo o llamada que se abrió anteriormente. |
| 20 | `` | Línea en blanco: separa visualmente bloques de código para facilitar la lectura. |
| 21 | `  const resultado = 11 - (suma % 11)` | Declara una variable constante cuyo identificador no se reasigna. |
| 22 | `  const digitoVerificador = resultado === 11 ? '0' : resultado === 10 ? 'K' : String(resultado)` | Declara una variable constante cuyo identificador no se reasigna. |
| 23 | `  return limpio.slice(-1) === digitoVerificador` | Instrucción de la lógica del componente o módulo; revisa el contexto de las líneas contiguas para entender cómo participa en el flujo. |
| 24 | `}` | Cierra el bloque, expresión, arreglo o llamada que se abrió anteriormente. |

