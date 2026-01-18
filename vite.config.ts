import { jsxLocPlugin } from "@builder.io/vite-plugin-jsx-loc";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import compression from "vite-plugin-compression";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    jsxLocPlugin(),
    // Compressão Brotli (melhor compressão, suportado por browsers modernos)
    compression({
      algorithm: "brotliCompress",
      ext: ".br",
      threshold: 1024, // Só comprimir arquivos > 1KB
    }),
    // Compressão Gzip (fallback para browsers antigos)
    compression({
      algorithm: "gzip",
      ext: ".gz",
      threshold: 1024,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  envDir: path.resolve(import.meta.dirname),
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
    // Otimizações de build
    target: "esnext", // Build para browsers modernos
    cssCodeSplit: true, // Separar CSS por chunk
    sourcemap: false, // Desabilitar sourcemaps em produção
    // Minificação com esbuild (mais rápido que terser)
    minify: "esbuild",
    // Code Splitting - Separar vendors para melhor cache
    rollupOptions: {
      output: {
        manualChunks: {
          // React core - muda raramente
          "vendor-react": ["react", "react-dom"],
          // Animações - usado em toda a página
          "vendor-motion": ["framer-motion"],
          // Radix UI components - biblioteca de UI
          "vendor-radix": [
            "@radix-ui/react-accordion",
            "@radix-ui/react-dialog",
            "@radix-ui/react-tooltip",
            "@radix-ui/react-scroll-area",
          ],
          // Router e utilitários
          "vendor-utils": ["wouter", "clsx", "tailwind-merge"],
        },
      },
    },
  },
  // Otimizações de desenvolvimento
  server: {
    warmup: {
      clientFiles: ["./src/pages/Home.tsx", "./src/components/sections/*.tsx"],
    },
  },
  // Remover console.log em produção
  esbuild: {
    drop: ["console", "debugger"],
  },
});
