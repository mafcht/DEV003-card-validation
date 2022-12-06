import validator from './validator.js';
const nombre = document.getElementById("nombre");
const botonParticipar = document.getElementById("participar");
const cardNumber = document.getElementById("cardNumber");
const botonDonar = document.getElementById("donar","message");
//const respuesta = validaror.maskify(acumulador);


botonParticipar.onclick = function () {
  alert("Hola " + nombre.value + " ¡Gracias por interesarte en ser un Rey Mago!")
  document.getElementById("preguntarNumero").style.display = "block";
};
botonDonar.onclick = function () {
  console.log(validator.isValid(cardNumber.value))
  console.log(validator.maskify(cardNumber.value))   
  if ((validator.isValid(cardNumber.value)) === true){
    alert("Tu tarjeta de crédito numero: " + validator.maskify(cardNumber.value) +  "  fue valida. ¡Muchas gracias por tu donación!") 
  }
  else {
    alert("Tu tarjeta de crédito numero: " + validator.maskify(cardNumber.value) +  "  fue invalida. Por favor vuelve a introducirla.") 
  }
};
console.log(validator);
