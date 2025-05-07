const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const chokidar = require("chokidar");
const fs = require("fs");
const path = require("path");

const PORT = 3000;
const DIRECTORY = "sketch";

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const reloadScript = `
<script>
  const ws = new WebSocket('ws://' + location.host);
  ws.onopen = () => console.log('Live reload connected');
  ws.onmessage = event => {
    if (event.data === 'reload') location.reload();
  };
</script>
`;

app.get("/*", (req, res, next) => {
  const filePath = path.join(
    DIRECTORY,
    req.path === "/" ? "index.html" : req.path,
  );
  if (path.extname(filePath) === ".html" || req.path === "/") {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) return next();
      const modified = data.replace(/<\/body>/i, `${reloadScript}</body>`);
      res.setHeader("Content-Type", "text/html");
      res.send(modified);
    });
  } else {
    next();
  }
});

app.use(express.static(DIRECTORY));

chokidar
  .watch(DIRECTORY, {
    ignored: ["**/node_modules/**", "**/.git/**", /(^|[\/\\])\../],
    ignoreInitial: true,
  })
  .on("all", (event, filePath) => {
    console.log(`[${event}] ${filePath}`);
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send("reload");
      }
    });
  });

server.listen(PORT, () => {
  console.log(
    `\n✅ p5 Live Server running at http://localhost:${PORT}\nServing from: ${path.resolve(DIRECTORY)}\n`,
  );
});
