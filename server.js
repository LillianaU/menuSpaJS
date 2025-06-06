const contentDiv = document.getElementById('content');
    const navLinks = document.querySelectorAll('nav ul li a');
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });

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

    function updateActiveLink(clickedLink) {
      navLinks.forEach(link => link.classList.remove('bg-blue-700'));
      clickedLink.classList.add('bg-blue-700');
    }

    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = link.getAttribute('data-page');
        if (page) {
          window.history.pushState({ page }, '', `#${page.split('.')[0]}`);
          loadPage(page);
          updateActiveLink(link);
          if (window.innerWidth < 640) {
            menu.classList.add('hidden');
          }
        }
      });
    });

    window.addEventListener('popstate', (e) => {
      const page = e.state?.page || 'contenido.htm';
      loadPage(page);
      const activeLink = Array.from(navLinks).find(link => link.getAttribute('data-page') === page);
      if (activeLink) updateActiveLink(activeLink);
    });

    const initialPage = window.location.hash 
      ? `${window.location.hash.slice(1)}.html` 
      : 'contenido.htm';
    const initialLink = Array.from(navLinks).find(link => link.getAttribute('data-page') === page) || navLinks[0];
    loadPage(initialPage);
    updateActiveLink(initialLink);