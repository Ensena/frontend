
import { Link } from 'react-router-dom';
import {data} from '../core/ensena'


function Apps() {
    
  console.log("DATA",data)
      let apps = data.Ensena.data.allApps.edges


    return    <div className="page ">
    <div className="container page__container">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="fixed-instructor-dashboard.html">Inicio</a></li>
        <li className="breadcrumb-item active">Apps</li>
      </ol>
      <div className="d-flex flex-column flex-sm-row flex-wrap mb-headings align-items-start align-items-sm-center">
        <div className="flex mb-2 mb-sm-0">
          <h1 className="h2">Apps Disponibles</h1>
        </div>
        <a href="fixed-instructor-quiz-edit.html" className="btn btn-success">Crear mi propia app</a>
      </div>
      {/* <div className="alert alert-light alert-dismissible border-1 border-left-3 border-left-warning" role="alert">
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
        <div className="text-black-70">Ohh no! No courses to display. Add some courses.</div>
      </div> */}
      <div className="row">

        {apps.map((node,ix)=>{
          let app = node.node
        return <div className="col-md-6" key={ix}>
          <div className="card">
            <div className="card-body">
              <div className="d-flex flex-column flex-sm-row">
                <a  className="avatar avatar-lg avatar-4by3 mb-3 w-xs-plus-down-100 mr-sm-3">
                  {/* <img src="assets/images/vuejs.png" alt="Card image cap" className="avatar-img rounded" /> */}
                </a>
                <div className="flex" style={{minWidth: '200px'}}>
                  {/* <h5 class="card-title text-base m-0"><a ><strong>Learn Vue.js</strong></a></h5> */}
                  <h4 className="card-title mb-1"><a >{app.name}</a></h4>
                  <p className="text-black-70">{app.description}</p>
                  <div className="d-flex align-items-end">
          
                    <div className="text-center">
                      {app.usersAppsByAppId.enable ==1?<div>
                    <Link to={"/Apps/"+ix+"/"+app.name} className="btn btn-sm btn-success">Ir a la APP</Link>
                      <button  className="btn btn-sm btn-danger">Desactivar</button></div>:<button  className="btn btn-sm btn-warning">No Disponible aún</button> }
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card__options dropdown right-0 pr-2">
              <a href="#" className="dropdown-toggle text-muted" data-caret="false" data-toggle="dropdown">
                <i className="material-icons">more_vert</i>
              </a>
              <div className="dropdown-menu dropdown-menu-right">
                <a className="dropdown-item" href="fixed-instructor-course-edit.html">Edit course</a>
                <a className="dropdown-item" href="#">Course Insights</a>
                <div className="dropdown-divider" />
                <a className="dropdown-item text-danger" href="#">Delete course</a>
              </div>
            </div>
          </div>
        </div>}) }
      
       </div>
      {/* Pagination */}

    </div>
  </div>
  }

export default Apps;
