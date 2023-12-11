import solid from "solid-start/vite";
import {defineConfig} from "vite";
import DynamicPublicDirectory from 'vite-multiple-assets';

export default defineConfig({
  ssr: {
    external: ["solid-start-cmp"]
  },
  plugins: [solid(),
    DynamicPublicDirectory(['node_modules/solid-start-cmp/public','public']),],
});
