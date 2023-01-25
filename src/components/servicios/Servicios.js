/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styles from "./servicios.module.css";
import { FcAssistant, FcGraduationCap, FcAutomotive, FcRefresh } from "react-icons/fc";
import fondoServ from "../../assets/fondos/fondoServ.png";

function Servicios() {
  return (
    <div id="servicios" className={styles.container}>
      <h2 className={styles.title}>Nuestros servicios</h2>
      <div className={styles.contenido}>
        <div className={styles.textContainer}>
          <div className={styles.serviceBox}>
            <FcAssistant className={styles.iconos} />
            <div className={styles.textInfo}>
              <h6 className={styles.h1Style}>Atención 24/7</h6>
              <p>Escribinos en cualquier lugar y en cualquier momento</p>
            </div>
          </div>
          <div className={styles.serviceBox}>
            <FcGraduationCap className={styles.iconos} />
            <div className={styles.textInfo}>
              <h6 className={styles.h1Style}>Conductores calificados</h6>
              <p>
                Todos nuestros conductores poseen entrenamiento en Manejo
                Predictivo
              </p>
            </div>
          </div>
          <div className={styles.serviceBox}>
            <FcAutomotive className={styles.iconos} />
            <div className={styles.textInfo}>
              <h6 className={styles.h1Style}>Asistencia mecánica</h6>
              <p>
                Asistencia mécanica antes cualquier eventualidad, estés donde
                estés
              </p>
            </div>
          </div>
          <div className={styles.serviceBox}>
            <FcRefresh className={styles.iconos} />
            <div className={styles.textInfo}>
              <h6 className={styles.h1Style}>Viajes especiales</h6>
              <p>
                Realizamos viajes ida y vuelta a penales de Buenos Aires al
                mejor precio
              </p>
            </div>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <img src={fondoServ} className={styles.imagen} />
        </div>
      </div>
    </div>
  );
}

export default Servicios;
