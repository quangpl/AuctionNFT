import React, { useState } from "react";
import { Layout, Menu, Row, Col, Divider, Input, Image } from "antd";
import { Link } from "react-router-dom";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import "../css/HeaderPage.css";
const { Header, Content, Footer, Sider } = Layout;
const { Search } = Input;
const onSearch = () => console.log();
function HeaderPage() {
  
  return (
    <Header className="header">
      <Row align="middle">
        <Col span={4}>
          <Link to="/">
            <Image
              width={100}
              height={50}
              src="error"
              fallback="http://cnpm.uit.edu.vn/templates/mimety/images/logo.png"
            />
            
          </Link>
        </Col>
        <Col span={6}>
          <Input placeholder="Search item here..." allowClear/>
        </Col>
        <Col span={14}>
          <Divider orientation="right">
            <Menu mode="horizontal" className="menu">
              <Menu.Item className="menu-item">
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item className="menu-item">
                <Link to="/services">Services</Link>
              </Menu.Item>
              <Menu.Item className="menu-item">
                <Link to="/products">Products</Link>
              </Menu.Item>
              <Menu.Item className="menu-item">
                <Link to="/contact-us">Contact Us</Link>
              </Menu.Item>
              <Menu.Item className="menu-item">
                <Link to="/sign-up">Sign Up</Link>
              </Menu.Item>
            </Menu>
          </Divider>
        </Col>
      </Row>
    </Header>
  );
}

export default HeaderPage;
