import React from 'react';
import Iframe from "react-iframe";
import {Token} from "../core/ensena"


const h = window.innerHeight - 133


function Server() {




  return <div className="page2 ">

    <Iframe
      url={"https://ssh-udp.ensena.cl/?session=" + Token}
      width="100%"
      height={h + "px"}
      id="myId"
      className="myClassname"
      display="initial"
      position="relative"
    />

  </div>

}


export default Server;
