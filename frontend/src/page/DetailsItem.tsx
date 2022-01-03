import { Layout, Row, Col, Image, Avatar, Button } from "antd";
import "../css/details-item.css";
import { Link, useLocation } from "react-router-dom";
import { INFTDetail } from "../types";

export const DetailsItem = () => {
  const location = useLocation();
  const data: INFTDetail = location.state;

  if (!data) {
    return (
      <div className="detail">
        <div className="detail-item">
          <Row justify="center" gutter={[16, 24]}>
            <h2>The NFT has been deleted or not existed</h2>
          </Row>
        </div>
      </div>
    );
  }
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
              <Image preview={{ visible: false }} src={data.imageUrl} />
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
                  <h1 style={{ fontSize: 36 }}>{data.title}</h1>
                  <p style={{color:'#a2a2a2'}}>{data.description}</p>
                </Col>
                <Col span={4} xs={24} md={8} xl={8}>
                  <h6 style={{ fontSize: 14 }}>Seller</h6>
                  <Link to="/">
                    <Avatar src="https://joeschmoe.io/api/v1/random" style={{border:'1px solid #212428',paddingRight:5}}/>
                    {data.seller}
                  </Link>
                </Col>
                <Col span={4} xs={24} md={8} xl={8}>
                  <h6 style={{ fontSize: 14 }}>Owner</h6>
                  <Link to="/">
                    <Avatar src="https://joeschmoe.io/api/v1/random" style={{border:'1px solid #212428',paddingRight:5}}/>
                    {data.owner}
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
                      {data.price}
                    </span>
                  </div>
                </Col>
                <Col>
                  <Button
                    type="primary"
                    danger
                    size="large"
                    style={{
                      borderRadius: 30,
                      paddingLeft: 20,
                      paddingRight: 20,
                      paddingBottom: 40,
                      fontSize: 16,
                      fontWeight: 700,
                    }}
                  >
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
};
