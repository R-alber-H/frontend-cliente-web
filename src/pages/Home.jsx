import Navbar from "../components/Navbar";
import fondo from "../assets/fondo.png";

export default function Home() {
  return (
    <main className="container rounded-4 vh-100" style={{
      backgroundImage: `url(${fondo})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}>
      <Navbar />
    </main>
  )
}