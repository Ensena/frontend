/**
 * Created by malba on 31-07-17.
 */
import React, { Component } from 'react';
import { Button, notification } from "antd";
import 'antd/dist/antd.css';


const openNotification = (msg) => {
  notification.open({
    message: msg.msg,
    description:
     msg.descripcion
  });
};
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


class Postular extends  Component {

     constructor(props){
      super(props)
      console.log("NUEVO ACA",props);
      this.postular = ()=>{

        openNotification({
          msg: "Un Momento",
          descripcion: "Se esta creando tu postulacion"
        });
        console.log(this.props)

      //  this.CallProcess(
      //    "ayudantias/postular",
      //    { seccion_id: this.props.curso.id, motivo: this.state.value },
      //    registro => {
           
      //      if (registro[1])
      //        openNotification({
      //          descripcion:
      //            "Se ha creado tu postulación para el curso de " +
      //            this.props.curso.nombre +
      //            "-" +
      //            this.props.curso.seccion,
      //          msg: "Tu Numero de postulacion es  " + registro[0].id
      //        });
      //      else
      //        openNotification({
      //          msg:
      //            "Se ha actualizado tu postulación para " +
      //            this.props.curso.nombre +
      //            "-" +
      //            this.props.curso.seccion,
      //          descripcion:
      //            "Tu Numero de postulacion es  " + registro[0].id
      //        });

      //        window.agregar()
      //    }
      //  );


      }

        this.state = { value:"" };
      this.buscar(props)

      

       this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  buscar(p){
      this.setState({ value: "" });
      // this.CallProcess(
      //   "ayudantias/buscar",
      //   { seccion_id: p.curso.id },
      //   registro => {
      //     console.log(registro)
      //     if (registro.length) {
      //     this.setState({ value: registro[0].motivo });
      //     }
      //   }
      // )
      
  }

  componentWillReceiveProps(next){

    console.log("ACA",next);
    this.buscar(next);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }

    render() {
        console.log("NUEVO ACA", this.props);

        return <div className="card card-stats-primary">
            <div className="card-block">
              <div className="media">
                <div className="media-left media-middle">
                  <i className="material-icons text-muted-light">
                    info
                  </i>
                </div>
               

               
                <div class="row">
  <div class="col-xs-12 col-md-12">
  <div className="media-body media-middle">
                  <h5>
                    {this.props.curso.codigo}-{this.props.curso.seccion} {this.props.curso.nombre} {DIAS[this.props.curso.dia]} {BLOQUES[this.props.curso.bloque]}
                  </h5>
                </div>
                <div className="form-group">
                  <label htmlFor="usr">
                    Nota : {this.props.nota.toString()[0]},{this.props.nota.toString()[1]}
                  </label>
                </div>
       
                </div>

  <div class="col-xs-12 col-md-12">
                <textarea value={this.state.value} onChange={this.handleChange} className="form-control" rows={9} id="comment" defaultValue={""} />

                <div className="card-footer bg-white">
                  <button onClick={this.postular} className="btn btn-success btn-sm">
                    Enviar mi solicitud <i className="material-icons btn__icon--right">
                      play_circle_outline
                    </i>
                  </button>
                </div>
                </div>
</div>
              </div>
            </div>
          </div>;
    }
}

export default Postular;
