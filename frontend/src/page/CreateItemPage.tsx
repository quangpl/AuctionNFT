import { Component, useState } from "react";
import { Divider, Upload, Input, Button } from "antd";
import "../css/create-item.css";
import { InboxOutlined } from "@ant-design/icons";
import { useAppContext } from "../context/app/context";
import axios from "axios";
import { SERVER_URL } from "../constants";
const { TextArea } = Input;
const { Dragger } = Upload;

export const CreateItemPage = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<any>();
  const appContext = useAppContext();
  console.log(appContext.state);
  async function createNFT() {
    const { title, description } = {
      title: "test",
      description: "description test luon",
    };

    console.log("title: " + title);
    const artTokenContract = appContext.state.nftContract;

    const data = new FormData();
    data.append("name", title);
    data.append("description", description);

    if (file) {
      data.append("img", file as any);
      console.log("slectedFile: ", file);
    }
    console.log(artTokenContract);
    try {
      const totalSupply = (await artTokenContract.methods
        .totalSupply()
        .call()) as any;
      data.append("tokenId", totalSupply + 1);

      const response = await axios.post(`${SERVER_URL}/tokens`, data, {
        headers: {
          "Content-Type": `multipart/form-data;`,
        },
      });
      console.log(response);
      mint(response.data.message);
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
        .send({ from: appContext.state.account , gas: 6721975});
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
      // history.push('/');
    } catch (error) {
      console.error("Error, minting: ", error);
      alert("Error while minting!");
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
          Click
        </Upload>
        <label>Title</label>
        <Input
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
