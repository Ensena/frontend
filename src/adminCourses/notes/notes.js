

 import React from 'react';
 export default class ListNotes extends React.Component {
 
     constructor(props) {
         super(props)
     }
 
     render() {
     return <div className="card">
 <div className="card-header">
   <h4 className="card-title">Notas Asignadas al curso</h4>
   <div className="media-right">
            <button >Exporta notas a excel</button>
             </div>

 </div>
 <div className="card-body">
 
   <div className="nestable" id="nestable-handles-primary">
     <ul className="nestable-list">
       <li className="nestable-item nestable-item-handle" data-id={1}>
         <div className="nestable-content">
           <div className="media ">

             <div className="media-body">
               <h5 className="card-title h6 mb-0">
                 <a href="fixed-instructor-lesson-add.html">Control 1</a>
               </h5>
               <small className="">Actualizado hace una hora</small>
             </div>
             <div className="media-right">
               <a href="fixed-instructor-lesson-add.html" className="btn btn-white btn-sm"><i className="material-icons">edit</i></a>
             </div>
           </div>
         </div>
       </li>
    </ul>
   </div>
   {/* <p><a href="fixed-instructor-lesson-add.html" className="btn btn-primary">Add Lesson <i className="material-icons">add</i></a></p> */}
 </div>
</div>
     }
    }