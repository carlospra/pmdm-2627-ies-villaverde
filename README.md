# PMDM 2026-2027 · Web del módulo

Web del módulo 0489 Programación multimedia y dispositivos móviles (2º DAM, IES Villaverde), hecha con [Docusaurus](https://docusaurus.io/) y publicada en GitHub Pages:

https://carlospra.github.io/pmdm-2627-ies-villaverde/

## Probarla en tu ordenador

```powershell
npm.cmd install
npm.cmd start
```

Se abre en http://localhost:3000/pmdm-2627-ies-villaverde/ y se recarga sola al guardar cualquier fichero.

## Publicar cambios

```powershell
git add .
git commit -m "docs: describe el cambio"
git push
```

Cada `git push` vuelve a publicar la web sola (pestaña *Actions* del repositorio).

## Dónde está cada cosa

- `docs/intro.md`: la portada.
- `docs/android/`: las unidades de Android (UT1 a UT5).
- `docs/videojuegos/`: las unidades de Unity (UT6 y UT7).
- `sidebars.js`: el menú de la izquierda. Una página nueva hay que añadirla aquí.
