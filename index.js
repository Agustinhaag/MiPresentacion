const express = require("express")
const app = express()

require("dotenv").config();

app.use(express.urlencoded({ extended: false }));

app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "./src/view");

const expressLayout = require("express-ejs-layouts");
app.use(expressLayout);
app.set("layout", "./layout/public.ejs");

const inicio = require("./src/route/inicioRoute.js");
app.use("/", inicio);

const port = 3006

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})