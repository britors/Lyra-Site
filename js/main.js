(() => {
  const root = document.documentElement;
  const storage = {
    get(key, fallback) {
      try { return localStorage.getItem(key) || fallback; } catch { return fallback; }
    },
    set(key, value) {
      try { localStorage.setItem(key, value); } catch { /* file:// e navegadores restritivos */ }
    },
  };
  const themeToggle = document.querySelector('.theme-toggle');
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');

  const updateThemeButton = () => {
    const isLight = root.dataset.theme === 'light';
    themeToggle.setAttribute('aria-pressed', String(isLight));
    themeToggle.setAttribute('aria-label', isLight ? 'Ativar tema escuro' : 'Ativar tema claro');
    themeToggle.querySelector('.theme-icon').textContent = isLight ? '☾' : '☼';
  };

  themeToggle?.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
    storage.set('lyra-theme', root.dataset.theme);
    updateThemeButton();
  });
  updateThemeButton();

  menuToggle?.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
  nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  }));

  const countdown = document.querySelector('[data-countdown]');
  const releaseDate = new Date('2026-08-15T00:00:00-03:00').getTime();
  const updateCountdown = () => {
    if (!countdown) return;
    const distance = releaseDate - Date.now();
    const values = distance > 0
      ? [Math.floor(distance / 86400000), Math.floor((distance / 3600000) % 24), Math.floor((distance / 60000) % 60)]
      : [0, 0, 0];
    ['days', 'hours', 'minutes'].forEach((unit, index) => {
      const element = countdown.querySelector(`[data-unit="${unit}"]`);
      if (element) element.textContent = String(values[index]).padStart(2, '0');
    });
  };
  updateCountdown();
  window.setInterval(updateCountdown, 60000);

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, instance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          instance.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }
})();
