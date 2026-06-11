import { Link } from "react-router-dom";
import NavbarBasico from "../components/NavbarBasico";

export default function Login(){
    return(
        <div className="vh-100 container" >
              <NavbarBasico />
              <div
                className="container-fluid d-flex justify-content-center align-items-center "
                style={{ height: "calc(100vh - 110px)" }}
              >
                <div className="row col-lg-10 justify-content-center rounded-5 bg-light-subtle shadow-lg"style={{minHeight:523}}>
                    <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center text-center" style={{
                    backgroundColor: '#533780', borderTopRightRadius: "150px",
                    borderBottomRightRadius: "150px",
                  }}>
                    <h2 className=" text-light display-4 mb-4">Hola, Bienvenido</h2>
                    <p className=" text-light">Si no cuentas con una cuenta todavia registrate ahora</p>
                    <Link to="/registro" className="btn  btn-outline-light">Crear Cuenta</Link>
                  </div>
                  <div className="col-lg-6 p-5  ">
                    <form>
                      <h2 className=" text-center mb-5">Login</h2>
                      <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label fw-semibold">Correo Electronico</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">Nunca compartiremos tu correo electrónico con nadie más.</div>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="code" className="form-label fw-semibold">Codigo</label>
                        <input type="text" className="form-control" id="code" />
                      </div>
                      <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
                    </form>
                  </div>
                  
                </div>
              </div>
            </div>
    )
}