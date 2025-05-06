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
    chunkSizeWarningLimit: 2000, // Increase warning limit to 2000KB
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          "utils-vendor": ["date-fns", "axios", "lodash"],
          "graphql-vendor": ["@apollo/client", "graphql"],
          "firebase-vendor": [
            "firebase/app",
            "firebase/auth",
            "firebase/functions",
          ],
          "chart-vendor": ["chart.js", "react-chartjs-2"],
          "maps-vendor": ["@googlemaps/react-wrapper", "google-maps-react"],
        },
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]",
      },
    },
  },
  // Removed the 'test' block as it's not a valid configuration option for Vite
});
