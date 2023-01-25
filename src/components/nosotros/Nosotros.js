import React from "react";
import styles from "./nosotros.module.css";
import { ImHappy, ImTablet, ImFileText, ImStatsBars } from "react-icons/im";

function Nosotros() {
  return (
    <div id="empresa" className={styles.container}>
      <h2 className={styles.title}>Nuestra empresa</h2>
      <div className={styles.historyContainer}>
        <div className={styles.textContainer}>
          <h4 className={styles.h1Style}>Nuestra visión</h4>
          <p className={styles.parrafo}>
            Como empresa es asegurar relaciones rentables a largo plazo con
            nuestros clientes, empleados y socios comerciales al ofrecer
            servicios confiables e innovadores, abocados a satisfacer
            integralmente las necesidades de nuestros usuarios, logrando un
            servicio de traslado, organizado, seguro y confiable, en todo el
            territorio provincial y nacional.
          </p>
          <h4 className={styles.h1Style}>Nuestra misión</h4>
          <p className={styles.parrafo}>
            Ser la empresa de Remis más reconocida en todo el país y usar todas
            nuestras herramientas para seguir mejorando y expandiendo nuestros
            servicios no solo para nuestro beneficio, sino también para los
            beneficios de nuestros clientes.
          </p>
        </div>
        <div className={styles.imgContainer}>
          <div className={styles.caja1}>
            <ImHappy />
            <span className={styles.textBox}>Clientes conformes</span>
          </div>
          <div className={styles.caja2}>
            <ImFileText />
            <span className={styles.textBox}>Años de experiencia</span>
          </div>
          <div className={styles.caja3}>
            <ImTablet />
            <span className={styles.textBox}>Innovación constante</span>
          </div>
          <div className={styles.caja4}>
            <ImStatsBars />
            <span className={styles.textBox}>Calidad de servicio</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nosotros;
