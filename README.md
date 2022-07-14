# vite-plugin-ngmi-polyfill

Vite plugin for polyfilling Node.js built-in globals and modules ⚡️

[![npm/v](https://badgen.net/npm/v/vite-plugin-ngmi-polyfill)](https://www.npmjs.com/package/vite-plugin-ngmi-polyfill)
[![npm/dt](https://badgen.net/npm/dt/vite-plugin-ngmi-polyfill)](https://www.npmjs.com/package/vite-plugin-ngmi-polyfill)
[![stars](https://badgen.net/github/stars/grikomsn/vite-plugin-ngmi-polyfill)](https://github.com/grikomsn/vite-plugin-ngmi-polyfill)

---

**Table of contents**

- [Reason](#reason)
- [Installing](#installing)
- [Usage](#usage)
- [Examples](#examples)
- [Included packages](#included-packages)
- [License](#license)

---

## Reason

Some modules such as `events` or `process` requires polyfilling since Vite does not handle it by default (here's a search for [vite browser-external errors](https://duckduckgo.com/?q=vite+browser-external+error&ia=web)), whereas several packages, especially web3 related ones, use these packages in order to work.

This package wraps [other polyfill packages](#included-packages) and exports a Vite plugin so you can easily import inside your `vite.config.{js,ts}`.

## Installing

```sh
# using npm
npm install vite vite-plugin-ngmi-polyfill

# using yarn
yarn add vite vite-plugin-ngmi-polyfill

# using pnpm
pnpm add vite vite-plugin-ngmi-polyfill
```

## Usage

```ts
import { defineConfig } from "vite";
import { NgmiPolyfill } from "vite-plugin-ngmi-polyfill";

export default defineConfig({
  plugins: [NgmiPolyfill()],
});
```

## Examples

TODO

## Included packages

- [@esbuild-plugins/node-globals-polyfill](https://github.com/remorses/esbuild-plugins#esbuild-pluginsnode-globals-polyfill)
- [@esbuild-plugins/node-modules-polyfill](https://github.com/remorses/esbuild-plugins#esbuild-pluginsnode-modules-polyfill)

## License

[MIT License, Copyright (c) 2022 Griko Nibras](./LICENSE)
