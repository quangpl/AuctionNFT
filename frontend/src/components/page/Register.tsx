import React, { Component } from "react";
import { Form, Input, Button, Checkbox, Divider, Card, Row, Col } from "antd";
import "../../css/register.css";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
class Register extends Component {
  render() {
    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };

    /* eslint-disable no-template-curly-in-string */
    const validateMessages = {
      required: "${label} is required!",
      types: {
        email: "${label} is not a valid email!",
        number: "${label} is not a valid number!",
      },
      number: {
        range: "${label} must be between ${min} and ${max}",
      },
    };
    return (
      <div className="register">
        <Divider
          orientation="center"
          style={{
            backgroundColor: "rgba(255, 255, 255, .01)",
            padding: 70,
            fontSize: 30,
            borderBottom: "solid 1px  rgba(255, 255, 255, .1)",
          }}
        >
          <h1>Register</h1>
        </Divider>
        <Row justify="center" align="middle">
          <Col span={8} xs={20} md={8} xl={8}>
          
            <Card
              className="form-register"
              style={{
                backgroundColor: "rgba(255, 255, 255, .01)",
              }}
            >
              <h1 style={{ color: "white" }}>
                Don't have an account? Register now.
              </h1>
              <Form labelCol={{ span: 24, offset:0 }} labelAlign="left">
                <Form.Item 
                  name={["user", "name"]}
                  label="Name"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item name={["address", "address"]} label="Address">
                  <Input />
                </Form.Item>
                <Form.Item
                  name="email"
                  label="E-mail"
                  rules={[
                    {
                      type: "email",
                      message: "The input is not valid E-mail!",
                    },
                    {
                      required: true,
                      message: "Please input your E-mail!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  name="password"
                  label="Password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                  hasFeedback
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item
                  name="confirm"
                  label="Confirm Password"
                  dependencies={["password"]}
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: "Please confirm your password!",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error(
                            "The two passwords that you entered do not match!"
                          )
                        );
                      },
                    }),
                  ]}
                >
                  <Input.Password />
                </Form.Item>
                <Form.Item >
                  <Button type="primary" htmlType="submit">
                    Submit
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

export default Register;
