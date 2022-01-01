import React, { Component } from "react";
import { Card, Col, Row, Image, Button } from "antd";
import "../../css/home.css";
import { Link } from "react-router-dom";
const { Meta } = Card;
class home extends Component {
  render() {
    return (
      <div className="home">
        <h1 style={{color:'white'}}>ALL NTFs </h1>
        <div className="site-card-wrapper">
          <Row justify="center" gutter={[32, 24]}>
            <Col span={6} xs={24} md={6} xl={6}>
              <Link to="/details-item">
                <Card hoverable className="card">
                  <div className="card-img" style={{ height: 400 }}>
                    <Image
                      width="100%"
                      src="https://d2r55xnwy6nx47.cloudfront.net/uploads/2018/07/SolarFull_SeanDoran_2880FullwidthLede.jpg"
                    />
                  </div>
                  <div>
                    <h4>Title NTF</h4>
                    <h4>0.5 ETH</h4>
                    <br />
                  </div>
                </Card>
              </Link>
            </Col>
            <Col span={6} xs={24} md={6} xl={6}>
              <Link to="/details-item">
                <Card hoverable className="card">
                  <div className="card-img" style={{ height: 400 }}>
                    <Image
                      width="100%"
                      src="https://d2r55xnwy6nx47.cloudfront.net/uploads/2018/07/SolarFull_SeanDoran_2880FullwidthLede.jpg"
                    />
                  </div>
                  <div>
                    <h4>Title NTF</h4>
                    <h4>0.5 ETH</h4>
                    <br />
                  </div>
                </Card>
              </Link>
            </Col>
            <Col span={6} xs={24} md={6} xl={6}>
              <Link to="/details-item">
                <Card hoverable className="card">
                  <div className="card-img" style={{ height: 400 }}>
                    <Image
                      width="100%"
                      src="https://d2r55xnwy6nx47.cloudfront.net/uploads/2018/07/SolarFull_SeanDoran_2880FullwidthLede.jpg"
                    />
                  </div>
                  <div>
                    <h4>Title NTF</h4>
                    <h4>0.5 ETH</h4>
                    <br />
                  </div>
                </Card>
              </Link>
            </Col>
            <Col span={6} xs={24} md={6} xl={6}>
              <Link to="/details-item">
                <Card hoverable className="card">
                  <div className="card-img" style={{ height: 400 }}>
                    <Image
                      width="100%"
                      src="https://d2r55xnwy6nx47.cloudfront.net/uploads/2018/07/SolarFull_SeanDoran_2880FullwidthLede.jpg"
                    />
                  </div>
                  <div>
                    <h4>Title NTF</h4>
                    <h4>0.5 ETH</h4>
                    <br />
                  </div>
                </Card>
              </Link>
            </Col>
            <Col span={6} xs={24} md={6} xl={6}>
              <Link to="/details-item">
                <Card hoverable className="card">
                  <div className="card-img" style={{ height: 400 }}>
                    <Image
                      width="100%"
                      src="https://d2r55xnwy6nx47.cloudfront.net/uploads/2018/07/SolarFull_SeanDoran_2880FullwidthLede.jpg"
                    />
                  </div>
                  <div>
                    <h4>Title NTF</h4>
                    <h4>0.5 ETH</h4>
                    <br />
                  </div>
                </Card>
              </Link>
            </Col>
            <Col span={6} xs={24} md={6} xl={6}>
              <Link to="/details-item">
                <Card hoverable className="card">
                  <div className="card-img" style={{ height: 400 }}>
                    <Image
                      width="100%"
                      src="https://d2r55xnwy6nx47.cloudfront.net/uploads/2018/07/SolarFull_SeanDoran_2880FullwidthLede.jpg"
                    />
                  </div>
                  <div>
                    <h4>Title NTF</h4>
                    <h4>0.5 ETH</h4>
                    <br />
                  </div>
                </Card>
              </Link>
            </Col>
            <Col span={6} xs={24} md={6} xl={6}>
              <Link to="/details-item">
                <Card hoverable className="card">
                  <div className="card-img" style={{ height: 400 }}>
                    <Image
                      width="100%"
                      src="https://d2r55xnwy6nx47.cloudfront.net/uploads/2018/07/SolarFull_SeanDoran_2880FullwidthLede.jpg"
                    />
                  </div>
                  <div>
                    <h4>Title NTF</h4>
                    <h4>0.5 ETH</h4>
                    <br />
                  </div>
                </Card>
              </Link>
            </Col>
            <Col span={6} xs={24} md={6} xl={6}>
              <Link to="/details-item">
                <Card hoverable className="card">
                  <div className="card-img" style={{ height: 400 }}>
                    <Image
                      width="100%"
                      src="https://d2r55xnwy6nx47.cloudfront.net/uploads/2018/07/SolarFull_SeanDoran_2880FullwidthLede.jpg"
                    />
                  </div>
                  <div>
                    <h4>Title NTF</h4>
                    <h4>0.5 ETH</h4>
                    <br />
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
