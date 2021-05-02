import {useState} from 'react'
import Iframe from "react-iframe";


export default ({url,err})=>{

    return <div>
          {err != "" ? <div className="card-footer bg-dark">
                    <code className="highlight html bg-dark hljs xml">
                        {err}

                    </code>
                </div> : err}
 {url!="" ?<Iframe
    url={url}
    width="100%"
    height={"400px"}
    id="myId"
    frameBorder={0}
    className="myClassname"
    display="initial"
    position="relative"
   /> :null} 
       </div>
}