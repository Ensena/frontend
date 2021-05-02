import React from 'react';
import {
    Link
  } from "react-router-dom";
import Footer from '../../footer/footer';
import {  notification } from 'antd';

import { Form, Input, Button, Checkbox,Select } from 'antd';
import { DatePicker } from 'antd';
import { TimePicker } from 'antd';
import moment from 'moment';
import UploadFiles from '../upload/upload';
import Breadcrumb from '../../components/breadcrumb';
import Api from '../../ensena';
const { Option } = Select;


function onChange(date, dateString) {
  console.log(date, dateString);
}
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 15 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 15 },
};



  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };



class NewTask extends  React.Component {
    formRef = React.createRef();

    constructor(props) {
      super(props)
      let id = window.location.pathname.split("/")[3]
      this.id = id 
      try {
        this.state = { section: window.user.sectionsByOwnerId.edges[id].node }
      } catch (error) {
        this.state = { section: window.user.usersSectionsByUserId.edges[id].node.sectionBySectionId }
  
      }
      this.state.disable = false
      this.files=[]


    }

     onFinish = values => {
        values.files =  this.files
        this.setState({disable:true})
        
        values.sectionId =  this.state.section.id
        let v = JSON.stringify(values)
        let tasks = new Api("tasks/new")
        tasks.new(values).then((r)=> {
            let section = this.state.section
            notification.open({
                message: 'Tarea creada ',
                description:`Se ha creado una nueva tarea para el curso ${section.courseByCourseId.name}  S(${section.section}) con el id : ${r.id}`,
                onClick: () => {
                  console.log('Notification Clicked!');
                },
              });

        })
        console.log('Success:', v);


    
      };
       
      onReset = () => {
        this.formRef.current.resetFields();
      };
    
      onFill = () => {
        this.formRef.current.setFieldsValue({
          note: 'Hello world!',
          gender: 'male',
        });
      };

      
      
      onGenderChange = value => {
        this.formRef.current.setFieldsValue({
          note: `Hi, ${value }!`,
        });
      };


    render() {
      if (this.state.section == null)
        return <div className="page ">
      <div className="container page__container">
        </div>
        <Breadcrumb  middle={{url:"/Courses", name:"Cursos"}}  />
        </div>
      let section = this.state.section
 
  return  <div className="page ">
    <div className="container page__container">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="fixed-student-dashboard.html">Inicios</a></li>
        <li className="breadcrumb-item active">Tareas</li>
      </ol>
      <div className="row">
        <div className="col-md-10">
          <div className="d-flex align-items-center mb-4">
            <h1 className="h2 flex mr-3 mb-0">Nueva Tarea</h1>
          </div>
  
         <div className="card">
            <div className="card-header">
              <div className="media align-items-center">
                <div className="media-body">
                  <h4 className="card-title">{section.courseByCourseId.name}  S({section.section}) </h4>
                  <p className="card-subtitle">{section.courseByCourseId.institutionByOwnerInstitutionId.name}</p>
                </div>
                <div className="media-right">
                  {/* <a href="#" className="btn btn-white btn-sm">Copia Tarea de otra sección </a> */}
                </div>
              </div>
            </div>
     
            <Form
      {...layout}
      name="basic"
      initialValues={{ remember: false }}
      ref={this.formRef}
      onFinish={this.onFinish}
      onFinishFailed={this.onFinishFailed}
    >
      <Form.Item
        label="Titulo de tarea"
        name="name"
        rules={[{ required: true, message: 'Debes agregar un nombre' }]}
      >
        <Input disabled={this.state.disable} />
      </Form.Item>

      <Form.Item
        label="Descripción de tarea"
        name="descripcion"
        rules={[{ required: true, message: 'Debes agregar una descripción' }]}
      >
        <Input.TextArea  disabled={this.state.disable} />
      </Form.Item>


      <Form.Item
        label="Fecha de Inicio"
        name="start"
        rules={[{ required: true, message: 'Debes agregar la fecha de inicio' }]}
      >
      <DatePicker onChange={onChange}  disabled={this.state.disable}  />
      </Form.Item>

      <Form.Item
        label="Hora de Inicio"
        name="horainicio"
       
      >
    <TimePicker defaultValue={moment('00:00:00', 'HH:mm:ss')}  onChange={onChange}  disabled={this.state.disable}  size="large" />
      </Form.Item>

      <Form.Item
        label="Fecha de Termino"
        name="finish"
        rules={[{ required: true, message: 'Debes agregar la fecha de termino' }]}
      >
      <DatePicker  onChange={onChange} disabled={this.state.disable} />
      </Form.Item>

      <Form.Item
        label="Hora de Termino"
        name="horatermino"
        
      >
    <TimePicker defaultValue={moment('23:59:59', 'HH:mm:ss')}  disabled={this.state.disable}  onChange={onChange}  size="large" />
      </Form.Item>

      <Form.Item name="tipotarea" label="Tipo de Tarea" rules={[{ required: true }]}>
          <Select
            placeholder="Seleccione el tipo de tarea"
            onChange={this.onGenderChange}
            disabled={this.state.disable} 
          >
            <Option value="tarea">Tarea</Option>
            <Option value="control">Control</Option>
            <Option value="tareaDeProgramacion">Tarea de programación</Option>
            <Option value="controlDeProgramacion">Control de  programación</Option>
          </Select>
        </Form.Item>

        <Form.Item name="cantidadIntegrantes" label="Cantidad de integrantes" rules={[{ required: true }]}>
          <Select
            placeholder="Seleccione la cantidad de integrantes"
            onChange={this.onGenderChange}
            disabled={this.state.disable} 
          >
              { [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map((num)=> <Option value={num} key={num}>{num}</Option> )}
          </Select>
        </Form.Item>



      <Form.Item
        label="Cargar archivos"
        name="files"
      
      >

        {!this.state.disable?<UploadFiles section={section} task={1} AddID={this.files} />:null}
      </Form.Item>



      <Form.Item {...tailLayout}>
      {!this.state.disable? <Button type="primary" htmlType="submit">
          Crear Tarea
        </Button> :null}
      </Form.Item>
    </Form>
     
          </div>
      </div>
      
      </div>
    </div>
    <Footer /> 
  </div>
    } 
}
export default NewTask;
