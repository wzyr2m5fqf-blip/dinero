// ============================================================
//  DATOS DEL NEGOCIO — cambia solo este archivo para cada demo
// ============================================================
window.NEGOCIO = {
  nombre: "Peluquería Lucía",
  tipo: "Peluquería y estética",
  eslogan: "Tu pelo, en las mejores manos del barrio",
  descripcion:
    "Más de 10 años cuidando de tu pelo con trato cercano, productos de calidad y sin esperas. Pide tu cita en un minuto.",

  // Colores de la marca (puedes copiarlos de su cartel o su Instagram)
  colorPrincipal: "#b5476b",
  colorOscuro: "#2b1b22",

  // Imagen de cabecera: una foto del local (de Google Maps) o de stock
  imagenCabecera:
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600&q=80",

  // Contacto (WhatsApp en formato internacional, sin + ni espacios)
  whatsapp: "34600000000",
  telefono: "600 000 000",
  email: "",
  direccion: "Calle Mayor 12, 28001 Madrid",
  instagram: "", // ej. "peluquerialucia"

  horario: [
    ["Lunes a viernes", "9:30 – 20:00"],
    ["Sábado", "9:30 – 14:00"],
    ["Domingo", "Cerrado"],
  ],

  servicios: [
    { nombre: "Corte de mujer", precio: "18 €", detalle: "Lavado, corte y peinado" },
    { nombre: "Corte de hombre", precio: "12 €", detalle: "Corte y acabado" },
    { nombre: "Color", precio: "desde 30 €", detalle: "Tinte completo o raíces" },
    { nombre: "Mechas", precio: "desde 45 €", detalle: "Balayage, babylights, californianas" },
    { nombre: "Tratamiento", precio: "20 €", detalle: "Hidratación profunda o keratina" },
    { nombre: "Peinado de evento", precio: "25 €", detalle: "Bodas, comuniones, fiestas" },
  ],

  // Copia 3 reseñas reales de su ficha de Google Maps
  resenas: [
    { autor: "María G.", texto: "Siempre salgo encantada. Lucía sabe exactamente lo que necesitas." },
    { autor: "Carlos R.", texto: "Rápidos, buen precio y muy buen trato. Mi peluquería de confianza." },
    { autor: "Ana P.", texto: "Me hicieron el peinado de la boda y fue perfecto. 100% recomendable." },
  ],
  notaGoogle: "4,8", // nota media en Google (déjalo vacío si no tiene)
};
