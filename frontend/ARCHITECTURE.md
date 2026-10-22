# Frontend structure

`app/` only routes and composes pages; logic lives in features and shared layers.

```
src/
├── app/                  # routing only: page, layout, loading, error, not-found, route handlers
│   ├── (app)/            # pages with the app shell (sidebar, nav bar)
│   │   └── <route>/
│   │       ├── page.tsx
│   │       └── _components/   # components used by this route only
│   ├── (blank)/          # standalone pages (login, errors, ...)
│   └── layout.tsx
├── features/<name>/      # business modules (vertical slices)
│   ├── components/
│   ├── actions.ts        # mutations (server actions / API calls)
│   ├── queries.ts        # data fetching
│   ├── schemas.ts        # validation
│   ├── hooks.ts
│   ├── types.ts
│   └── index.ts          # public API: the only entry point for other modules
├── components/
│   ├── ui/               # design system: Button, Input, Modal
│   └── layout/           # shell pieces: header, sidebar, page loader
├── lib/                  # infrastructure and utils: api-client, env, utils
├── hooks/                # global hooks
├── stores/               # client state, only when needed
├── providers/            # React context providers
├── types/                # global types
├── config/               # constants, navigation, feature flags
├── i18n/                 # translations
└── styles/               # global CSS (index.css, themes, third-party styles)
tests/
├── e2e/
└── unit/                 # unit tests may also sit next to code as *.test.ts
```

## Rules

1. `app/` stays thin: a page imports from `features/` and shared layers, no business logic.
2. Group by feature, not by file type. Create files and folders inside a feature only when needed.
3. Other modules import a feature only via `@/features/<name>` (its `index.ts`). Inside a feature use relative imports.
4. Dependencies go one way: `app` → `features` → `components`, `lib`, `hooks`, … Shared layers never import features or `app`. Features don't import each other in cycles.
5. Server Components by default; `"use client"` only on leaf components.
6. Business logic and the database live in `backend/`; `queries.ts` and `actions.ts` call its API.
7. Middleware file in Next 16 is `src/proxy.ts`.

Rules 3–4 are enforced by ESLint (`no-restricted-imports` in `eslint.config.mjs`).
