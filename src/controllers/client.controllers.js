const Cliente = require("../models/client.model");
const success = 0;
const fail = -1;
const getAllClients = async (req, res) => {
  const clientes = await Cliente.find();
  if (!clientes) {
    return res.status(500).json({
      cve_error: fail,
      cve_mensaje: "No hay usuarios todavia",
    });
  }
  console.log(clientes);
  res.status(200).json({
    cve_error: success,
    data: clientes,
  });
};

const getClientById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Cliente.findById(id);
    console.log(data);
    res.status(200).json({
      cve_error: success,
      cve_mensaje: "Cliente Encontrado",
      data: data,
    });
  } catch (error) {
    res.status(200).json({
      cve_error: fail,
      cve_mensaje: "Cliente no encontrado",
    });
  }
};

const createClient = async (req, res) => {
  let errors = [];
  const {
    nombre,
    apellidos,
    nombre_usuario,
    correo_electronico,
    contrasena,
    edad,
    estatura,
    peso,
    imc,
    geb,
    eta,
  } = req.body;

  if (!nombre) errors.push({ text: "Llena el campo de nombre." });
  if (!apellidos) errors.push({ text: "Llena el campo de apellidos." });
  if (!nombre_usuario)
    errors.push({ text: "Llena el campo de nombre usuario." });
  if (!correo_electronico)
    errors.push({ text: "Llena el campo de correo electronico." });
  if (!contrasena) errors.push({ text: "Llena el campo de contrasena." });
  if (!edad) errors.push({ text: "Llena el campo de edad." });
  if (!estatura) errors.push({ text: "Llena el campo de estatura." });
  if (!peso) errors.push({ text: "Llena el campo de peso." });
  if (!imc) errors.push({ text: "Llena el campo de imc." });
  if (!geb) errors.push({ text: "Llena el campo de geb." });
  if (!eta) errors.push({ text: "Llena el campo de eta." });

  if (errors.length > 0) {
    return res.status(400).json({
      cve_error: fail,
      errors: errors,
      cve_mensaje: "Llena los campos antes de continuar",
    });
  } else {
    const nuevoCliente = new Cliente({
      nombre,
      apellidos,
      nombre_usuario,
      correo_electronico,
      contrasena,
      edad,
      estatura,
      peso,
      imc,
      geb,
      eta,
    });

    try {
      await nuevoCliente.save();
      res.status(201).json({
        cve_error: success,
        cve_mensaje: "Cliente guardado",
      });
    } catch (error) {
      return res.status(400).json({
        cve_error: fail,
        cve_mensaje: "Error al guardar Cliente",
        error: error,
      });
    }
  }
};

const updateClient = async (req, res) => {
  const { estatura, peso } = req.body;
  try {
    const ress = await Cliente.findByIdAndUpdate(req.params.id, {
      estatura,
      peso,
    });
    res.status(201).json({
      cve_error: success,
      cve_mensaje: "Cliente actualizado",
    });
  } catch (error) {
    res.status(401).json({
      cve_error: fail,
      cve_mensaje: "El cliente no se pudo actualizar",
    });
  }
};

const deleteClient = (req, res) => {
  res.json({
    message: "Hola delete",
  });
};

module.exports = {
  getAllClients,
  getClientById,
  createClient,
  updateClient,
  deleteClient,
};
