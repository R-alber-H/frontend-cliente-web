import Navbar from "../components/Navbar";
import background_blue_gradient from "../assets/background_blue_gradient.jpg";
import Hero from "../components/Hero";
import Card from "../components/Card";
import laptop from "../assets/laptop_1.png";
import Ofertas from "../components/Ofertas";
import Categorias from "../components/Categorias";
import Footer from "../components/Footer";
import Accesorios from "../components/Accesorios";

export default function Home() {
  return (
    <div className="container">
      {/* <div className=" rounded-4" style={{ background: 'linear-gradient(135deg, #132d53, #275eac)' }}> */}
      <Navbar />
      <Hero />
      {/* </div> */}
      <Ofertas/>
      <Accesorios/>
       <Categorias/>
      <Footer/>
    </div>
  )
}