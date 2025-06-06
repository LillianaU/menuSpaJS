Documentación del Menú SPA con Submenús 📋

Este proyecto implementa un menú de navegación para una Single Page Application (SPA) con submenús anidados, diseñado con HTML, CSS (Tailwind CSS) y JavaScript. A continuación, se detalla cómo se construyó, las decisiones de diseño y cómo funciona. 🚀

Características Principales ✨





Menú Responsivo: Colapsa a un ícono de hamburguesa 📱 en resoluciones pequeñas (menor a 640px).



Submenús Anidados: "Favoritos" incluye submenús como "Favorito 2" con "Favorito 3" y "Favorito 4".



Estilo Uniforme: Todas las opciones tienen el mismo tamaño (160px de ancho) y efecto de botón.



Carga Dinámica: Las páginas se cargan dinámicamente usando fetch al hacer clic.



Colores Personalizados: Fondo azul oscuro (bg-blue-900) con efecto hover (bg-blue-700).

Tecnologías Utilizadas 🛠️





HTML5: Estructura base del menú.



Tailwind CSS: Estilizado responsivo y modular.



JavaScript: Lógica para cargar páginas y manejar submenús.



Fetch API: Para cargar contenido dinámico.

Pasos de Desarrollo 🔧

1. Estructura HTML Inicial 🏗️

Se creó una navegación (<nav>) con una lista desordenada (<ul>) para los elementos del menú. Se incluyó un botón de hamburguesa para pantallas pequeñas y un diseño flexible con flex para pantallas grandes.





Se añadieron submenús usando <ul> anidados dentro de <li> para "Favoritos".

2. Estilizado con Tailwind CSS 🎨





Colores: Se usó bg-blue-900 para el fondo del menú y bg-blue-800 para los botones, con hover:bg-blue-700 para el efecto.



Tamaño Uniforme: Se aplicó w-40 (160px) a cada <a> con text-center para alinear el texto.



Responsividad: Clases como sm:hidden y sm:flex controlan el colapso del menú.



Efecto Botón: rounded-md, px-4 py-2 y transition-colors dan un look de botón interactivo.

3. Lógica JavaScript 🖱️





Carga de Páginas: La función loadPage usa fetch para cargar el contenido de data-page al hacer clic.



Menú Hamburguesa: El botón #menu-toggle alterna la clase hidden en #menu.



Submenús Interactivos: Se añadió la clase toggle-submenu a "Favoritos" y "Favorito 2". Un evento de clic alterna la visibilidad del submenú con classList.toggle('hidden').



Estado Activo: La función updateActiveLink resalta la opción seleccionada con bg-blue-700.

4. Mejoras Iterativas 🔄





Problema de Selección: Inicialmente, los submenús se cerraban al mover el cursor. Se cambió de group-hover:block a control manual con JavaScript para mantenerlos visibles.



Selección de Favorito 4: Se corrigió propagando el evento de clic a todos los niveles del menú.

Código Ejemplo 📝

Estructura del Menú

<li class="relative">
  <a href="#" class="toggle-submenu">Favoritos ►</a>
  <ul class="submenu hidden">
    <li><a href="#" data-page="novedades.html">Favorito 1</a></li>
    <li class="relative">
      <a href="#" class="toggle-submenu">Favorito 2 ►</a>
      <ul class="submenu hidden">
        <li><a href="#" data-page="favorita3.html">Favorito 3</a></li>
        <li><a href="#" data-page="favorita4.html">Favorito 4</a></li>
      </ul>
    </li>
  </ul>
</li>

JavaScript para Submenús

toggleSubmenuLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const submenu = link.nextElementSibling;
    if (submenu.classList.contains('submenu')) {
      e.preventDefault();
      submenu.classList.toggle('hidden');
    }
  });
});

Instrucciones de Uso 🖥️





Clona el repositorio y abre index.html en un servidor local (por ejemplo, con live-server).



Asegúrate de tener archivos como favorita3.html y favorita4.html en el mismo directorio.



Haz clic en "Favoritos" para abrir el submenú y selecciona opciones como "Favorito 4".
