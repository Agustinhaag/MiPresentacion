const { validationResult } = require("express-validator");
const service = require("../service/contactService.js")

const mostrar = (req, res) => {
  res.render("index.ejs", {
    errors: [],
    values: {},
  });
};

const contact = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.render("index.ejs", {
      errors: errors.array(),
      values: req.body,
    });
  } else {
      const result = await service.postEmail(req.body)
      res.redirect("/sucess");
    }
};

const sucess = (req,res) => {
    res.render("contact/contact.ejs")
}

module.exports = {
  mostrar,
    contact,
  sucess,
};
