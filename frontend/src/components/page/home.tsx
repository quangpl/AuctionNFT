/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { Card, Col, Row, Image, Button } from "antd";
import "../../css/home.css";
import { Link } from "react-router-dom";
const { Meta } = Card;
class home extends Component {
  render() {
    return (
      <div className="home">
        <h1 style={{ color: "white" }}>ALL NTFs </h1>
        <div className="site-card-wrapper">
          <Row equal-heights justify="center" gutter={[32, 24]}>
            <Col span={6} xs={24} md={6} xl={6}>
              <Link to="/details-item">
                <Card className="card">
                  <div className="cardImg">
                    <img src="https://wallpaperaccess.com/full/428690.jpg"></img>
                  </div>
                  <div className="cardContent">
                    <h4  className="nameToken">Title11111111111111111111111111111111111111</h4>
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
                    <h4  className="nameToken">Title11111111111111111111111111111111111111</h4>
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
                    <h4  className="nameToken">Title11111111111111111111111111111111111111</h4>
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
                    <h4  className="nameToken">Title11111111111111111111111111111111111111</h4>
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
                    <h4  className="nameToken">Title11111111111111111111111111111111111111</h4>
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
      </div>
    );
  }
}

export default home;
