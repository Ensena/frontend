import React,{useState} from 'react';
import Iframe from "react-iframe";

import  {Api,FindInstitute} from '../core/ensena'


export default ()=> {
  const [url, setURL] = useState("");

  if (!FindInstitute(2)){
    return 
  }

  let api = new Api("external")
  api.getAll().then((data)=>{
    setURL(data.Url)
  })
    return  <div>{url!=""?<Iframe
              url={url}
              width="100%"
              height="700px"
              id="myId"
              className="myClassname"
              display="initial"
              position="relative"
            />:null}</div>
  }