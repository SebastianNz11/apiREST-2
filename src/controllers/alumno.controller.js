import { Alumno } from "../models/alumno.model.js";

export const getAlumno = async (req, res) => {
  try {
    const alumno = await Alumno.findAll();
    res.json(alumno);
  } catch (error) {
    res.status(500).json({ msg: "No fue posible traer datos" });
  }
};

export const getAlumnoById = async (req, res) => {
  const { id } = req.params;
  try {
    const alumno = await Alumno.findOne({
      where: { id },
    });
    if (!alumno) {
      return res.json({ msg: "No se encontro el alumno" });
    }
    res.json(alumno);
  } catch (error) {
    res.status(500).json({ msg: "No se puso encontrar el alumno" });
  }
};

export const postAlumno = async (req, res) => {
  const { firstName, lastName, address, age } = req.body;
  try {
    const alumno = await Alumno.create({
      firstName,
      lastName,
      address,
      age,
    });
    res.json(alumno);
  } catch (error) {
    res.status(500).json({ msg: "No se pudo crear el alumno" });
  }
};

export const putAlumno = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastname, address, age } = req.body;

    const alumno = await Alumno.findByPk(id);
    if (!alumno) {
      return res.json({ msg: "No se encontro el alumno" });
    }
    alumno.firstName = firstName;
    alumno.lastname = lastname;
    alumno.address = address;
    alumno.age = age;
    await alumno.save();
    res.json(alumno);
  } catch (error) {
    res.status(500).json({ msg: "No se pudo actualizar el alumno" });
  }
};

export const deleteAlumno = async (req, res) => {
  try {
    const { id } = req.params;
    const alumno = await Alumno.destroy({
      where: { id },
    });
    if (!alumno) {
      return res.json({ msg: "No se encontro el alumno" });
    }
    return res.status(204).send();
  } catch (error) {
    res.status(500).json({ msg: "No se pudo eliminar el alumno" });
  }
};
