const validator = { 
// ejemplo tarjeta 5457623898234113
  isvalid : (cardNumber) =>  {
    // vamos a ir guardando la suma total en la siguiente variable
    let luhnSum = 0
    //convertir el string a un array y dividir por espacio
    const numeros = Array.from(cardNumber,Number)
    // convierte string a numeros pero sin dividir Array.from(String(12345), Number);
    //funcion que recorre mi array
    for (let i=1; i< numeros.length; i+=2){
      // primer paso doblar el valor de los digitos pares empezando por el segundo digito de la derecha
      let doubleNumber = numeros[i] * 2
      // si numero es mayor a 10, restar 9, -=9
      if (doubleNumber > 9){
        doubleNumber -= 9
      }
      // sumar numeros con doubleNumber = luhnSum
      luhnSum += doubleNumber 
    }
    for (let i=0; i< numeros.length; i+=2){
      // primer paso doblar el valor de los digitos pares empezando por el segundo digito de la derecha
      const singleNumber = numeros[i] 
      luhnSum += singleNumber
    }
    // hice un console log para ver la suma en la consola y corroborar si es correcto
    console.log(luhnSum)
    return luhnSum % 10 === 0    
  }
  // proceso enmascarar
  , maskify: (cardNumber) => {
    let acumulador= ""
    const numeros = Array.from(cardNumber,Number)
    for (let i=0; i< numeros.length; i++){
      if (i>11){
        acumulador = acumulador + numeros[i]
      }
      else {
        acumulador = acumulador + "#"
      }
    }
    console.log(acumulador)
    return acumulador
  }
}
export default validator;
