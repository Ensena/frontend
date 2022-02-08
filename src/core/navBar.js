import { Link,BrowserRouter } from "react-router-dom";
import { Me,data,FindInstitute } from "./ensena";

function NavbarAT(){
  let moodle="/md-eit/course/view.php?id="+data.Moodle[0].CourseID
  window.location = "https://docencia-eit.udp.cl/atraccion-de-talentos/"
  return  <div className="page__header">
  <div className="navbar bg-dark navbar-dark navbar-expand-sm d-none2 d-md-flex2">
    <div className="container">
      <div className="navbar-collapse collapse" id="navbarsExample03">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <a href={moodle} className="nav-link">Documentos</a>
          </li>
          <li className="nav-item">
            <a href="/atraccion-de-talentos/" className="nav-link">Desafios</a>
          </li>
          <li className="nav-item">
            <a href="/atraccion-de-talentos/scoreboard/" className="nav-link">Scoreboard</a>
          </li>
         
        </ul>
      </div>
      <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarsExample03" type="button">
        <span className="material-icons">menu</span>
      </button>
    </div>
  </div>
</div>


}

function NavBarUsers() {

  let udp = FindInstitute(2)

return    <div className="page__header">
        <div className="navbar bg-dark navbar-dark navbar-expand-sm d-none2 d-md-flex2">
          <div className="container">
            <div className="navbar-collapse collapse" id="navbarsExample03">
              <ul className="nav navbar-nav">
                <li className="nav-item">
                  <Link to="/Courses" className="nav-link">Mis Cursos</Link>
                </li>
               {Me.moodleUdp? <li className="nav-item dropdown">
                  <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Atraccion de Talentos</a>
                  <div className="dropdown-menu">
                    <a href="/atraccion-de-talentos/" className="dropdown-item">Desafiós</a>
                    <a href="/atraccion-de-talentos/scoreboard/" className="dropdown-item">Score Board</a>
                  </div>
                </li>:null}
                {udp?<li className="nav-item">
                  <Link to="/UDPILER"  className="nav-link">UDPiler</Link>
                </li>:null}
            
                <li className="nav-item dropdown">
                  <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Apps </a>
                  <div className="dropdown-menu">
                    <Link to="/App/MasAPPS" className="dropdown-item">Mas Apps</Link>
                    <Link to="/App/IdeOnline" className="dropdown-item">IDE Online</Link>
                    <Link to="/App/DataBase" className="dropdown-item">Base de Datos</Link>
                    <Link to="/App/Server" className="dropdown-item">Servidor</Link>
                    {/* <Link to="/App/Avance" className="dropdown-item">Mi Avance </Link>
                     */}

                    {/* <a href="/Apps/2/Solicitud-Practica" className="dropdown-item">Solicitud de práctica</a>
                    <a href="/Apps/0/Entrega-Practica" className="dropdown-item">Entrega de práctica</a> */}
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Mi cuenta</a>
                  <div className="dropdown-menu">
                    <Link to="/EditAccount" className="dropdown-item">Editar Perfil</Link>
                  </div>
                </li>
              </ul>
            </div>
            <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarsExample03" type="button">
              <span className="material-icons">menu</span>
            </button>
          </div>
        </div>
      </div>

}

function NavBar() {
  console.log("ACA",Me)
  return Me.role=="AT"?<NavbarAT/>:<NavBarUsers/>
}

export default NavBar