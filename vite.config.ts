import solid from "solid-start/vite";
import {defineConfig} from "vite";
import DynamicPublicDirectory from 'vite-multiple-assets';
import imagemin from 'unplugin-imagemin/vite';

export default defineConfig({
  ssr: {
    external: ["solid-start-cmp"]
  },
  plugins: [solid(),
    DynamicPublicDirectory(['node_modules/solid-start-cmp/public','public']),
    imagemin({
      mode: 'sharp',
      beforeBundle: false,
      // Default configuration options for compressing different pictures
      compress: {
        jpg: {
          quality: 50,
        },
        jpeg: {
          quality: 70,
        },
        png: {
          quality: 70,
        },
        webp: {
          quality: 70,
        },
      },
    }),],
});
