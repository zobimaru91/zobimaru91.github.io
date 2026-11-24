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
  setupHeroSlideshow();
  setupToolsCatalogue();

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
    var ni = p.images.length;
    b.setAttribute('aria-label', 'View project: ' + plain(p.title) + (ni ? ' (' + ni + (ni === 1 ? ' image)' : ' images)') : ''));
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
    // Projects without images open as text only
    dlg.classList.toggle('pm--noimg', !p.images.length);
    if (p.images.length) show(0); else { img.removeAttribute('src'); count.textContent = ''; }
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

// ---------- Hero slideshow ----------
// One image per project; a new slide comes in from the right every 3 seconds.
// To change the order or add a project, edit SLIDES (image base name in assets/img + caption).
function setupHeroSlideshow() {
  var fig = document.querySelector('[data-slideshow]');
  if (!fig) return;
  var frame = fig.querySelector('.hero__frame');
  var cap = fig.querySelector('figcaption');
  var SLIDES = [
    ['uqda-1', 'Al Uqda Equestrian Complex, Phase 4 · Qatar · BIM Lead'],
    ['karaana-1', 'Al Karaana Camel Race Track · Qatar · BIM Coordinator'],
    ['ssdl-1', 'SSDL, Secondary Standards Dosimetry Laboratories · Qatar · BIM Architectural Coordinator'],
    ['envlab-1', 'Environmental Laboratory · Mesaimeer, Qatar · BIM Coordinator'],
    ['ose-1', 'OSE, Outfield Spectator Experience · Qiddiya, Saudi Arabia · BIM Coordinator'],
    ['amaala-2', 'Amaala Staff Village · Saudi Arabia · Architect / BIM Coordinator'],
    ['khalifa-1', 'Khalifa City Residential Development · Abu Dhabi · Senior Architect / Designer'],
    ['ghaf-1', 'MAF Ghaf Woods · Dubai · Architect / BIM Coordinator'],
    ['pja-1', 'Palm Jebel Ali, Fronds A–F · Dubai · BIM Modeler / Coordinator'],
    ['meryam-1', 'Meryam Island · Sharjah · Architect / BIM Modeler'],
    ['cpk-1', 'CPK Airport (Foster + Partners) · Poland · BIM Consultant'],
    ['vrace-1', 'Villa Vraca · Sarajevo · Project Designer'],
    ['breka-1', 'Residential Complex, Breka · Sarajevo · Project Designer'],
    ['bjelasnica-1', 'Bjelašnica Ski-Resort Masterplan · Competition entry'],
    ['thesis-3', 'M.Arch thesis: terraced houses, Goražde']
  ];
  // People who ask their system for less motion keep the static first image
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var IMG = 'assets/img/';
  var els = [frame.querySelector('.hero__slide')];
  var index = 0, timer = null;

  function slide(i) {
    if (els[i]) return els[i];
    var name = SLIDES[i][0];
    var im = document.createElement('img');
    im.className = 'hero__slide';
    im.alt = SLIDES[i][1].split(' · ')[0];
    im.decoding = 'async';
    im.sizes = '(min-width: 900px) 55vw, 100vw';
    im.srcset = IMG + name + '-800.webp 800w, ' + IMG + name + '-1600.webp 1600w';
    im.src = IMG + name + '-1600.webp';
    frame.appendChild(im);
    els[i] = im;
    return im;
  }

  function next() {
    var n = (index + 1) % SLIDES.length;
    var cur = els[index], nxt = slide(n);
    // Wait until the next image has loaded so it never slides in blank
    var ready = nxt.complete && nxt.naturalWidth ? Promise.resolve() : (nxt.decode ? nxt.decode().catch(function () {}) : Promise.resolve());
    ready.then(function () {
      // Park the incoming slide on the right without animating, then slide both
      nxt.classList.remove('is-leaving');
      nxt.style.transition = 'none';
      nxt.style.transform = 'translateX(100%)';
      void nxt.offsetWidth;
      nxt.style.transition = '';
      nxt.style.transform = '';
      cur.classList.remove('is-active');
      cur.classList.add('is-leaving');
      nxt.classList.add('is-active');
      cap.classList.add('is-fading');
      setTimeout(function () { cap.textContent = SLIDES[n][1]; cap.classList.remove('is-fading'); }, 400);
      index = n;
      slide((n + 1) % SLIDES.length); // start loading the one after
    });
  }

  function start() { if (!timer) timer = setInterval(next, 3000); }
  function stop() { clearInterval(timer); timer = null; }
  // Pause while the tab is in the background
  document.addEventListener('visibilitychange', function () { document.hidden ? stop() : start(); });
  slide(1);
  start();
}

// ---------- Tools catalogue pop-up ----------
// Cards with data-tools="navisworks" / "revit" open a list from assets/js/tools.js.
// Downloads stay disabled until the visitor ticks "I agree to the terms of use".
function setupToolsCatalogue() {
  var data = window.TOOLS;
  var dlg = document.getElementById('tools-modal');
  if (!data || !dlg || typeof dlg.showModal !== 'function') return;
  var list = dlg.querySelector('.tm__list');
  var check = dlg.querySelector('.tm__check');
  var terms = dlg.querySelector('.tm__terms');
  var opener = null;

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; });
  }

  function setLinks() {
    list.querySelectorAll('.tm__dl').forEach(function (a) {
      if (check.checked) { a.setAttribute('href', a.getAttribute('data-href')); a.removeAttribute('aria-disabled'); a.classList.remove('btn--disabled'); }
      else { a.removeAttribute('href'); a.setAttribute('aria-disabled', 'true'); a.classList.add('btn--disabled'); }
    });
  }

  function open(id, from) {
    var c = data[id];
    if (!c) return;
    opener = from || null;
    dlg.querySelector('.tm__title').textContent = c.title;
    dlg.querySelector('.tm__intro').textContent = c.intro;
    var anyFile = false;
    list.innerHTML = c.items.map(function (t) {
      var ready = t.status === 'available' && t.file;
      if (ready) anyFile = true;
      var fname = ready ? t.file.split('/').pop() : '';
      var incl = t.status === 'included';
      return '<li class="tm__item' + (ready ? ' is-ready' : '') + (incl ? ' is-included' : '') + '">' +
        '<div class="tm__row"><h3>' + esc(t.name) + (t.version ? ' <span class="tm__ver">v' + esc(t.version) + '</span>' : '') + '</h3>' +
        '<span class="tm__badge' + (ready ? ' tm__badge--ok' : '') + '">' + (ready ? 'Free download' : incl ? 'In the installer' : 'Coming soon') + '</span></div>' +
        '<p>' + esc(t.desc) + '</p>' +
        (t.steps && t.steps.length ? '<p class="tm__steps-title">How it works</p><ol class="tm__steps">' + t.steps.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ol>' : '') +
        (t.img ? '<img class="tm__img" src="' + esc(t.img) + '" alt="' + esc(t.imgAlt || '') + '" loading="lazy" decoding="async">' : '') +
        (t.req ? '<p class="tm__req"><strong>Requires:</strong> ' + esc(t.req) + '</p>' : '') +
        (t.includes ? '<p class="tm__req"><strong>Includes:</strong> ' + esc(t.includes) + '</p>' : '') +
        (ready ? '<a class="btn tm__dl" role="button" data-href="' + esc(t.file) + '" download="' + esc(fname) + '">Download ZIP' + (t.size ? ' (' + esc(t.size) + ')' : '') + '</a>' : '') +
        '</li>';
    }).join('');
    terms.hidden = !anyFile;
    setLinks();
    document.documentElement.classList.add('modal-open');
    if (!dlg.open) dlg.showModal();
    dlg.querySelector('.tm__inner').scrollTop = 0;
    dlg.querySelector('.tm__close').focus();
    if (history.replaceState) history.replaceState(null, '', '#tools-' + id);
  }

  function close() { if (dlg.open) dlg.close(); }

  check.addEventListener('change', setLinks);
  // A click on a disabled download points the visitor to the terms box
  list.addEventListener('click', function (e) {
    var a = e.target.closest('.tm__dl');
    if (a && !check.checked) {
      e.preventDefault();
      terms.classList.remove('is-nudged'); void terms.offsetWidth; terms.classList.add('is-nudged');
      terms.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      check.focus({ preventScroll: true });
    }
  });
  dlg.addEventListener('close', function () {
    document.documentElement.classList.remove('modal-open');
    if (history.replaceState && location.hash.indexOf('#tools-') === 0) history.replaceState(null, '', location.pathname + location.search + '#downloads');
    if (opener) opener.focus({ preventScroll: true });
  });
  dlg.querySelector('.tm__close').addEventListener('click', close);
  dlg.addEventListener('click', function (e) { if (e.target === dlg) close(); });

  document.querySelectorAll('[data-tools]').forEach(function (b) {
    b.addEventListener('click', function () { open(b.getAttribute('data-tools'), b); });
  });

  // Open from a shared link like #tools-navisworks
  var m = location.hash.match(/^#tools-([\w-]+)$/);
  if (m && data[m[1]]) open(m[1]);
}
