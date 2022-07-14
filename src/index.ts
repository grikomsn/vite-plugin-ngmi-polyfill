import RollupPluginNodePolyfill from "rollup-plugin-node-polyfills";
import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";
import { NodeModulesPolyfillPlugin } from "@esbuild-plugins/node-modules-polyfill";
import type { NodePolyfillsOptions as EsbuildNodePolyfillsOptions } from "@esbuild-plugins/node-modules-polyfill";
import type { NodePolyfillsOptions as RollupNodePolyfillsOptions } from "rollup-plugin-node-polyfills/dist/types/modules";
import type { Plugin } from "vite";

export const PLUGIN_NAME = "vite-plugin-ngmi-polyfill";

export interface NgmiPolyfillConfig {
  defineGlobal?: boolean;
  nodeGlobalsOptions?: Parameters<typeof NodeGlobalsPolyfillPlugin>[0];
  nodeModulesOptions?: EsbuildNodePolyfillsOptions;
  rollupPolyfillOptions?: RollupNodePolyfillsOptions;
}

export function NgmiPolyfill({
  defineGlobal = true,
  nodeGlobalsOptions = {},
  nodeModulesOptions = {},
  rollupPolyfillOptions = {},
}: NgmiPolyfillConfig = {}): Plugin[] {
  return [
    {
      name: PLUGIN_NAME,
      config: () => ({
        build: {
          rollupOptions: {
            plugins: [RollupPluginNodePolyfill(rollupPolyfillOptions) as any],
          },
        },
        optimizeDeps: {
          esbuildOptions: {
            define: {
              ...(defineGlobal ? { global: "globalThis" } : {}),
            },
            plugins: [
              NodeGlobalsPolyfillPlugin({
                buffer: true,
                process: true,
                ...nodeGlobalsOptions,
              }),
              NodeModulesPolyfillPlugin(nodeModulesOptions),
            ],
          },
        },
      }),
    },
  ];
}
