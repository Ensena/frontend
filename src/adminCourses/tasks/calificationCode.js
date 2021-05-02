import React, { useState } from 'react';
import { Form, Input, Button, Radio } from 'antd';

const CalificationCode = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('inline');


  const formItemLayout =
    formLayout === 'horizontal'
      ? {
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 14,
          },
        }
      : null;
  const buttonItemLayout =
    formLayout === 'horizontal'
      ? {
          wrapperCol: {
            span: 14,
            offset: 4,
          },
        }
      : null;
const buttonItemLayout2 =
      formLayout === 'horizontal'
        ? {
            wrapperCol: {
              span: 14,
              offset: 4,
            },
          }
        : null;
  return (
    <div>
      <Form
        {...formItemLayout}
        layout={formLayout}
        form={form}
        initialValues={{
          layout: formLayout,
        }}
      >
        <Form.Item wrapperCol={{ span: 5,offset:8 }}  label="Nota">
          <Input placeholder="Ingresa la nota" />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 28 }}  label="Argumento">
          <Input placeholder="Argumento de la nota" />
        </Form.Item>
        <Form.Item {...buttonItemLayout}>
          <Button type="primary">Guardar Nota</Button>
        </Form.Item>
      </Form>
    </div>
  );
};


export default CalificationCode