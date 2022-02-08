import React,{useState} from 'react';

import { Select,Checkbox } from 'antd';
import {Me} from '../core/ensena'

const { Option } = Select;
export default (props)=>{

    const [Curse, setCurse] = useState(0);

    let handleChange=(value)=>{
        setCurse(value)
      //props.Lang(value)
    }

    let OpenTab=()=>{
        window.open('/AdminCoder/'+courses[Curse].id+`/`,'_blank');
    }

    let courses = []
    for(let course of Me.sectionsByOwnerId.edges){
        if (!course.node.enable){
            continue
        }
        courses.push({
            id:course.node.id,
            name:course.node.courseByCourseId.name
        })
    }
    for(let course of Me.usersSectionsByUserId.edges){
      if (course.node.role>=3){
          continue
      } 
      if (!(course.node.sectionBySectionId.enable)){
        continue 
      }

      courses.push({
          id:course.node.sectionBySectionId.id,
          name:course.node.sectionBySectionId.courseByCourseId.name
      })
  }




    return (<div>
    <div className="sidebar-heading">Cursos</div>
      <ul className="sidebar-menu sm-active-button-bg">

      {/* <li className="sidebar-menu-item">
          <a className="sidebar-menu-button" >
          <Checkbox  defaultChecked={true} onChange={()=>{ }}>  {" "} </Checkbox>
            AutoGuardado
          </a>
        </li> */}

        <li className="sidebar-menu-item">
          <a className="sidebar-menu-button" >
            <Select defaultValue={courses[0].name} style={{ width: 120 }} onChange={handleChange}>
                {courses.map((course,ix)=>{
                    return <Option key={ix} value={ix}>{course.name}</Option> })}
            </Select>
          </a>
        </li>
        <li className="sidebar-menu-item">
          <a className="sidebar-menu-button" onClick={()=>{ OpenTab() }} >
            <i className="sidebar-menu-icon sidebar-menu-icon--left material-icons">search</i> Ver IDE
          </a>
        </li>
     
    

    
      </ul>


    </div>)
}