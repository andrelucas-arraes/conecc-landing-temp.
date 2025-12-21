import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Detecta se está em produção baseado no caminho do arquivo
// Se o arquivo está em dist/, está em produção
const isProduction = __dirname.includes("dist") || process.env.NODE_ENV === "production";

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Em produção, o servidor compilado está em dist/, então dist/public
  // Em desenvolvimento, os arquivos estão em dist/public
  const staticPath = isProduction
    ? path.resolve(__dirname, "public")
    : path.resolve(__dirname, "..", "dist", "public");

  // Verifica se o diretório existe
  try {
    const fs = await import("fs/promises");
    await fs.access(staticPath);
  } catch (error) {
    console.error(`❌ Diretório não encontrado: ${staticPath}`);
    console.error("💡 Execute 'npm run build' primeiro para gerar os arquivos estáticos.");
    process.exit(1);
  }

  // Serve arquivos estáticos
  app.use(express.static(staticPath, {
    maxAge: isProduction ? "1y" : "0",
    etag: true,
  }));

  // SPA fallback - todas as rotas retornam index.html
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"), (err) => {
      if (err) {
        console.error("❌ Erro ao servir index.html:", err);
        res.status(500).send("Erro interno do servidor");
      }
    });
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`✅ Servidor rodando em http://localhost:${port}/`);
    console.log(`📁 Servindo arquivos de: ${staticPath}`);
    console.log(`🌍 Ambiente: ${isProduction ? "production" : "development"}`);
  });

  // Tratamento de erros
  server.on("error", (error: NodeJS.ErrnoException) => {
    if (error.code === "EADDRINUSE") {
      console.error(`❌ Porta ${port} já está em uso. Tente outra porta.`);
    } else {
      console.error("❌ Erro no servidor:", error);
    }
    process.exit(1);
  });
}

startServer().catch((error) => {
  console.error("❌ Erro ao iniciar servidor:", error);
  process.exit(1);
});

