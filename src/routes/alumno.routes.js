import { Router } from "express";
import {
  getAlumno,
  getAlumnoById,
  postAlumno,
  putAlumno,
  deleteAlumno,
} from "../controllers/alumno.controller.js";

const router = Router();

router.get("/alumno", getAlumno);
router.get("/alumno/:id", getAlumnoById);
router.post("/alumno", postAlumno);
router.put("/alumno/:id", putAlumno);
router.delete("/alumno/:id", deleteAlumno);

export default router;
