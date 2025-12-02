# ELEMENTARY-ENGLISH-LANDING-PAGE

THE LANDING PAGE FOR ELEMENTARY ENGLISH.

## Project setup

This project uses React, TypeScript, Tailwind CSS, and Vite. The repository keeps a flat folder structure with one folder per concept and no nested subfolders inside those concept folders.

### Folders
- `app`: Application entry point and layout wiring.
- `sections`: Individual hero layers that can be edited or swapped independently.
- `components`: Generic primitives such as buttons and cards (no color opinions baked in).
- `function`: Reusable TypeScript helpers for motion and composition.
- `colors`: Centralized color tokens and style helpers.
- `backgrounds`: Background-related components and effects.
- `fonts`: Font stacks and typography helpers.
- `media`: Placeholder for future media assets.

### Scripts
- `npm run dev` — start the Vite dev server.
- `npm run build` — build the static site.
- `npm run preview` — preview the production build.

## Installing dependencies (fixing "vite: command not found")

Running any of the scripts above requires installing dependencies locally first. If `npm run build` complains that `vite` (or any other CLI) is missing, run `npm install` in the project root to populate `node_modules`:

```
npm install
```

For CI (including Vercel), use the same command so devDependencies such as Vite are installed before building. If your environment sets proxy variables, ensure they allow access to `https://registry.npmjs.org`.
