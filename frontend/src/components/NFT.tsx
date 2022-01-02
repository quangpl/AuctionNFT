import { Col, Card } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { INFTDetail } from "../types";

type Props = {
  imageUrl: string;
  title: string;
  price: number;
};
export const NFTItem: React.FC<Props> = (props: Props) => {
  const navigate = useNavigate();
  return (
    <Card
      className="card"
      onClick={() => {
        const fakeItem: INFTDetail = {
          title: "Mountain view best seller",
          description: `Description: Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Adipisci asperiores ipsum laborum nihil in
          ratione laboriosam ullam rerum molestias eligendi? Esse
          corporis dicta alias consequatur blanditiis quia, aliquid
          accusamus facere!`,
          seller: "wallet cua Minh",
          owner: "wallet cua Hoang",
          price: 0.5,
          imageUrl:
            "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3N1bi11cGRhdGUtMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5MH19fQ==",
        };
        navigate("/details-item", {
          state: fakeItem,
        });
      }}
    >
      <div className="cardImg">
        <img alt="" src={props.imageUrl}></img>
      </div>
      <div className="cardContent">
        <h4 className="nameToken">{props.title}</h4>
        <div>
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
