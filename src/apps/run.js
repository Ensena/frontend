import React from 'react';
import Iframe from "react-iframe";
import Footer from '../footer/footer';
import AppRequest from './requests';


class AppsRun extends React.Component {


  constructor(props){
    super(props)
  


  }
    render() {

    let id = +(window.location.pathname.split("/")[2])
 
    let app = window.apps[id].node

    if (window.apps[id].node.usersAppsByAppId.enable==0){

        return <AppRequest />
    }



    return   <Iframe
              url={"https://api.enseña.cl/external/v1/go?app_id="+app.id+"&token="+window.token}
              width="100%"
              height="700px"
              id="myId"
              className="myClassname"
              display="initial"
              position="relative"
            />
  }

}

export default AppsRun;
