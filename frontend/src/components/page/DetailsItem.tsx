import React, { Component } from "react";
import { Card, Layout, Row, Col, Image, Avatar,Button } from "antd";
import "../../css/details-item.css";
import { Link } from "react-router-dom";
const { Meta } = Card;
class DetailsItem extends Component {
  render() {
    return (
      <div className="detail">
        <div className="detail-item">
          <Row justify="center" gutter={[16, 24]}>
            <Col
              span={12}
              xs={24}
              md={12}
              xl={12}
              style={{ paddingLeft: 10, paddingRight: 10 }}
            >
              <Layout>
                <Image
                  preview={{ visible: false }}
                  src="https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3N1bi11cGRhdGUtMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5MH19fQ=="
                />
              </Layout>
            </Col>
            <Col
              span={12}
              xs={24}
              md={12}
              xl={12}
              style={{ paddingLeft: 10, paddingRight: 10, color: "white" }}
            >
              <Layout style={{ background: "#212428" }}>
                <Row gutter={[48, 24]}>
                  <Col span={12} xs={24}>
                    <h1 style={{ fontSize: 36 }}>Card item title</h1>
                    <p>
                      Description: Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Adipisci asperiores ipsum laborum nihil
                      in ratione laboriosam ullam rerum molestias eligendi? Esse
                      corporis dicta alias consequatur blanditiis quia, aliquid
                      accusamus facere!
                    </p>
                  </Col>
                  <Col span={4} xs={24} md={8} xl={8}>
                    <h6 style={{ fontSize: 14 }}>Creator</h6>
                    <Link to="/">
                      <Avatar src="https://joeschmoe.io/api/v1/random" />
                      Hà Minh Hoàng
                    </Link>
                  </Col>
                  <Col span={4} xs={24} md={8} xl={8}>
                    <h6 style={{ fontSize: 14 }}>Owner</h6>
                    <Link to="/">
                      <Avatar src="https://joeschmoe.io/api/v1/random" />
                      Hà Minh Hoàng
                    </Link>
                  </Col>
                  <Col span={12} xs={24} md={24} xl={24}>
                    <h6 style={{ fontSize: 14 }}>Price</h6>
                    <div>
                      <img
                        style={{ width: 24, height: 24, marginTop: -12 }}
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/480px-Ethereum-icon-purple.svg.png"
                        alt=""
                      />
                      <span
                        style={{
                          fontSize: 28,
                          fontWeight: "bold",
                          paddingRight: 10,
                        }}
                      >
                        0.5
                      </span>
                    </div>
                  </Col>
                  <Col>
                    <Button type="primary" danger size="large" style={{borderRadius:30, paddingLeft:20,paddingRight:20,paddingBottom:40, fontSize:16, fontWeight:700}}>
                      Buy now
                    </Button>
                  </Col>
                </Row>
              </Layout>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default DetailsItem;
