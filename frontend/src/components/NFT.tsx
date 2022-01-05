import { Col, Card } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { INFTDetail } from "../types";
import "../css/card.css";
type Props = {
  imageUrl: string;
  title: string;
  price: number;
  id: string;
};
export const NFTItem: React.FC<Props> = (props: Props) => {
  const navigate = useNavigate();
  return (
    <Card
      className="card"
      hoverable
      cover={<img alt="example" src={props.imageUrl} />}
      onClick={() => {
        navigate(`/details-item/${props.id}`);
      }}
    >
      <div className="cardContent">
        <h4 className="nameToken">{props.title}</h4>
        <div className="priceToke">
          <h4>Price</h4>
          <div>
            <img
              alt="ETH on Mumbai"
              style={{ width: 14 }}
              src="https://storage.opensea.io/files/265128aa51521c90f7905e5a43dcb456_new.svg"
            ></img>
            <span> {props.price} </span>
          </div>
        </div>
      </div>
    </Card>
  );
};
