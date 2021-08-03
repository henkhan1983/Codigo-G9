import {useState} from 'react' // es un hook que va a controlar el estado de un componente

export default function App() {
  //const [estado, funcDelEstado] = useState(estadoInicial)
const [tareas, setTareas] = useState(["pasear al perro"])

const anadirTareas = () => {
  setTareas([...tareas, " lavar la ropa"])  //...tareas, permite hacer una lista
}

const miTitulo = "Mi App"

  return (
    <div>
      <h1>{miTitulo}</h1>
      <ListaTareas tareas={tareas} eliminarTarea={eliminarTarea}/>
      <hr/>
      <button onClick={anadirTareas}>
        Anadir tarea
      </button>
    </div>
  )
}

