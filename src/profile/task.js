import React from 'react';
import { Link } from 'react-router-dom';
import {Me as me} from '../core/ensena'

function MyTasks() {
  let ownerCourses = me.sectionsByOwnerId.edges
  let courses = me.usersSectionsByUserId.edges
  return (
    <div className="card">
    <div className="card-header d-flex align-items-center">
      <div className="flex">
        <h4 className="card-title">Tareas</h4>
        <p className="card-subtitle">Proximas por vencer</p>
      </div>
      <a href="fixed-instructor-statement.html" className="btn btn-sm btn-primary"><i className="material-icons">receipt</i></a>
    </div>
    <div data-toggle="lists" data-lists-values="[
&quot;js-lists-values-course&quot;, 
&quot;js-lists-values-document&quot;,
&quot;js-lists-values-amount&quot;,
&quot;js-lists-values-date&quot;
]" data-lists-sort-by="js-lists-values-date" data-lists-sort-desc="true" className="table-responsive">
      <table className="table table-nowrap m-0">

        <tbody className="list">


        {courses.map((course, ix) => { 
     

            let tasks  = course.node.sectionBySectionId.tasksBySectionId.edges
        return  tasks.map((node,jx) => {
          let task = node.node 
        let finish = new Date(task.finish)

        if (task.role==4){

          return null 
        }

        let url =""
        if (task.role==3){
          url= `/Tasks/${ix}/${jx}/${task.name}`
        }
        if (task.role==1){
          url= `/TasksUpload/${ix}/${jx}/${task.name}`
        }
        if (task.role==2){
          url= `/TasksUpload/${ix}/${jx}/${task.name}`
        }


       return  <tr>
            <td key={ix+"-"+jx }>
              <div className="media align-items-center">
                {/* <a href="fixed-instructor-course-edit.html" className="avatar avatar-4by3 avatar-sm mr-3">
                  <img src="/assets/images/gulp.png" alt="course" className="avatar-img rounded" />
                </a> */}
                <div className="media-body">

        <Link className="text-body js-lists-values-course" to={url}><strong>{task.name} {course.node.sectionBySectionId.courseByCourseId.name} {course.node.sectionBySectionId.section} </strong></Link><br />
        <small>{course.node.sectionBySectionId.courseByCourseId.institutionByOwnerInstitutionId.name}</small>

                </div>
              </div>
            </td>
            <td className="text-right">
              <small >{finish.getUTCDate()}/{finish.getUTCMonth()}/{finish.getUTCFullYear()}  {finish.getUTCHours()}:{finish.getUTCMinutes()}</small>
            </td>
              </tr>}) } )}

        </tbody>
      </table>
    </div>
  </div>

  );
}

export default MyTasks;
