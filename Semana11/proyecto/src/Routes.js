import {Route} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import PortadaView from './views/PortadaView'
import ProductoView from './views/ProductoView'
import CarritoView from './views/CarritoView'
import ProductosView from './views/ProductosView'
import LoginView from './views/LoginView'
import CheckoutView from './views/CheckoutView'
// administrador
import ListaProductosView from "./views/ListaProductosView"
import CrearProductoView from "./views/CrearProductoView"
import EditarProductoView from "./views/EditarProductoView"
// adicionales
import ProductosViewT from './views/ProductosViewT'
import ProductosViewR from './views/ProductosViewR'

export default function Routes() {
    return (
        <div>
            <Route path="/" exact component={PortadaView} />
            <Route path="/detalle/:id" exact component={ProductoView} />
            <ProtectedRoute path="/carrito" exact component={CarritoView} />
            <Route path="/productos" exact component={ProductosView} />
            <Route path="/teltonika" exact component={ProductosViewT} />
            <Route path="/ruptela" exact component={ProductosViewR} />
            <Route path="/login" exact component={LoginView} />
            <ProtectedRoute path="/checkout" exact component={CheckoutView} />
            {/*  */}
            <ProtectedRoute path="/listar" exact component={ListaProductosView} />
            <ProtectedRoute path="/crear" exact component={CrearProductoView} />
            <ProtectedRoute path="/editar/:id" exact component={EditarProductoView} />
        </div>
    )
}
