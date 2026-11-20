// Minimal enhancements: mobile menu, sticky-nav border, active link, scroll reveal.
(function () {
  var nav = document.querySelector('.nav');
  var toggle = document.querySelector('.nav__toggle');
  var links = document.getElementById('nav-links');

  // Mobile menu
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.textContent = open ? 'Close' : 'Menu';
    });
    links.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        links.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.textContent = 'Menu';
      }
    });
  }

  // Border under the nav once the page is scrolled
  var onScroll = function () { nav.classList.toggle('is-scrolled', window.scrollY > 8); };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Footer year
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  setupProjectModal();

  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }

  // Scroll reveal
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });

  // Highlight the nav link for the section in view
  var navLinks = {};
  document.querySelectorAll('.nav__links a[href^="#"]').forEach(function (a) { navLinks[a.getAttribute('href').slice(1)] = a; });
  var spy = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var a = navLinks[entry.target.id];
      if (a && entry.isIntersecting) {
        Object.keys(navLinks).forEach(function (k) { navLinks[k].classList.remove('is-active'); });
        a.classList.add('is-active');
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  Object.keys(navLinks).forEach(function (id) {
    var s = document.getElementById(id);
    if (s) spy.observe(s);
  });
})();

// ---------- Project pop-up: gallery + full description ----------
// Opens on click/tap of any [data-project] card; content comes from window.PROJECTS (projects.js).
// Deep link: https://zobimaru91.github.io/#project-uqda opens that project directly.
function setupProjectModal() {
  var data = window.PROJECTS;
  var dlg = document.getElementById('project-modal');
  if (!data || !dlg || typeof dlg.showModal !== 'function') return;

  var IMG = 'assets/img/';
  var img = dlg.querySelector('.pm__img');
  var prev = dlg.querySelector('.pm__nav--prev');
  var next = dlg.querySelector('.pm__nav--next');
  var count = dlg.querySelector('.pm__count');
  var thumbs = dlg.querySelector('.pm__thumbs');
  var current = null, index = 0, opener = null;

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; });
  }
  // Text in [brackets] becomes a yellow placeholder
  function fmt(s) { return esc(s).replace(/\[[^\]]+\]/g, function (m) { return '<span class="ph">' + m + '</span>'; }); }
  function plain(s) { return String(s).replace(/\s*\[[^\]]+\]/g, ''); }
  function src(name) { return IMG + name + (window.innerWidth < 700 ? '-800' : '-1600') + '.webp'; }

  // Add a "View project" button over each project image
  document.querySelectorAll('[data-project]').forEach(function (card) {
    var p = data[card.getAttribute('data-project')];
    var box = card.querySelector('.card__img, .project__img');
    if (!p || !box) return;
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'view-btn';
    b.setAttribute('aria-label', 'View project: ' + plain(p.title) + ' (' + p.images.length + (p.images.length === 1 ? ' image)' : ' images)'));
    b.innerHTML = '<span>View project +</span>';
    box.appendChild(b);
    card.addEventListener('click', function (e) {
      if (e.target.closest('a')) return;
      if (e.target.closest('.view-btn, .card__img, .project__img, h3, h4')) open(card.getAttribute('data-project'), b);
    });
  });

  function show(i) {
    var n = current.images.length;
    index = (i + n) % n;
    var name = current.images[index];
    img.classList.add('is-loading');
    img.onload = function () { img.classList.remove('is-loading'); };
    img.src = src(name);
    img.alt = plain(current.title) + ', image ' + (index + 1) + ' of ' + n;
    count.textContent = n > 1 ? (index + 1) + ' / ' + n : '';
    thumbs.querySelectorAll('button').forEach(function (t, k) {
      t.setAttribute('aria-current', k === index ? 'true' : 'false');
      if (k === index) t.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    });
    if (n > 1) { var pre = new Image(); pre.src = src(current.images[(index + 1) % n]); }
  }

  function open(id, from) {
    var p = data[id];
    if (!p) return;
    current = p; opener = from || null;
    dlg.querySelector('.pm__title').innerHTML = fmt(p.title);
    dlg.querySelector('.pm__meta').innerHTML = p.meta.map(function (m) {
      return '<dt>' + esc(m[0]) + '</dt><dd>' + fmt(m[1]) + '</dd>';
    }).join('');
    dlg.querySelector('.pm__desc').innerHTML = fmt(p.desc);
    var kc = dlg.querySelector('.pm__kc'), ul = dlg.querySelector('.pm__bullets');
    kc.hidden = !p.bullets.length;
    ul.innerHTML = p.bullets.map(function (b) { return '<li>' + fmt(b) + '</li>'; }).join('');
    var more = dlg.querySelector('.pm__more');
    if (more) more.remove();
    if (p.morePlaceholder) {
      more = document.createElement('p');
      more.className = 'pm__more';
      more.innerHTML = fmt(p.morePlaceholder);
      ul.after(more);
    }
    var many = p.images.length > 1;
    prev.hidden = next.hidden = !many;
    thumbs.innerHTML = many ? p.images.map(function (name, k) {
      return '<button type="button" aria-label="Image ' + (k + 1) + '"><img src="' + IMG + name + '-800.webp" alt="" loading="lazy"></button>';
    }).join('') : '';
    dlg.querySelector('.pm__text').scrollTop = 0;
    dlg.querySelector('.pm__inner').scrollTop = 0;
    document.documentElement.classList.add('modal-open');
    if (!dlg.open) dlg.showModal();
    show(0);
    dlg.querySelector('.pm__close').focus();
    if (history.replaceState) history.replaceState(null, '', '#project-' + id);
  }

  function close() { if (dlg.open) dlg.close(); }

  dlg.addEventListener('close', function () {
    document.documentElement.classList.remove('modal-open');
    img.removeAttribute('src');
    if (history.replaceState && location.hash.indexOf('#project-') === 0) history.replaceState(null, '', location.pathname + location.search);
    if (opener) opener.focus({ preventScroll: true });
  });
  dlg.querySelector('.pm__close').addEventListener('click', close);
  prev.addEventListener('click', function () { show(index - 1); });
  next.addEventListener('click', function () { show(index + 1); });
  thumbs.addEventListener('click', function (e) {
    var t = e.target.closest('button');
    if (t) show([].indexOf.call(thumbs.children, t));
  });
  // Click on the dark backdrop closes
  dlg.addEventListener('click', function (e) { if (e.target === dlg) close(); });
  // Arrow keys (Esc is handled by <dialog>)
  dlg.addEventListener('keydown', function (e) {
    if (!current || current.images.length < 2) return;
    if (e.key === 'ArrowLeft') { e.preventDefault(); show(index - 1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); show(index + 1); }
  });
  // Swipe on touch screens
  var x0 = null, y0 = null;
  var stage = dlg.querySelector('.pm__stage');
  stage.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; }, { passive: true });
  stage.addEventListener('touchend', function (e) {
    if (x0 === null || !current || current.images.length < 2) return;
    var dx = e.changedTouches[0].clientX - x0, dy = e.changedTouches[0].clientY - y0;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) show(index + (dx < 0 ? 1 : -1));
    x0 = null;
  }, { passive: true });

  // Open from a shared link like #project-uqda
  var m = location.hash.match(/^#project-([\w-]+)$/);
  if (m && data[m[1]]) open(m[1]);
}
