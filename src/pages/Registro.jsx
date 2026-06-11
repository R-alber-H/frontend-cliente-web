import NavbarBasico from "../components/NavbarBasico";
import { Link } from "react-router-dom";

export default function Registro() {
  return (
    <div className="vh-100 container" >
      <NavbarBasico />
      <div
        className="container-fluid d-flex justify-content-center align-items-center "
        style={{ height: "calc(100vh - 110px)" }}
      >
        <div className="row col-lg-10 justify-content-center rounded-5 bg-light-subtle shadow-lg">
          <div className="col-lg-6 p-5  ">
            <form>
              <h2 className=" text-center mb-5">Registra tus Datos</h2>
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-semibold">Nombre Completo</label>
                <input type="text" className="form-control" id="name" />
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label fw-semibold">Direccion</label>
                <input type="text" className="form-control" id="address" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label fw-semibold">Correo Electronico</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">Nunca compartiremos tu correo electrónico con nadie más.</div>
              </div>
              <button type="submit" className="btn btn-primary">Registrate</button>
            </form>
          </div>
          <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center text-center" style={{
            backgroundColor: '#533780', borderTopLeftRadius: "150px",
            borderBottomLeftRadius: "150px",
          }}>
            <h2 className=" text-light display-4 mb-4">Hola, Bienvenido</h2>
            <p className=" text-light">Si ya tienes una cuenta registrada solo debes iniciar sesión</p>
            <Link to="/login" className="btn  btn-outline-light">Iniciar Sesión</Link>
          </div>
        </div>
      </div>
    </div>
  );
}