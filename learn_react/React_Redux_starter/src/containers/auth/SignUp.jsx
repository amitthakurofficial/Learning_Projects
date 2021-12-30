import React from 'react';
import { Form, Input, Button } from "antd";

const SignUp = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Form
      labelCol= {{
        span:8
      }}
      wrapperCol = {{
        span:16
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="username"
          name="username"
          wrapperCol={{
            // offset: 8,
            span: 8,
          }}>
            <Input/>
        </Form.Item>
        <Form.Item
          label="Password"
          name="Password"
          wrapperCol={{
            // offset: 8,
            span: 8,
          }}>
            <Input/>
        </Form.Item>

        <Form.Item
        wrapperCol={{
          offset: 12,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignUp;