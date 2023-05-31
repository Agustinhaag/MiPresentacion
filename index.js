let menu = document.getElementById("menu");
let mostrar = document.getElementById("mostrar");
let cerrar = document.getElementById("cerrar");
let enlaces = document.querySelectorAll("nav a[href^='#']")

mostrar.addEventListener("click", () => {
    menu.classList.add("visible");
    menu.style.transition = "0.6s";
})
cerrar.addEventListener("click", () => {
    menu.classList.remove("visible");  
})
enlaces.forEach(enlace => {
    enlace.addEventListener("click", () => {
        menu.classList.toggle("visible");
    })
})

let fila = document.querySelector(".contenedor-carrusel");
let proyecto = document.querySelectorAll(".proyecto");
let derecha = document.getElementById("flecha-derecha");
let izquierda = document.getElementById("flecha-izquierda");


 derecha.addEventListener("click", ()=>{
    fila.scrollLeft += fila.offsetWidth ;
     let indicadoractivo= document.querySelector(".indicadores .activo");
if(indicadoractivo.nextElementSibling){
    indicadoractivo.nextElementSibling.classList.add("activo");
    indicadoractivo.classList.remove("activo");
}
})

   izquierda.addEventListener("click", ()=>{
    fila.scrollLeft -= fila.offsetWidth;
    let indicadoractivo= document.querySelector(".indicadores .activo");
if(indicadoractivo.previousElementSibling){
    indicadoractivo.previousElementSibling.classList.add("activo");
    indicadoractivo.classList.remove("activo");
}
})

const numpag= Math.ceil(proyecto.length / 5);
for(let i=0; i<numpag ;i++){
    const indicador= document.createElement('button');  

if(i===0){
    indicador.classList.add("activo");
}    document.querySelector('.indicadores').appendChild(indicador);
indicador.addEventListener("click", (e)=>{
    fila.scrollLeft=i*fila.offsetWidth;
    document.querySelector(".indicadores .activo").classList.remove("activo");
    e.target.classList.add("activo");
})
}


window.addEventListener("scroll", ()=>{
let skill = document.getElementById("skill");
const posicion = window.scrollY;
let html = document.getElementById("html");
let js = document.getElementById("js");
let db = document.getElementById("db");
let node = document.getElementById("node");
let posicionSkill = skill.getBoundingClientRect().top;
if(posicion >= posicionSkill){
    html.classList.add("progreso1");
    js.classList.add("progreso2");
    db.classList.add("progreso3");
    node.classList.add("progreso4");
}else{
    html.classList.remove("progreso1");
    js.classList.remove("progreso2");
    db.classList.remove("progreso3");
    node.classList.remove("progreso4");
}
})

 let nombre = document.getElementById("name");
    let email = document.getElementById("email");
    let asunto = document.getElementById("asunto");
let mensaje = document.getElementById("mensaje");
let small = document.querySelectorAll("small");
let form = document.getElementById("form");
form.addEventListener("submit", e => {
    e.preventDefault(),
        validar();
});

function validar() {
    let nuevoname = nombre.value.trim();
    let nuevoemail = email.value.trim();
    let nuevoasunto = asunto.value.trim();
    let nuevomensaje = mensaje.value.trim();
    let valido = true;

    if (nuevoname==="" ) {
        error(nombre)
        valido = false;
    } else {
        sucess(nombre)
    }
     if (nuevoemail==="") {
         error(email);
         valido = false;
     } else {
       sucess(email);
    }
     if (nuevoasunto==="") {
         error(asunto);
         valido = false;
     } else {
       sucess(asunto);
    }
     if (nuevomensaje==="") {
         error(mensaje);
         valido = false;
     } else {
         sucess(mensaje);
    }
    if (valido) {
        form.submit();
    }
}
function error(input) {
    let padre = input.parentElement;
    padre.classList.add("mostrar");
}
function sucess(input) {
    let padre = input.parentElement;
    padre.classList.remove("mostrar");
}

