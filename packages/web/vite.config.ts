import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgrPlugin from "vite-plugin-svgr";
import envCompatible from "vite-plugin-env-compatible";

const reactDomServerStub = path.resolve(__dirname, "vite-react-dom-server-stub.js");

// Esbuild plugin used during optimizeDeps so pre-bundling redirects react-dom/server to stub
function esbuildReactDomServerStub() {
  return {
    name: "react-dom-server-stub",
    setup(build) {
      build.onResolve({ filter: /react-dom\/server|react-dom-server-legacy/ }, () => ({
        path: reactDomServerStub,
      }));
    },
  };
}

// https://vitejs.dev/config/
// Cast plugins to avoid type conflict when root and packages/web resolve different Vite copies.
export default defineConfig({
  base: "./",
  envPrefix: "REACT_APP_",
  plugins: [
    // Force react-dom/server to stub during dep optimization and transform (for google-maps-react)
    {
      name: "react-dom-server-stub",
      resolveId(id) {
        if (
          id === "react-dom/server" ||
          id === "react-dom/server.js" ||
          id === "react-dom/server.node.js" ||
          id === "react-dom/server.browser" ||
          id.includes("react-dom-server-legacy") ||
          id.includes("react-dom/server")
        ) {
          return reactDomServerStub;
        }
      },
    },
    react(),
    envCompatible(),
    svgrPlugin({
      svgrOptions: {
        icon: true,
      },
    }),
  ] as import("vite").PluginOption[],
    resolve: {
    alias: {
      xmlhttprequest: "xhr2",
      "@material-ui/core": "@mui/material",
      "@material-ui/icons": "@mui/icons-material",
      "@material-ui/styles": "@mui/styles",
      "@material-ui/lab": "@mui/lab",
      // Force a single React instance (avoids "Invalid hook call" with @mui/styles)
      // In a workspace, React is hoisted to root node_modules
      react: path.resolve(__dirname, "../../node_modules/react"),
      "react-dom": path.resolve(__dirname, "../../node_modules/react-dom"),
      "react/jsx-runtime": path.resolve(__dirname, "../../node_modules/react/jsx-runtime"),
      "react-dom/client": path.resolve(__dirname, "../../node_modules/react-dom/client"),
      // Prevent google-maps-react etc. from pulling react-dom/server (Node) into the browser
      "react-dom/server": path.resolve(__dirname, "vite-react-dom-server-stub.js"),
      "react-dom/server.browser": path.resolve(__dirname, "vite-react-dom-server-stub.js"),
      "react-dom/server.js": path.resolve(__dirname, "vite-react-dom-server-stub.js"),
      "react-dom/server.node.js": path.resolve(__dirname, "vite-react-dom-server-stub.js"),
    },
    dedupe: ["react", "react-dom"],
    preserveSymlinks: false,
  },
  server: {
    open: true,
    port: 3000,
    hmr: {
      host: 'localhost',
    },
  },
  esbuild: {
    loader: "tsx", // Ensure that files with .js extension are treated as JSX
    include: /src\/.*\.[tj]sx?$/, // This includes .js, .jsx, .ts, .tsx files
  },
  optimizeDeps: {
    // Disable automatic dep discovery so Vite never re-optimizes mid-serve
    // (which causes "file does not exist" chunk errors). All deps are listed below.
    noDiscovery: true,
    include: [
      // Core React
      "react",
      "react-dom",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
      "react-dom/client",
      "react-is",
      "prop-types",
      "hoist-non-react-statics",
      // MUI
      "@mui/material",
      "@mui/utils",
      "@mui/lab",
      "@mui/lab/Alert",
      "@mui/system",
      "@mui/system/colorManipulator",
      "@mui/system/createStyled",
      "@mui/system/createTheme",
      "@mui/system/InitColorSchemeScript",
      "@mui/system/styleFunctionSx",
      "@mui/system/useThemeProps",
      "@mui/utils/deepmerge",
      "@mui/utils/formatMuiErrorMessage",
      "@mui/utils/generateUtilityClass",
      "@mui/material/AppBar",
      "@mui/material/Backdrop",
      "@mui/material/Button",
      "@mui/material/CssBaseline",
      "@mui/material/Divider",
      "@mui/material/Drawer",
      "@mui/material/Fade",
      "@mui/material/Hidden",
      "@mui/material/List",
      "@mui/material/ListItem",
      "@mui/material/ListItemIcon",
      "@mui/material/ListItemText",
      "@mui/material/Modal",
      "@mui/material/Switch",
      "@mui/material/Toolbar",
      "@mui/material/Typography",
      // MUI Icons (deep path imports only -- no barrel)
      "@mui/icons-material/Add",
      "@mui/icons-material/ArrowBackRounded",
      "@mui/icons-material/ArrowForwardRounded",
      "@mui/icons-material/CloseRounded",
      "@mui/icons-material/CloudDownloadRounded",
      "@mui/icons-material/ContactMailRounded",
      "@mui/icons-material/DeleteOutlineRounded",
      "@mui/icons-material/EditRounded",
      "@mui/icons-material/EmailOutlined",
      "@mui/icons-material/Facebook",
      "@mui/icons-material/HelpRounded",
      "@mui/icons-material/HistoryRounded",
      "@mui/icons-material/HomeOutlined",
      "@mui/icons-material/HomeRounded",
      "@mui/icons-material/InfoRounded",
      "@mui/icons-material/Instagram",
      "@mui/icons-material/LocalShippingOutlined",
      "@mui/icons-material/LocationCityRounded",
      "@mui/icons-material/LocationOn",
      "@mui/icons-material/LocationOnOutlined",
      "@mui/icons-material/LocationOnRounded",
      "@mui/icons-material/LockRounded",
      "@mui/icons-material/Mail",
      "@mui/icons-material/MoreVert",
      "@mui/icons-material/MoveToInbox",
      "@mui/icons-material/NotificationImportantRounded",
      "@mui/icons-material/PersonRounded",
      "@mui/icons-material/PhoneAndroidRounded",
      "@mui/icons-material/PhoneEnabled",
      "@mui/icons-material/PlayArrowRounded",
      "@mui/icons-material/Remove",
      "@mui/icons-material/RoomServiceRounded",
      "@mui/icons-material/ScheduleRounded",
      "@mui/icons-material/SearchRounded",
      "@mui/icons-material/ShoppingCartRounded",
      "@mui/icons-material/Twitter",
      "@mui/icons-material/Visibility",
      "@mui/icons-material/VisibilityOff",
      // Apollo
      "@apollo/client",
      "@apollo/client/link/error",
      "@apollo/client/link/ws",
      "@apollo/client/utilities",
      // Babel runtime helpers (transitive)
      "@babel/runtime/helpers/esm/extends",
      "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose",
      // Third-party
      "@livechat/widget-react",
      "axios",
      "chart.js",
      "date-fns",
      "emailjs-com",
      "firebase/analytics",
      "firebase/app",
      "firebase/auth",
      "firebase/firestore",
      "firebase/functions",
      "firebase/storage",
      "google-maps-react",
      "jspdf",
      "jspdf/dist/polyfills.es.js",
      "luxon",
      "moment",
      "moment-timezone",
      "mui-datatables",
      "react-bootstrap/Carousel",
      "react-chartjs-2",
      "react-ga",
      "react-router-dom",
      "react-swipeable-views",
      "subscriptions-transport-ws",
      "clsx",
      "@mui/styles",
    ],
    exclude: [],
    force: false,
    esbuildOptions: {
      loader: {
        ".js": "tsx",
      },
      mainFields: ["module", "main"],
      plugins: [esbuildReactDomServerStub()],
    },
    holdUntilCrawlEnd: true,
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
        // Disable manual chunks to avoid "Export 'import_react3' is not defined" runtime error.
        // React must not be split across chunks that can load in wrong order.
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]",
      },
    },
  },
  // Removed the 'test' block as it's not a valid configuration option for Vite
});
