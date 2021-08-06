import { useState, useEffect } from 'react'
import GroupProducts from '../components/GroupProducts'
import { obtenerProductos } from "../services/productosService"

export default function PortadaView() {
  const [productos, setProductos] = useState([])

  const getProductos = async () => {
    try {
      let productosObtenidos = await obtenerProductos()
      setProductos(productosObtenidos)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProductos()
  }, [])

  return (
    <div>
      <GroupProducts productos={productos} />
    </div>
  )
}
