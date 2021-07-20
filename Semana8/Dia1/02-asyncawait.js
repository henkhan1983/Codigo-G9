// const traerData = () => {
//   return new Promise((resolve, reject) => {
//     resolve("Datos Obtenidos")
//   })
// }

const traerData = async () => {
  return "Datos Obtenidos" //return equivalente al resolve
  // throw "Error al obtener Data" // reject
}

// traerData()
// .then((rpta) => {
//   console.log(rpta)
// })

// .catch((err) => {
//   console.error(err)
// })

//para utilizar await tengo que utilizarlo dentro de un bloque que sea async
const usarData = async () => {
  try { //intenta ejecutar este bloque de codigo, es equivalente al .then
    let rpta = await traerData() //wait chepi
    console.log(rpta)
  } catch (err) { //si hay errores captura ese error
    console.error(err)
  }
}

usarData()

//nota: si algo no funciona en async pasarlo a promesa.