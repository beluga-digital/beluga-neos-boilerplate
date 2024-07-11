import { defineConfig } from "vite";

export default defineConfig((configEnv) => ({
  base: "./",
  build: {
    // generate .vite/manifest.json in outDir
    manifest: true,
    rollupOptions: {
      // overwrite default .html entry
      input: {
        footer: "Resources/Private/Assets/Main.js",
      },
      output: {
        // If you use this output option the Fusion object will just work™️
        dir: "Resources/Public/Dist",
      },
    },
  },
}));
