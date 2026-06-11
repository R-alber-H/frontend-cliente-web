import Card from "../components/Card";
import laptop from "../assets/laptop_1.png";

export default function Accesorios(){
    return(
        <div>
          <div className="mt-5 d-flex flex-row justify-content-between">
        <h3>Accesorios para PC </h3>
        <button className="btn btn-primary">Ver Productos</button>
      </div>
          <div className="d-flex flex-right justify-content-evenly mt-3">
                <Card
                  image={laptop}
                  title="Laptop Gamer"
                  description="Potencia extrema para gaming y productividad."
                  buttonText="Comprar Ahora"
                  buttonLink="/productos/laptop"
                />
                <Card
                  image={laptop}
                  title="Laptop Gamer"
                  description="Potencia extrema para gaming y productividad."
                  buttonText="Comprar Ahora"
                  buttonLink="/productos/laptop"
                />
                <Card
                  image={laptop}
                  title="Laptop Gamer"
                  description="Potencia extrema para gaming y productividad."
                  buttonText="Comprar Ahora"
                  buttonLink="/productos/laptop"
                />
                <Card
                  image={laptop}
                  title="Laptop Gamer"
                  description="Potencia extrema para gaming y productividad."
                  buttonText="Comprar Ahora"
                  buttonLink="/productos/laptop"
                />
              </div>
        </div>
        
    )
}