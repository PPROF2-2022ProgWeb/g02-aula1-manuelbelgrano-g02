
function myFunction() {
    alert("HAS INGRESADO A LA BIBLIOTECA");
}

function cambiarImagen() {
    const Imagen = document.getElementById("foto")
    Imagen.src = "images/young.jpg"

}

function mostrarOriginal() {
    const imagen = document.getElementById("foto")
    imagen.src = "images/libros.jpg"

}
function cambiarImagen() {
    const Imagen = document.getElementById("foto2")
    Imagen.src = "images/edificio.jpg"

}

function mostrarOriginal() {
    const imagen = document.getElementById("foto2")
    imagen.src = "images/book.jpg"

const formulario = document.getElementById("form")
const edad = document.getElementById("edad")
const boton = document.getElementById("boton")


functionvalidar() {

    if (edad.value < 15) {
        alert("Tienes que tener 15!")
    } else {
        formulario.submit()
    }
}
    
  var className = "sección registro";
formularioDeRegistro.classList.add('borrar');
contenedorDeDatos.classList.add('contenedorDatos');

if (contenedorDeDatos.getElementsByClassName(className).length == 0) {
    var secciónregistro = document.createElement("h4");
    secciónregistro.className = className;
    secciónregistro.textContent = "Felicidades " + nombreCliente
}
setTimeout(function redirect() {
    window.location.href = 'index.html', false;
} 
    
  
