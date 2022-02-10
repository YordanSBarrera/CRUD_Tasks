import express from "express";
import { engine } from "express-handlebars";
import indexRoutes from "./routes/index.routes";
import path from "path";
import "./database";

const app = express();

app.set("views", path.join(__dirname, "views"));
console.log(app.get("views"), "+++++++++++");

app.engine(
  ".hbs",
  engine({
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    defaulLayout: "main",
    extname: ".hbs",
  })
);

app.set("view engine", ".hbs");

//routes
app.use(indexRoutes);

export default app;
