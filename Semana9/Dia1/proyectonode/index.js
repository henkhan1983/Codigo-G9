// console.log("Hola Mundo!")
// fech necesita de windows, para utilizar variante de fech utilizamos axios

// import axios from "axios";

const axios = require('axios') // es una manera de importar

// me va a permitir hacer peticiones
// axios.METHOD_HTTP
axios.get("https://reqres.in/api/users?page=2")
.then((respuesta) => console.log(respuesta.data))
.catch((error) => console.log(error))