import './header.css';

export default function Header() {
  return (
    <>
      <header>
        <div id="header" className="container-fluid primary-bg">
          <div className="row align-items-center">
            <div className="logo-container col-8 col-lg-4 d-flex align-items-center">
              <img src="./../../assets/img/logo.png" alt="Logo Pokedex" className="img-fluid"/>
              <div className="logo-text">
                <span>POKÉDEX</span>
                <small>MODEL HANDY099</small>
              </div>
            </div>
            <div className="navbar-container col-4 col-lg-5">
              <nav className="navbar navbar-expand-lg">
                <div className="container-fluid justifiy-content-end">
                  <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <i className="bi bi-list text-white fs-3"></i>
                  </button>
                  <div id="navbarNav" className="collapse navbar-collapse">
                    <ul className="navbar-nav justifiy-content-center w-100">
                      <li className="navitem">
                        <a href="#" className="nav-link">KANTO DEX</a>
                      </li>
                      <li className="navitem">
                        <a href="#" className="nav-link">TYPE MATCHUPS</a>
                      </li>
                      <li className="navitem">
                        <a href="#" className="nav-link">CRIES ARCHIVE</a>
                      </li>
                      <li className="navitem">
                        <a href="#" className="nav-link">DIAGNOSTICS</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
            {/* <!-- BUSCADOR PEQUENNO, VOX READY Y USER --> */}
            <div className="col-lg-3"></div>
          </div>
        </div>
      </header>
    </>
  );
}