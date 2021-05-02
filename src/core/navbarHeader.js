import {Name,LastName,Picture} from './ensena'
import { Link } from "react-router-dom";
import "./docencia.css"
function deleteAllCookies() {
  document.cookie = "ensena=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

}

function Header() {
  let css = "navbar navbar-expand navbar-dark bg-primary m-0"
  let text = "Enseña.cl"
  let img ="/assets/images/logo/white.svg"
  if (window.location.hostname =="docencia-eit.udp.cl"){  
    css = "docencia navbar navbar-expand   m-0"
    text = "Docencia EIT"
    img ="/assets/images/logo/udp.png"
  }

    return    <div id="header" className="mdk-header bg-dark js-mdk-header m-0" data-fixed data-effects="waterfall">
    <div className="mdk-header__content">
      {/* Navbar */}
      <nav id="default-navbar" className={css}>
        <div className="container">
          {/* Toggle sidebar */}
          {/* <button className="navbar-toggler d-block" data-toggle="sidebar" type="button">
            <span className="material-icons">menu</span>
          </button> */}
          {/* Brand */}
          <Link to="/" className="navbar-brand">
            <img src={img} height={"50px"} className="mr-2" alt="LearnPlus" />
            <span className="d-none d-xs-md-block">{text}</span>
          </Link>
          {/* Search */}
          {/* <form className="search-form d-none d-md-flex">
            <input type="text" className="form-control" placeholder="Buscar" />
            <button className="btn" type="button"><i className="material-icons font-size-24pt">search</i></button>
          </form> */}
          {/* // END Search */}
          <div className="flex" />
          {/* Menu */}
          <ul className="nav navbar-nav flex-nowrap d-none d-lg-flex">
            <li className="nav-item">
              <a className="nav-link" id="ME" href="/" > {Name} {LastName}</a>
            </li>
          </ul>
          {/* Menu */}
          <ul className="nav navbar-nav flex-nowrap">
            {/* Notifications dropdown */}
            <li className="nav-item dropdown dropdown-notifications dropdown-menu-sm-full" style={{display: 'none'}}>
              <button className="nav-link btn-flush dropdown-toggle" type="button" data-toggle="dropdown" data-dropdown-disable-document-scroll data-caret="false">
                <i className="material-icons">notifications</i>
                <span className="badge badge-notifications badge-danger">2</span>
              </button>
              <div className="dropdown-menu dropdown-menu-right">
                <div data-perfect-scrollbar className="position-relative">
                  <div className="dropdown-header"><strong>Messages</strong></div>
                  <div className="list-group list-group-flush mb-0">
                    <a href="fixed-student-messages.html" className="list-group-item list-group-item-action unread">
                      <span className="d-flex align-items-center mb-1">
                        <small className="text-muted">5 minutes ago</small>
                        <span className="ml-auto unread-indicator bg-primary" />
                      </span>
                      <span className="d-flex">
                        <span className="avatar avatar-xs mr-2">
                          <img src="/assets/images/people/110/woman-5.jpg" alt="people" className="avatar-img rounded-circle" />
                        </span>
                        <span className="flex d-flex flex-column">
                          <strong>Michelle</strong>
                          <span className="text-black-70">Clients loved the new design.</span>
                        </span>
                      </span>
                    </a>
                    <a href="fixed-student-messages.html" className="list-group-item list-group-item-action unread">
                      <span className="d-flex align-items-center mb-1">
                        <small className="text-muted">5 minutes ago</small>
                        <span className="ml-auto unread-indicator bg-primary" />
                      </span>
                      <span className="d-flex">
                        <span className="avatar avatar-xs mr-2">
                          <img src="/assets/images/people/110/woman-5.jpg" alt="people" className="avatar-img rounded-circle" />
                        </span>
                        <span className="flex d-flex flex-column">
                          <strong>Michelle</strong>
                          <span className="text-black-70">🔥 Superb job..</span>
                        </span>
                      </span>
                    </a>
                  </div>
                  <div className="dropdown-header"><strong>System notifications</strong></div>
                  <div className="list-group list-group-flush mb-0">
                    <a href="fixed-student-messages.html" className="list-group-item list-group-item-action border-left-3 border-left-danger">
                      <span className="d-flex align-items-center mb-1">
                        <small className="text-muted">3 minutes ago</small>
                      </span>
                      <span className="d-flex">
                        <span className="avatar avatar-xs mr-2">
                          <span className="avatar-title rounded-circle bg-light">
                            <i className="material-icons font-size-16pt text-danger">account_circle</i>
                          </span>
                        </span>
                        <span className="flex d-flex flex-column">
                          <span className="text-black-70">Your profile information has not been synced correctly.</span>
                        </span>
                      </span>
                    </a>
                    <a href="fixed-student-messages.html" className="list-group-item list-group-item-action">
                      <span className="d-flex align-items-center mb-1">
                        <small className="text-muted">5 hours ago</small>
                      </span>
                      <span className="d-flex">
                        <span className="avatar avatar-xs mr-2">
                          <span className="avatar-title rounded-circle bg-light">
                            <i className="material-icons font-size-16pt text-success">group_add</i>
                          </span>
                        </span>
                        <span className="flex d-flex flex-column">
                          <strong>Adrian. D</strong>
                          <span className="text-black-70">Wants to join your private group.</span>
                        </span>
                      </span>
                    </a>
                    <a href="fixed-student-messages.html" className="list-group-item list-group-item-action">
                      <span className="d-flex align-items-center mb-1">
                        <small className="text-muted">1 day ago</small>
                      </span>
                      <span className="d-flex">
                        <span className="avatar avatar-xs mr-2">
                          <span className="avatar-title rounded-circle bg-light">
                            <i className="material-icons font-size-16pt text-warning">storage</i>
                          </span>
                        </span>
                        <span className="flex d-flex flex-column">
                          <span className="text-black-70">Your deploy was successful.</span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            {/* // END Notifications dropdown */}
            {/* User dropdown */}
            <li className="nav-item dropdown ml-1 ml-md-3">
              <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button"><img src={Picture} alt="Avatar" className="rounded-circle" width={40} /></a>
              <div className="dropdown-menu dropdown-menu-right">
                <a className="dropdown-item" href="fixed-student-account-edit.html">
                  <i className="material-icons">edit</i> Editar mi cuenta
                </a>
                {/* <a class="dropdown-item"
                                       href="fixed-student-profile.html">
                                        <i class="material-icons">person</i> Public Profile
                                    </a> */}
                <a className="dropdown-item" onClick={()=>{deleteAllCookies() ; window.location = window.location  }}>
                  <i className="material-icons">lock</i> Cerrar Sessión
                </a>
              </div>
            </li>
            {/* // END User dropdown */}
          </ul>
        </div>
      </nav>
      {/* // END Navbar */}
    </div>
  </div>
    
}

export default Header