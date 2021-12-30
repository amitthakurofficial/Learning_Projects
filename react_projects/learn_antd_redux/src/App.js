import {Input,Button ,Form} from "antd";
import { useEffect, useState } from "react";
import './App.css';

import ACTIONS from "./action/action";
import { connect } from "react-redux";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
};

const tailLayout = {
  wrapperCol : {
    offset :8,
    span : 8
  }
}



function App(props) {
  const [form] = Form.useForm();
  const [logins,setLogins] = useState('');

  const onFinish = (values) => {
    setLogins(values);
    form.setFieldsValue({ username: 'Haker@test.com' });
    props.submitForm(values);

    console.log('Success:', values);
  };

  useEffect( () =>{
  
  },[])

  return (
    <Form 
    {...layout} 
    form={form}
    name="basic"
    onFinish={onFinish}
    // onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="username"
        name="username"
        rules={[
          {
            required: true,
            message: "user name is mendatory to input"
          }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
      label="password"
      name="password"
      >
        <Input.Password/>
        </Form.Item>

      <Form.Item
      {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        </Form.Item>
    </Form>
  );
}
// export default App;



const mapStateToProps = state => ({
  items: {username:"amit"}
});

const mapDispatchToProps = dispatch => ({
  submitForm: item => dispatch(ACTIONS.submitForm({username:"amit"})),
  // deleteItem: id => dispatch(ACTIONS.deleteItem(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
;

