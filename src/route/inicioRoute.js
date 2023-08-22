const express = require("express");
const route = express.Router();
const controller = require("../controller/inicioController.js");
const { body } = require("express-validator");

const validar = [
  body("name").notEmpty().withMessage("El campo nombre no puede estar vacio"),
  body("email").notEmpty().withMessage("el campo email no puede estar vacio"),
  body("asunto").notEmpty().withMessage("El campo asunto no puede estar vacio"),
  body("message")
    .notEmpty()
    .withMessage("El campo mensaje no puede estar vacio")
    .bail()
    .custom((value) => {
      if (value.trim() === "") {
        throw new Error(
          "El campo mensaje no puede contener solo espacios en blanco"
        );
      }
      return true;
    }),
];

route.get("/", controller.mostrar);
route.post("/", validar, controller.contact);

route.get("/sucess", controller.sucess);

module.exports = route;
