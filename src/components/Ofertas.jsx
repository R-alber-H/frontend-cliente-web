import Card from "../components/Card";
import laptop from "../assets/laptop_1.png";

export default function Ofertas(){
    return(
        <div className="d-flex flex-right justify-content-evenly mt-3">
                <Card
                  image={laptop}
                  title="Laptop Gamer"
                  description="Potencia extrema para gaming y productividad."
                  buttonText="Ver más"
                  buttonLink="/productos/laptop"
                />
                <Card
                  image={laptop}
                  title="Laptop Gamer"
                  description="Potencia extrema para gaming y productividad."
                  buttonText="Ver más"
                  buttonLink="/productos/laptop"
                />
                <Card
                  image={laptop}
                  title="Laptop Gamer"
                  description="Potencia extrema para gaming y productividad."
                  buttonText="Ver más"
                  buttonLink="/productos/laptop"
                />
                <Card
                  image={laptop}
                  title="Laptop Gamer"
                  description="Potencia extrema para gaming y productividad."
                  buttonText="Ver más"
                  buttonLink="/productos/laptop"
                />
              </div>
    )
}