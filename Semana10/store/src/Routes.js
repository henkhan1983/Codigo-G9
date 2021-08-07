import {Route} from 'react-router-dom'
import PortadaView from './views/PortadaView'
import ProductoView from './views/ProductoView'
import CarritoView from './views/CarritoView'
import ProductosView from './views/ProductosView'
import LoginWiew from './views/LoginWiew'

export default function Routes() {
    return (
        <div>
            <Route path="/" exact component={PortadaView} />
            <Route path="/detalle/:id" exact component={ProductoView} />
            <Route path="/carrito" exact component={CarritoView} />
            <Route path="/productos" exact component={ProductosView} />
            <Route path="/login" exact component={LoginWiew} />
            
        </div>
    )
}
