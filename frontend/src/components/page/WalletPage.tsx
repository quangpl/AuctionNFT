import React, { Component } from "react";
import { Card, Col, Divider, Row } from "antd";
import "../../css/wallet.css";
import { Link } from "react-router-dom";
const { Meta } = Card;
class WalletPage extends Component {
  render() {
    return (
      <div className="wallet">
        <Divider
          orientation="center"
          style={{
            backgroundColor: "rgba(255, 255, 255, .01)",
            padding: 70,
            fontSize: 30,
            borderBottom: "solid 1px  rgba(255, 255, 255, .1)",
          }}
        >
          <h1>Wallet</h1>
        </Divider>
        <Row
          justify="center"
          gutter={[32, 24]}
          style={{ margin: "auto", width: "80%" }}
        >
          <Col span={6} xs={24}>
            <Link to="/" className="card-item">
              <Card
                hoverable
                style={{
                  width: "auto",
                  borderRadius: 20,
                  backgroundColor: "rgba(255, 255, 255, .03)",
                  borderColor: "rgba(255, 255, 255, .1)",
                }}
                cover={
                  <img
                    alt="example"
                    style={{ width: 100, paddingLeft: 30 }}
                    src="https://gigaland.io/images/wallet/1.png"
                  />
                }
              >
                <Meta
                  style={{ color: "while" }}
                  title="Metamask"
                  description="Start exploring blockchain applications in seconds.  Trusted by over 1 million users worldwide."
                />
              </Card>
            </Link>
          </Col>
          <Col span={6} xs={24}>
            <Link to="/" className="card-item">
              <Card
                hoverable
                style={{
                  width: "auto",
                  borderRadius: 20,
                  backgroundColor: "rgba(255, 255, 255, .03)",
                  borderColor: "rgba(255, 255, 255, .1)",
                }}
                cover={
                  <img
                    alt="example"
                    style={{ width: 100, paddingLeft: 30 }}
                    src="https://gigaland.io/images/wallet/2.png"
                  />
                }
              >
                <Meta
                  style={{ color: "while" }}
                  title="Bitski"
                  description="Bitski connects communities, creators and brands through unique, ownable digital content."
                />
              </Card>
            </Link>
          </Col>
          <Col span={6} xs={24}>
            <Link to="/" className="card-item">
              <Card
                hoverable
                style={{
                  width: "auto",
                  borderRadius: 20,
                  backgroundColor: "rgba(255, 255, 255, .03)",
                  borderColor: "rgba(255, 255, 255, .1)",
                }}
                cover={
                  <img
                    alt="example"
                    style={{ width: 100, paddingLeft: 30 }}
                    src="https://gigaland.io/images/wallet/3.png"
                  />
                }
              >
                <Meta
                  style={{ color: "while" }}
                  title="Fortmatic"
                  description="Let users access your Ethereum app from anywhere. No more browser extensions."
                />
              </Card>
            </Link>
          </Col>
          <Col span={6} xs={24}>
            <Link to="/" className="card-item">
              <Card
                hoverable
                style={{
                  width: "auto",
                  borderRadius: 20,
                  backgroundColor: "rgba(255, 255, 255, .03)",
                  borderColor: "rgba(255, 255, 255, .1)",
                }}
                cover={
                  <img
                    alt="example"
                    style={{ width: 100, paddingLeft: 30 }}
                    src="https://gigaland.io/images/wallet/4.png"
                  />
                }
              >
                <Meta
                  style={{ color: "while" }}
                  title="WalletConnect"
                  description="Open source protocol for connecting decentralised applications to mobile wallets."
                />
              </Card>
            </Link>
          </Col>
          <Col span={6} xs={24}>
            <Link to="/" className="card-item">
              <Card
                hoverable
                style={{
                  width: "auto",
                  borderRadius: 20,
                  backgroundColor: "rgba(255, 255, 255, .03)",
                  borderColor: "rgba(255, 255, 255, .1)",
                }}
                cover={
                  <img
                    alt="example"
                    style={{ width: 100, paddingLeft: 30 }}
                    src="https://gigaland.io/images/wallet/5.png"
                  />
                }
              >
                <Meta
                  style={{ color: "while" }}
                  title="Coinbase Wallet"
                  description="The easiest and most secure crypto wallet. ... No Coinbase account required."
                />
              </Card>
            </Link>
          </Col>
          <Col span={6} xs={24}>
            <Link to="/" className="card-item">
              <Card
                hoverable
                style={{
                  width: "auto",
                  borderRadius: 20,
                  backgroundColor: "rgba(255, 255, 255, .03)",
                  borderColor: "rgba(255, 255, 255, .1)",
                }}
                cover={
                  <img
                    alt="example"
                    style={{ width: 100, paddingLeft: 30 }}
                    src="https://gigaland.io/images/wallet/6.png"
                  />
                }
              >
                <Meta
                  style={{ color: "while" }}
                  title="Arkane"
                  description="Make it easy to create blockchain applications with secure wallets solutions."
                />
              </Card>
            </Link>
          </Col>
          <Col span={6} xs={24}>
            <Link to="/" className="card-item">
              <Card
                hoverable
                style={{
                  width: "auto",
                  borderRadius: 20,
                  backgroundColor: "rgba(255, 255, 255, .03)",
                  borderColor: "rgba(255, 255, 255, .1)",
                }}
                cover={
                  <img
                    alt="example"
                    style={{ width: 100, paddingLeft: 30 }}
                    src="https://gigaland.io/images/wallet/7.png"
                  />
                }
              >
                <Meta
                  style={{ color: "while" }}
                  title="Authereum"
                  description="Your wallet where you want it. Log into your favorite dapps with Authereum."
                />
              </Card>
            </Link>
          </Col>
          <Col span={6} xs={24}>
            <Link to="/" className="card-item">
              <Card
                hoverable
                style={{
                  width: "auto",
                  borderRadius: 20,
                  backgroundColor: "rgba(255, 255, 255, .03)",
                  borderColor: "rgba(255, 255, 255, .1)",
                }}
                cover={
                  <img
                    alt="example"
                    style={{ width: 100, paddingLeft: 30 }}
                    src="https://gigaland.io/images/wallet/8.png"
                  />
                }
              >
                <Meta
                  style={{ color: "while" }}
                  title="Torus"
                  description="Open source protocol for connecting decentralised applications to mobile wallets."
                />
              </Card>
            </Link>
          </Col>
        </Row>
      </div>
    );
  }
}

export default WalletPage;
