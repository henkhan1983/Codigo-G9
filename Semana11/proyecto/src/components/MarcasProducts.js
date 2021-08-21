import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import ruptela from "../assets/marcas/ruptela.png"
import teltonika from "../assets/marcas/teltonika.png"
import Grid from '@material-ui/core/Grid';
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

export default function GroupProducts({ productos }) {
    console.log(productos)
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-6 col-lg-3">
                    <Link className="nav-link" to="/ruptela">
                        <img
                            alt=""
                            src={ruptela}
                            // width="auto"
                            // height="auto"
                            className="d-block w-100"
                        />
                    </Link>
                    </div>
                    <div className="col-6 col-lg-3">
                    <Link className="nav-link" to="/teltonika">
                        <img
                            alt=""
                            src={teltonika}
                            // width="auto"
                            // height="auto"
                            className="d-block w-100"
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}