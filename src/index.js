import express from "express";
import "dotenv/config";
import { sequelize } from "./database/database.js";
import routesAlumnos from "./routes/alumno.routes.js";
import routesProfesor from "./routes/profesor.routes.js";
import "./models/alumno.model.js";

const app = express();
app.use(express.json());
app.use(routesAlumnos);
app.use(routesProfesor);

const main = () => {
  app.listen(process.env.PORT, async () => {
    try {
      await sequelize.sync();
      console.log("Connection has been established successfully.");
      console.log("Escuchando en el puerto " + process.env.PORT);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  });
};

main();
