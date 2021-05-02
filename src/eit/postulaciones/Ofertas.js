import React, { Component } from "react";
import Postular from "./Postular";
import 'antd/dist/antd.css';
import { AutoComplete } from "antd";


let DIAS = {
  "1": "Lunes",
  "2": "Martes",
  "3": "Miercoles",
  "4": "Jueves",
  "5": "Viernes",
  "6": "Sabado",
  "7": "Domingo"
}; 
let BLOQUES = {
  "1": "A",
  "2": "B",
  "3": "C",
  "4": "D",
  "5": "E",
  "6": "F",
  "7": "G"
}; 

class Ofertas extends Component {
  constructor(props) {
    super(props);
    let dataSource = [];
    for (let curso of props.cursos) {
      dataSource.push(curso.nombre);
    }
    this.state = { curso: false, dataSource: dataSource, cursos: props.cursos };
    this.handleSearch = value => {
      this.filtrar(value);
    };

    this.filtrar = value => {
      let dataSource = [];
      let cursos = [];
      for (let curso of props.cursos) {
        if (curso.nombre.includes(value.toUpperCase())) {
          cursos.push(curso);
          if (dataSource.includes(curso.nombre) == false)
            dataSource.push(curso.nombre);
        }
      }
      
      this.setState({ dataSource: dataSource, cursos: cursos });
    };

    this.onSelect = value => {
      this.filtrar(value);
    };
  }
  render() {
    let codigos = Object.keys(this.props.codigos);
    const dataSource = [];
    console.log("codigos",dataSource)
    return (
      <div>
        {this.state.curso ? (
          <Postular
            curso={this.state.curso}
            nota={this.props.codigos[this.state.curso.codigo]}
          />
        ) : null}
        <div className="card card-stats-primary">
          <div className="card-block">
            <div className="form-group has-success">
              <label htmlFor="inputSuccess1">Buscador de oferta</label>

              <AutoComplete
                dataSource={dataSource}
                style={{ width: "100%" }}
                onSelect={this.onSelect}
                onSearch={this.handleSearch}
                placeholder="Buscador de cursos"
              />
              <small className="text-help" />
            </div>
          </div>
        </div>

        <div className="card-columns">
          {this.state.cursos.map((curso, ix) => {
             if (!codigos.includes(curso.codigo)) return;
            let seleccionar = () => {
              this.setState({ curso: curso });
            };

            return <div className="card" key={ix}>
                <div className="card-header bg-white">
                  <h4 className="card-title">
                    <a href="#">
                      {curso.codigo}-{curso.seccion} {curso.nombre}
                    </a>
                  </h4>
                  <small className="text-muted">
                    {DIAS[curso.dia]} {BLOQUES[curso.bloque]}  {curso.nombre_completo_p || curso.nombre_completo}
                    {/*  {BLOQUE(curso.bloque)} */}
                  </small>
                </div>
                <div className="card-footer bg-white">
                  <button onClick={seleccionar} className="btn btn-primary btn-sm">
                    Postular <i className="material-icons btn__icon--right">
                      play_circle_outline
                    </i>
                  </button>
                </div>
              </div>;
          })}
        </div>
      </div>
    );
  }
}

export default Ofertas;
