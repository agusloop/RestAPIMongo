const express = require("express");
const {
  getAllClients,
  createClient,
  getClientById,
  updateClient,
  deleteClient,
} = require("../controllers/client.controllers");

const clientRouter = express.Router();

clientRouter.route("/NutriNET/Cliente").get(getAllClients).post(createClient);
clientRouter
  .route("/NutriNET/Cliente/:id")
  .get(getClientById)
  .put(updateClient)
  .delete(deleteClient);

module.exports = clientRouter;
