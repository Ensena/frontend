import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { List, Avatar } from 'antd';
import { Button } from 'antd';
import { Link } from 'react-router-dom';


const data = [
  {
    title: 'Ant Design Title 1',
  },
];
class ListTasks extends  PureComponent  {
 
     constructor(props) {
         super(props)
     }
 
     render() {
     return <div className="card">
 <div className="card-header">
   <h4 className="card-title">Tareas asignadas al curso</h4>
 </div>

 <Link to={`/Admin/Tasks/${this.props.pos}/new`} className="btn btn-primary">Crear una tarea</Link>

 <div className="card-body">
 
   <div className="nestable" id="nestable-handles-primary">
    

         <List
    itemLayout="horizontal"
    dataSource={this.props.section.tasksBySectionId.edges}
    renderItem={item => (
      <List.Item>
       <List.Item.Meta
          title={item.node.name}
          description={item.node.description}
        />
        <Button  onClick={()=>{      this.props.history.push(`/Admin/Tasks/${this.props.pos}/review/${item.node.id}`)  }} > Revisar</Button>
        <Button  onClick={()=>{      this.props.history.push(`/Admin/Tasks/${this.props.pos}/review/${item.node.id}`)  }} > Notas</Button>
      </List.Item>
    )}
  />
           

   </div>
   {/* <p><a href="fixed-instructor-lesson-add.html" className="btn btn-primary">Add Lesson <i className="material-icons">add</i></a></p> */}
 </div>
</div>
     }
    }

export default withRouter(ListTasks)