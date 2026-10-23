// Demo para FLORINDA Coffee House — datos sacados de su ficha de Google Maps.
// ⚠️ PENDIENTE de confirmar con el dueño: horario completo, precios de la carta y WhatsApp/teléfono.
window.NEGOCIO = {
  demo: true, // muestra la franja "versión de demostración"; quitar al entregar
  nombre: "FLORINDA Coffee House",
  tipo: "Cafetería · Caballito",
  eslogan: "Café de especialidad con patio, en el corazón de Caballito",
  descripcion:
    "Tostones, focaccias y pastelería casera en un espacio pensado para quedarse. Vení a desayunar, merendar o trabajar tranquilo en nuestro patio.",

  // Colores tomados de su local: rosa empolvado y verde salvia
  colorPrincipal: "#c2547a",
  colorOscuro: "#2f4a3f",

  // Reemplazar por una foto propia del local (de su Instagram) al entregar
  imagenCabecera:
    "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1600&q=80",

  whatsapp: "", // sin WhatsApp en la ficha: los botones llevan a Instagram
  telefono: "",
  email: "",
  direccion: "Av. Acoyte 272, C1405 CABA",
  instagram: "florindacoffee",

  textoBoton: "Ver más en Instagram",
  textoBotonFinal: "Seguinos en Instagram",
  tituloFinal: "¿Te esperamos para un café?",
  tituloServicios: "Nuestra carta",

  horario: [
    ["Todos los días", "Desde las 7:30"], // confirmar días y hora de cierre
  ],

  // Platos que mencionan sus clientes en Google; precios a completar con el menú real
  servicios: [
    { nombre: "Tostón de palta", precio: "", detalle: "Palta, huevo, hummus y especias" },
    { nombre: "Focaccias", precio: "", detalle: "Masa casera, rellenos de estación" },
    { nombre: "Café de especialidad", precio: "", detalle: "Espresso, flat white, latte y más" },
    { nombre: "Pastelería", precio: "", detalle: "Cheesecake, red velvet, croissants" },
    { nombre: "Waffles", precio: "", detalle: "Con frutas, cremas y toppings" },
    { nombre: "Licuados y bebidas frías", precio: "", detalle: "Frutales, frescos y de colores" },
  ],

  // Fragmentos reales del resumen de opiniones de Google
  resenas: [
    { autor: "", texto: "Los tostones de palta, huevo, humus y especias riquísimo!!" },
    { autor: "", texto: "Tienen un patio muy cómodo." },
  ],
  notaGoogle: "4,6 · más de 2.100 opiniones",
};
