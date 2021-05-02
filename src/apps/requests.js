import React from 'react';
import Footer from '../footer/footer';
import Api from '../ensena';
import {  notification } from 'antd';
import Iframe from 'react-iframe';

class AppRequest extends React.Component {
  constructor(props){
    super(props)
    this.state={request:false}

  }
request(){


  let tasks = new Api("external/v1/requests")
  let id = +(window.location.pathname.split("/")[2])
  tasks.new({appID:id}).then((r)=> {
    this.setState({request:true})
      notification.open({
          message: 'Integración Realizada ',
          description:`Se ha conectado tu cuenta con UDPiler`,
          onClick: () => {
             

          },
        });

  })


}

    render() {
      let id = +(window.location.pathname.split("/")[2])
      let app = window.apps[id].node
if (!this.state.request){
    return    <div className="page ">
    <div className="container page__container p-0">
      <div className="row m-0">
        <div className="col-lg container-fluid page__container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="fixed-student-dashboard.html">Inicio</a></li>
            <li className="breadcrumb-item active">Apps</li>
          </ol>
          {id !=3?
          <div>
          <h1 className="h2">Aplicación no disponible</h1>
          <div className="row card-group-row mb-40pt">
            <div className="col-lg-6 col-sm-6 card-group-row__col">
              <div className="card card-group-row__card text-center o-hidden card--raised navbar-shadow">
                <div className="card-body d-flex flex-column">
                  <div className="flex-grow-1 mb-16pt">
                    <span className="w-64 h-64 icon-holder icon-holder--outline-secondary rounded-circle d-inline-flex mb-16pt">
                      <i className="material-icons">person</i>
                    </span>
                    <h4 className="mb-8pt">{app.name}</h4>
                    <p className="text-black-70">{app.description}</p>
                  </div>
                  <p className="lh-1 text-muted mb-0"><small>Estará próximamente disponible</small></p>
                </div>
                <div className="card-footer">
                  <a href="fixed-student-signup.html" className="btn btn-outline-secondary disabled">Aún no disponible</a>
                </div>
              </div>
            </div>
          </div>
          </div>:
                <div>
                <h1 className="h2">Solicitad de permiso para acceder Aplicación</h1>
                <div className="row card-group-row mb-40pt">
                  <div className="col-lg-6 col-sm-6 card-group-row__col">
                    <div className="card card-group-row__card text-center o-hidden card--raised navbar-shadow">
                      <div className="card-body d-flex flex-column">
                        <div className="flex-grow-1 mb-16pt">
                          <span className="w-64 h-64 icon-holder icon-holder--outline-secondary rounded-circle d-inline-flex mb-16pt">
                            <i className="material-icons">person</i>
                          </span>
                          <h4 className="mb-8pt">{app.name}</h4>
                          <p className="text-black-70">{app.description}</p>
                        </div>
                        <p className="text-black-70"><small>Se compartira con esta aplicación tu Nombre, Apellido Correo y Rut</small></p>
                      </div>
                      <div className="card-footer">
                        <button onClick={()=>{ this.request()}} className="btn btn-outline-secondary btn-success">Ingresar</button>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
          
          }
        </div>

          </div>
        </div>
        <Footer />
      </div>

        }
        
      return <Iframe
      url={"https://api.enseña.cl/external/v1/go?app_id="+app.id+"&token="+window.token}
      width="100%"
      height="700px"
      id="myId"
      className="myClassname"
      display="initial"
      position="relative"
    />
  }

}

export default AppRequest;
