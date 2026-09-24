# ALEJO.DEV — Portfolio

Sitio estático de cinco páginas (Home, Sobre mí, Proyectos, Experiencia, Contacto). Sin backend, sin base de datos, sin build: listo para GitHub Pages.

## Estructura

```
├── index.html · sobre-mi.html · proyectos.html · experiencia.html · contacto.html
├── css/style.css        # tokens del diseño (DESIGN.md) + componentes
├── js/main.js           # header/footer compartidos, filtros, copiar correo, reveal
└── assets/
    ├── favicon.svg
    └── images/          # alejo-professional.webp, hero-workspace.webp, como-arroz.webp, tienda-timoteo.webp
```

- Header y footer se definen una sola vez en `js/main.js` (constante `PAGES` y `SITE`).
- Para cambiar la foto, reemplazar `assets/images/alejo-professional.webp` (mismo nombre, sin tocar HTML/CSS).
- Fuentes (Geist, Newsreader, JetBrains Mono) e iconos (Material Symbols, subconjunto) se cargan desde Google Fonts.

## Ver en local

```bash
python -m http.server 8000
```

## Despliegue

GitHub Pages: Settings → Pages → Branch `main` / root.
