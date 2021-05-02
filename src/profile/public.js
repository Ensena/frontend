import React from 'react';

import Footer from '../footer/footer'
import Api  from '../core/ensena';
import { render } from '@testing-library/react';
import {
  Link
} from "react-router-dom";





class PublicProfile extends React.Component {

  constructor(props) {
      super(props)

      const profile = new Api("graphql/public")
      this.state = { profile: null }
      profile.getAll().then((data) => { this.setState({ profile: data.data.allUsers.edges[0].node }) })

  }
  render() {
    if (this.state.profile == null)
     return null

    let profile = this.state.profile
    return <div className="page pt-0">
    <div className="bg-primary mdk-box js-mdk-box mb-0" style={{height: '192px'}} >
      <div className="mdk-box__bg">
        <div className="mdk-box__bg-front" style={{backgroundImage: `url(${profile.cover})`, backgroundPosition: 'center'}} />
      </div>
    </div>
    <div className="container page__container d-flex align-items-end position-relative mb-4">
      <div className="avatar avatar-xxl position-absolute bottom-0 left-0 right-0">
        <img src={profile.picture} alt="avatar" className="avatar-img rounded-circle border-3" />
      </div>
      {/* <ul className="nav nav-tabs-links flex" style={{marginLeft: '265px'}}>
        <li className="nav-item">
          <a href="fixed-student-profile.html" className="nav-link active">Cursos</a>
        </li>
        <li className="nav-item">
          <a href="fixed-student-profile-posts.html" className="nav-link">Posts</a>
        </li>
      </ul> */}
 
    </div>
    <div className="container page__container mb-3">
      <div className="row flex-sm-nowrap">
        <div className="col-sm-auto mb-3 mb-sm-0" style={{width: '265px'}}>
          <h1 className="h2 mb-1">{profile.name} {profile.lastName}</h1>
          <p className="d-flex align-items-center mb-4">
    <a href className="btn btn-sm btn-success mr-2">Sigueme @{profile.domain}</a>
          </p>
          <div className="text-muted d-flex align-items-center mb-2">
            <i className="material-icons mr-1">account_box</i>
            <div className="flex">Desde 2016</div>
          </div>
          {/* <div class="text-muted d-flex align-items-center mb-4">
                          <i class="material-icons mr-1">location_on</i>
                          <div class="flex">Romania, Europe</div>
                      </div> */}
          <h4>Acerca de mi</h4>
          <p className="text-black-70 measure-paragraph">
                    {profile.aboutMe}
          </p>
        </div>

        <div className="col-sm">
          {/* <div class="flex search-form search-form--light mb-4">
<button class="btn pr-3" type="button" role="button"><i class="material-icons">search</i></button>
<input type="text" class="form-control" placeholder="Search" id="searchSample02">
</div> */}
    <center> <h2>Mis Cursos</h2></center>


          {profile.test.edges.map((section,ix) => ( <div className="card" key={ix}> 
            <div className="card-header">
              <div className="d-flex align-items-center">
                {/* <a href="fixed-student-take-course.html" className="mr-3">
                  <img src="/assets/images/nodejs.png" alt="" className="rounded" width={100} />
                </a> */}
                <div className="flex">
                  <h4 className="card-title mb-0"><Link to={"/Course/"+section.node.sectionBySectionId.id}>{section.node.sectionBySectionId.courseByCourseId.name}  S({section.node.sectionBySectionId.section})</Link></h4>
                  {section.node.sectionBySectionId.courseByCourseId.institutionByOwnerInstitutionId?<span className="badge badge-info">{section.node.sectionBySectionId.courseByCourseId.institutionByOwnerInstitutionId.name} </span>:null}  &nbsp;&nbsp;  
                  <span className="badge badge-success">{section.node.sectionBySectionId.courseByCourseId.code} </span>
                </div>
              </div>
            </div>
            {/* <ul className="list-group list-group-fit">
              <li className="list-group-item">
                <a href="fixed-student-view-course.html" className="text-body text-decoration-0 d-flex align-items-center">
                  <strong>Getting started with Node</strong>
                  <i className="material-icons text-muted ml-auto" style={{fontSize: 'inherit'}}>check</i>
                </a>
              </li>
            </ul> */}
          </div> ) )}
       
        </div>
      </div>
    </div>
    
    <Footer /> 
    

  </div>
  }
}

export default PublicProfile;
