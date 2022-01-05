import { Component, useState } from "react";
import { Divider, Upload, Input, Button, message } from "antd";
import "../css/create-item.css";
import { InboxOutlined } from "@ant-design/icons";
import { useAppContext } from "../context/app/context";
import axios from "axios";
import { SERVER_URL } from "../constants";
import { useNavigate } from "react-router-dom";
const { TextArea } = Input;
const { Dragger } = Upload;

export const CreateItemPage = () => {
  const navigate = useNavigate();
  const appContext = useAppContext();
  
  const [item, setItem] = useState<{
    name: string;
    price: number;
    description: string;
    seller: string;
  }>({
    name: "",
    price: 0,
    description: "",
    seller: appContext?.state.account,
  });
  const [file, setFile] = useState<any>();
  const [loading, setLoading] = useState(false);

  async function createNFT() {
    setLoading(true);
    console.log(item);
    const artTokenContract = appContext.state.nftContract;
    const data = new FormData();
    data.append("name", item?.name as string);
    data.append("price", `${item?.price}` as string);
    data.append("description", item?.description as string);
    data.append("seller", appContext.state.account);
    console.log(appContext.state.account)
    if (file) {
      data.append("img", file as any);
      console.log("slectedFile: ", file);
    }
    console.log(artTokenContract);
    try {
      const totalSupply = await artTokenContract.methods.totalSupply().call();
      console.log(totalSupply);
      const numSummply: number = parseInt(totalSupply, 10);
      data.append("tokenId", (numSummply + 1) as any);
      const response = await axios.post(`${SERVER_URL}/tokens`, data, {
        headers: {
          "Content-Type": `multipart/form-data;`,
        },
      });
      console.log(response.data);
      mint(response.data.url);
    } catch (error) {
      console.log(error);
      // error.response.data
    }
  }

  async function mint(tokenMetadataURL: string) {
    try {
      console.log(tokenMetadataURL);
      const artTokenContract = appContext.state.nftContract;
      const receipt = await artTokenContract.methods
        .mint(tokenMetadataURL)
        .send({ from: appContext.state.account, gas: 6721975 });
      console.log(receipt);
      console.log(receipt.events.Transfer.returnValues.tokenId);
      // setItems((items) => [
      //   ...items,
      //   {
      //     tokenId: receipt.events.Transfer.returnValues.tokenId,
      //     creator: accounts[0],
      //     owner: accounts[0],
      //     uri: tokenMetadataURL,
      //     isForSale: false,
      //     saleId: null,
      //     price: 0,
      //     isSold: null,
      //   },
      // ]);
      console.log("Mint success");
      navigate("/")
      // history.push('/');
    } catch (error) {
      console.error("Error, minting: ", error);
      message.error("Error while minting!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="create">
      <Divider
        orientation="center"
        style={{
          backgroundColor: "rgba(255, 255, 255, .01)",
          padding: 70,
          fontSize: 30,
          borderBottom: "solid 1px  rgba(255, 255, 255, .1)",
        }}
      >
        <h1>Create Item</h1>
      </Divider>
      <div className="create-item">
        <label>Upload file</label>
        <Upload
          name="img"
          className="avatar-uploader"
          multiple={false}
          onChange={(e) => {
            const img = {
              // preview: URL.createObjectURL(e.file as any),
              data: e.file,
            };
            console.log(e.file.originFileObj);
            setFile(e.file.originFileObj);
            console.log(e);
          }}
        >
          <Button
            style={{
              marginLeft: 20,
            }}
            type="primary"
          >
            Upload
          </Button>
        </Upload>
        <label>Title</label>
        <Input
          onChange={(e) => {
            setItem((prevState) => ({
              ...prevState,
              name: e.target.value,
            }));
          }}
          placeholder="Title"
          style={{
            color: "white",
            background: "none",
            border: "solid 1px rgba(255, 255, 255, .2)",
            marginTop: 10,
            marginBottom: 10,
            borderRadius: 10,
          }}
        />
        <label>Description</label>
        <TextArea
          onChange={(e) => {
            setItem((prevState) => ({
              ...prevState,
              description: e.target.value,
            }));
          }}
          placeholder="Description..."
          rows={4}
          style={{
            color: "white",
            background: "none",
            border: "solid 1px rgba(255, 255, 255, .2)",
            marginTop: 10,
            marginBottom: 10,
            borderRadius: 10,
          }}
        />
        <label>Price</label>
        <Input
          placeholder="Price"
          onChange={(e) => {
            setItem((prevState) => ({
              ...prevState,
              price: parseInt(e.target.value, 10),
            }));
          }}
          type="number"
          style={{
            color: "white",
            background: "none",
            border: "solid 1px rgba(255, 255, 255, .2)",
            marginTop: 10,
            marginBottom: 10,
            borderRadius: 10,
          }}
        />
        <Button
          type="primary"
          loading={loading}
          onClick={() => {
            createNFT();
          }}
          danger
          shape="round"
        >
          Create Item
        </Button>
      </div>
    </div>
  );
};
