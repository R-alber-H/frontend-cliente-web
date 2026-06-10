import "./styles/Hero.css";

export default function Hero() {
    return (
        <div className="hero-container d-flex col-12 align-items-center rounded-5">
            <div className="hero-content d-flex flex-column col-6 rounded-4 p-4">
                <h1 className="text-light mb-4 display-3 ms-5 fw-semibold">Computer & Tech </h1>
                <p className="text-light ms-5 mb-3 text-break">Equipamiento tecnológico de alta gama y soporte especializado en unsolo lugar. Potencia la productividad de tu negocio.</p>
                <button className="btn btn-danger btn-sm align-self-start ms-5 px-4 py-2 fs-6 shadow">Registrate ahora</button>
            </div>
            <div className="col-6 d-flex justify-content-center">
                <img
                    src="/src/assets/laptop-2.png"
                    alt="Laptop Gamer"
                    width="80%"
                />
            </div>
        </div>
    );
}