import React from 'react';
import { Link } from 'react-router-dom';
import MyTasks from './task';
import { Me as me, data } from '../core/ensena'
import News from '../news/news';



function Me() {
  let ownerCourses = me.sectionsByOwnerId.edges
  let courses = me.usersSectionsByUserId.edges
  return (
    <div className="page ">
      <div className="container page__container">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="fixed-instructor-dashboard.html">Inicio</a></li>
          <li className="breadcrumb-item active">Dashboard</li>
        </ol>
        <h1 className="h2">Dashboard</h1>
        <div className="row">
          <div className="col-lg-4" >
            <div className="card" style={{ display: "none" }}>
              <div className="card-header d-flex align-items-center">
                <div className="flex">
                  <h4 className="card-title">Actividad</h4>
                  <p className="card-subtitle">Ultimos 7 dias</p>
                </div>
                <a href="fixed-instructor-earnings.html" className="btn btn-sm btn-primary"><i className="material-icons">trending_up</i></a>
              </div>
              <div className="card-body">
                <div className="chart" style={{ height: '200px' }}><div className="chartjs-size-monitor" style={{ position: 'absolute', left: '0px', top: '0px', right: '0px', bottom: '0px', overflow: 'hidden', pointerEvents: 'none', visibility: 'hidden', zIndex: -1 }}><div className="chartjs-size-monitor-expand" style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, overflow: 'hidden', pointerEvents: 'none', visibility: 'hidden', zIndex: -1 }}><div style={{ position: 'absolute', width: '1000000px', height: '1000000px', left: 0, top: 0 }} /></div><div className="chartjs-size-monitor-shrink" style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, overflow: 'hidden', pointerEvents: 'none', visibility: 'hidden', zIndex: -1 }}><div style={{ position: 'absolute', width: '200%', height: '200%', left: 0, top: 0 }} /></div></div>
                  <canvas id="earningsChart" className="chart-canvas chartjs-render-monitor" width={1000} height={400} style={{ display: 'block', height: '200px', width: '500px' }} />
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header d-flex align-items-center">
                <div className="flex">
                  <h4 className="card-title">Mis cursos </h4>
                  <p className="card-subtitle">activos</p>
                </div>
                {/* <a className="btn btn-sm btn-primary" href="#">Profesor / Ayudante </a> */}
              </div>
              <ul className="list-group list-group-fit mb-0" >

              {me.moodleUdp?data.Moodle.map((course, ix) => {
                  return <li className="list-group-item" key={ix}>
                    <div className="media align-items-center">
                      <div className="media-body">
                      <a href={"https://docencia-eit.udp.cl/md-eit/course/view.php?id="+course.CourseID} className="text-body"><strong>{course.Course}</strong>
                          <br />
                          <small>Universidad Diego Portales Atraccion de Talentos</small>

                        </a>
                    
                      </div>
                      <div className="media-right">
                        <div className="text-center">
                          <span className="badge badge-pill badge-success">Ir</span>
                        </div>
                      </div>
                    </div>
                  </li>
                }):null}


                {courses.map((course, ix) => {
                  if (!course.node.sectionBySectionId.enable || course.node.role == 3) {
                    return null
                  }

                  return <li className="list-group-item" key={ix}>
                    <div className="media align-items-center">
                      <div className="media-body">
                        <Link to={`/AdminCourse/${course.node.sectionBySectionId.id}/${course.node.sectionBySectionId.courseByCourseId.name}`} className="text-body"><strong>{course.node.sectionBySectionId.courseByCourseId.name} S{course.node.sectionBySectionId.section}</strong>
                          <br />
                          <small>{course.node.sectionBySectionId.courseByCourseId.institutionByOwnerInstitutionId.name}</small>

                        </Link>
                      </div>
                      <div className="media-right">
                        <div className="text-center">
                          <span className="badge badge-pill badge-success">Ir</span>
                        </div>
                      </div>
                    </div>
                  </li>
                })}

                {ownerCourses.map((course, ix) => {
                  if (!course.node.enable) {
                    return null
                  }
                  return <li className="list-group-item" key={ix}>
                    <div className="media align-items-center">
                      <div className="media-body">
                        <Link to={`/AdminCourse/${course.node.id}/${course.node.courseByCourseId.name}`} className="text-body"><strong>{course.node.courseByCourseId.name} S{course.node.section}</strong>
                          <br />
                          <small>{course.node.courseByCourseId.institutionByOwnerInstitutionId.name} </small>
                        </Link>
                      </div>
                      <div className="media-right">
                        <div className="text-center">
                          <span className="badge badge-pill badge-success">Ir</span>
                        </div>
                      </div>
                    </div>
                  </li>
                })}
                {courses.map((course, ix) => {

                  if (!course.node.sectionBySectionId.enable || course.node.role != 3) {
                    return null
                  }

                  return <li className="list-group-item" key={ix}>
                    <div className="media align-items-center">
                      <div className="media-body">
                        <Link to={`/Course/${course.node.sectionBySectionId.id}/${course.node.sectionBySectionId.courseByCourseId.name}`} className="text-body"><strong>{course.node.sectionBySectionId.courseByCourseId.name}</strong>
                          <br />
                          <small>{course.node.sectionBySectionId.courseByCourseId.institutionByOwnerInstitutionId.name}</small>

                        </Link>
                      </div>
                      <div className="media-right">
                        <div className="text-center">
                          <span className="badge badge-pill badge-success">Ir</span>
                        </div>
                      </div>
                    </div>
                  </li>
                })}
               

              </ul>

            </div>

            {/* <MyTasks /> */}
            {/* <div className="card">
              <div className="card-header d-flex align-items-center">
                <div className="flex">
                  <h4 className="card-title">Comentarios</h4>
                  <p className="card-subtitle">Respuestas rapidas</p>
                </div>
                <div className="text-right" style={{ minWidth: '80px' }}>
                  <a href="#" className="btn btn-outline-primary btn-sm"><i className="material-icons">keyboard_arrow_left</i></a>
                  <a href="#" className="btn btn-outline-primary btn-sm"><i className="material-icons">keyboard_arrow_right</i></a>
                </div>
              </div>
              <div className="card-body">
                <div className="media">
                  <div className="media-left">
                    <a href="#" className="avatar avatar-sm">
                      <img src="/assets/images/people/110/guy-9.jpg" alt="Guy" className="avatar-img rounded-circle" />
                    </a>
                  </div>
                  <div className="media-body d-flex flex-column">
                    <div className="d-flex align-items-center">
                      <a href="fixed-instructor-profile.html" className="text-body"><strong>Laza Bogdan</strong></a>
                      <small className="ml-auto text-muted">27 min ago</small><br />
                    </div>
                    <span className="text-muted">on <a href="fixed-instructor-course-edit.html" className="text-black-50" style={{ textDecoration: 'underline' }}>Data Visualization With Chart.js</a></span>
                    <p className="mt-1 mb-0 text-black-70">How can I load Charts on a page?</p>
                  </div>
                </div>
                <div className="media ml-sm-32pt mt-3 border rounded p-3 bg-light">
                  <div className="media-left">
                    <a href="#" className="avatar avatar-sm">
                      <img src="/assets/images/people/110/guy-6.jpg" alt="Guy" className="avatar-img rounded-circle" />
                    </a>
                  </div>
                  <div className="media-body">
                    <div className="d-flex align-items-center">
                      <a href="fixed-instructor-profile.html" className="text-body"><strong>FrontendMatter</strong></a>
                      <small className="ml-auto text-muted">just now</small>
                    </div>
                    <p className="mt-1 mb-0 text-black-70">Hi Bogdan,<br /> Thank you for purchasing our course! <br /><br />Please have a look at the charts library documentation <a href="#">here</a> and follow the instructions.</p>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <form action="#" id="message-reply">
                  <div className="input-group input-group-merge">
                    <input type="text" className="form-control form-control-appended" required placeholder="Respuesta rápida" />
                    <div className="input-group-append">
                      <div className="input-group-text pr-2">
                        <button className="btn btn-flush" type="button"><i className="material-icons">tag_faces</i></button>
                      </div>
                      <div className="input-group-text pl-0">
                        <div className="custom-file custom-file-naked d-flex" style={{ width: '24px', overflow: 'hidden' }}>
                          <input type="file" className="custom-file-input" id="customFile" />
                          <label className="custom-file-label" style={{ color: 'inherit' }} htmlFor="customFile">
                            <i className="material-icons">attach_file</i>
                          </label>
                        </div>
                      </div>
                      <div className="input-group-text pl-0">
                        <button className="btn btn-flush" type="button"><i className="material-icons">send</i></button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div> */}

          </div>
          <div className="col-lg-8">

         <News />
          </div>


        </div>
      </div>
    </div>
  );
}

export default Me;
