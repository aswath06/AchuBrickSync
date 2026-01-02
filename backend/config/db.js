const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("BrickSync", "root", "", {
  host: "127.0.0.1",
  dialect: "mysql",
  logging: console.log,
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("MySQL Database connected successfully.");
  } catch (error) {
    console.error("Unable to connect to MySQL:", error);
  }
};

module.exports = { sequelize, connectDB };
