import {Route} from "react-router-dom"
import CrearProductoView from "./views/CrearProductoView"
import ListaProductosView from "./views/ListaProductosView"

export default function Routes() {
  return (
    <div>
      <Route path="/" exact component={ListaProductosView} />
      <Route path="/crear" exact component={CrearProductoView} />
    </div>
  )
} 

/**
 * Route va a ser un componente que va a representar cada ruta con su vista dentro
 * de mi aplicacion
 * atributos, path, component, exact
 */
