import './main.css';

export default function Main() {
  return (
    <>
      <main>
        <div className="container-fluid main-bg">
          <div id="main-header" className="row align-items-center g-3">
            <div id="form-search" className="col-12 col-lg-5">
              <form action="#" method="get" className="input-group align-items-center">
                <button type="submit" id="search-button" className="btn">
                  <i className="bi bi-search"></i>
                </button>
                <div id="input-container-search-pokemon" className="form-floating">
                  <input type="text" name="pokemon-search" id="pokemon-search" className="form-control" placeholder="Buscar pokémon (por nombre o N.º)..." autoComplete="off"/>
                  <label htmlFor="pokemon-search">Buscar pokémon (por nombre o N.º)...</label>
                  <div id="result-search-container" className="d-none"></div>
                </div>
                <input type="reset" id="reset-button" className="btn" value="RESET"></input>
              </form>
            </div>
            <div id="filters" className="col12 col-lg-5 d-flex align-items-center justifiy-content-center">
              <span>FILTRO:</span>
              <div className="filter-controls d-flex flex-wrap gap-1">
                {/* <!-- rellenar dinamicamente en el js --> */}
              </div>
            </div>
            <div id="dexter-voice" className="col-12 col-lg-2 d-flex align-items-center justify-content-center">
              <button type="button" className="btn dexter-voice-btn">
                <i className="bi bi-circle-fill voice-indicator"></i>
                <span>VOZ DE DEXTER</span>
                <i className="bi bi-volume-up-fill"></i>
              </button>
            </div>
            <div id="main-container">
              <div className="row align-items-center">
                <div className="col-6">
                  <img src="./img/logo.png" alt="Pokedex logo" className="img-fluid"/>
                </div>
                <div className="col-6 text-end d-flex flex-column">
                  <span id="kanto-os">KANTO OS HANDY909</span>
                  <span>REPLICATOR UNIT // DUAL-BUS ARCH</span>
                </div>
              </div>
              <div className="row g-3 pokemon-info">
                <div className="col-12 col-lg-6">
                  <div id="left-container" className="p-3">
                    <div className="container">
                      <div className="row header-current-pokemon-display">
                        <div className="col">
                          <i className="bi bi-circle-fill"></i>
                          <i className="bi bi-circle-fill"></i>
                        </div>
                        <div className="col text-end">
                          <span id="scan-cam">SCAN-CAM: MATRIX</span>
                          <i className="bi bi-circle-fill scan-indicator"></i>
                        </div>
                      </div>
                      <div className="container current-pokemon-pattern">
                        <div id="header-current-pokemon" className="row">
                          <div className="col">
                            ID: <span className="current-pokemon-id"></span>
                            <i className="bi bi-circle-fill"></i>
                            <span className="current-pokemon-name"></span>
                          </div>
                          <div className="col text-end">
                            MODE: OPTIC-CAPTURE <i className="bi bi-broadcast"></i>
                          </div>
                        </div>
                        <img src="./" alt="" id="current-pokemon-image" className="img-fluid mx-auto"/>
                        <div id="footer-current-pokemon" className="row">
                          <div className="col text-start">
                            <i className="bi bi-soundwave"></i>
                            CRY SYNTH:
                          </div>
                          <div className="col graph-container">
                            <div className="graph-effect"></div>
                            <div className="graph-effect"></div>
                            <div className="graph-effect"></div>
                            <div className="graph-effect"></div>
                            <div className="graph-effect"></div>
                            <div className="graph-effect"></div>
                            <div className="graph-effect"></div>
                          </div>
                        </div>
                      </div>
                      <div className="row footer-current-pokemon-display">
                        <div className="col">
                          <i className="bi bi-circle-fill fs-6"></i>
                        </div>
                        <div className="col border-effect-container">
                          <div className="border-effect"></div>
                          <div className="border-effect"></div>
                          <div className="border-effect"></div>
                          <div className="border-effect"></div>
                        </div>
                      </div>
                    </div>
                    <div className="container">
                      <div className="row btns-row">
                        <div className="col">
                          <button type="button" id="btn-prev-pokemon" className="btn btn-prev-next-pokemon">
                            <i className="bi bi-arrow-left"></i>
                            <span id="id-prev-pokemon"></span>
                            <span id="name-prev-pokemon"></span>
                          </button>
                          <button type="button" id="btn-next-pokemon" className="btn btn-prev-next-pokemon">
                            <span id="id-next-pokemon"></span>
                            <span id="name-next-pokemon"></span>
                            <i className="bi bi-arrow-right"></i>
                          </button>
                        </div>
                      </div>
                      <div className="row align-items-center">
                        <div className="col">
                          <button type="button" id="info-cryo" className="btn rounded-pill bg-primary px-3 py-1">INFO CRYO</button>
                        </div>
                        <div className="col d-flex justify-content-center align-items-center gap-3">
                          <div className="div-rounded-pill red-pill"></div>
                          <div className="div-rounded-pill"></div>
                        </div>
                        {/* <!-- control de flechas --> */}
                        <div className="col d-flex justify-content-center align-items-center">
                          <div className="direction-pad">
                            <div className="left-right">
                              <span id="arrow-left" className="arrow arrow-left">
                                <i className="bi bi-caret-left-fill"></i>
                              </span>
                              <span id="arrow-right" className="arrow arrow-right">
                                <i className="bi bi-caret-right-fill"></i>
                              </span>
                            </div>
                            <div className="up-down">
                              <span id="arrow-up" className="arrow arrow-up">
                                <i className="bi bi-caret-left-fill"></i>
                              </span>
                              <span className="arrow circle-filled">
                                <i className="bi bi-circle-fill"></i>
                              </span>
                              <span id="arrow-down" className="arrow arrow-down">
                                <i className="bi bi-caret-right-fill"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div id="right-container" className="p-3">
                    <div className="container main-bg">
                      <div id="current-pokemon-data" className="row justify-content-between align-items-center">
                        <div id="current-pokemon-name-id" className="col-8">
                          <span id="current-pokemon-id" className="current-pokemon-id"></span>
                          <span className="current-pokemon-name"></span>
                        </div>
                        <div id="badge-type-container" className="col-4 text-end">
                          {/* <!-- pokemon type(s) --> */}
                        </div>
                      </div>
                      <div id="current-pokemon-info" className="row row-cols-3 pokemon-box">
                        <div className="col pokemon-label">ESPECIE</div>
                        <div className="col pokemon-label">ALTURA</div>
                        <div className="col pokemon-label">PESO</div>
                        <div className="col pokemon-value">
                          <span id="pokemon-specie"></span>
                        </div>
                        <div className="col pokemon-value">
                          <span id="pokemon-height"></span> m
                        </div>
                        <div className="col pokemon-value">
                          <span id="pokemon-weight"></span> kg
                        </div>
                      </div>
                      <div id="pokedex-entry" className="row row-cols-2 pokemon-box">
                        <div className="col-12">
                          <p className="entry-heading">
                            <i className="bi bi-database"></i> REGISTRO OFICIAL KANTO:
                          </p>
                        </div>
                        <div className="col-12">
                          <p id="pokemon-description"></p>
                        </div>
                      </div>
                      <div className="container-fluid">
                        <div id="hp-row" className="row d-flex align-items-center justifiy-content-center">
                          <div className="col-2">
                            <span>PS (HP)</span>
                          </div>
                          <div className="col-9">
                            <progress id="hp-bar" className="stat-bar" min="0" max="255"></progress>
                          </div>
                          <div className="col-1 text-end">
                            <span className="progress-bar-value"></span>
                          </div>
                        </div>
                        <div id="attack-row" className="row d-flex align-items-center justifiy-content-center">
                          <div className="col-2">
                            <span>ATAQUE</span>
                          </div>
                          <div className="col-9">
                            <progress id="attack-bar" className="stat-bar" min="0" max="255"></progress>
                          </div>
                          <div className="col-1 text-end">
                            <span className="progress-bar-value"></span>
                          </div>
                        </div>
                        <div id="defense-row" className="row d-flex align-items-center justifiy-content-center">
                          <div className="col-2">
                            <span>DEFENSA</span>
                          </div>
                          <div className="col-9">
                            <progress id="defense-bar" className="stat-bar" min="0" max="255"></progress>
                          </div>
                          <div className="col-1 text-end">
                            <span className="progress-bar-value"></span>
                          </div>
                        </div>
                        <div id="speed-row" className="row d-flex align-items-center justifiy-content-center">
                          <div className="col-2">
                            <span>VELOCIDAD</span>
                          </div>
                          <div className="col-9">
                            <progress id="speed-bar" className="stat-bar" min="0" max="255"></progress>
                          </div>
                          <div className="col-1 text-end">
                            <span className="progress-bar-value"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="numbers-container" className="container">
                      <div className="row d-flex align-items-center justify-content-center">
                        <div className="col fs-6 fw-bold">MATRIZ DE ACCESO DIRECTO NUMÉRICO</div>
                        <div className="col text-end">
                          <button type="button" className="btn rounded-letter">C</button>
                          <button type="button" className="btn rounded-letter">E</button>
                        </div>
                      </div>
                      <div id="number-keyboard" className="row row-cols-5 d-flex align-items-center justify-content-center mt-2">
                        {fillNumberKeyboard()}
                      </div>
                    </div>
                    <div id="pokemon-catalog" className="container">
                      <div id="catalog-header" className="row fw-bold align-items-center pb-1">
                        <div className="col">
                          <span id="pokemon-catalog-title">CATÁLOGO POKEMON</span>
                        </div>
                        <div id="total-species" className="col text-end">
                          <span id="total-pokemon-number"></span>
                          ESPECÍMENES
                        </div>
                      </div>
                      <div id="catalog-grid" className="row row row-cols-1 row-cols-sm-2">
                        {/* <!-- rellenar dinamicamente en el js --> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

function fillNumberKeyboard() {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
    <button key={number} type="button" className="btn btn-number">
      {number}
    </button>
  ));
}