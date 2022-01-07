import express from "express"
import hbs from "hbs"
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const viewsEngine = (app) => {
  app.set("views", `${__dirname}/../views`);
  app.set("view engine", "hbs");
  app.use(express.static(`${__dirname}/../public`));
  hbs.registerPartials(`${__dirname}/../views/partials`);
};

export default viewsEngine