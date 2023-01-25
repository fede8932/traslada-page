import Carousel from "react-bootstrap/Carousel";
import styles from "./carrouselFade.module.css";
import carrousel01 from "../assets/fondos/carrousel01.png";
import carrousel02 from "../assets/fondos/carrousel02.jpg";

function CarouselFade({ items }) {
  const redirigir = items;
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src={carrousel01} alt="First slide" />
        <Carousel.Caption className={styles.textContainer}>
          <div>
            <h6 className={styles.subTitle}>
              Realice su <span className={styles.resalt}>reserva</span>
            </h6>
            <h1 className={styles.title}>
              Remises <span className={styles.resalt}>Traslada</span>
            </h1>
            <button className={styles.boton}>Reserva Online</button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={carrousel02} alt="Second slide" />
        <Carousel.Caption className={styles.textContainer}>
          <div>
            <h6 className={styles.subTitle}>
              Servicios <span className={styles.resalt}>personalizados</span>
            </h6>
            <h1 className={styles.title}>
              Traslados <span className={styles.resalt}>especiales</span>
            </h1>
            <button
              className={styles.boton}
              onClick={() => {
                redirigir("https://wa.me/541138224122");
              }}
            >
              Reserva por Whats App
            </button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;
