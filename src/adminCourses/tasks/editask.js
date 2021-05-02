import React from 'react';
import {
    Link
  } from "react-router-dom";
import Footer from '../footer/footer';




function Forum() {
  return (
 
    <div className="page ">
    <div className="container page__container">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="fixed-student-dashboard.html">Inicios</a></li>
        <li className="breadcrumb-item active">Foros</li>
      </ol>
      <div className="row">
        <div className="col-md-10">
          <div className="d-flex align-items-center mb-4">
            <h1 className="h2 flex mr-3 mb-0">Foros</h1>
            <Link to={"/Forum/new"} className="btn btn-success">Crea un nuevo hilo</Link>
          </div>
          {/* Search */}
          <div className="flex search-form form-control-rounded search-form--light mb-2" style={{minWidth: '200px'}}>
            <input type="text" className="form-control" placeholder="Buscar en los hilos del foro" id="searchSample02" />
            <button className="btn pr-3" type="button" role="button"><i className="material-icons">search</i></button>
          </div>
          <div className="mb-4 d-flex align-items-center">
            <small className="text-black-70 text-uppercase mr-3"></small>
            <div className="dropdown ml-auto">
              <a href data-toggle="dropdown" className="dropdown-toggle text-black-70">Todos los topicos</a>
              <div className="dropdown-menu dropdown-menu-right">
                <a href className="dropdown-item active">Todos los topicos</a>
                <a href className="dropdown-item">General</a>
                <a href className="dropdown-item">Lessons</a>
                <a href className="dropdown-item">Customer Support</a>
              </div>
            </div>
          </div>
         <div className="card">
            <div className="card-header">
              <div className="media align-items-center">
                <div className="media-body">
                  <h4 className="card-title">Hilos</h4>
                  <p className="card-subtitle">Topicos relacionados</p>
                </div>
                <div className="media-right">
                  <a href="#" className="btn btn-white btn-sm">Ver todos </a>
                </div>
              </div>
            </div>
            <ul className="list-group list-group-fit">
              <li className="list-group-item forum-thread">
                <div className="media align-items-center">
                  <div className="media-left">
                    <div className="forum-icon-wrapper">
                      <a href="fixed-student-forum-thread.html" className="forum-thread-icon">
                        <i className="material-icons">description</i>
                      </a>
                      <a href="fixed-student-profile.html" className="forum-thread-user">
                        <img src="assets/images/256_rsz_nicolas-horn-689011-unsplash.jpg" alt="" width={20} className="rounded-circle" />
                      </a>
                    </div>
                  </div>
                  <div className="media-body">
                    <div className="d-flex align-items-center">
                      <a href="fixed-student-profile.html" className="text-body"><strong>Jenell D. Matney</strong></a>
                      <small className="ml-auto text-muted">1 min ago</small>
                    </div>
                    <a className="text-black-70" href="fixed-student-forum-thread.html">Getting around AngularJS</a>
                  </div>
                </div>
              </li>
              <li className="list-group-item forum-thread">
                <div className="media align-items-center">
                  <div className="media-left">
                    <div className="forum-icon-wrapper">
                      <a href="fixed-student-forum-thread.html" className="forum-thread-icon">
                        <i className="material-icons">description</i>
                      </a>
                      <a href="fixed-student-profile.html" className="forum-thread-user">
                        <img src="assets/images/256_rsz_sharina-mae-agellon-377466-unsplash.jpg" alt="" width={20} className="rounded-circle" />
                      </a>
                    </div>
                  </div>
                  <div className="media-body">
                    <div className="d-flex align-items-center">
                      <a href="fixed-student-profile.html" className="text-body"><strong>Sherri J. Cardenas</strong></a>
                      <small className="ml-auto text-muted">3 min ago</small>
                    </div>
                    <a className="text-black-70" href="fixed-student-forum-thread.html">Responsive Bootstrap Question</a>
                  </div>
                </div>
              </li>
              <li className="list-group-item forum-thread">
                <div className="media align-items-center">
                  <div className="media-left">
                    <div className="forum-icon-wrapper">
                      <a href="fixed-student-forum-thread.html" className="forum-thread-icon">
                        <i className="material-icons">description</i>
                      </a>
                      <a href="fixed-student-profile.html" className="forum-thread-user">
                        <img src="assets/images/256_rsz_karl-s-973833-unsplash.jpg" alt="" width={20} className="rounded-circle" />
                      </a>
                    </div>
                  </div>
                  <div className="media-body">
                    <div className="d-flex align-items-center">
                      <a href="fixed-student-profile.html" className="text-body"><strong>Joseph S. Ferland</strong></a>
                      <small className="ml-auto text-muted">10 min ago</small>
                    </div>
                    <a className="text-black-70" href="fixed-student-forum-thread.html">Can someone help me with the basic Setup?</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center pagination-sm ">
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
                <a className="page-link" href="#" aria-label={2}>
                  <span>2</span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span>Next</span>
                  <span aria-hidden="true" className="material-icons">chevron_right</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      
      </div>
    </div>
    <Footer /> 
  </div>
  );
}

export default Forum;
