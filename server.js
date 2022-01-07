// ES6

import dotenv from 'dotenv';
dotenv.config();
import express from "express"
const app = express();
import livereload from "livereload";
import connectLivereload from "connect-livereload";

import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

// views engine setup
import viewsEngine from "./config/index.js"
viewsEngine(app)       // I pass app as a variable to /config/index.mjs

const liveReloadServer = livereload.createServer();
liveReloadServer.watch(`${__dirname}/public`);

// connect-livereload will connect our "live-reload running port" with our app
app.use(connectLivereload());

// tell the browswer to refresh when the server is up
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

// register helpers for hbs
import "./middleware/hbs.js"

// routers
import { indexRouter } from "./routes/index.routes.js"
app.use("/", indexRouter);

// app listens to Port
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});

export default app;