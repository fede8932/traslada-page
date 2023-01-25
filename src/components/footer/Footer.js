import React from "react";
import styles from './footer.module.css'

function Footer() {
  return (
    <div className={styles.container}>
        <p>Copyright © 2022 <span>Remises Traslada</span>, todos los derechos reservados.</p>
    </div>
  );
}

export default Footer;