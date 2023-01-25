import React from "react";
import styles from "./navbar.module.css";
import logo from "../../assets/fondos/traslada-logo.png";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className={styles.container}>
      <img src={logo} alt="logo" className={styles.logo} />
      <div className={styles.list}>
        <Link
          className={styles.listItem}
          to="home"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          INICIO
        </Link>
        <Link
          className={styles.listItem}
          to="empresa"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          EMPRESA
        </Link>
        <Link
          className={styles.listItem}
          to="servicios"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          SERVICIOS
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
