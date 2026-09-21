# vramaswamy4.github.io

My portfolio: https://vramaswamy4.github.io

Astro, plain CSS, no UI framework. Project write-ups are MDX files in `src/content/projects/`; blog posts go in `src/content/writing/` and the Writing nav link appears once one exists. The home page hero is a small canvas simulation of ride-dispatch's nearest-driver matching (`src/components/DispatchHero.astro`), and the architecture diagrams are generated from node and edge lists (`src/components/ArchDiagram.astro`).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build
```

Pushing to `main` deploys to GitHub Pages through `.github/workflows/deploy.yml`.
