import LoginButton from "./LoginBoton";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg py-1">
        <div className="container-fluid mt-3">
          <a className="navbar-brand" href="#">
            <img src="/src/assets/logo-servi.png" alt="Logo ServiCompu" width="110" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 align-items-center gap-4">
              <li className="nav-item">
                <a className="link-light link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover fw-semibold" href="#">Quienes Somos</a>
              </li>
              <li className="nav-item">
                <a className="link-light link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover fw-semibold" href="#">Productos</a>
              </li>
            </ul>
            <div className="d-flex mt-3 mt-lg-0">
              <LoginButton />
            </div>

          </div>

        </div>
      </nav>
    </div>
  );
}