import React, { Component } from "react";
import { Card, Col, Row } from 'antd';
class home extends Component {
    render() {
        return (
            <div >
                <h1>Home</h1>
                <div className="site-card-wrapper">
                    <Row gutter={16}>
                        <Col span={8}>
                            <Card title="Sản phẩm 1" bordered={true}>
                                Giá: 100d
                            </Card>
                        </Col>
                        <Col span={8}>
                        <Card title="Sản phẩm 2" bordered={true}>
                                Giá: 200d
                            </Card>
                        </Col>
                        <Col span={8}>
                        <Card title="Sản phẩm 3" bordered={true}>
                                Giá: 300d
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default home;
