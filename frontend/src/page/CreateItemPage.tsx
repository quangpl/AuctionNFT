import React, { useState } from "react";
import { Card, Col, Divider, Row, Upload, Input, Button } from "antd";
import "../css/create-item.css";
import { Link } from "react-router-dom";
import {
  InboxOutlined,
  LoadingOutlined,
  PlusOutlined,
} from "@ant-design/icons";
const { TextArea } = Input;
const { Dragger } = Upload;

export const CreateItemPage = () => {
  const [fileUrl, setFileUrl] = useState(null)
  async function onChange(e:any) {
    const file = e.target.files[0]
    
  }
    return (
      <div className="create">
        <Divider
          orientation="center"
          style={{
            backgroundColor: "rgba(255, 255, 255, .01)",
            padding: 70,
            fontSize: 20,
            borderBottom: "solid 1px  rgba(255, 255, 255, .1)",
          }}
        >
          <h1>Create Item</h1>
        </Divider>
        <div className="create-item">
          <label>Upload file</label>
          <Dragger style={{ marginTop: 10, marginBottom: 10 }}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text" style={{ color: "white" }}>
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint" style={{ color: "white" }}>
              Support for a single or bulk upload. Strictly prohibit from
              uploading company data or other band files
            </p>
          </Dragger>
          <br />
          <input type="file"/>
          <br />
          <label>Title</label>
          <Input
            placeholder="Title"
            style={{
              color: "white",
              background: "none",
              border: "solid 1px rgba(255, 255, 255, .2)",
              marginTop: 10,
              marginBottom: 10,borderRadius:10
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
              marginBottom: 10,borderRadius:10
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
              marginBottom: 10,borderRadius:10
            }}
          />
          <Button type="primary" danger shape="round">
            Create Item
          </Button>
        </div>
      </div>
    );
  }


export default CreateItemPage;
