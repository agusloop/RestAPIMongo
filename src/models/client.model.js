const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const ClientSchema = new mongoose.Schema(
  {
    cliente_id: Number,
    nombre_usuario: {
      type: String,
      unique: true,
      required: true,
    },
    contrasena: {
      type: String,
      required: true,
    },
    nombre: {
      type: String,
      required: true,
    },
    apellidos: {
      type: String,
      required: true,
    },
    correo_electronico: {
      type: String,
      unique: true,
      required: true,
    },
    edad: {
      type: String,
      required: true,
    },
    estatura: {
      type: Number,
      required: true,
    },
    peso: {
      type: Number,
      required: true,
    },
    imc: {
      type: Number,
      required: true,
    },
    geb: {
      type: Number,
      required: true,
    },
    eta: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
ClientSchema.plugin(AutoIncrement, { inc_field: "cliente_id" });
module.exports = mongoose.model("Clients", ClientSchema);
