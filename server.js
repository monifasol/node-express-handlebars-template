require("dotenv").config();
const path = require("path");
const connectLivereload = require("connect-livereload");
const express = require("express");
const app = express();

// middleware
require("./config")(app);     // sends app as a param in config/index.js

// register helpers for hbs
require("./middleware/hbs");


const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));

// connect-livereload will connect our "live-reload running port" with our app
app.use(connectLivereload());

// tell the browswer to refresh when the server has gotten up
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});


// routers
const indexRouter = require("./routes/index.routes");
app.use("/", indexRouter);


// app listens to Port
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});

module.exports = app;
