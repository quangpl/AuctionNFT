import { Layout, Row, Col, Image, Avatar, Button, Badge, message } from "antd";
import "../css/details-item.css";
import { Link, useLocation, useParams } from "react-router-dom";
import { INFTDetail } from "../types";
import { useEffect, useState } from "react";
import { INft } from "../common/types";
import axios from "axios";
import { SERVER_URL } from "../constants";
import ethIcon from "../img/eth.png";
import { useAppContext } from "../context/app/context";
import { getColor } from "../components/NFT";

export const DetailsItem = () => {
  const [nft, setNft] = useState<INft>();
  const appContext = useAppContext();
  const [loading, setLoading] = useState(false);
  const params = useParams<{
    id: string;
  }>();
  useEffect(() => {
    (async () => {
      const item = await axios.get(`${SERVER_URL}/tokens/${params.id}`);
      setNft(item.data);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(appContext.state);
  async function putForSale(id: number, price: number) {
    try {
      setLoading(true);
      // const itemIdex = getItemIndexBuyTokenId(id);

      // const marketAddress = ArtMarketplace.networks[1337].address;
      // await artTokenContract.methods.approve(marketAddress, items[itemIdex].tokenId).send({from: accounts[0]});
      const receipt = await appContext.state.marketContract.methods
        .putItemForSale(id, price)
        .send({ gas: 210000, from: appContext.state.account });
      console.log(receipt);
      await axios.post(`${SERVER_URL}/tokens/update-status`, {
        _id: nft?._id,
        status: 1,
      });
      const item = await axios.get(`${SERVER_URL}/tokens/${params.id}`);
      setNft(item.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);

      console.error("Error, puting for sale: ", error);
      message.error("Error while puting for sale!");
    } finally {
      setLoading(false);
    }
  }

  async function buy(saleId: number, price: number) {
    try {
      setLoading(true);
      const receipt = await appContext.state.marketContract.methods
        .buyItem(saleId)
        .send({ gas: 210000, value: price, from: appContext.state.account });
      console.log(receipt);
      const id = receipt.events.itemSold.id; ///saleId
      await axios.post(`${SERVER_URL}/tokens/update-status`, {
        _id: nft?._id,
        status: 2,
      });
      const item = await axios.get(`${SERVER_URL}/tokens/${params.id}`);
      setNft(item.data);
    } catch (error) {
      console.error("Error, buying: ", error);
      message.error("Error while buying!");
    } finally {
      setLoading(false);
    }
  }

  if (!nft) {
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
              <Badge.Ribbon
                text={getColor(nft.status).name}
                color={getColor(nft.status).color}
              >
                <Image preview={{ visible: false }} src={nft.imageUrl} />
              </Badge.Ribbon>
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
                  <h1 style={{ fontSize: 36 }}>{nft.name}</h1>
                  <p style={{ color: "#a2a2a2" }}>{nft.description}</p>
                </Col>
                <Col span={4} xs={24} md={8} xl={8}>
                  <h6 style={{ fontSize: 14 }}>Seller</h6>
                  <Link to="/">
                    <Avatar
                      src="https://gigaland.io/images/author/author-1.jpg"
                      style={{ border: "1px solid #212428", marginRight: 5 }}
                    />
                    {nft.seller}
                  </Link>
                </Col>
                {/* <Col span={4} xs={24} md={8} xl={8}>
                  <h6 style={{ fontSize: 14 }}>Owner</h6>
                  <Link to="/">
                    <Avatar
                      src="https://gigaland.io/images/collections/coll-thumbnail-1.jpg"
                      style={{ border: "1px solid #212428", marginRight: 5 }}
                    />
                    {nft}
                  </Link>
                </Col> */}
                <Col span={12} xs={24} md={24} xl={24}>
                  <h6 style={{ fontSize: 14 }}>Price</h6>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      style={{ width: 24, height: 24 }}
                      src={ethIcon}
                      alt=""
                    />
                    <span
                      style={{
                        fontSize: 28,
                        marginLeft: 10,
                        fontWeight: "bold",
                      }}
                    >
                      {nft.price}
                    </span>
                  </div>
                </Col>
                <Col>
                  <Button
                    type="primary"
                    danger
                    onClick={() => {
                      buy(1, nft.price);
                    }}
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
                  <Button
                    type="primary"
                    danger
                    onClick={() => {
                      putForSale(nft.tokenId, nft.price);
                    }}
                    loading={loading}
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
                    Sell
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
