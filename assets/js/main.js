/* SEEDS for FUTURE Patients — 共通スクリプト */
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* --- 舞い落ちる葉 --- */
  var box = document.getElementById('falling');
  if (box && !reduce) {
    var leaf = '<svg viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor"><path d="M4 20 C4 10 12 4 22 4 C22 14 14 20 4 20 Z"/></svg>';
    var n = box.dataset.count ? parseInt(box.dataset.count, 10) : 14;
    for (var i = 0; i < n; i++) {
      var el = document.createElement('div');
      el.className = 'leaf';
      el.innerHTML = leaf;
      el.style.left = Math.random() * 100 + 'vw';
      el.style.width = el.style.height = (10 + Math.random() * 12) + 'px';
      el.style.color = Math.random() > 0.5 ? 'var(--sprout)' : 'var(--field-mid)';
      el.style.animationDuration = (9 + Math.random() * 9) + 's';
      el.style.animationDelay = (-Math.random() * 12) + 's';
      el.style.opacity = 0.55 + Math.random() * 0.4;
      box.appendChild(el);
    }
  }

  /* --- カードをタップで少し拡大（トグル） --- */
  var cards = document.querySelectorAll('.card');
  cards.forEach(function (card) {
    card.addEventListener('click', function (e) {
      // 実リンクとして機能させたいときは preventDefault を外してください
      e.preventDefault();
      cards.forEach(function (c) { if (c !== card) c.classList.remove('is-active'); });
      card.classList.toggle('is-active');
      var href = card.getAttribute('href');
      if (href && href !== '#') { window.location.href = href; }
    });
  });

  /* --- スクロールで出現 --- */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    });
  }, { threshold: 0.2 });
  document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });

  /* --- モバイルメニュー --- */
  var toggle = document.getElementById('navToggle');
  var list = document.getElementById('navList');
  if (toggle && list) {
    toggle.addEventListener('click', function () {
      var open = list.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
    });
    list.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        list.classList.remove('open');
        toggle.setAttribute('aria-expanded', false);
      });
    });
  }
})();
