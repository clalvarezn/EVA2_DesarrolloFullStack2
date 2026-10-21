// Agrega un producto al carrito o incrementa su cantidad si ya existe.
export function agregarProducto(carrito, producto) {
  const existente = carrito.find(item => item.id === producto.id)
  return existente
    ? carrito.map(item => item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item)
    : [...carrito, { ...producto, cantidad: 1 }]
}

// Actualiza la cantidad de un producto y lo elimina si la cantidad llega a cero.
export function modificarCantidadProducto(carrito, id, cantidad) {
  return carrito
    .map(producto => producto.id === id ? { ...producto, cantidad } : producto)
    .filter(producto => producto.cantidad > 0)
}

// Elimina un producto del carrito por su identificador.
export function eliminarProducto(carrito, id) {
  return carrito.filter(producto => producto.id !== id)
}

// Devuelve un carrito vacío.
export function vaciarCarrito() {
  return []
}
