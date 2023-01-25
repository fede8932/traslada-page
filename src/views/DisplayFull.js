import { Footer } from "../components/index.js";
import HomeContainer from "../containers/HomeContainer.js";
import NavbarContainer from "../containers/NavbarContainer.js";
import NosotrosContainer from "../containers/NosotrosContainer.js";
import ServiciosContainer from "../containers/ServiciosContainer.js";

function DisplayFull() {
  return (
    <div>
      <NavbarContainer />
      <HomeContainer />
      <NosotrosContainer />
      <ServiciosContainer />
      <Footer />
    </div>
  );
}

export default DisplayFull;
