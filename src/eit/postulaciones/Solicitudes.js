import React, { Component } from "react";

class Solicitudes extends Component {
  constructor(props) {
    super(props);
    this.state = { postulaciones: [] };

    this.buscar = () => {
      this.CallProcess("ayudantias/buscar", {}, postulaciones => {
        console.log(postulaciones);
        this.setState({ postulaciones: postulaciones });
      });
    };
  }

  componentWillReceiveProps(next) {
    console.log("ACA",next)
    this.buscar();
  }


  render() {
    return (
      <div className="card">
        <div className="card-header bg-white">
          <div className="media">
            <div className="media-body media-middle">
              <h4 className="card-title">Postulaciones Solicitadas</h4>
            </div>
          </div>
        </div>
        <ul className="list-group list-group-fit">
          {this.state.postulaciones.map((postulacion, ix) => {
            return (
              <li className="list-group-item forum-thread media" key={ix}>
                <div className="media-left">
                  <div className="forum-icon-wrapper" id="forum-item-1">
                    <a href="#" className="forum-thread-icon">
                      <i className="material-icons">description</i>
                    </a>
                  </div>
                </div>
                <div className="media-body media-middle">
                  <a>{postulacion.motivo}</a>
                </div>
                <div className="media-right media-middle">
                  <div
                    style={{
                      width: 140,
                      "margin-right": 20,
                      textAlign: "right"
                    }}
                  >
                    <small className="text-muted-light">
                      {postulacion.codigo +
                        "-" +
                        postulacion.seccion +
                        " " +
                        postulacion.nombre +
                        " "}
                      {postulacion.nombre_completo_p ||
                        postulacion.nombre_completo}
                    </small>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Solicitudes;
