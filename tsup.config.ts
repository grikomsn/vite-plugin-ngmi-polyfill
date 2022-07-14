import { defineConfig } from "tsup";
import packageJson from "./package.json";

export default defineConfig(({ watch }) => ({
  clean: !watch,
  dts: true,
  entry: ["src/*.ts"],
  external: [...Object.keys(packageJson.dependencies)],
  format: ["cjs", "esm"],
  minify: !watch,
  minifyIdentifiers: !watch,
  minifySyntax: !watch,
  minifyWhitespace: !watch,
}));
