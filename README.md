# Todo App

A simple todo app built while learning React.

**Live demo:** https://igor-skudar.github.io/Todo-app/

## Features

- Add, complete, and delete tasks
- Filter by All / Active / Completed
- Clear all completed tasks at once
- Tasks persist between visits (saved to `localStorage`)
- Custom-styled, accessible checkboxes and focus states
- Responsive layout

## Tech Stack

- **React** — UI and state management (`useState`, `useEffect`)
- **Vite** — build tool and dev server
- **Bun** — package manager and JavaScript runtime
- **CSS** — plain CSS with custom properties (design tokens) for colors, spacing, typography, radius, and shadows; no framework or preprocessor
- **JavaScript (ES6+)** — `crypto.randomUUID()` for task IDs, array methods for filtering/updating state
- **Web Storage API** — `localStorage` for persisting tasks
- **gh-pages** — deployment to GitHub Pages

## Getting Started

```bash
# clone the repo
git clone https://github.com/igor-skudar/Todo-app.git
cd Todo-app

# install dependencies
bun install

# run the dev server
bun run dev
```

## Deployment

The app is deployed to GitHub Pages via the `gh-pages` package:

```bash
bun run deploy
```

This builds the app and pushes the compiled output to the `gh-pages` branch, which GitHub serves as a static site.

## What I practiced

This was a study project to get comfortable with:

- Core React hooks (`useState`, `useEffect`)
- Conditional rendering and list rendering with keys
- Lifting state up and derived state (filtered task lists)
- Structuring CSS with custom properties instead of magic values
- Basic accessibility (focus-visible states, custom checkbox contrast, `prefers-reduced-motion`)
- Deploying a Vite app to GitHub Pages
