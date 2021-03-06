import { Form, Input, Button, Divider, Card, Row, Col } from "antd";
import "../css/register.css";
export const Register = () => {

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
                marginTop: 30,
              }}
            >
              <Divider orientation="center">
                <h2 style={{ color: "white", margin: 20 }}>
                  Don't have an account? Register now.
                </h2>
              </Divider>

              <Form labelCol={{ span: 24, offset: 0 }} labelAlign="left">
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
                <Form.Item>
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

