// Shared nav setup — runs on every page
(function () {
  const toggle = document.getElementById('mobileToggle');
  const menu = document.getElementById('mobile-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => menu.classList.toggle('hidden'));
    menu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => menu.classList.add('hidden'));
    });
  }

  // Konami code — site-wide easter egg
  const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
  let pos = 0;
  document.addEventListener('keydown', function(e) {
    if (e.key === KONAMI[pos]) {
      pos++;
      if (pos === KONAMI.length) {
        pos = 0;
        var d = document.createElement('div');
        d.className = 'konami-overlay';
        d.innerHTML = '<div class="konami-msg">CHEAT CODE ACTIVATED!</div>';
        document.body.appendChild(d);
        setTimeout(function() { d.remove(); }, 800);
      }
    } else {
      pos = 0;
    }
  });
})();
