import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";

export const Alumno = sequelize.define("alumnos", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING,
  },

  lastName: {
    type: DataTypes.STRING,
  },
  address: {
    type: DataTypes.STRING,
  },

  age: {
    type: DataTypes.INTEGER,
  },
});
