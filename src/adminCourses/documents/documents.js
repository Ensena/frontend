

 import React from 'react';
 export default class ListDocuments extends React.Component {
 
     constructor(props) {
         super(props)
         console.log("propsaa",this.props.section.filesSectionsBySectionId)
     }
 
     render() {
     return <div className="card">
 <div className="card-header">
   <h4 className="card-title">Documentos cargados</h4>
 </div>
 <div className="card-body">
 
   <div className="nestable" id="nestable-handles-primary">
     <ul className="nestable-list">
      
      {this.props.section.filesSectionsBySectionId.edges.map((document,id)=><li className="nestable-item nestable-item-handle" data-id={1} key={id}>
         <div className="nestable-content">
           <div className="media align-items-center">
             <div className="media-left">
               {/* <img src="/assets/images/vuejs.png" alt="" width={100} className="rounded" /> */}
             </div>
             <div className="media-body">
               <h5 className="card-title h6 mb-0">
     <a href={document.node.fileByFileId.url}>{document.node.fileByFileId.name}</a>
               </h5>
     <small className="">{document.node.fileByFileId.userByOwnerId?document.node.fileByFileId.userByOwnerId.name+" "+document.node.fileByFileId.userByOwnerId.lastName:null} </small>
             </div>
             <div className="media-right">
               <a href="fixed-instructor-lesson-add.html" className="btn btn-white btn-sm"><i className="material-icons">edit</i></a>
             </div>
           </div>
         </div>
         <br/>
       </li>)}
    </ul> 
   </div>
   {/* <p><a href="fixed-instructor-lesson-add.html" className="btn btn-primary">Add Lesson <i className="material-icons">add</i></a></p> */}
 </div>
</div>
     }
    }