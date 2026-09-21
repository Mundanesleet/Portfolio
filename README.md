# Portfolio — Jait Alejandro Sossa Camacho

Sitio personal de una sola página: presentación, habilidades y los tres proyectos reales del perfil (Prospector C&D, Gestión Menú Como Arroz, Discord Helpdesk Bot), con enlaces directos a cada repositorio.

## Por qué es estático (sin backend)

La versión anterior de este repo usaba Flask solo para renderizar una plantilla fija, sin lógica de servidor real (ni base de datos, ni procesamiento). Un portfolio de este tipo no necesita backend: pasar a HTML/CSS/JS estático permite desplegarlo gratis en GitHub Pages, sin servidor que mantener corriendo, con carga instantánea.

## Tecnologías

- HTML5 semántico
- CSS3 (variables de tema, grid, animaciones de scroll con `prefers-reduced-motion` respetado)
- JavaScript vanilla (sin dependencias): menú móvil y revelado de secciones con `IntersectionObserver`

## Estructura

```
Portfolio/
├── index.html
├── css/style.css
├── js/script.js
└── README.md
```

## Ver en local

Al ser estático, alcanza con abrir `index.html` en el navegador, o servirlo con cualquier servidor estático:

```bash
python -m http.server 8000
```

y abrir `http://localhost:8000`.

## Despliegue

Publicado con **GitHub Pages** directamente desde la rama `main` (Settings → Pages → Branch: `main` / `root`).
