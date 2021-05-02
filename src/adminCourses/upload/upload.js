

 import React from 'react';

 import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

const { Dragger } = Upload;

const headers = {
    Authorization: window.token 
}






 export default class UploadFiles extends React.Component {



 
     constructor(props) {
         super(props)


         let AddID = (id)=>{
            if(this.props.AddID){
              console.log(id)
              this.props.AddID.push(id)
            }
         }

         console.log(props)
         this.route = {
            name: 'file',
            multiple: true,
            action: "https://api.enseña.cl/files/upload?authorization="+window.token+"&seccionID="+this.props.section.id+"&task="+this.props.task||0,
            onChange(info) {
              const { status } = info.file;
              if (status !== 'uploading') {
                console.log(info.file, info.fileList);
              }
              if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
                AddID(info.file.response.ID)
              } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
              }
            },
          }
     }
 
     render() {
     return <div className="card">
          <Dragger {...this.route}>
    <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p>
    <p className="ant-upload-text">Click or drag file to this area to upload</p>
    <p className="ant-upload-hint">
      Support for a single or bulk upload. Strictly prohibit from uploading company data or other
      band files
    </p>
  </Dragger>
</div>
     }
    }