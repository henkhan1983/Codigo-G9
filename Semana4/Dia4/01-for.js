/**
 * for(contador; condicional; actualizacion
 * codigo que va a repetirse X veces)
 */

// for(let cont = 0; cont <= 10; cont++) {
//   console.log(`El contador es: ${cont}`)
// };

// let nombres = ["Daniel","Lezly","Jorge","Eduardo","Joseu","Linder"];

// for(let i = 0; i < nombres.length; i++){
//   console.log(i + " " + nombres[i])
// }

// let carta = ["Ceviche","Cuy","Lasagna","Adobo","Seco de Chabelo","Carapulcra","Aji de Gallina","Rocoto Relleno"];

// let eleccion = +prompt(`Indique la opción deseada:
//                         0. Ceviche
//                         1. Cuy
//                         2. Lasagna
//                         3. Adobo
//                         4. Seco de Chabelo
//                         5. Carapulcra
//                         6. Aji de Gallina
//                         7. Rocoto Relleno`)


// for(let i = 0; i < carta.length; i++){
//   if(eleccion === i){
//     console.log(`Usted a elegido ${carta[i]}`)
//     break;//corta en ese punto la ejecucion
//   }
//   console.log(`me he ejecutado ${i} veces`)
// }
// console.log("Yo estoy al final :D")

let binarios = [0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1];

let contadorCeros = 0;

for(let i = 0; i < binarios.length; i++){
  if(binarios[i] === 1){
    //continue: cuando encuentre un 1 en el arreglo
    //se salte esa iteracion
    continue;
  }
  console.log(binarios[i])
  contadorCeros++
}

console.log(`Hay ${contadorCeros} ceros`)

