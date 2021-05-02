import React from 'react';
import ListStudents from '../adminCourses/list/students';
import {
  Link
} from "react-router-dom";
import Breadcrumb from '../components/breadcrumb';
import { Modal, Button } from 'antd';
import { Me } from '../core/ensena';

const { success } = Modal;
function showDeleteConfirm(control,note) {
  success({
    title: control.node.name,
    content: <div>

    Argumento de revisión : {note.review}

    </div>,

    cancelText: 'Cerrar',

    
  });
}

class Course extends React.Component {

  constructor(props) {
    super(props)

    let id = +window.location.pathname.split("/")[2]
    let section = null  

    for (let course of Me.usersSectionsByUserId.edges ){
       if (course.node.sectionBySectionId.id ==id)  {
            section = course.node.sectionBySectionId
            break 
       }
    }




    this.state = { section: section }

    this.activates = {}

    try {
      this.activates = JSON.parse(this.state.section.custom) || {}
    } catch (error) {
      
    }




  }

  render() {
    if (this.state.section == null)
      return <div className="page ">
        <div className="container page__container">
        <Breadcrumb middle={{url:"/Courses", name:"Cursos"}} last={{name:`` }} />

        </div>

      </div>
    let section = this.state.section
    return <div className="page ">
      <div className="container page__container">
      <Breadcrumb middle={{url:"/Courses", name:"Cursos"}} last={{name:`${section.courseByCourseId.name} ${section.courseByCourseId.code}  S(${section.section})` }} />

        <h1 className="h2"> {section.courseByCourseId.name}  S({section.section}) </h1>
        <div className="row">

          <div className="col-md-8">
            <div className="card">
              <div className="embed-responsive embed-responsive-16by9" style={{ display: section.video ? "" : "none" }} >
                <iframe className="embed-responsive-item" src="https://player.vimeo.com/video/97243285?title=0&byline=0&portrait=0" allowFullScreen />
              </div>
              <div className="card-body" style={{ display: section.description ? "" : "none" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dicta eius enim inventoreus optio ratione veritatis. Beatae deserunt illum ipsam magniima mollitia officiis quia tempora!
            </div>
            </div>
            {/* Lessons */}

            <div className="card">
              <div className="card-header d-flex align-items-center">
                <div className="flex">
                  <h4 className="card-title">Próximas Tareas</h4>
                  {/* <div className="card-subtitle">Documentation</div> */}
                </div>
                <i className="material-icons text-muted">info_outline</i>
              </div>
              <ul className="list-group list-group-fit">
                {section.tasksBySectionId.edges.map((task,ix)=>{

                return <li className="list-group-item">
                  <a href className="text-body"><i className="material-icons float-right text-muted">trending_flat</i> <strong>Tarea 1</strong></a>
                  <br></br>
                  <small >Expira 12/12/12 a las 23:59 </small>
                </li>
                })}

              </ul>
            </div>

            <div className="card">
              <div className="card-header d-flex align-items-center">
                <div className="flex">
                  <h4 className="card-title">Documentos disponibles</h4>
                  {/* <div className="card-subtitle"> </div> */}
                </div>
                <i className="material-icons text-muted">info_outline</i>
              </div>
              <ul className="card list-group list-group-fit">
                {section.filesSectionsBySectionId.edges.reverse().map((file, ix) => (<li className="list-group-item" key={ix}>
                  <div className="media">
                    <div className="media-left">
                      <div className="text-muted">{section.filesSectionsBySectionId.edges.length - (ix)}.</div>
                    </div>
                    <div className="media-body">
                      <a href={file.node.fileByFileId.url}>{file.node.fileByFileId.name}</a>
                    </div>
                    <div className="media-right">
                      <small className="text-muted-light"></small>
                    </div>
                  </div>
                </li>))}
              </ul>
            </div>

            <div className="card">
              <div className="card-header d-flex align-items-center">
                <div className="flex">

                  <ListStudents Title={"Lista de los alumnos inscritos en el sistema"}  students={section.usersSectionsBySectionId.edges} teacher={false} />

                </div>
              </div>
            </div>



          </div>
          <div className="col-md-4">

{section.userByOwnerId?<div className="card">
              <div className="card-header">
                <div className="media align-items-center">
                  <div className="media-left">
                    {/* <img src="/assets/images/people/110/guy-6.jpg" alt="About Adrian" width={50} className="rounded-circle" /> */}
                  </div>
                  <div className="media-body">
  <h4 className="card-title"><a href="fixed-instructor-profile.html">{section.userByOwnerId.name  } {section.userByOwnerId.lastName}</a></h4>
                    <p className="card-subtitle"> {section.userByOwnerId.email }</p>
                  </div>
                </div>
              </div>
              <div className="card-body">
  <p>{section.userByOwnerId.aboutMe}</p>
                <a href className="btn btn-light"><i className="fab fa-facebook" /></a>
                <a href className="btn btn-light"><i className="fab fa-twitter" /></a>
                <a href className="btn btn-light"><i className="fab fa-github" /></a>
              </div>
            </div>:null}

            <div className="card">
              <div className="card-body">
                <a href={section.id==3417?"https://zoom.us/j/834581020?pwd=ZURYQ3BqL3hKQlVtdkR4Vzg4OUFoUT09":`/VirtualClassRoom/?section=${section.id}&user=${ window.token }`} target="_blank" className="btn btn-success btn-block flex-column">
                  <i className="material-icons">camera</i> Sala de clases virtual <br /> (Video Conferencia)
              </a>
              </div>
            </div>

            <div className="card" style={{display:this.activates.ide?"":"none" }} >
              <div className="card-body">
                <Link  to={"/Coder"} className="btn btn-primary btn-block flex-column">
                  <i className="material-icons">computer</i> Ide Online
              </Link>
              </div>
            </div>

            <div className="card" style={{display:this.activates.database?"":"none" }} >
              <div className="card-body">
                <Link to={"/Database"} className="btn btn-primary btn-block flex-column">
                  <i className="material-icons">computer</i> Base de datos Online
              </Link>
              </div>
            </div>



            {/* <div className="card">
              <div className="card-body">
                <a href="#" className="btn btn-danger btn-block flex-column">
                  <i className="material-icons">computer</i> Inasistencia
              </a>
              </div>
            </div> */}




            {/* <div className="card">
              <div className="card-body">
                <a href="#" className="btn btn-info btn-block flex-column">
                  <i className="material-icons">forum</i> Ir al foro de este curso
              </a>
              </div>
            </div> */}

            <div className="card">
              <div className="card-header">
                <div className="media align-items-center">
                  <div className="media-body">
                    <h4 className="card-title">Notas</h4>
                    <p className="card-subtitle"> registradas en el sistema</p>
                  </div>
                  {/* <div className="media-right">
              <a className="btn btn-sm btn-primary" href="#">Quiz results</a>
            </div> */}
                </div>
              </div>



             <ul className="list-group list-group-fit mb-0">

             {section.oldTasks.edges.map((control,ix)=>{   
               
               let note = control.node.taskAnswersByTaskId.edges.length?control.node.taskAnswersByTaskId.edges[0].node:null
              
               if (note == null)
                return null

               return <li className="list-group-item">
                  <div className="media align-items-center">
                    <div className="media-body">
             <a className="text-body" onClick={()=> showDeleteConfirm(control,note)}><strong>{control.node.name}</strong></a><br />
                      <div className="d-flex align-items-center">
                        <small className="text-black-50 text-uppercase mr-2">Tipo : Control  </small>
                      </div>
                    </div>
                    <div className="media-right text-center d-flex align-items-center">
                      {/* <span className="text-black-50 mr-3">Bien</span> */}
             <h4 className="mb-0 text-success">{ parseFloat(note.calification/100).toFixed(1) }</h4>
                    </div>
                  </div>
                </li>})}

          </ul> 
            </div>



            <a href="fixed-student-help-center.html" className="btn btn-default btn-block">
              <i className="material-icons btn__icon--left">help</i> ¿Necesitas Ayuda?
          </a>
          </div>
        </div>
      </div>

    </div>
  }


}

export default Course;
