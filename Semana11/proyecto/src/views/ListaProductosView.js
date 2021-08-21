import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { obtenerProductos, eliminarProducto} from '../services/productosService'



export default function ListaProductosView() {
  const [productos, setProductos] = useState([])

  const getProductos = async () => {
    try {
      const productosObtenidos = await obtenerProductos()
      // console.log(productosObtenidos)
      setProductos(productosObtenidos)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProductos()
  }, [])


  return (
    <div className="text-center text-wrap table-responsive">
      <h1 className="mt-4">Equipos registrados</h1>
      <Link className="btn btn-primary btn-lg mt-3 mb-4" to='/crear'>
        Crear Producto
      </Link>
      <table className="table align-middle table-success table-striped border border-white"  style={{
        width:'90%',
        marginLeft:'5%',
        marginRight:'5%',
        tableLayout:'fixed',
      }}>
        <thead>
          <tr style={{color:'#9B2D1E'}}>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Descripcion</th>
            <th>Stock</th>
            <th>Acciones</th>            
          </tr>
        </thead>
        <tbody className="text-wrap" >
          {productos.map((prod, i) => (
            <tr key={i}>
              <td>{prod.prod_nombre}</td>
              <td>{prod.prod_precio}</td>
              <td style={{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}>{prod.prod_descripcion}</td>
              <td>{prod.prod_stock}</td>
              <td>
                <Link
                  className="btn btn-warning btn-sm"
                  to={`/editar/${prod.prod_id}`}
                  style={{marginRight:'1px'}}
                >
                  <i className="fas fa-edit" ></i>
                </Link>                
                <Link
                  className="btn btn-danger btn-sm"
                  to={`/editar/${prod.prod_id}`}
                  style={{marginLeft:'1px'}}
                >
                  <i className="fas fa-trash"></i>
                </Link>              
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <BootstrapTable>
        keyfield='Nombre'
        pagination={true}
      </BootstrapTable> */}
    </div>
  )
}