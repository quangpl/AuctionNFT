import React, { useState, useEffect } from "react";
import { Image, Divider, Row, Col, Button, Tabs, Card } from "antd";
import "../../css/profile.css";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const { TabPane } = Tabs;
const Profile = () => {
  const initialState = "Copy";
  const [buttonText, setButtonText] = useState("Copy"); //same as creating your state variable where "Next" is the default value for buttonText and setButtonText is the setter function for your state variable instead of setState

  // the effect
  useEffect(() => {
    if (buttonText !== initialState) {
      setTimeout(() => setButtonText(initialState), 1000);
    }
  }, [buttonText]);

  const changeText = (text: any) => {
    setButtonText(text);
    var id = document.getElementById("idMetamask")?.innerHTML;
    console.log(id?.toString());
    const textId = new String(id?.toString());
    navigator.clipboard.writeText(textId.toString());
  };

  <script></script>;
  return (
    <div className="profile">
      <Divider
        orientation="center"
        style={{
          backgroundColor: "rgba(255, 255, 255, .01)",
         
          paddingBottom: 30,
          fontSize: 30,
          borderBottom: "solid 1px  rgba(255, 255, 255, .1)",
        }}
      >
        <Image
          preview={{ visible: false }}
          style={{ borderRadius: "50%" }}
          width={200}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
        <h4>Hà Minh Hoàng</h4>
        <span id="idMetamask">
          DdzFFzCqrhshMSxb9oW3mRo4MJrQkusV3fGFSTwaiu4wPBqMryA9DYVJCkW9n7twCffG5f5wX2sSkoDXGiZB1HPa7K7f865Kk4LqnrME
        </span>
        <br />
        <button id="btnCopy" onClick={() => changeText("Copied")}>
          {buttonText}
        </button>
      </Divider>
      <div className="card-container">
        <Tabs defaultActiveKey="1" centered type="card">
          <TabPane tab="On Sale" key="1">
            <div className="site-card-wrapper">
              <Row equal-heights justify="center" gutter={[32, 24]}>
                <Col span={6} xs={24} md={6} xl={6}>
                  <Link to="/details-item">
                    <Card className="card">
                      <div className="cardImg">
                        <img src="https://wallpaperaccess.com/full/428690.jpg"></img>
                      </div>
                      <div className="cardContent">
                        <h4 className="nameToken">
                          Title11111111111111111111111111111111111111
                        </h4>
                        <div>
                          <h4>Price</h4>
                          <div>
                            <img
                              alt="ETH on Mumbai"
                              style={{ width: 14 }}
                              src="https://storage.opensea.io/files/265128aa51521c90f7905e5a43dcb456_new.svg"
                            ></img>
                            <span> 0.05 </span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </Col>
                <Col span={6} xs={24} md={6} xl={6}>
                  <Link to="/details-item">
                    <Card className="card">
                      <div className="cardImg">
                        <img src="https://wallpaperaccess.com/full/428690.jpg"></img>
                      </div>
                      <div className="cardContent">
                        <h4 className="nameToken">
                          Title11111111111111111111111111111111111111
                        </h4>
                        <div>
                          <h4>Price</h4>
                          <div>
                            <img
                              alt="ETH on Mumbai"
                              style={{ width: 14 }}
                              src="https://storage.opensea.io/files/265128aa51521c90f7905e5a43dcb456_new.svg"
                            ></img>
                            <span> 0.05 </span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </Col>
                <Col span={6} xs={24} md={6} xl={6}>
                  <Link to="/details-item">
                    <Card className="card">
                      <div className="cardImg">
                        <img src="https://lh3.googleusercontent.com/3P1A6WYErdyp3hlUypmrdSCazuuUc7NP02LdYn3K5CrskRORVFE88RgvobsaAHLyvpB6tYjV8s8j2y8xA75G-H89JAsB2RwcjxBrXg=w313"></img>
                      </div>
                      <div className="cardContent">
                        <h4 className="nameToken">
                          Title11111111111111111111111111111111111111
                        </h4>
                        <div>
                          <h4>Price</h4>
                          <div>
                            <img
                              alt="ETH on Mumbai"
                              style={{ width: 14 }}
                              src="https://storage.opensea.io/files/265128aa51521c90f7905e5a43dcb456_new.svg"
                            ></img>
                            <span> 0.05 </span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </Col>
                <Col span={6} xs={24} md={6} xl={6}>
                  <Link to="/details-item">
                    <Card className="card">
                      <div className="cardImg">
                        <img src="https://lh3.googleusercontent.com/3P1A6WYErdyp3hlUypmrdSCazuuUc7NP02LdYn3K5CrskRORVFE88RgvobsaAHLyvpB6tYjV8s8j2y8xA75G-H89JAsB2RwcjxBrXg=w313"></img>
                      </div>
                      <div className="cardContent">
                        <h4 className="nameToken">
                          Title11111111111111111111111111111111111111
                        </h4>
                        <div>
                          <h4>Price</h4>
                          <div>
                            <img
                              alt="ETH on Mumbai"
                              style={{ width: 14 }}
                              src="https://storage.opensea.io/files/265128aa51521c90f7905e5a43dcb456_new.svg"
                            ></img>
                            <span> 0.05 </span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </Col>
                <Col span={6} xs={24} md={6} xl={6}>
                  <Link to="/details-item">
                    <Card className="card">
                      <div className="cardImg">
                        <img src="https://lh3.googleusercontent.com/3P1A6WYErdyp3hlUypmrdSCazuuUc7NP02LdYn3K5CrskRORVFE88RgvobsaAHLyvpB6tYjV8s8j2y8xA75G-H89JAsB2RwcjxBrXg=w313"></img>
                      </div>
                      <div className="cardContent">
                        <h4 className="nameToken">
                          Title11111111111111111111111111111111111111
                        </h4>
                        <div>
                          <h4>Price</h4>
                          <div>
                            <img
                              alt="ETH on Mumbai"
                              style={{ width: 14 }}
                              src="https://storage.opensea.io/files/265128aa51521c90f7905e5a43dcb456_new.svg"
                            ></img>
                            <span> 0.05 </span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </Col>
              </Row>
            </div>
          </TabPane>
          <TabPane tab="Owned" key="2">
            <div className="site-card-wrapper">
              <Row equal-heights justify="center" gutter={[32, 24]}>
                <Col span={6} xs={24} md={6} xl={6}>
                  <Link to="/details-item">
                    <Card className="card">
                      <div className="cardImg">
                        <img src="https://wallpaperaccess.com/full/428690.jpg"></img>
                      </div>
                      <div className="cardContent">
                        <h4 className="nameToken">
                          Title11111111111111111111111111111111111111
                        </h4>
                        <div>
                          <h4>Price</h4>
                          <div>
                            <img
                              alt="ETH on Mumbai"
                              style={{ width: 14 }}
                              src="https://storage.opensea.io/files/265128aa51521c90f7905e5a43dcb456_new.svg"
                            ></img>
                            <span> 0.05 </span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </Col>
                <Col span={6} xs={24} md={6} xl={6}>
                  <Link to="/details-item">
                    <Card className="card">
                      <div className="cardImg">
                        <img src="https://wallpaperaccess.com/full/428690.jpg"></img>
                      </div>
                      <div className="cardContent">
                        <h4 className="nameToken">
                          Title11111111111111111111111111111111111111
                        </h4>
                        <div>
                          <h4>Price</h4>
                          <div>
                            <img
                              alt="ETH on Mumbai"
                              style={{ width: 14 }}
                              src="https://storage.opensea.io/files/265128aa51521c90f7905e5a43dcb456_new.svg"
                            ></img>
                            <span> 0.05 </span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </Col>
                <Col span={6} xs={24} md={6} xl={6}>
                  <Link to="/details-item">
                    <Card className="card">
                      <div className="cardImg">
                        <img src="https://lh3.googleusercontent.com/3P1A6WYErdyp3hlUypmrdSCazuuUc7NP02LdYn3K5CrskRORVFE88RgvobsaAHLyvpB6tYjV8s8j2y8xA75G-H89JAsB2RwcjxBrXg=w313"></img>
                      </div>
                      <div className="cardContent">
                        <h4 className="nameToken">
                          Title11111111111111111111111111111111111111
                        </h4>
                        <div>
                          <h4>Price</h4>
                          <div>
                            <img
                              alt="ETH on Mumbai"
                              style={{ width: 14 }}
                              src="https://storage.opensea.io/files/265128aa51521c90f7905e5a43dcb456_new.svg"
                            ></img>
                            <span> 0.05 </span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </Col>
                <Col span={6} xs={24} md={6} xl={6}>
                  <Link to="/details-item">
                    <Card className="card">
                      <div className="cardImg">
                        <img src="https://lh3.googleusercontent.com/3P1A6WYErdyp3hlUypmrdSCazuuUc7NP02LdYn3K5CrskRORVFE88RgvobsaAHLyvpB6tYjV8s8j2y8xA75G-H89JAsB2RwcjxBrXg=w313"></img>
                      </div>
                      <div className="cardContent">
                        <h4 className="nameToken">
                          Title11111111111111111111111111111111111111
                        </h4>
                        <div>
                          <h4>Price</h4>
                          <div>
                            <img
                              alt="ETH on Mumbai"
                              style={{ width: 14 }}
                              src="https://storage.opensea.io/files/265128aa51521c90f7905e5a43dcb456_new.svg"
                            ></img>
                            <span> 0.05 </span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </Col>
                <Col span={6} xs={24} md={6} xl={6}>
                  <Link to="/details-item">
                    <Card className="card">
                      <div className="cardImg">
                        <img src="https://lh3.googleusercontent.com/3P1A6WYErdyp3hlUypmrdSCazuuUc7NP02LdYn3K5CrskRORVFE88RgvobsaAHLyvpB6tYjV8s8j2y8xA75G-H89JAsB2RwcjxBrXg=w313"></img>
                      </div>
                      <div className="cardContent">
                        <h4 className="nameToken">
                          Title11111111111111111111111111111111111111
                        </h4>
                        <div>
                          <h4>Price</h4>
                          <div>
                            <img
                              alt="ETH on Mumbai"
                              style={{ width: 14 }}
                              src="https://storage.opensea.io/files/265128aa51521c90f7905e5a43dcb456_new.svg"
                            ></img>
                            <span> 0.05 </span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </Col>
              </Row>
            </div>
          </TabPane>
          <TabPane tab="Created" key="3">
            <div className="site-card-wrapper">
              <Row equal-heights justify="center" gutter={[32, 24]}>
                <Col span={6} xs={24} md={6} xl={6}>
                  <Link to="/details-item">
                    <Card className="card">
                      <div className="cardImg">
                        <img src="https://wallpaperaccess.com/full/428690.jpg"></img>
                      </div>
                      <div className="cardContent">
                        <h4 className="nameToken">
                          Title11111111111111111111111111111111111111
                        </h4>
                        <div>
                          <h4>Price</h4>
                          <div>
                            <img
                              alt="ETH on Mumbai"
                              style={{ width: 14 }}
                              src="https://storage.opensea.io/files/265128aa51521c90f7905e5a43dcb456_new.svg"
                            ></img>
                            <span> 0.05 </span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </Col>
                <Col span={6} xs={24} md={6} xl={6}>
                  <Link to="/details-item">
                    <Card className="card">
                      <div className="cardImg">
                        <img src="https://wallpaperaccess.com/full/428690.jpg"></img>
                      </div>
                      <div className="cardContent">
                        <h4 className="nameToken">
                          Title11111111111111111111111111111111111111
                        </h4>
                        <div>
                          <h4>Price</h4>
                          <div>
                            <img
                              alt="ETH on Mumbai"
                              style={{ width: 14 }}
                              src="https://storage.opensea.io/files/265128aa51521c90f7905e5a43dcb456_new.svg"
                            ></img>
                            <span> 0.05 </span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </Col>
                <Col span={6} xs={24} md={6} xl={6}>
                  <Link to="/details-item">
                    <Card className="card">
                      <div className="cardImg">
                        <img src="https://lh3.googleusercontent.com/3P1A6WYErdyp3hlUypmrdSCazuuUc7NP02LdYn3K5CrskRORVFE88RgvobsaAHLyvpB6tYjV8s8j2y8xA75G-H89JAsB2RwcjxBrXg=w313"></img>
                      </div>
                      <div className="cardContent">
                        <h4 className="nameToken">
                          Title11111111111111111111111111111111111111
                        </h4>
                        <div>
                          <h4>Price</h4>
                          <div>
                            <img
                              alt="ETH on Mumbai"
                              style={{ width: 14 }}
                              src="https://storage.opensea.io/files/265128aa51521c90f7905e5a43dcb456_new.svg"
                            ></img>
                            <span> 0.05 </span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </Col>
                <Col span={6} xs={24} md={6} xl={6}>
                  <Link to="/details-item">
                    <Card className="card">
                      <div className="cardImg">
                        <img src="https://lh3.googleusercontent.com/3P1A6WYErdyp3hlUypmrdSCazuuUc7NP02LdYn3K5CrskRORVFE88RgvobsaAHLyvpB6tYjV8s8j2y8xA75G-H89JAsB2RwcjxBrXg=w313"></img>
                      </div>
                      <div className="cardContent">
                        <h4 className="nameToken">
                          Title11111111111111111111111111111111111111
                        </h4>
                        <div>
                          <h4>Price</h4>
                          <div>
                            <img
                              alt="ETH on Mumbai"
                              style={{ width: 14 }}
                              src="https://storage.opensea.io/files/265128aa51521c90f7905e5a43dcb456_new.svg"
                            ></img>
                            <span> 0.05 </span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </Col>
                <Col span={6} xs={24} md={6} xl={6}>
                  <Link to="/details-item">
                    <Card className="card">
                      <div className="cardImg">
                        <img src="https://lh3.googleusercontent.com/3P1A6WYErdyp3hlUypmrdSCazuuUc7NP02LdYn3K5CrskRORVFE88RgvobsaAHLyvpB6tYjV8s8j2y8xA75G-H89JAsB2RwcjxBrXg=w313"></img>
                      </div>
                      <div className="cardContent">
                        <h4 className="nameToken">
                          Title11111111111111111111111111111111111111
                        </h4>
                        <div>
                          <h4>Price</h4>
                          <div>
                            <img
                              alt="ETH on Mumbai"
                              style={{ width: 14 }}
                              src="https://storage.opensea.io/files/265128aa51521c90f7905e5a43dcb456_new.svg"
                            ></img>
                            <span> 0.05 </span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </Col>
              </Row>
            </div>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};
export default Profile;
