import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgrPlugin from "vite-plugin-svgr";
import envCompatible from "vite-plugin-env-compatible";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  envPrefix: "REACT_APP_",
  plugins: [
    react(),
    envCompatible(),
    svgrPlugin({
      svgrOptions: {
        icon: true,
        // ...svgr options (https://react-svgr.com/docs/options/)
      },
    }),
  ],
  resolve: {
    alias: {
      xmlhttprequest: "xhr2", // Add alias for XMLHttpRequest
    },
  },
  server: {
    open: true,
    port: 3000, // Replace with your desired port
  },
  esbuild: {
    loader: "tsx", // Ensure that files with .js extension are treated as JSX
    include: /src\/.*\.[tj]sx?$/, // This includes .js, .jsx, .ts, .tsx files
  },
  optimizeDeps: {
    force: true,
    esbuildOptions: {
      loader: {
        ".js": "tsx",
      },
    },
  },
  define: {
    // By default, Vite doesn't include shims for NodeJS/
    // necessary for segment analytics lib to work
    global: "window",
  },
  build: {
    outDir: "build",
  },
  // Removed the 'test' block as it's not a valid configuration option for Vite
});
