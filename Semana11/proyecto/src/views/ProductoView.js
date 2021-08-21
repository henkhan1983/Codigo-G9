import { useState, useEffect, useContext } from 'react'
import { CarritoContext } from '../context/carritoContext'
import { useParams } from "react-router-dom"
import { obtenerProductoPorId } from '../services/productosService'
import Loading from '../components/Loading'
import Swal from "sweetalert2"
import { useHistory } from 'react-router'

export default function ProductoView(props) {
    console.log(props)
    const [producto, setProducto] = useState({})
    const [cargando, setCargando] = useState(true)

    const { id } = useParams()
    //useContext me permite acceder a lo que compartimos en el context, pero necesita la referencia al contexto

    const history = useHistory()

    const { anadirACarrito } = useContext(CarritoContext)

    const getProducto = async () => {
        try {
            let productoObtenido = await obtenerProductoPorId(id)
            setProducto(productoObtenido)
            setCargando(false)
        } catch (error) {
            console.error(error)
        }
    }

    const anadirACarritoContext = async () => {
        anadirACarrito(producto)
        const resultado = await Swal.fire({
            icon: 'success',
            title: "Producto añadido!",
            showConfirmButton: true,
            showDenyButton: true,
            confirmButtonText: 'Seguir comprando',
            denyButtonText: 'Ir a carrito'
        })
        if (resultado.isConfirmed) {
            history.push('/productos')
        } else if (resultado.isDenied) {
            history.push('/carrito')
        }
    }

    useEffect(() => {
        getProducto()
    }, [])

    return (
        <div>
            {cargando ?
                (<Loading />) :
                (<div>


                    <div className="container justify-content-center mt-5 ">
                        <div className="card mb-3 text-center">

                            <div className="row g-0">
                                <div className="col-md-4">

                                    <img class="img-fluid rounded-start"
                                        style={{ width: '325px' }}
                                        src={producto.prod_imagen}
                                        alt={producto.prod_nombre} />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <div class="card-header fw-bold text-white bg-secondary">{producto.prod_nombre}</div>
                                        <p className="card-text mt-3">{producto.prod_descripcion}</p>
                                    </div>
                                    <div className="py-3 d-flex row justify-content-center">
                                        <span className="fw-bold mb-3">
                                            Precio: $ {producto.prod_precio}
                                        </span>
                                        <div>
                                            <button
                                                className="btn btn-dark btn-lg"
                                                onClick={anadirACarritoContext}
                                            >
                                                <i className="fas fa-shopping-cart me-2" />
                                                Añadir a Carrito
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)}
        </div>
    )
}
