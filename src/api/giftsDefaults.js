const giftsDefault = [
	{
		nombre: "Sillón Nórdica Negro – RIO",
		descripcion: "tamaño pequeño para una persona",
		img_regalo:
			"https://hogarimagen.com/wp-content/uploads/2019/03/Sillon-para-dormitorio-N%C3%B3rdica-color-negro.png",
		precio: "700",
	},
	{
		nombre: "Lanteso Auriculares inalámbricos con Bluetooth TWS",
		descripcion:
			"con micrófono de reducción de ruido, control táctil Bluetooth con sonido de bajos profundos, dentro de los oídos, para deportes, oficina en casa",
		img_regalo:
			"https://m.media-amazon.com/images/I/51H8P34OSqL._AC_SX466_.jpg",
		precio: "99.25",
	},
	{
		nombre: "Fancy Homi",
		descripcion:
			"Paquete de 2 fundas de cojines, de pana suave y decorativas, con pompones, cuadradas, de color liso, fundas de cojines para sofá, dormitorio, automóvil o sala de estar",
		img_regalo:
			"https://m.media-amazon.com/images/I/61LbAUtQ+JL._AC_SL1001_.jpg",
		precio: "64.98",
	},
	{
		nombre: "Sistema de vigilancia YI",
		descripcion:
			"cámara 1080 p, sistema de seguridad IP inalámbrico para interiores con visión nocturna, ideal para hogares, oficina, vigilancia de bebés y mascotas, con aplicación iOS y Android, servicio en la nube disponible",
		img_regalo:
			"https://m.media-amazon.com/images/I/518Ngm46uuL._AC_SL1500_.jpg",
		precio: "101.56",
	},
	{
		nombre: "DecoBros",
		descripcion:
			"Estante organizador de sartenes para encimera de cocina, bronce",
		img_regalo: "https://m.media-amazon.com/images/I/51-PlN8skDL._AC_.jpg",
		precio: "72.66",
	},
	{
		nombre: "Flash Furniture Flash Fundamentals",
		descripcion:
			"Silla de oficina con respaldo medio de cuero negro acolchado suave con brazos",
		img_regalo:
			"https://m.media-amazon.com/images/I/81UEebQ+C3L._AC_SL1500_.jpg",
		precio: "284.84",
	},
	{
		nombre: "WLIVE Juego de 2 mesas de noche",
		descripcion:
			"cómoda de 2 cajones para dormitorio, cómoda pequeña con 2 cajones, muebles de noche, mesita de noche, mesa auxiliar con cubos de tela para dormitorio, sala de estar, dormitorio universitario, negro carbón",
		img_regalo:
			"https://m.media-amazon.com/images/I/81+xn3KNflL._AC_SL1500_.jpg",
		precio: "345.39",
	},
	{
		nombre: "Galaxy S22 5G",
		descripcion: "128GB 8GB",
		img_regalo:
			"https://falabella.scene7.com/is/image/FalabellaPE/19344890_1?wid=1500&hei=1500&qlt=70",
		precio: "3,099",
	},
	{
		nombre: "Zapatilla Courtbeat Adidas Para Hombre",
		descripcion: "Marca ADIDAS, Modelo GW3867 ",
		img_regalo:
			"https://i.linio.com/p/e1a7ed8b18034fd1b300bfe9b5ce0acf-product.webp",
		precio: "229.00",
	},
	{
		nombre: "TV Samsung QLED 55 4k Smart Tv QN55Q60BAG",
		descripcion:
			"Modelo:QN55Q60BAG, Pulgadas:55, Tipo de pantalla:QNED, Procesador:Quantum Processor Lite 4K, Resolución:Ultra HD, Smart TV:Si ",
		img_regalo:
			"https://i.linio.com/p/1c49e784d42068d0a615316cfffadd62-product.webp",
		precio: "2,799.00",
	},
	{
		nombre: "God of War Ragnarok Playstation 4",
		descripcion: "Plataforma: Playstation 5, Idioma: Español, Inglés",
		img_regalo:
			"https://i.linio.com/p/6f31d28e4d94acfd2c867021dab31ba3-product.webp",
		precio: "219.00",
	},
	{
		nombre: "Cama para Perro Gato Mascotas Rectangular Talla XL",
		descripcion: "",
		img_regalo:
			"https://i.linio.com/p/69444750eb92d420e26f834636b23409-product.webp",
		precio: "109.99",
	},
	{
		nombre: "Juego De Sala Alexandra 3-2-1 Cuerpos Mica Alexandra 321 A",
		descripcion:
			"Material de la estructura: Madera de pino, Material de las patas: Madera, Ancho: 195 / 145 / 95 cm, Alto: 88 cm, Profundidad: 57 cm, Peso: 55 kg",
		img_regalo:
			"https://i.linio.com/p/5ab742abbaf9caaabb9b7894aa3177c6-product.webp",
		precio: "2,849.00",
	},
	{
		nombre: "ESQUINERO LOREY- La Bodega del Mueble- Chocolate",
		descripcion:
			"Medidas: 1.80m  (h) x 0.45 m (a) x 0.45 m (f), Fabricado en melamina 18 mm",
		img_regalo:
			"https://i.linio.com/p/4562b1bbc35c5d4b78353f70afc772a0-product.webp",
		precio: "369.99",
	},
	{
		nombre: "Juego De Sala Camila 3-2-1",
		descripcion:
			"Material de estructura: Madera de alta calidad, Material de tapiz: Ultra cuero.",
		img_regalo:
			"https://i.linio.com/p/2c831749dd1e601adf025c97e210d32c-product.webp",
		precio: "1,429.00",
	},
	{
		nombre: "Refrigeradora No Frost 250L Mabe RMA250FVPG1 BLACK",
		descripcion: "220V / 60Hz En enfriador, Gas refrigerante R600a",
		img_regalo:
			"https://i.linio.com/p/e59ee69be981dec9c49232fc63ff0ade-product.webp",
		precio: "1,299.00",
	},
	{
		nombre: "Poleron Billabong Aw22-Stacked Verde.",
		descripcion:
			"Tipo de producto: Polerón, Material: 65% Poliéster, 35% Algodón",
		img_regalo:
			"https://i.linio.com/p/be3c1a6bc256d8eb98394c2b56130859-product.webp",
		precio: "99.50",
	},
	{
		nombre: "Apple Iphone 12 128GB - Blanco - White",
		descripcion:
			"Sistema de doble cámara con cámaras Ultra Wide y Wide de 12MP; Modo nocturno, modo retrato y video 4K hasta 60 fps, Pantalla LCD Liquid Retina HD de 6.1 pulgadas",
		img_regalo:
			"https://i.linio.com/p/320843f74c05cb5ae5bd6750bc998163-product.webp",
		precio: "3,149.00",
	},
	{
		nombre: "Iphone 13 Pro Max 256GB 6GB Verde",
		descripcion: "256GB de Memoria Interna, 6GB de RAM, Pantalla 6.7",
		img_regalo:
			"https://i.linio.com/p/f5d368946af7730ac0df5ac668d0a5d5-product.webp",
		precio: "5,449.00",
	},
	{
		nombre: "MacBook Pro M2 Chip 8GB ram 256 ssd Space Gray + Suitcase Macbook Pro/Air 13inch",
		descripcion:
			"Procesador M2 de Apple con Neural Engine, Memoria unificada de 8 GB (RAM), 256GB de Almacenamiento SSD",
		img_regalo:
			"https://i.linio.com/p/622dca1bb07e237035367f55f9a99b58-product.webp",
		precio: "6,869.00",
	},
	{
		nombre: "Dormitorio samay 2plz cabecera + almohada+ sofa - FORLI",
		descripcion:
			"Formato 2 PLAZAS, Relleno ESPUMA DE ALTA DENSIDAD Y PANEL DE RESORTES",
		img_regalo:
			"https://i.linio.com/p/56fe6ea05f8239cf255c090eaa582a33-product.webp",
		precio: "699.00",
	},
	{
		nombre: "Computadora PC Gamer Intel Core i7-11TH RAM 16GB DISCO 1TB SSD 240GB VIDEO RTX 2060 12GB CASE RGB LED",
		descripcion:
			"Procesador Intel Core I7-11TH 11va Generación de 8 núcleos",
		img_regalo:
			"https://i.linio.com/p/ef6fc426f924923f81d71d789b3a18c8-product.webp",
		precio: "5,199.00",
	},
	{
		nombre: "Juego de Comedor Roberta Allen EMPERADOR - Marrón",
		descripcion:
			"Número de puestos:6, Altura del asiento:45 cm ,Material de las patas:Madera",
		img_regalo:
			"https://i.linio.com/p/409e3f876668d0f8674d7cbae0987acf-product.webp",
		precio: "2,419.00",
	},
];
export default giftsDefault;
