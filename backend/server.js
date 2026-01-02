const express = require("express");
const cors = require("cors");
const { connectDB, sequelize } = require("./config/db");
const vehicleRoutes = require("./routes/vehicleRoutes");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/vehicles", vehicleRoutes);
const PORT = process.env.PORT || 5054;
connectDB().then(() => {
  sequelize.sync({ alter: true }).then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      console.log(`GET/POST vehicles at http://localhost:${PORT}/api/vehicles`);
    });
  });
});
