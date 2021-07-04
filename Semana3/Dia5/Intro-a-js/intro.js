console.log("Hola mundo");

console.warn("Hey!!, soy una advertencia");

console.error("");

class Mesa {
  // es como un plano para hacer mesas

  imprimirNombre() {
    console.log("Soy una mesa");
  }
}

var taburete = new Mesa();

taburete.imprimirNombre();

// var saludo = "Hola , como estas?"

let otroSaludo =
  "Hola , como estas? , por favor evita usar la palabra reservada var cuando quieras usar una variable , usa let en su lugar";

console.log(otroSaludo);

otroSaludo = "Hola";

console.log(otroSaludo);

otroSaludo = 3;

console.log(otroSaludo);

const nombre = "Josue"; // const es una constante y no va a cambiar

console.log(nombre);

nombre = "Faraon love shady 2"; // saldra un error por que no podemos declarar nombre otra vez

console.log(nombre);

console.log("Hola")