import React from 'react';
import {Row, Col} from "antd";
import 'antd/dist/antd.css'

const GridCoponent = () => {
    return (
        <>
            <Row gutter={[24, 16]}>
                <Col span={12}>
                    1
                </Col>
                <Col span={12}>
                    2
                </Col>
            </Row>
            <Row>
                <Col span={12}>col-12</Col>
                <Col span={12}>col-12</Col>
            </Row>
        </>
    );
};

export default GridCoponent;
