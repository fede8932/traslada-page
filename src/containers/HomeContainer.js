import React from "react";
import { Home } from "../components";

function HomeContainer() {
  const redirigir = (url) => {
    window.open(url, "_blank");
  };
  return <Home items={redirigir} />;
}

export default HomeContainer;
