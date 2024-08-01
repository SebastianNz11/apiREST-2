import { Profesor } from "../models/profesor.model.js";

export const getProfesor = async (req, res) => {
  try {
    const profesor = await Profesor.findAll();
    res.json(profesor);
  } catch (error) {
    res.status(500).json({ msg: "No fue posible traer datos" });
  }
};

export const getProfesorById = async (req, res) => {
  const { id } = req.params;
  try {
    const profesor = await Profesor.findOne({
      where: { id },
    });
    if (!profesor) {
      return res.json({ msg: "No se encontro el profesor" });
    }
    res.json(profesor);
  } catch (error) {
    res.status(500).json({ msg: "No se puso encontrar el profesor" });
  }
};

export const postProfesor = async (req, res) => {
  const { firstName, lastName, course, age } = req.body;
  try {
    const profesor = await Profesor.create({
      firstName,
      lastName,
      course,
      age,
    });
    res.json(profesor);
  } catch (error) {
    res.status(500).json({ msg: "No se pudo crear el profesor" });
  }
};

export const putProfesor = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastname, course, age } = req.body;

    const profesor = await Profesor.findByPk(id);
    if (!profesor) {
      return res.json({ msg: "No se encontro el profesor" });
    }
    profesor.firstName = firstName;
    profesor.lastname = lastname;
    profesor.course = course;
    profesor.age = age;
    await profesor.save();
    res.json(profesor);
  } catch (error) {
    res.status(500).json({ msg: "No se pudo actualizar el profesor" });
  }
};

export const deleteProfesor = async (req, res) => {
  try {
    const { id } = req.params;
    const profesor = await Profesor.destroy({
      where: { id },
    });
    if (!profesor) {
      return res.json({ msg: "No se encontro el profesor" });
    }
    return res.status(204).send();
  } catch (error) {
    res.status(500).json({ msg: "No se pudo eliminar el profesor" });
  }
};
