import React from 'react';

import Iframe from 'react-iframe'


const h = window.innerHeight-133
function Database() {
    return <div className="page2 ">
  
  
              <Iframe url={"https://db.enseña.cl?session=" + ""}
                width="100%"
                height={h+"px"}
                id="myId"
                className="myClassname"
                display="initial"
                position="flex" />
  

    </div>

  }

export default Database;
