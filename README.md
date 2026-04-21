# Minimal repro: `vi.mock` broken by circular import + setup file

Single-package reproduction. No external dependencies beyond `vitest`.

## File structure

```
src/
  core.ts           ← imported by setup; optionally re-exports from ./feature (toggle)
  feature/
    index.ts        ← re-exports api + process (what core points to circularly)
    api.ts          ← imports from ../core  ← the module being mocked
    process.ts      ← imports getData from ./api  ← the consumer
    api.test.ts     ← vi.mock('./api')
vitest/
  setup.mts         ← import { fetchAndProcess } '../src/core'
  vitest.unit.config.ts
```

## Toggle

**`src/core.ts`** — comment/uncomment one line:

```ts
// Uncomment to reproduce:
// export { fetchAndProcess } from './feature/index';
```

Run: `npm run test`
