    // Selección de elementos
    const contentDiv = document.getElementById('content');
    const navLinks = document.querySelectorAll('nav ul li a[data-page]');
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const toggleSubmenuLinks = document.querySelectorAll('.toggle-submenu');

    // Función para cerrar todos los submenús
    function closeAllSubmenus() {
      const submenus = document.querySelectorAll('.submenu');
      submenus.forEach(submenu => submenu.classList.add('hidden'));
    }

    // Evento para el botón de menú en pantallas pequeñas
    menuToggle.addEventListener('click', () => {
      menu.classList.toggle('hidden');
      closeAllSubmenus();
    });

    // Evento para abrir/cerrar submenús
    toggleSubmenuLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const submenu = link.nextElementSibling;
        if (submenu && submenu.classList.contains('submenu')) {
          submenu.classList.toggle('hidden');
          // Cierra otros submenús, excepto los padres del actual
          const parentSubmenu = link.closest('.submenu');
          document.querySelectorAll('.submenu').forEach(other => {
            if (other !== submenu && (!parentSubmenu || !other.contains(parentSubmenu))) {
              other.classList.add('hidden');
            }
          });
        }
      });
    });

    // Función para cargar páginas
    async function loadPage(page) {
      contentDiv.innerHTML = '<p class="text-gray-500 italic">Cargando...</p>';
      try {
        const response = await fetch(page);
        if (!response.ok) throw new Error('No se pudo cargar la página. Intenta de nuevo.');
        const html = await response.text();
        contentDiv.innerHTML = html;
      } catch (error) {
        contentDiv.innerHTML = `<p class="text-red-500 font-semibold">Error: ${error.message}</p>`;
      }
    }

    // Función para actualizar el enlace activo
    function updateActiveLink(clickedLink) {
      navLinks.forEach(link => link.classList.remove('bg-blue-700'));
      clickedLink.classList.add('bg-blue-700');
    }

    // Evento para los enlaces que cargan páginas
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = link.getAttribute('data-page');
        window.history.pushState({ page }, '', `#${page.split('.')[0]}`);
        loadPage(page);
        updateActiveLink(link);
        closeAllSubmenus();
        if (window.innerWidth < 640) {
          menu.classList.add('hidden');
        }
      });
    });

    // Manejo del evento popstate
    window.addEventListener('popstate', (e) => {
      const page = e.state?.page || 'contenido.html';
      loadPage(page);
      const activeLink = Array.from(navLinks).find(link => link.getAttribute('data-page') === page);
      if (activeLink) updateActiveLink(activeLink);
      closeAllSubmenus();
    });

    // Cargar página inicial
    const initialPage = window.location.hash 
      ? `${window.location.hash.slice(1)}.html` 
      : 'contenido.html';
    const initialLink = Array.from(navLinks).find(link => link.getAttribute('data-page') === initialPage) || navLinks[0];
    loadPage(initialPage);
    updateActiveLink(initialLink);