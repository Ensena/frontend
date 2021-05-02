import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { List, Avatar } from 'antd';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import Footer from '../../footer/footer';
import Breadcrumb from '../../components/breadcrumb';
import Api from '../../ensena';
import ReviewCode from './reviewCode';
import CalificationCode from './calificationCode';

const data = [
  {
    title: 'Ant Design Title 1',
  },
];
class ReviewTasks extends  PureComponent  {
 
     constructor(props) {
         super(props)
         let id = window.location.pathname.split("/")[3]
         let task = window.location.pathname.split("/")[5]
         this.id = id 
         try {
           this.state = { section: window.user.sectionsByOwnerId.edges[id].node,data:[] }
         } catch (error) {
           this.state = { section: window.user.usersSectionsByUserId.edges[id].node.sectionBySectionId,data:[] } 
         }

         let api = new Api("tasks/getTasks")
         api.getAll({task_id:task}).then((data)=> { this.setState( {data : data.data.taskById.taskAnswersByTaskId.edges }) })

     }
 
     render() {
       
  if (this.state.section == null )
      return <div className="page ">
    <div className="container page__container">
      </div>
      <Breadcrumb  middle={{url:"/Courses", name:"Revision"}}  />
      </div>
    let section = this.state.section
    return <div className="page ">
      <div className="container page__container">
      <Breadcrumb middle={{url:"/Courses", name:"Revision"}} last={{name:`${section.courseByCourseId.name} ${section.courseByCourseId.code}  S(${section.section})` }} />
  
    
        <CalificationCode />

        {this.state.data.length? <ReviewCode task={this.state.data } />:null}

      
        <Footer />
      </div>
    </div>
  }
    }

export default withRouter(ReviewTasks)