import express from "express";
import { createServer as createViteServer } from "vite";
import { renderToString } from "@vue/server-renderer";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const startServer = async () => {
    const server = express();

    // ⚡ Create Vite server in middleware mode
    const vite = await createViteServer({
        server: { middlewareMode: "ssr" },
        root: __dirname,
        appType: "custom",
    });

    // Use Vite's middleware to serve files
    server.use(vite.middlewares);

    server.get("/", async (req, res) => {
        try {
            // Dynamically import the app using Vite (this processes .vue files)
            const { createApp } = await vite.ssrLoadModule("/src/app.js");

            const app = createApp();
            const appContent = await renderToString(app);

            res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Vue Sports Quiz</title>
          <script type="module" src="/client.js"></script>
        </head>
        <body>
          <div id="app">${appContent}</div>
        </body>
        </html>
      `);
        } catch (err) {
            vite.ssrFixStacktrace(err);
            console.error(err);
            res.status(500).send("Internal Server Error");
        }
    });

    server.listen(3000, () => {
        console.log("Server is running on http://localhost:3000");
    });
};

startServer();
