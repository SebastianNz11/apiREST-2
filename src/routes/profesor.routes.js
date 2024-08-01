import { Router } from "express";
import {
  deleteProfesor,
  getProfesor,
  getProfesorById,
  postProfesor,
  putProfesor,
} from "../controllers/profesor.controller.js";

const routes = Router();

routes.get("/profesor", getProfesor);
routes.get("/profesor/:id", getProfesorById);
routes.post("/profesor", postProfesor);
routes.put("/profesor/:id", putProfesor);
routes.delete("/profesor/:id", deleteProfesor);

export default routes;
