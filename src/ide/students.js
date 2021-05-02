import React, { useState } from 'react';
import { Me, Name, LastName, Picture } from '../core/ensena'
import { Select, Checkbox } from 'antd';
import "./ide.css"

const { Option } = Select;



function Admin(props) {

  const [Section, setSection] = useState(props.Section);
  const [Users, setUsers] = useState(props.Section.usersSectionsBySectionId.edges);
  const [User, setUser] = useState(Me);
  console.log("ME",Me)
  if (Me.sectionsByOwnerId.edges.length == 0) {
    return <div></div>
  }



  function SelectUser(value) {


    let elmnt = document.getElementById("user-"+value);
    elmnt.scrollIntoView();

  }

  function Search(word){
    let Users = Section.usersSectionsBySectionId.edges
    let users =[]
    if (word =="") {
      setUsers(Section.usersSectionsBySectionId.edges);
    }
      for (let user of Users){
        let txt = `${user.node.userByUserId.name}${user.node.userByUserId.lastName}`.toLowerCase()
        txt = txt.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        if (txt.includes(word.toLowerCase()) ){
           users.push(user)
        }

      }
      setUsers(users)

  }



  return <div className="mdk-drawer js-mdk-drawer " data-align="end" id="messages-drawer" data-position="right" data-domfactory-upgraded="mdk-drawer" data-persistent data-opened><div className="mdk-drawer__scrim" />
    <div className="mdk-drawer__content2 top-0 "  >
      <div className="sidebar sidebar-right sidebar-light bg-white o-hidden"  >
        <div className="d-flex flex-column h-100">
          <div className="d-flex flex-column justify-content-center navbar-height">
            <div className="px-3 form-group mb-0">
            

              <div className="input-group input-group-merge input-group-rounded flex-nowrap">
                <input type="text" style={{ "width": "174px" }} className="form-control form-control-prepended" onChange={(e) => { Search(e.target.value) }} placeholder="Buscador" />
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <span className="material-icons">filter_list</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex ps" data-perfect-scrollbar>

            <ul className="list-group list-group-fit mb-3" >
              
              


            </ul>
            <div className="sidebar-heading">Consultando</div>
            <div className="sidebar-heading d-flex">
              <div className="flex text-muted">{Users.length} Estudiantes</div>
              {/* <a href="#" className="text-primary">Ocultar</a> */}
            </div>
            <ul className="list-group list-group-fit mb-3" style={{ "overflow-y": "scroll" }} >
              {Users.map((user, ix) => {
                return <li className="list-group-item px-4 py-3" key={ix}>
                  <a onClick={()=>{ SelectUser(user.node.id) }} className="d-flex align-items-center position-relative">
                    <span className="avatar avatar-sm avatar-online mr-3 flex-shrink-0">
                      <span className="avatar-title rounded-circle">{user.node.userByUserId.name[0]}{user.node.userByUserId.lastName[0]}</span>
                    </span>
                    <span className="flex d-flex flex-column" style={{ maxWidth: '175px' }}>
                      <strong className="text-body">{user.node.userByUserId.name} {user.node.userByUserId.lastName} </strong>
                    </span>
                  </a>
                </li>
              })}

            </ul>
            <div className="ps__rail-x" style={{ left: '0px', bottom: '0px' }}><div className="ps__thumb-x" tabIndex={0} style={{ left: '0px', width: '0px' }} /></div><div className="ps__rail-y" style={{ top: '0px', right: '0px' }}><div className="ps__thumb-y" tabIndex={0} style={{ top: '0px', height: '0px' }} /></div></div>
        </div>
      </div>
    </div>
  </div>

}
export default Admin;