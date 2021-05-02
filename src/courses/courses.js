import React from 'react';
import {
    Link
  } from "react-router-dom";
import { Me as  me,data } from '../core/ensena';





function Courses()  {

 let courses = me.usersSectionsByUserId.edges
 let ownerCourses =me.sectionsByOwnerId.edges

 return    <div className="page ">
    <div className="container page__container">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><Link to="/">Inicio</Link></li>
        <li className="breadcrumb-item active">Mis Cursos</li>
      </ol>
      <div className="media mb-headings align-items-center">
        <div className="media-body">
          <h1 className="h2">Mis Cursos </h1>
        </div>

      </div>
      <div className="card-columns">

      {me.moodleUdp?data.Moodle.map((course,ix) => ( <div className="card" key={ix}>
          <div className="card-header">
            <div className="media">
              {/* <div className="media-left">
                <a href="fixed-student-student-take-course.html">
                  <img src="assets/images/vuejs.png" alt="Card image cap" width={100} className="rounded" />
                </a>
              </div> */}
              <div className="media-body">
                <h4 className="card-title m-0"><a href={"https://docencia-eit.udp.cl/md-eit/course/view.php?id="+course.CourseID}>{course.Course}</a></h4>
                <small className="text"> Universidad Diego Portales Atraccion de talentos </small>

              </div>
            </div>
          </div>
        
          <div className="card-footer bg-white">
            <a href={"https://docencia-eit.udp.cl/md-eit/course/view.php?id="+course.Course_id} className="btn btn-primary btn-sm">Ir al curso <i className="material-icons btn__icon--right">play_circle_outline</i></a>
          </div>
       </div> )):null
       
       
    }

      {ownerCourses.map((section,ix) => ( <div className="card" key={ix}>
          <div className="card-header">
            <div className="media">
              {/* <div className="media-left">
                <a href="fixed-student-student-take-course.html">
                  <img src="assets/images/vuejs.png" alt="Card image cap" width={100} className="rounded" />
                </a>
              </div> */}
              <div className="media-body">
                <h4 className="card-title m-0"><Link to={`/AdminCourse/${section.node.id}/${section.node.courseByCourseId.name}` }>{section.node.courseByCourseId.name}</Link></h4>
                <small className="text"> {section.node.courseByCourseId.code} {section.node.section}   {section.node.year}-{section.node.semester}   {section.node.courseByCourseId.institutionByOwnerInstitutionId.name} </small>

              </div>
            </div>
          </div>
        
          <div className="card-footer bg-white">
            <Link to={`/AdminCourse/${section.node.id}/${section.node.courseByCourseId.name}`} className="btn btn-primary btn-sm">Ir al curso <i className="material-icons btn__icon--right">play_circle_outline</i></Link>
          </div>
       </div> ))
       
       
    }
       

       {courses.map((section,ix) => { 
       
       
       let link = section.node.role==3?`/Course/${section.node.sectionBySectionId.id}/${section.node.sectionBySectionId.courseByCourseId.name}` :`/AdminCourse/${section.node.sectionBySectionId.id}/${section.node.sectionBySectionId.courseByCourseId.name}`

       
       return <div className="card" key={ix}>
          <div className="card-header">
            <div className="media">
              {/* <div className="media-left">
                <a href="fixed-student-student-take-course.html">
                  <img src="assets/images/vuejs.png" alt="Card image cap" width={100} className="rounded" />
                </a>
              </div> */}
              <div className="media-body">
                <h4 className="card-title m-0"><Link to={link }>{section.node.sectionBySectionId.courseByCourseId.name}</Link></h4>
                <small className="text"> {section.node.sectionBySectionId.courseByCourseId.code} {section.node.sectionBySectionId.section}   {section.node.sectionBySectionId.year}-{section.node.sectionBySectionId.semester}   {section.node.sectionBySectionId.courseByCourseId.institutionByOwnerInstitutionId.name} </small>

              </div>
            </div>
          </div>
        
          <div className="card-footer bg-white">
            <Link to={link} className="btn btn-primary btn-sm">Ir al curso <i className="material-icons btn__icon--right">play_circle_outline</i></Link>
          </div>
            </div>} )
       
       
    }
       
       
     </div>
      {/* Pagination */}
      {/* <ul className="pagination justify-content-center pagination-sm">
        <li className="page-item disabled">
          <a className="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true" className="material-icons">chevron_left</span>
            <span>Prev</span>
          </a>
        </li>
        <li className="page-item active">
          <a className="page-link" href="#" aria-label={1}>
            <span>1</span>
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#" aria-label={1}>
            <span>2</span>
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Next">
            <span>Next</span>
            <span aria-hidden="true" className="material-icons">chevron_right</span>
          </a>
        </li>
      </ul>*/}
    </div> 
   
  </div>
    
}

export default Courses;
