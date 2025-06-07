
📋 Documentación del Menú SPA con Submenús
Este proyecto implementa un menú de navegación para una Single Page Application (SPA) con submenús anidados, diseñado con HTML, Tailwind CSS y JavaScript. A continuación, se detallan sus características, tecnologías utilizadas, estructura de desarrollo y ejemplos de código. 🚀

✨ Características Principales
Menú Responsivo: Se colapsa a un ícono de hamburguesa en pantallas menores a 640px 📱.

Submenús Anidados: La opción "Favoritos" incluye subniveles como "Favorito 2" → "Favorito 3" y "Favorito 4".

Estilo Uniforme: Todas las opciones de menú tienen el mismo tamaño (160px) y efecto de botón.

Carga Dinámica: Las páginas se cargan usando fetch al hacer clic en los enlaces.

Colores Personalizados: Fondo azul oscuro (bg-blue-900) con efecto hover (bg-blue-700).

🛠️ Tecnologías Utilizadas
HTML5: Estructura base del menú.

Tailwind CSS: Estilizado responsivo y modular.

JavaScript: Lógica para carga dinámica y comportamiento del menú.

Fetch API: Para obtener contenido externo al hacer clic.

🔧 Pasos de Desarrollo
1. 🏗️ Estructura HTML Inicial
Se creó una etiqueta <nav> con una lista <ul> para los elementos del menú.

Se añadió un botón tipo hamburguesa (#menu-toggle) para pantallas pequeñas.

Los submenús se estructuraron con <ul> anidados dentro de <li>, por ejemplo para "Favoritos".

2. 🎨 Estilizado con Tailwind CSS
Colores: bg-blue-900 para fondo del menú, bg-blue-800 para enlaces, y hover:bg-blue-700 para el efecto hover.

Tamaño y Alineación: Clase w-40 para ancho fijo (160px) y text-center para alinear texto.

Responsividad: Clases como sm:hidden, sm:flex y hidden para ocultar o mostrar contenido según el tamaño de pantalla.

Efecto de Botón: rounded-md, px-4, py-2, y transition-colors para apariencia de botón interactivo.

3. 🖱️ Lógica en JavaScript
### Carga Dinámica: **

<pre>

function loadPage(page) {
  fetch(page)
    .then(res => res.text())
    .then(html => {
      document.getElementById('content').innerHTML = html;
    });
}
</pre>  

### Menú Hamburguesa: **


<pre>
document.getElementById('menu-toggle').addEventListener('click', () => {
  document.getElementById('menu').classList.toggle('hidden');
});
</pre>  
### Submenús Interactivos:**

<pre>
const toggleSubmenuLinks = document.querySelectorAll('.toggle-submenu');

toggleSubmenuLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const submenu = link.nextElementSibling;
    if (submenu.classList.contains('submenu')) {
      e.preventDefault();
      submenu.classList.toggle('hidden');
    }
  });
});

</pre>

### Estado Activo: Se resalta la opción seleccionada con bg-blue-700. **

4. 🔄 Mejoras Iterativas
Visibilidad de Submenús: Se reemplazó group-hover:block por control manual con JS para mantener submenús abiertos al interactuar.

Selección Precisa: Se ajustó el comportamiento para que elementos como "Favorito 4" se activen correctamente sin cerrar su contenedor.

📝 Estructura de Menú (Ejemplo HTML)
<pre>
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
  </pre>
🖥️ Instrucciones de Uso
Clona el repositorio:

<pre>
git clone https://github.com/tuusuario/tu-repositorio.git
</pre>
Abre el proyecto en tu editor de código o en un servidor local (puedes usar live-server o extensiones similares).

Asegúrate de tener archivos como favorita3.html, favorita4.html, etc., en el mismo directorio que index.html.

Ejecuta el proyecto. Haz clic en el menú "Favoritos" y accede a las opciones como "Favorito 4" para ver la carga dinámica.
![Descrição do GIF](https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2NrajMzNTZoeTgzejBlZzZpcnY4Zm5oYXFoYnVpOGRmNmUxemk2MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gHZpI77ycv3h9oLFvc/giphy.gif)
 ### Despliegue:
 [Ver Menú SPA JS](https://lillianau.github.io/menuSpaJS/)


📌 Notas Finales
Este menú es altamente escalable y adaptable a distintos tipos de aplicaciones SPA. Puede ampliarse fácilmente con más niveles de submenú, diferentes estilos o integraciones con frameworks como Vue, React o Alpine.js.
