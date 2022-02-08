import React from 'react';

import ListStudents from './list/students';
import ListAssistances from './assistance/students';
import ListDocuments from './documents/documents';
import UploadDocument from './documents/upload';
import ListTasks from './tasks/tasks';
import ListNotes from './notes/notes';
import Breadcrumb from '../components/breadcrumb';
import { Link } from 'react-router-dom';
import { Me } from '../core/ensena';

class AdminCourse extends React.Component {
  constructor(props) {
    super(props)
    let id = +window.location.pathname.split("/")[2]
    let section = null  
    this.id = id 
  
  
    for (let course of Me.sectionsByOwnerId.edges ){
      if (course.node.id ==id)  {
            section = course.node
            break 
       }
    }
    for(let helperCourse of  Me.usersSectionsByUserId.edges){
      if(helperCourse.node.role <3 &&  helperCourse.node.sectionBySectionId.id == id ){
        section = helperCourse.node.sectionBySectionId
      }
    }

    this.state = { section:section}
  
  }
  render() {
    if (this.state.section == null)
      return <div className="page ">
    <div className="container page__container">
      </div>
      <Breadcrumb  middle={{url:"/Courses", name:"Cursos"}}  />
      </div>
    let section = this.state.section
    return <div className="page ">
      <div className="container page__container">
      <Breadcrumb middle={{url:"/Courses", name:"Cursos"}} last={{name:`${section.courseByCourseId.name} ${section.courseByCourseId.code}  S(${section.section})` }} />
        <h1 className="h2"> {section.courseByCourseId.name}  S({section.section}) </h1>
        <div className="row">
          <div className="col-md-11">
            <div className="card">
              <ul className="nav nav-tabs nav-tabs-card">
                <li className="nav-item">
                  <a className="nav-link show active" href="#Documentos" data-toggle="tab"> Documento</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link show" href="#Task" data-toggle="tab">Tareas</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link show" href="#Notes" data-toggle="tab">Notas</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link show" href="#Assistance" data-toggle="tab">Asistencias</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link show" href="#ListStudents" data-toggle="tab">Lista de curso</a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link show"  to={`/AdminCoder/${this.id}/`} >Admin IDE Online</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link show" target="_blank" href={`/VirtualClassRoom/?section=${section.id}&user=${window.token}`} >Aula Virtual</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link show" href="#Config" data-toggle="tab">Configuraciones</a>
                </li>
              </ul>
              <div className="card-body tab-content">
                <div className="tab-pane show active" id="Documentos">
                  <ListDocuments section={section}/>
                  <UploadDocument  section={section}/>
                </div>
                <div className="tab-pane show " id="Task">
                  <ListTasks pos={this.id }  section={section}/>
                </div>

                <div className="tab-pane show" id="Notes">
                  <ListNotes />
                </div>
                <div className="tab-pane show" id="Assistance">
                  <ListStudents teacher={false} Title={"Registar inasistencias"} students={section.usersSectionsBySectionId.edges} />
                </div>
                <div className="tab-pane show" id="ListStudents">
                  <ListStudents teacher={true} Title={"Lista de los alumnos inscritos en el sistema"} students={section.usersSectionsBySectionId.edges} />
                </div>
                <div className="tab-pane show" id="Config">
                  Aún no disponible
               </div>
              </div>
            </div>
            {/* Lessons */}
          </div>
        </div>
  
      </div>
    </div>
  }


}

export default AdminCourse;
