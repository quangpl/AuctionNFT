import { Row, Col,Divider } from "antd";
import "../css/home.css";
import { NFTItem } from "../components/NFT";

export const Home = () => {
  return (
    <div className="home">
      <Divider
          orientation="center"
          style={{
            paddingBottom:20
          }}
        >
          <h1 style={{ color: "white" }}>ALL NTFs </h1>
        </Divider>
      
      <div className="site-card-wrapper">
        <Row equal-heights justify="center" gutter={[32, 24]}>
          <Col span={6} xs={24} md={6} xl={6}>
            <NFTItem
              title="Moutain view"
              price={0.03}
              imageUrl="https://gigaland.io/images/items-alt/static-2.jpg"
            />
          </Col>
          <Col span={6} xs={24} md={6} xl={6}>
            <NFTItem
              title="Moutain view"
              price={0.03}
              imageUrl="https://lh3.googleusercontent.com/3P1A6WYErdyp3hlUypmrdSCazuuUc7NP02LdYn3K5CrskRORVFE88RgvobsaAHLyvpB6tYjV8s8j2y8xA75G-H89JAsB2RwcjxBrXg=w313"
            />
          </Col>
          <Col span={6} xs={24} md={6} xl={6}>
            <NFTItem
              title="Moutain view"
              price={0.03}
              imageUrl="https://lh3.googleusercontent.com/3P1A6WYErdyp3hlUypmrdSCazuuUc7NP02LdYn3K5CrskRORVFE88RgvobsaAHLyvpB6tYjV8s8j2y8xA75G-H89JAsB2RwcjxBrXg=w313"
            />
          </Col>
          <Col span={6} xs={24} md={6} xl={6}>
            <NFTItem
              title="Moutain view"
              price={0.03}
              imageUrl="https://lh3.googleusercontent.com/3P1A6WYErdyp3hlUypmrdSCazuuUc7NP02LdYn3K5CrskRORVFE88RgvobsaAHLyvpB6tYjV8s8j2y8xA75G-H89JAsB2RwcjxBrXg=w313"
            />
          </Col>
          <Col span={6} xs={24} md={6} xl={6}>
            <NFTItem
              title="Moutain view"
              price={0.03}
              imageUrl="https://lh3.googleusercontent.com/3P1A6WYErdyp3hlUypmrdSCazuuUc7NP02LdYn3K5CrskRORVFE88RgvobsaAHLyvpB6tYjV8s8j2y8xA75G-H89JAsB2RwcjxBrXg=w313"
            />
          </Col>
          <Col span={6} xs={24} md={6} xl={6}>
            <NFTItem
              title="Moutain view"
              price={0.03}
              imageUrl="https://lh3.googleusercontent.com/3P1A6WYErdyp3hlUypmrdSCazuuUc7NP02LdYn3K5CrskRORVFE88RgvobsaAHLyvpB6tYjV8s8j2y8xA75G-H89JAsB2RwcjxBrXg=w313"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};
