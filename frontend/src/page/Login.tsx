import React, { Component } from "react";
import { Form, Input, Button, Checkbox, Divider, Card, Row, Col } from "antd";
import "../css/login.css";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
class Login extends Component {
  render() {
    
    return (
      <div className="login">
        <Divider
          orientation="center"
          style={{
            backgroundColor: "rgba(255, 255, 255, .01)",
            padding: 70,
            fontSize: 30,
            borderBottom: "solid 1px  rgba(255, 255, 255, .1)",
          }}
        >
          <h1>User login</h1>
        </Divider>
        <Row justify="center" align="middle">
          <Col span={8}  xs={20}
              md={8}
              xl={8}>
            <Card className="form-login"  style={{
            backgroundColor: "rgba(255, 255, 255, .01)",
           
          }}>
              <h1 style={{color:'white'}}>Login to your account</h1>
              <p style={{color:'white'}}>Login using an existing account or create a new account <Link to="/register">here</Link></p>
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
              >
                <Form.Item
                  name="username"
                  rules={[
                    { required: true, message: "Please input your Username!" },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Username"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: "Please input your Password!" },
                  ]}
                >
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                  >
                    Log in
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Login;
