# nano-agent-skills

[![CI](https://github.com/r4ullopezdev/nano-agent-skills/actions/workflows/ci.yml/badge.svg)](https://github.com/r4ullopezdev/nano-agent-skills/actions/workflows/ci.yml)
[![License](https://img.shields.io/badge/license-Apache--2.0-blue.svg)](./LICENSE)

Reusable skill registry and demo plugin pack for the NANO Agent Stack ecosystem.

## What it contains

- lightweight skill registry
- clear skill contract for plugin authors
- five demo skills:
  - web research stub
  - file summarizer
  - markdown report generator
  - task classifier
  - structured output formatter
- example of authoring a custom skill

## Quickstart

```bash
npm install
npm run test
```

## Author a skill

```ts
import { createSkill } from "nano-agent-skills";

export const mySkill = createSkill({
  id: "risk-checker",
  description: "Produces a basic risk envelope.",
  run: ({ task, input }) => ({
    summary: `Risk scan for ${task}`,
    output: { severity: "medium", input }
  })
});
```

## Design goals

- keep skills portable and runtime-agnostic
- make registry behavior obvious
- provide a clean starting point for richer provider-backed skills later

## Design note

See [docs/design-note-001-skill-boundary.md](./docs/design-note-001-skill-boundary.md).
