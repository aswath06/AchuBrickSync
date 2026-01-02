const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Vehicle = sequelize.define(
  "Vehicle",
  {
    slNo: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    vehicleNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    fitness: {
      type: DataTypes.DATEONLY, // Change to DATEONLY
      allowNull: true,
    },
    rc: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    pollution: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    insurance: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
  },
  {
    tableName: "vehicles",
    timestamps: true,
  }
);

module.exports = Vehicle;
