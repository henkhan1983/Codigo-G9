import { useState, useContext } from "react";
import { CarritoContext } from "../context/carritoContext";
import { useForm } from "react-hook-form";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet"
import L from "leaflet"

export default function CheckoutView() {
    const [marcador, setMarcador] = useState([-12.0433, -77.0283])
	const { carrito } = useContext(CarritoContext);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

    const AddMarker = () => {
        const map = useMapEvents({
            click: (e) => {
                console.log(e)
                const {lat, lng} = e.latlng
                setMarcador([lat, lng])
            }
        })
        return null
    }

	let total = 0;
	let subtotal = 0;
	let igv = 0;

	subtotal = carrito.reduce((acum, item) => {
		return acum + item.cantidad * item.prod_precio;
	}, 0);

	igv = carrito.reduce(() => {
		return parseFloat(Math.round((subtotal * 0.18)*100)/100).toFixed(2);
	}, 0)

	total = carrito.reduce(() => {
		return parseFloat(Math.round((parseFloat(subtotal) + parseFloat(igv))*100)/100).toFixed(2);
	}, 0)



	const recibirSubmit = (datos) => {
		console.log(datos);
	};

	return (
		<div className="container mt-4">
			<h1>Verificar Compra</h1>
			<p>Por favor verifique los productos e indique los datos solicitados</p>
			<div className="row">
				<div className="col-sm-12 col-md-6">
					<h4>Productos en CarritoView</h4>
					<ul className="list-group">
						{carrito.map((prod, i) => (
							<li
								className="list-group-item d-flex justify-content-between"
								key={i}
							>
								<div>
									<span className="fw-bold">{prod.prod_nombre}</span>
									<br />
									<small>Cantidad: {prod.cantidad}</small>
								</div>

								<small className="badge bg-dark rounded-pill p-3">
									S/ {prod.cantidad * prod.prod_precio}
								</small>
							</li>
						))}
						{subtotal !== 0 ? (
							<li className="list-group-item d-flex justify-content-between">
								<span className="fw-bold">OP. GRAVADAS:</span>
								<span>$ {subtotal}</span>
							</li>							
						) : (
							<li className="list-group-item">
								Todavía no ha agregado ningún producto.
							</li>
						)}
						{subtotal !== 0 ? (
							<li className="list-group-item d-flex justify-content-between">
								<span className="fw-bold">I.G.V (18%):</span>
								<span>$ {igv}</span>
							</li>							
						) : (
							<li className="list-group-item">
								Todavía no ha agregado ningún producto.
							</li>
						)}
						{subtotal !== 0 ? (
							<li className="list-group-item d-flex justify-content-between">
								<span className="fw-bold text-danger">TOTAL:</span>
								<span className="fw-bold text-danger">$ {total}</span>
							</li>							
						) : (
							<li className="list-group-item">
								Todavía no ha agregado ningún producto.
							</li>
						)}
					</ul>
				</div>

				<div className="col-sm-12 col-md-6">
					<h4>Ingrese sus datos:</h4>

					<form onSubmit={handleSubmit(recibirSubmit)}>
						<div className="mb-2">
							<label className="form-label">Nombres y apellidos</label>
							<input
								type="text"
								className="form-control"
								placeholder="Ej. Juan Perez"
								//{...register("nombre", {validaciones})}
								{...register("nombreCompleto", { required: true })}
							/>
							{errors.nombreCompleto && (
								<small className="text-danger">Este campo es obligatorio</small>
							)}
						</div>
						<div className="mb-2">
							<label className="form-label">Número de celular</label>
							<input
								type="text"
								className="form-control"
								placeholder="Ej. +51 926707653"
								{...register("telefono", {
									minLength: { value: 6, message: "Se requiere 6 dígitos" },
                                    maxLength: { value: 14, message: "Máximo 14 dígitos"}
								})}
							/>
							{errors.telefono && (
								<small className="text-danger">{errors.telefono.message}</small>
							)}
						</div>
						<div className="mb-2">
							<label className="form-label">Correo electrónico:</label>
							<input
								type="text"
								className="form-control"
								placeholder="Ej. abc@gmail.com"
                                {...register("correo", {pattern: /^[A-Za-z-9@]/i})}
							/>
                            {errors.correo && (
								<small className="text-danger">El correo no es valido</small>
							)}
						</div>
						<div className="mb-2">
							<label className="form-label">Dirección</label>
							<input
								type="text"
								className="form-control"
								placeholder="Ej. Urb. Yanahuara S/N"
                                {...register("direccion", {pattern: /^[A-Za-z]/i})}
							/>
                            {errors.direccion && (
								<small className="text-danger">El formato no es adecuado</small>
							)}
						</div>

                        {/* <MapContainer   
                            center={[-12.0433, -77.0283]}
                            zoom={17}
                            style={{height:"400px"}}
                        >
                            <TileLayer
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <AddMarker />
                            <Marker
                                position={marcador}
                            />
                        </MapContainer> */}
						<button type="submit" className="btn btn-dark">
							Confirmar Compra
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
