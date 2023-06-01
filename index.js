let menu = document.getElementById("menu");
let mostrar = document.getElementById("mostrar");
let cerrar = document.getElementById("cerrar");
let enlaces = document.querySelectorAll("nav a[href^='#']");

mostrar.addEventListener("click", () => {
  menu.classList.add("visible");
  menu.style.transition = "0.6s";
});
cerrar.addEventListener("click", () => {
  menu.classList.remove("visible");
});
enlaces.forEach((enlace) => {
  enlace.addEventListener("click", () => {
    menu.classList.toggle("visible");
  });
});

let fila = document.querySelector(".contenedor-carrusel");
let proyecto = document.querySelectorAll(".proyecto");
let derecha = document.getElementById("flecha-derecha");
let izquierda = document.getElementById("flecha-izquierda");

derecha.addEventListener("click", () => {
  fila.scrollLeft += fila.offsetWidth;
  let indicadoractivo = document.querySelector(".indicadores .activo");
  if (indicadoractivo && indicadoractivo.nextElementSibling) {
    indicadoractivo.nextElementSibling.classList.add("activo");
    indicadoractivo.classList.remove("activo");
  }
});

izquierda.addEventListener("click", () => {
  fila.scrollLeft -= fila.offsetWidth;
  let indicadoractivo = document.querySelector(".indicadores .activo");
  if (indicadoractivo && indicadoractivo.previousElementSibling) {
    indicadoractivo.previousElementSibling.classList.add("activo");
    indicadoractivo.classList.remove("activo");
  }
});

const numpag = Math.ceil(proyecto.length / 5);
for (let i = 0; i < numpag; i++) {
  const indicador = document.createElement("button");

  if (i === 0) {
    indicador.classList.add("activo");
  }
  document.querySelector(".indicadores").appendChild(indicador);
  indicador.addEventListener("click", (e) => {
    fila.scrollLeft = i * fila.offsetWidth;
    document.querySelector(".indicadores .activo").classList.remove("activo");
    e.target.classList.add("activo");
  });
}

window.addEventListener("scroll", () => {
  let skill = document.getElementById("skill");
  const posicion = window.scrollY;
  let html = document.getElementById("html");
  let js = document.getElementById("js");
  let db = document.getElementById("db");
  let node = document.getElementById("node");
  let posicionSkill = skill.getBoundingClientRect().top;
  if (posicion >= posicionSkill) {
    html.classList.add("progreso1");
    js.classList.add("progreso2");
    db.classList.add("progreso3");
    node.classList.add("progreso4");
  } else {
    html.classList.remove("progreso1");
    js.classList.remove("progreso2");
    db.classList.remove("progreso3");
    node.classList.remove("progreso4");
  }
});


let form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault(), validar();
});
let nombre = document.getElementById("name");
let email = document.getElementById("email");
let asunto = document.getElementById("asunto");
let mensaje = document.getElementById("mensaje");

function validar() {
  let nuevoname = nombre.value.trim();
  let nuevoemail = email.value.trim();
  let nuevoasunto = asunto.value.trim();
  let nuevomensaje = mensaje.value.trim();
  let valido = true;

  if (nuevoname === "") {
    error(nombre, "Debe ingresar el nombre completo");
    valido = false;
  } else {
    sucess(nombre);
  }
  if (nuevoemail === "") {
    error(email, "Debe ingresar un email");
    valido = false;
  } else {
    sucess(email);
  }
  if (nuevoasunto === "") {
    error(asunto, "Ingrese un asunto válido");
    valido = false;
  } else {
    sucess(asunto);
  }
  if (nuevomensaje === "") {
    error(mensaje, "Ingrese un mensaje");
    valido = false;
  } else {
    sucess(mensaje);
  }
  if (valido) {
    form.submit();
  }
}

function error(input, mensaje) {
  input.style.borderColor="red";
  let padre = input.parentElement;
  padre.classList.add("mostrar");
  let small = padre.querySelector("small");
  small.innerHTML = mensaje;
}
function sucess(input) {
  input.style.removeProperty("border-color");
  let padre = input.parentElement;
  padre.classList.remove("mostrar");
}

import { proyectos } from "./proyects.js";
proyectos.forEach((proyecto) => {
  let contenedor = document.createElement("div");
  contenedor.setAttribute("class", "proyecto");
  contenedor.innerHTML = `
                <img src="${proyecto.img}" alt="" />
                <div class="info-proyecto">
                    <h4>${proyecto.title}</h4>
                    <p>${proyecto.description}</p>
                </div>`;
  let contain = document.getElementById("container-proyect");
  contain.appendChild(contenedor);
});
