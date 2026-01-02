const Vehicle = require("../models/vehicle");
exports.getAllVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.findAll();
    res.json(vehicles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getVehicleById = async (req, res) => {
  try {
    const vehicle = await Vehicle.findByPk(req.params.id);
    if (!vehicle) return res.status(404).json({ error: "Vehicle not found" });
    res.json(vehicle);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createVehicle = async (req, res) => {
  try {
    const { vehicleNumber, fitness, rc, pollution, insurance } = req.body;
    const newVehicle = await Vehicle.create({
      vehicleNumber,
      fitness,
      rc,
      pollution,
      insurance,
    });
    res.status(201).json(newVehicle);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateVehicle = async (req, res) => {
  try {
    const { id } = req.params;
    const vehicle = await Vehicle.findByPk(id);
    if (!vehicle) return res.status(404).json({ error: "Vehicle not found" });
    await vehicle.update(req.body);
    res.json(vehicle);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.deleteVehicle = async (req, res) => {
  try {
    const { id } = req.params;
    const vehicle = await Vehicle.findByPk(id);
    if (!vehicle) return res.status(404).json({ error: "Vehicle not found" });
    await vehicle.destroy();
    res.json({ message: "Vehicle deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
