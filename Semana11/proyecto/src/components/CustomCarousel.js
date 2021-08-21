import { Carousel } from "react-bootstrap"
import pic1 from "../assets/inicio.png"
import pic2 from "../assets/inicio1.png"
import pic3 from "../assets/inicio2.png"


export default function CustomCarousel() {
    return (
        <Carousel>
             <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={pic1}
                    alt="First slide"
                />
                {/* <Carousel.Caption style={{marginTop: '35px'}}>
                    <h1 className="fw-bold">ACERCA DE NOSOTROS</h1>
                    <h3>ESTAMOS HOMOLOGADOS CON</h3>
                </Carousel.Caption> */}
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={pic2}
                    alt="First slide"
                />
                {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                </Carousel.Caption> */}
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={pic3}
                    alt="First slide"
                />
                {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                </Carousel.Caption> */}
            </Carousel.Item>

        </Carousel>
    )
}
