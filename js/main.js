/* ALEJO.DEV — comportamiento compartido (sin dependencias) */
(function () {
  "use strict";

  var SITE = {
    email: "jalexnov5@gmail.com",
    github: "https://github.com/Mundanesleet",
    linkedin: "https://www.linkedin.com/in/jait-alejandro-sossa-camacho-711773250/",
  };

  var PAGES = [
    { id: "home", label: "Home", href: "index.html" },
    { id: "sobre-mi", label: "Sobre mí", href: "sobre-mi.html" },
    { id: "proyectos", label: "Proyectos", href: "proyectos.html" },
    { id: "experiencia", label: "Experiencia", href: "experiencia.html" },
    { id: "contacto", label: "Contacto", href: "contacto.html" },
  ];

  var current = document.body.getAttribute("data-page");
  document.documentElement.classList.add("js");

  function links(cls) {
    return PAGES.map(function (p) {
      var active = p.id === current ? ' aria-current="page"' : "";
      return '<a class="' + cls + '" href="' + p.href + '"' + active + ">" + p.label + "</a>";
    }).join("");
  }

  function renderHeader() {
    var host = document.getElementById("site-header");
    if (!host) return;
    host.className = "site-header";
    host.innerHTML =
      '<div class="container site-header__bar">' +
        '<a class="brand" href="index.html" aria-label="ALEJO.DEV — Inicio">' +
          '<span class="brand__mark">A.</span><span class="brand__name">ALEJO.DEV</span></a>' +
        '<nav class="nav-list" aria-label="Principal">' + links("nav-link") + "</nav>" +
        '<div class="site-header__actions">' +
          '<a class="btn btn--primary" href="mailto:' + SITE.email + '"><span>Hablemos</span>' +
            '<span class="icon icon--xs" aria-hidden="true">arrow_forward</span></a>' +
          '<button class="nav-toggle" id="navToggle" type="button" aria-expanded="false" aria-controls="navMobile" aria-label="Abrir menú">' +
            '<span class="icon" aria-hidden="true">menu</span></button>' +
        "</div>" +
      "</div>" +
      '<nav class="nav-mobile" id="navMobile" aria-label="Principal (móvil)">' + links("nav-link") + "</nav>";

    var toggle = document.getElementById("navToggle");
    var panel = document.getElementById("navMobile");
    toggle.addEventListener("click", function () {
      var open = panel.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
      toggle.firstChild.textContent = open ? "close" : "menu";
    });
  }

  function renderFooter() {
    var host = document.getElementById("site-footer");
    if (!host) return;
    host.className = "site-footer";
    host.innerHTML =
      '<div class="container">' +
        '<div class="site-footer__grid">' +
          '<div class="site-footer__brand">' +
            '<a class="brand" href="index.html"><span class="brand__mark">A.</span><span class="brand__name">ALEJO.DEV</span></a>' +
            "<p>Desarrollador de software enfocado en resolver problemas reales con backend estructurado, bases de datos y desarrollo funcional.</p>" +
            '<div class="site-footer__loc"><span class="status-dot status-dot--sm status-dot--secondary"></span><span class="mono">Colombia · Remote</span></div>' +
          "</div>" +
          '<div class="site-footer__col"><span class="eyebrow">Navegación</span>' +
            '<nav aria-label="Pie de página" class="site-footer__col">' + PAGES.map(function (p) {
              return '<a href="' + p.href + '">' + p.label + "</a>";
            }).join("") + "</nav></div>" +
          '<div class="site-footer__col"><span class="eyebrow">Redes y contacto</span>' +
            '<a class="split" href="' + SITE.github + '" target="_blank" rel="noopener noreferrer"><span>GitHub</span><span class="mono">@Mundanesleet</span></a>' +
            '<a class="split" href="' + SITE.linkedin + '" target="_blank" rel="noopener noreferrer"><span>LinkedIn</span><span class="mono">Alejo Sossa</span></a>' +
            '<a class="split" href="mailto:' + SITE.email + '"><span>Email</span><span class="mono">jalexnov5</span></a>' +
          "</div>" +
        "</div>" +
        '<div class="site-footer__base">' +
          '<p class="body-sm">© ' + new Date().getFullYear() + " ALEJO.DEV. Todos los derechos reservados.</p>" +
          '<p class="mono">Arquitectura Limpia · Criterio Funcional</p>' +
        "</div>" +
      "</div>";
  }

  function initReveal() {
    var targets = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      targets.forEach(function (t) { t.classList.add("is-visible"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
      });
    }, { threshold: 0.08 });
    targets.forEach(function (t) { io.observe(t); });
  }

  function initFilters() {
    var chips = document.querySelectorAll("[data-filter]");
    var items = document.querySelectorAll("[data-category]");
    if (!chips.length) return;
    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        var f = chip.getAttribute("data-filter");
        chips.forEach(function (c) { c.setAttribute("aria-pressed", String(c === chip)); });
        items.forEach(function (item) {
          var cats = item.getAttribute("data-category").split(" ");
          item.hidden = !(f === "todos" || cats.indexOf(f) !== -1);
        });
        document.querySelectorAll("[data-group]").forEach(function (g) {
          g.hidden = !g.querySelector("[data-category]:not([hidden])");
        });
      });
    });
  }

  function initCopy() {
    var btn = document.getElementById("copy-email");
    if (!btn) return;
    var label = btn.querySelector("[data-label]");
    var icon = btn.querySelector(".icon");
    var original = label.textContent;

    function done(ok) {
      label.textContent = ok ? "¡Copiado!" : SITE.email;
      icon.textContent = ok ? "done" : "content_copy";
      btn.classList.toggle("is-copied", ok);
      setTimeout(function () {
        label.textContent = original;
        icon.textContent = "content_copy";
        btn.classList.remove("is-copied");
      }, 2400);
    }

    btn.addEventListener("click", function () {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(SITE.email).then(function () { done(true); }, function () { done(false); });
      } else {
        done(false);
      }
    });
  }

  renderHeader();
  renderFooter();
  initReveal();
  initFilters();
  initCopy();
})();
