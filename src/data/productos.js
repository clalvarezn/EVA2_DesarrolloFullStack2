/** Explicación general: Datos estáticos del catálogo y función de utilidad para mostrar precios en pesos chilenos. */
// Catálogo de ejemplo: cada objeto contiene id, nombre, descripción, precio e imagen.
export const productos = [
{
    id:1,
    nombre:'RTX Gaming Pro',
    descripcion:'Tarjeta gráfica de alto rendimiento.',
    precio:599990,
    imagen:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvxSxtVf9uB4_gn47kWjeiI3TZJxf_FzAVcgoIkcAApMJ8ecnziGnaQdA&s=10',
    detalle:'Potencia gráfica para jugar con gran calidad de imagen.'
},
{
    id:2,
    nombre:'Teclado RGB Pro',
    descripcion:'Teclado mecánico para gamers.',
    precio:79990,
    imagen:'https://cdnx.jumpseller.com/fantech-esports/image/39087132/thumb/1440/1440?1754504474',
    detalle:'Teclas mecánicas y retroiluminación RGB.'
},
{
    id:3,
    nombre:'Mouse Gamer',
    descripcion:'Mouse ergonómico de alta precisión.',
    precio:39990,
    imagen:'https://image.made-in-china.com/202f0j00NwsaFHPRZQbL/Computer-Mouse-USB-Wired-Gaming-Mice-for-PC-Mouse-G2-Gaming-Mouse-6-Buttons-3200-Dpi-Black.webp',
    detalle:'Precisión y comodidad para largas sesiones.'
},
{
    id:4,
    nombre:'Monitor 27 Gamer',
    descripcion:'Monitor para gaming competitivo.',
    precio:249990,
    imagen:'https://media.falabella.com/falabellaCL/147668350_01/w=1200,h=1200,fit=pad',
    detalle:'Pantalla amplia para disfrutar tus juegos.'
},
{
    id:5,
    nombre:'Silla Gamer',
    descripcion:'Comodidad para largas sesiones.',
    precio:189990,
    imagen:'https://static.myshop.cl/fotos/3/2/4/7/1/1_1749437617000.png',
    detalle:'Diseño pensado para sesiones de juego prolongadas.'
},
{
    id:6,
    nombre:'Audífonos Gamer',
    descripcion:'Audio inmersivo para tus partidas.',
    precio:69990,
    imagen:'https://media.falabella.com/falabellaCL/155548079_01/w=1200,h=1200,fit=pad',
    detalle:'Audio para sumergirte en cada partida.'
},
{
    id:7,
    nombre:'Memoria Ram 32GB',
    descripcion:'Kingston FURY Beast RGB - DDR5 - módulo - 32 GB - DIMM de 288 contactos - 2800 MHz / PC5-44800 - CL36 - 1.25 V - sin búfer - on-die ECC.',
    precio:299990,
    imagen:'https://cdnx.jumpseller.com/notebook-store/image/63929161/resize/760/760?1748549807',
    detalle:'Kingston FURY Beast RGB es la elección perfecta para quienes buscan un equilibrio entre rendimiento.'
},
{
    id:8,
    nombre:'Gabinete Gamer',
    descripcion:'El Snake Gamer Anilius White AN990W es un gabinete Mid Tower pensado para quienes buscan armar un PC gamer .',
    precio:79990,
    imagen:'https://todoclick.cl/6748152-large_default/gabinete-snake-gamer-anilius-white.jpg',
    detalle:'El Snake Gamer Anilius White incorpora 7 ventiladores preinstalados distribuidos estratégicamente para mantener un flujo constante de aire dentro del gabinete.'
},
{
    id:9,
    nombre:'Mouse Pad XXL',
    descripcion:'Maximiza tu área de juego con esta alfombrilla de 90x40 cm.',
    precio:19990,
    imagen:'https://media.falabella.com/falabellaCL/154763972_01/w=1200,h=1200,fit=pad',
    detalle:'Protege tu espacio de trabajo de derrames accidentales con su diseño impermeable y fácil de limpiar.'
},
{
    id:10,
    nombre:'Placa Madre GIGABYTE X870',
    descripcion:'Placa madre de alto rendimiento diseñada para entusiastas y gamers.',
    precio:390990,
    imagen:'https://cl-cenco-pim-resizer.ecomm.cencosud.com/unsafe/adaptive-fit-in/640x0/filters:quality(75)/prd-cl/product-medias/e978782a-30c3-43cc-9644-fdad5ae3b8d9/MKVI9H0CQY/MKVI9H0CQY-1/1744303152680-MKVI9H0CQY-1-1.png',
    detalle:'Esta placa madre ofrece una plataforma sólida para construir un sistema de alto rendimiento.'
},
{
    id:11,
    nombre:'Fuente de Poder ASUS TUF Gaming 850G',
    descripcion:'Serie Tuf Gaming gold evo.',
    precio:119990,
    imagen:'https://sandos.cl/sandos/fotos/3/7/0/7/7/1_1790187001000.png',
    detalle:'Incorpora resistencia de grado militar.'
},
{
    id:12,
    nombre:'Disco Duro SSD M.2 NVMe Hiksemi Future Core 1TB',
    descripcion:'Experimenta la próxima generación de almacenamiento con el disco duro SSD M.2 NVMe Hiksemi Future Core 1TB.',
    precio:249990,
    imagen:'https://media.falabella.com/falabellaCL/153865826_01/w=1200,h=1200,fit=pad',
    detalle:'Disfruta de una velocidad extrema con hasta 14.300 MB/s de lectura secuencial gracias a la interfaz PCIe Gen5 x4.'
}
]
// Formatea un número usando separador de miles chileno y antepone el signo $.
export const formatoPrecio = n => '$' + Number(n).toLocaleString('es-CL')