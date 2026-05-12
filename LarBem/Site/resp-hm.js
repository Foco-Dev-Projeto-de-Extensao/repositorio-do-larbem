(function () {
  // Cria o botão 'hamburguer'
  const hamburger = document.createElement('button');
  hamburger.className = 'btn-hamburger';
  hamburger.setAttribute('aria-label', 'Abrir menu');
  hamburger.textContent = '☰';

  const nav = document.querySelector('.nav');
  if (!nav) return;

  nav.parentElement.insertBefore(hamburger, nav);

  hamburger.addEventListener('click', () => {
    const aberto = nav.classList.toggle('menu-aberto');
    hamburger.textContent = aberto ? '✕' : '☰';
    hamburger.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('menu-aberto');
      hamburger.textContent = '☰';
    });
  });

  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
      nav.classList.remove('menu-aberto');
      hamburger.textContent = '☰';
    }
  });
})();