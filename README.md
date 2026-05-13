## Starter
This is a 🚀 React + Vite + Storybook + Tailwind Starter Project. 

The project is broken into different branches based on your api solution ( rest or graphql ). See branch links below:

- Apollo - **main** branch
- React-Query -  **main-react-query** branch

## Agent skills

This project ships agent skills (e.g. `reablocks`, `reachat`) pinned in `skills-lock.json` via the [Skills CLI](https://skills.sh). The materialized skill files live in `.agents/skills/` and are gitignored — they are restored from the lock file.

Restoration runs automatically on `pnpm install` via the `prepare` script (`npx skills experimental_install`). To run it manually:

```bash
npx skills experimental_install
```

Common commands:

| Action | Command |
|---|---|
| Add a new skill (writes to `skills-lock.json`) | `npx skills add <owner/repo@skill>` |
| Check for upstream updates | `npx skills check` |
| Update locked skills to latest | `npx skills update --project` |
| List installed skills | `npx skills list` |
| Find skills by keyword | `npx skills find <query>` |

Commit `skills-lock.json` after any add/update so other contributors restore the same versions.

## Reablocks stories sync

Story files from the installed `reablocks` package are copied into `src/stories/components/` so they render inside the app's `ThemeProvider` in Storybook. The directory is gitignored and re-synced on `pnpm install` (or manually via `pnpm sync:stories`).

## Tokens configuration

Design tokens live in `src/assets/styles/` and are layered from raw primitives → semantic theme aliases → Tailwind utilities. All files are aggregated by `index.css` in this order:

```css
@import "./common.css";
@import "./light.css";
@import "./dark.css";
@import "./root.css";
@import "./tw.css";
```

### `root.css` — primitive (theme-agnostic) tokens

The base layer. Declared on `:root, :host`, these values are constant across themes and act as the single source of truth that every other layer references.

- **Color palette** — full ramps (`50`–`1000`) for each named hue plus alpha-channel variants (`-a-*`). Names follow the design system (e.g. `--color-blue-hyperstream-*`, `--color-neutrals-darth-abyss-a-*`, `--color-green-emerald-saber-*`, `--color-red-crimson-wrath-*`).
- **Spacing** — `--spacing-padding-*` (`zero` → `8xl`), `--spacing-space-between-*`, `--spacing-layout-grid-*`.
- **Sizing** — `--sizing-asset-*`, `--sizing-size-tokens-*`, `--sizing-dividers-details-*`.
- **Corner radius** — `--corner-radius-primary | lg | sm | pill | sharp`.
- **Icons** — `--icons-size-xs | sm | base | lg | xl`.
- **Component dimensions** — per-component sizing/padding/radius derived from the primitives above (e.g. `--buttons-details-*`, `--inputs-details-*`, `--navigation-details-*`, `--table-details-*`, `--tabs-details-*`, `--tooltip-details-*`, `--avatar-details-*`, `--badges-details-*`, etc.).

### `light.css` — light-theme semantic tokens

Maps semantic roles to the primitive palette from `root.css`, scoped to the light theme. The selectors are:

```css
:root .theme-light, :root.theme-light,
:root .light, :root.light,
:root [data-theme='light'], :root[data-theme='light']
```

Token groups defined here:

- `--background-*` — surfaces: `basic`, `neutral-canvas`, `neutral-raised-*`, `neutral-inverse-raised-*`, `brand-*`, `semantic-{success|warning|info|error}-*`, `accent-{1..4}-*`.
- `--content-text-*` — text colors for every role (neutral, inverse, brand, semantic, accent, on-color).
- `--content-assets-*` — icon / asset colors mirroring the text scale.
- `--stroke-*` — border colors (neutral, brand, semantic, accent, focused-highlight).
- `--gradient-*` — neutral and brand gradient stops.
- `--effects-*` — focus rings and shadow colors (`base` + `inverse` ramps).
- `--reablocks-theme: light` — signals the active theme to reablocks.

### `dark.css` — dark-theme semantic tokens (default)

Mirrors the exact same semantic surface as `light.css` but with mappings tuned for dark mode. It is applied directly on `:root, :host` (no selector wrapper), which makes **dark the default theme** — the light theme overrides it only when one of the `.theme-light` / `.light` / `[data-theme='light']` selectors is present on an ancestor.

`--reablocks-theme: dark` is set here.

### `tw.css` — Tailwind v4 theme bridge

Wires the design tokens into Tailwind v4 via `@theme inline` and registers the project's custom variants. Highlights:

- `@import 'tailwindcss';` and `@source "../../../node_modules/reablocks";` — pulls Tailwind in and scans reablocks for utility classes.
- **Custom variants**
  - `dark` — matches `.theme-dark` or `[data-theme=dark]` ancestors.
  - `light` — matches `.theme-light` or `[data-theme=light]` ancestors.
  - `disabled-within` — true when a descendant `input`, `textarea`, or `button` is disabled.
- **Typography** — `--font-sans | serif | mono`, `--text-{xxs..9xl}` with paired `--text-*--line-height` values.
- **Breakpoints** — adds `--breakpoint-3xl: 120rem`.
- **Effects** — `--radius-*` (aliased from `--corner-radius-*`), `--blur-*`, `--drop-shadow-*`, plus composite `--shadow-{brand-sm|navigation-selected|tooltip|grid-item|menu|backdrop}`.
- **Resets** — `--color-{red|pink|purple|orange|...}-*: initial` clears Tailwind's default palette so only the design-system colors remain.
- **Color/spacing/sizing bridge** — re-exports the semantic tokens from `light.css` / `dark.css` and the primitives from `root.css` as Tailwind theme variables (e.g. `--color-background-brand-base`, `--color-content-text-neutral-base`, `--spacing-*`), so utilities like `bg-background-brand-base`, `text-content-text-neutral-base`, `border-stroke-neutral-3`, and `p-spacing-padding-base` are generated automatically.

### Switching themes

Add the appropriate class or `data-theme` attribute on an ancestor (typically `<html>` or `<body>`):

```html
<html class="theme-light" > <!-- or data-theme="light" -->
```

Omitting it (or using `data-theme="dark"`) keeps the dark defaults from `dark.css`.
