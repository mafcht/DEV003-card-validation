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
  // para generar mensaje con el acumulador
  if ((validator.isValid(cardNumber.value)) === true){
    alert("Tu tarjeta de crédito fue valida, muchas gracias por tu donación") 
    //  message = acumulador.value
  }
  else {
    alert("Tarjeta de crédito invalida, por favor introducela nuevamente") 
  }
};
// validator.isValid() ya los llame 
// validator.maskify()
console.log(validator);
