let alumnos = ["Alex","Diana","Gaby","Jacky","Marco","Paloma","Danny"];

let notas = [15,17,20,20,14,18,14]

/**Ejercicio1
 * Con un for imprimir cada alumno con su respectiva nota
 * considerando que estan que estan ordenados por la 
 * posicion que tienen sus arreglos
 */

// for(let i=0; i < alumnos.length; i++){
//   console.log(`EL alumno ${alumnos[i]} tiene de nota ${notas[i]}`)
// }

/**
 * Ejercicio 2
 * Utilizando el mismo arreglo alumnos, hacer que el
 * usuario ingrese un nombre y si lo encuentra debe
 * mostrar la posicion donde se encuentra el alumno, si 
 * es que
 * lo encuentra debe dejar de buscar. En caso de no encontrarlo, mostrar un mensaje que no se encontro
 */

//  let nombreBuscado = prompt(`Ingrese nombre del Alumno:`);
                        
// for(let i = 0; i < alumnos.length; i++){
//   if(nombreBuscado == alumnos[i]){
//     console.log(`Se encontro a ${nombreBuscado} en la posicion ${i}`)
//     break;
//   } else {
//     console.log("Alumno no encontrado :(")
//   }  
// }

/**Ejemplo 3
 * Imprimir la sumatoria de los numeros que sean
 * multiplos de 3, entre 0 y 100
 */

// let sumatoria = 0;

// for(let i = 0; i <= 100; i++){
//   if(i % 3 === 0){
//     // sumatoria = sumatoria + i; son lo mismo
//     sumatoria += i
//   }
// }

// console.log(`La sumatoria de los multiplos de 3 es: ${sumatoria}`)

// Ejercicio 4

// Pedir al usuario UN AÑO DE INICIO y UN AÑO FINAL ej (1492 y 1990) mostrar en la consola que años entre ese rango de años son bisiestos

//Si utilicen el ejemplo hicimos antes

// let anioInicio = +prompt("Indique un año inicial")

// let anioFinal = +prompt("Indique un año final")

// for(let i = anioInicio; i <= anioFinal; i++){
//   if((i % 4 == 0 && i %100 != 0) || i % 400 == 0){
//     console.log(`El año ${i} es bisiesto!`)
//   }
// }

/**Ejercicio 5
 * 
 */

