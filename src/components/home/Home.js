import React from "react";
import styles from './home.module.css'
import CarouselFade from "../../commons/CarouselFade";

function Home({ items }) {
  const redirigir = items;
  return (
    <div id="home" className={styles.container}>
      <CarouselFade items={ redirigir } />
    </div>
  );
}

export default Home;