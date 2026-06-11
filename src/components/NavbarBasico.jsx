
export default function NavbarBasico(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg py-1 ">
                    <div className="container-fluid mt-3">
                      <a className="navbar-brand" href="#">
                        <span className="fw-semibold fs-2">CYBER</span>
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
                    </div>
                  </nav>
        </div>
    )
}