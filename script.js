document.addEventListener('DOMContentLoaded', () => {
  // Highlight active nav link
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  // Boot sequence on homepage hero
  const bootEl = document.getElementById('boot-line');
  if (bootEl) {
    const lines = [
      'compiling cv.exe ...',
      'linking modules: unity, unreal, c++ ...',
      'build success'
    ];
    let i = 0;
    const render = () => {
      if (i < lines.length) {
        bootEl.textContent = (i < lines.length - 1 ? '$ ' : '$ ') + lines[i];
        if (i === lines.length - 1) bootEl.classList.add('ok-line');
        i++;
        setTimeout(render, 480);
      }
    };
    render();
  }
});
