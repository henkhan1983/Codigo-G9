import { useContext } from "react";
import { CarritoContext } from "../context/carritoContext";
import { AuthContext } from "../context/authContext";

import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";

import logo from "../assets/logo.png"

export default function NavTop() {
	const { carrito } = useContext(CarritoContext);
	const { userState, signOut } = useContext(AuthContext);

	const totalCarrito = carrito.reduce((total, item) => {
		return total + item.cantidad;
	}, 0);

	return (
		<Navbar bg="white" expand="lg" variant='light'>
			<Container >
				<Navbar.Brand>
					<img
						alt=""
						src={logo}
						width="80"
						height="35"
						className="d-inline-block align-top"
					/>{' '}
					H&G SYSTEM TR@CK
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Link className="nav-link active fw-bold text-secondary" aria-current="page" to="/" >INICIO</Link>

						<Link className="nav-link text-secondary" to="/productos">PRODUCTOS</Link>

						<Link className="nav-link text-secondary" to="/contactos">CONTACTENOS +51(01)494-2684</Link>
					</Nav>
					<Nav>
						<Link className="nav-link text-secondary" to="/carrito">
							Carrito
							<Badge badgeContent={totalCarrito} color="primary">
								<ShoppingCartIcon />
							</Badge>
						</Link>

						<Link className="nav-link text-secondary" to="/checkout">Comprar!</Link>

						{userState ? (
							<NavDropdown
								title={
									<div className="d-inline">
										<img
											src={userState.photoURL}
											className="me-2"
											style={{ borderRadius: "50%", width: "30px" }}
											alt="avatar"
										/>
										<span className="text-primary">{userState.displayName}</span>
									</div>
								}
							>							
								<NavDropdown title={<div><span className="text-success">Administrador</span></div>}>
									<NavDropdown.Item href="/listar">Equipos</NavDropdown.Item>
									<NavDropdown.Item href="#">Usuarios</NavDropdown.Item>
									<NavDropdown.Item href="#">Ventas</NavDropdown.Item>									
								</NavDropdown>
								<NavDropdown.Divider />
								<NavDropdown.Item onClick={signOut}>Salir</NavDropdown.Item>
							</NavDropdown>
						) : (
							<Link className="nav-link text-secondary" to="/login">Ingresar</Link>

						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}