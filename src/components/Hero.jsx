
export default function Hero() {
    return (
        <div className='d-flex col-12 align-items-center' style={{ minHeight: '70vh' }}>
            <div className='d-flex flex-column col-8'>
                <h1 className="text-light mb-4 display-4 ms-4 fw-normal">Todo lo que tu equipo necesita</h1>
                <p className="text-light mb-2 ms-4 fs-5">Equipamiento tecnológico de alta gama y soporte especializado en un solo lugar. Potencia la productividad de tu negocio.</p>
                <p className=" mb-4 ms-4 text-warning fw-semibold">Garantía certificada y atención personalizada para empresas y profesionales. </p>

                <button className="btn btn-danger btn-sm align-self-start ms-4 px-4 py-2 fs-6 shadow">Registrate ahora</button>
            </div>
            <div className=' col-4'>
                <img src="/src/assets/laptop_1.png" alt="Logo ServiCompu" width="100%" />
            </div>
        </div>
    )
}