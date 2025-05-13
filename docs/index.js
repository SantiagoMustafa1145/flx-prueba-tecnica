/*
  Ejercicio 1: Reverse a String
  Escribe una función reverseString que tome una cadena como entrada y devuelva la cadena invertida.
*/

function reverseString(str) {
  // Tu solución acá
  // Convierto el string en un Array de caracteres con el método split, luego con el método reverse de Array lo invierto para luego con join devoler el string invertido
  return str.split("").reverse().join("");
}

/*
  Ejercicio 2: Check for Palindrome
  Escribe una función isPalindrome que tome una cadena como entrada 
  y devuelva true si la cadena es un palíndromo, y false en caso contrario.
*/
function isPalindrome(str) {
  // Tu solución acá
  // Hago lo mismo que en reverse string, solo que ahora lo comparo con el original
  return str === str.split("").reverse().join("");
}

/*
  Ejercicio 3: Find the Nearest Pair
  Dado un array de números enteros, 
  encuentra el par de elementos cuya diferencia es mínima. 
  En otras palabras, encuentra dos números en el array que 
  estén más cerca el uno del otro en términos de valor absoluto.

  Ejemplo:

  Entrada: [4, 2, 1, 7, 9, 10]
  Salida: [1, 2]
*/

// Aclaro que lo hice así porque se piden los valores que sumen el menor número, no las posiciones.
function closestPair(arr) {
  // Tu solución acá
  // Ordeno el Array, ésto me permitirá comparar los valores de menor a mayor haciendo más fácil
  // El encontrar la menor suma de los valores que estén a la par
  const sortedArr = [...arr].sort((a, b) => a - b);

  let minDif = Infinity;
  let nearestPair = [];

  for (let i = 0; i < sortedArr.length - 1; i++) {
    // Guardo la diferencia actual y la comparo con la mínima que tengo guardada.
    // En caso de que la actual sea menor, actualizo el valor de minDif con el actual.
    // Guardo en nearestPair los valores que conforman el menor valor absoluto que estén a la par.
    const currentDif = Math.abs(sortedArr[i] - sortedArr[i + 1]);
    if (currentDif < minDif) {
      minDif = currentDif;
      nearestPair = [sortedArr[i], sortedArr[i + 1]];
    }
  }

  return nearestPair;
}

/*
  Ejercicio 4: Calculadora - Programación Orientada a Objetos
  La calculadora debe ser capaz de realizar operaciones aritméticas básicas, 
  como suma, resta, multiplicación y división. 
  Además, debe mantener un registro del último resultado calculado 
  para que los usuarios puedan acceder a él si es necesario.

  La calculadora debe ser una clase llamada Calculator, que tenga los siguientes métodos:
  - add(a, b): Este método toma dos números como argumentos y devuelve la suma de los mismos. 
    Además, actualiza el último resultado calculado.

  - subtract(a, b): Este método toma dos números como argumentos y devuelve la resta del primero menos el segundo. 
    Además, actualiza el último resultado calculado.

  - multiply(a, b): Este método toma dos números como argumentos y devuelve el producto de los mismos. 
    Además, actualiza el último resultado calculado.

  - divide(a, b): Este método toma dos números como argumentos y devuelve el cociente del primero dividido por el segundo.
    Si el segundo número es cero, se debe lanzar un error indicando que la división por cero no está permitida. 
    Además, actualiza el último resultado calculado.

  - getLastResult(): Este método devuelve el último resultado calculado por la calculadora, simulando un historial.

  Además de estos métodos, debes agregar una función más compleja a la clase Calculator, 
  que calcule la potencia de un número. 
  Esta función debe ser asignada al prototipo de la clase y se llamará exponentiate(base, exponent). 
  Esta función toma dos argumentos: la base y el exponente, y devuelve la base elevada a la potencia del exponente. 
  La función debe manejar correctamente los casos donde el exponente es cero o negativo, lanzando un error en este último caso.
  Además, actualiza el último resultado calculado.

*/

class Calculator {
  // Tu solución acá
  constructor() {
    this.lastResult = null;
  }

  getLastResult() {
    return this.lastResult;
  }

  add(a, b) {
    const result = a + b;
    this.lastResult = result;
    return result;
  }

  subtract(a, b) {
    const result = a - b;
    this.lastResult = result;
    return result;
  }

  multiply(a, b) {
    const result = a * b;
    this.lastResult = result;
    return result;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error("Division by zero is not allowed");
    }

    const result = a / b;
    this.lastResult = result;
    return result;
  }

  exponentiate(base, exponent) {
    if (exponent < 0) {
      throw new Error("Exponentiation with negative exponent is not allowed");
    }

    const result = base ** exponent;
    this.lastResult = result;
    return result;
  }
}

module.exports = {
  closestPair,
  isPalindrome,
  reverseString,
  Calculator,
};
