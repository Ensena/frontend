import React from 'react';




class ListStudents extends React.Component {

  constructor(props) {
    super(props)
    console.log("PROPS", this.props)
  }

  render() {

    return <div className="table-responsive" data-toggle="lists" data-lists-values="[&quot;name&quot;]">
      {/* Search */}

      <h4 >{this.props.Title}  </h4>


      {/* <button  class="btn btn-primary"> Enviar un email </button> &nbsp; &nbsp; &nbsp; */}
      {this.props.teacher? <button  class="btn btn-success"> Enviar link para resetear contraseña</button>:null}&nbsp; &nbsp; &nbsp;
      {this.props.teacher? <button  class="btn btn-warning"> Agregar nuevos alumno</button>:null}&nbsp; &nbsp; &nbsp;
      {this.props.teacher? <button  class="btn btn-danger"> Eliminar alumno del curso</button>:null}



       {/* <div className="search-form search-form--light mb-3">
        <input type="text" className="form-control search" placeholder="Buscar puedes buscar por nombre, apellido y rut" />
        <button className="btn" type="button" role="button"><i className="material-icons">search</i></button>
      </div>  */}
      {/* Table */}

      <table className="table">
        <thead>
          <tr>
            <th>Seleccionado</th>
            <th>Nombre</th>
            <th>Apellido</th>
            {this.props.teacher? <th>Correo</th>:null}
            {this.props.teacher? <th>Última Conexión</th>:null}
          </tr>
        </thead>
        <tbody className="list">
          {this.props.students.map((node, ix) => {

            let student = node.node.userByUserId
            return <tr key={ix}>
            <td >
                <div className="custom-control custom-checkbox">
                  <input id="customCheck1" type="checkbox" className="custom-control-input js-check-selected-row" />
                  <label className="custom-control-label" htmlFor="customCheck1">
                    <span className="text-hide">Check</span>
                  </label>
                </div>

              </td>
              <td className="name">{student.name}</td>
              <td>{student.lastName}</td>
              {this.props.teacher?<td>{student.email}</td>:null}
              {this.props.teacher? <td>No se ha conectado</td>:null}
            </tr>
          })}


        </tbody>
      </table>
    </div>

  }


}

export default ListStudents;
