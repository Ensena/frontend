import React from 'react';




class ListAssistances extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        return  <div className="table-responsive" data-toggle="lists" data-lists-values="[&quot;name&quot;]">
        {/* Search */}

        <h4 >Listado de los alumnos pasar asistencia  </h4>

        <div className="search-form search-form--light mb-3">
          <input type="text" className="form-control search" placeholder="Buscar puedes buscar por nombre, apellido y rut" />
          <button className="btn" type="button" role="button"><i className="material-icons">search</i></button>
        </div>
        {/* Table */}

        <table className="table">
          <thead>
            <tr>
            <th>Seleccionado</th>
              <th>Nombre</th>
            <th>Apellido</th>
            <th>Última Conexión</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody className="list">
            <tr>
                <td >     
                <div className="custom-control custom-checkbox">
        <input id="customCheck1" type="checkbox" className="custom-control-input js-check-selected-row"  />
        <label className="custom-control-label" htmlFor="customCheck1">
          <span className="text-hide">Check</span>
        </label>
      </div>

                </td>
              <td className="name">John Doe</td>
              <td>31</td>
            </tr>

            <tr>
                <td >     
                <div className="custom-control custom-checkbox">
        <input id="customCheck1" type="checkbox" className="custom-control-input js-check-selected-row" defaultChecked />
        <label className="custom-control-label" htmlFor="customCheck1">
          <span className="text-hide">Check</span>
        </label>
      </div>

                </td>
              <td className="name">John Doe</td>
              <td>31</td>
            </tr>
          </tbody>
        </table>
      </div>

    }


}

export default ListAssistances;
