/**
 * Created by malba on 31-07-17.
 */
import React, { Component } from "react";
import data from "./ofertas.json";
import Postular from "./Postular";
import Ofertas from "./Ofertas";
import Solicitudes from "./Solicitudes.js";
import Footer from "../../footer/footer.js";

class Postulaciones extends Component {
  constructor(props) {
    super(props);



    let registros = JSON.parse(window.user.UDP.edges[0].node.custom).Avances


    let codigos = {};
    for (let registro of registros) {
            if (registro.estado) {
              codigos[registro.codigo] = registro.nota;
            }
          }

          console.log("AOH",codigos)

          this.state = { codigos: codigos };

    
  }



  render() {
  

    return  <div className="page ">
    <div className="container page__container">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="fixed-student-dashboard.html">Inicio</a></li>
        <li className="breadcrumb-item active">Postulaciones</li>
      </ol>


          <div className="card card-stats-primary">
            <div className="card-block">
              <div className="media">
                <div className="media-left media-middle">
                  <i className="material-icons text-muted-light">info</i>
                </div>
                <div className="media-body media-middle">
                  Periodo Academico <strong>Otoño 2020 </strong>
                </div>
              </div>
            </div>
          </div>

          {/* <Solicitudes change={this.change} />*/}

          {/* {this.state.seleccionado ? <Postular usuario={this.props.usuario} seleccionado={this.state.seleccionado} /> : ""}  */}

             {Object.keys(this.state.codigos).length ?<Ofertas cursos={data.RECORDS} codigos={this.state.codigos} /> : null }
        </div>
        <Footer />
  </div>
  }
}

export default Postulaciones;

