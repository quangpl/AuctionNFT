import { Row, Col, Divider } from "antd";
import "../css/home.css";
import { NFTItem } from "../components/NFT";
import { useEffect, useState } from "react";
import { INft } from "../common/types";
import axios from "axios";
import { SERVER_URL } from "../constants";
import { runInThisContext } from "vm";

export const Home = () => {
  const [items, setItems] = useState<INft[]>();

  async function getNfts() {
    const nfts = await axios.get(`${SERVER_URL}/tokens`);
    setItems(nfts.data);
  
    
  }
  useEffect(() => {
    getNfts();
  }, []);
  return (
    <div className="home">
      <Divider
        orientation="center"
        style={{
          paddingBottom: 20,
        }}
      >
        <h1 style={{ color: "white" }}>ALL NTFs </h1>
      </Divider>

      <div className="site-card-wrapper">
        <Row equal-heights justify="center" gutter={[32, 24]}>
          {items?.map((item, index) => {
            return (
              <Col span={6} xs={24} md={6} xl={6}>
                <NFTItem
                  status={item.status}
                  id={item._id as string}
                  title={item.name}
                  price={item.price}
                  imageUrl={item.imageUrl || ""}
                />
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};
