import React from 'react';
import UploadFiles from '../upload/upload';
export default class UploadDocument extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return <div className="card">
      <div className="card-header">
        <h4 className="card-title">Subir Documento</h4>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-6">


          <UploadFiles section={this.props.section} />
          </div>
          <div className="col-md-6">
            <div data-toggle="tree">
              {/* <ul style={{display: 'none'}} className="ui-fancytree-source fancytree-helper-hidden">
               <li className="folder expanded">
                 lesson files
                 <ul>
                   <li>lesson-1-install.zip</li>
                   <li>lesson-1-steps.zip</li>
                 </ul>
               </li>
             </ul> */}
              {/* <ul className="ui-fancytree fancytree-container fancytree-plain fancytree-ext-glyph" tabIndex={0} role="tree" aria-multiselectable="true"><li role="treeitem" aria-expanded="true" aria-selected="false" className="fancytree-lastsib"><span className="fancytree-node fancytree-expanded fancytree-folder fancytree-has-children fancytree-lastsib fancytree-exp-el fancytree-ico-ef"><span role="button" className="fancytree-expander  fa fa-caret-down fa-fw" /><span role="presentation" className="fancytree-icon  fa fa-folder-open fa-fw" /><span className="fancytree-title">lesson files</span></span><ul role="group"><li role="treeitem" aria-selected="false"><span className="fancytree-node fancytree-exp-n fancytree-ico-c"><span className="fancytree-expander  " /><span role="presentation" className="fancytree-icon  fa fa-file-o fa-fw" /><span className="fancytree-title">lesson-1-install.zip</span></span></li><li role="treeitem" aria-selected="false" className="fancytree-lastsib"><span className="fancytree-node fancytree-lastsib fancytree-exp-nl fancytree-ico-c"><span className="fancytree-expander  " /><span role="presentation" className="fancytree-icon  fa fa-file-o fa-fw" /><span className="fancytree-title">lesson-1-steps.zip</span></span></li></ul></li></ul> */}
             
              </div>
          </div>
        </div>
      </div>
    </div>
  }
}