const validator = { 
// ejemplo tarjeta 5457623898234113
  isvalid : (cardNumber) =>  {
   // vamos a ir guardando la suma total en la siguiente variable
    let luhnSum = 0
    console.log(cardNumber)
    //convertir el string a un array y dividir por espacio
     let numeros = Array.from(cardNumber,Number)
     console.log(numeros)
      // convierte string a numeros pero sin dividir Array.from(String(12345), Number);
    //funcion que recorre mi array
    for (let i=1; i< numeros.length; i+=2){
      // primer paso doblar el valor de los digitos pares empezando por el segundo digito de la derecha
      let doubleNumber = numeros[i] * 2
      // si numero es amyor a 10, restar 9, -=9
      if (doubleNumber > 9){
        doubleNumber -= 9
      }
      // sumar numeros con doubleNumber = luhnSum
      
      luhnSum += doubleNumber 
    }
    for (let i=0; i< numeros.length; i+=2){
      // primer paso doblar el valor de los digitos pares empezando por el segundo digito de la derecha
      let singleNumber = numeros[i] 

      luhnSum += singleNumber
      console.log(luhnSum)
    }

    console.log(luhnSum)
    return luhnSum % 10 === 0 
    
    /*
       // para generar mensaje
    let mensaje = ""
    if (luhnSum(cardNumber.value)){
      message =  "Tu tarjeta de crédito fue valida, muchas gracias por tu donación"
    }
    else {
      message = "Tarjeta de crédito invalida, por favor introducela nuevamente"
    }
    */
 
}

}

/* proceso enmascarar
const validator = {
  maskify : (cardNumber) => {
    cardNumber = cardNumber.toString() // segun yo ya es string me puedo saltar este paso?
    acumulador=""
    for (let i=0; i< cardNumber.length; i++){
      if (i<4){
        acumulador = acumulador + cardNumber[i]
      }
      else {
        acumulador = acumulador + "#"
      }
    }
  return acumulador
  }
}
*/
export default validator;
