import validator from './validator.js';
const nombre = document.getElementById("nombre");
const botonParticipar = document.getElementById("participar");
const preguntarNumero = document.getElementById("preguntarNumero");
const cardNumber = document.getElementById("cardNumber");
const botonDonar = document.getElementById("donar");


botonParticipar.onclick = function () {
    alert("Hola " + nombre.value + " ¡Gracias por interesarte en ser un Rey Mago!")
 document.getElementById("preguntarNumero").style.display = "block";
 };

botonDonar.onclick = function () {
    console.log(validator.isvalid(cardNumber.value))
};

// validator.isValid() 
// validator.maskify()

console.log(validator);
