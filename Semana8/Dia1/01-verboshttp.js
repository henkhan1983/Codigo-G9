const obtenerEstudiantes = () => {
  //GET
  // fetch("https://60f60ddc18254c00176e0100.mockapi.io/estudiantes")
  fetch("https://60f6137918254c00176e0140.mockapi.io/estudiantes")
  .then((respuesta) => {
      //Guía de remisión, info acerca de la petición
      console.log(respuesta)
      return respuesta.json()
  })
  .then((datos) => {
      //desempaco mis datos
      console.log(datos)
  })
  .catch((error) => {
      console.log(error)
  })
}

// obtenerEstudiantes()

const crearEstudiante = () => {
  const nuevoEstudiante = {
    nombres:"Natasha",
    apellidos:"Rommano",
    telefono:1234567,
    direccion:"S/N"
  }
  const cabecera = {
    method:'POST', //PUT, DELETE
    headers:{
      //para que la API sepa como procesarlo
      'Content-Type':'application/json'
    },
    // lo convertimos a un JSON
    body:JSON.stringify(nuevoEstudiante)
  }

  //fetch(url,configuracion)
  fetch("https://60f6137918254c00176e0140.mockapi.io/estudiantes", cabecera)
  .then((respuesta) => {
    //obtenemos la info del response
    console.log(respuesta)
    return respuesta.json()//la respuesta la convierte a JSON
  })
  .then((estudianteCreado) => {
    console.log(estudianteCreado)
  })
  .catch((error) => {
    console.log(error)
  })
}

// crearEstudiante()

const actualizarEstudiante = (id) => {
  //pongo los campos que tenga en mis API, solo los que quiero actualizar/modificar
  const estudianteModificado = {
    nombres:"Rosario"
  }

  const configuracion = {
    //indico que el metodo sera PUT
    method:'PUT', //PUT, DELETE
    headers:{
      //para que la API sepa como procesarlo
      'Content-Type':'application/json'
    },
    // lo convertimos a un JSON
    body:JSON.stringify(estudianteModificado)
  }

  fetch(`https://60f6137918254c00176e0140.mockapi.io/estudiantes/${id}`, configuracion)
  .then((respuesta) => {
    console.log(respuesta)
    return respuesta.json()
  })
  .then((estudianteActualizado) => {
    console.log(estudianteActualizado)
  })
  .catch((error) => {
    console.error(error)
  })
}

// actualizarEstudiante(7)

const eliminarEstudiante = (id) => {

  const configuracion = {
    method:'DELETE'
  }

  fetch(`https://60f6137918254c00176e0140.mockapi.io/estudiantes/${id}`, configuracion)
  .then((respuesta) => {
    console.log(respuesta)
    if(respuesta.status === 404){
      console.error("error al obtener los datos")
      return;
  }
    return respuesta.json()
  })

  .then((datos) => {
    console.log(datos)
  })

  .catch((err) => {
    console.error(err)
  })
}

eliminarEstudiante(6)

