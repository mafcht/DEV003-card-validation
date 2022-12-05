import validator from './validator.js';
const nombre = document.getElementById("nombre");
const botonParticipar = document.getElementById("participar");
const preguntarNumero = document.getElementById("preguntarNumero");
const cardNumber = document.getElementById("cardNumber");
const botonDonar = document.getElementById("donar");
let acumulador = ""

botonParticipar.onclick = function () {
    alert("Hola " + nombre.value + " ¡Gracias por interesarte en ser un Rey Mago!")
 document.getElementById("preguntarNumero").style.display = "block";
 };

botonDonar.onclick = function () {
    console.log(validator.isvalid(cardNumber.value))
    console.log(validator.maskify(cardNumber.value))
    console.log(validator.maskify(acumulador))
    // para generar mensaje con el acumulador
    if ((validator.isvalid(cardNumber.value)) === true){
      alert("Tu tarjeta de crédito fue valida," + acumulador + "muchas gracias por tu donación") 
    }
    else {
        alert("Tarjeta de crédito invalida, por favor introducela nuevamente") 
    }
};

    
       

// validator.isValid() ya los llame 
// validator.maskify()

console.log(validator);
