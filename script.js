
//let nombre = "Esteban";

//console.log(nombre);

//alert("Hola este es mi Javascript");


//let contenidoTitulo = "Nombre";

//let titulo = document.querySelector()

//titulo.innerHTML = contenidoTitulo;

//let textotitulo = titulo.innerText;

let nombre = "Esteban";
let ciudad = "Arequipa";
let gusto = "comida";

let parrafo = document.querySelector(".parrafo1");

function cambiarTexto(nombre, ciudad, gusto){
    let contenido = `Me llamo ${nombre} vivo en ${ciudad} y me gusta la ${gusto}.`;
    return contenido;
};


parrafo.innerText = cambiarTexto(nombre,ciudad,gusto);

