import React, {Fragment} from 'react';
import classes from './Footer.module.css'
import InstagramOutlined from "@ant-design/icons/es/icons/InstagramOutlined";
import FacebookOutlined from "@ant-design/icons/es/icons/FacebookOutlined";
import {Col, Row} from "antd";
import {Link} from "react-router-dom";


const MyFooter = () =>  (
        <>
            <div className={classes.container}>
                <Row gutter={[8, 4]} justify="center">
                    <div className={classes.content}>
                        <Col xs={0} sm={10} md={10} lg={10} xl={10}>
                            <div className={classes.menu}>
                                <h3><Link to='/rooms'> &#9658; Pokoje\oferty </Link></h3>
                                <h3><Link to='/aboutUs'>&#9658; O nas</Link></h3>
                                <h3><Link to='/foto'> &#9658; Galeria</Link></h3>
                            </div>
                        </Col>
                        <Col xs={24} sm={10} md={16} lg={17} xl={17}>
                            <div className={classes.kontakt}>
                                <div className={classes.contackt}>KONTAKT</div>
                                <div>
                                    Ul. Małe Żywczańskie 16B,
                                    34-500, Zakopane
                                </div>
                                <div>&#9742; +48 517 319 316</div>
                                <div>&#9993; vizzroot@gmail.com</div>

                                <div className={classes.social}>Jesteśmy w społecznościach:</div>
                                <div className={classes.inst}>
                                    <a href='http://instagram.com/balandowka_apartament_zakopane' target="_blank">
                                        <InstagramOutlined/>
                                    </a>
                                </div>
                                <div className={classes.fb}>
                                    <a href='https://www.facebook.com/profile.php?id=100086957980829' target="_blank">
                                        <FacebookOutlined/>
                                    </a>
                                </div>

                            </div>
                        </Col>
                    </div>
                </Row>
            </div>
            <Row  align="middle" className={classes.tempRow11}>
                <Col span={24}>
                    <span className={classes.author}>  Copyright 2023 Balandówka </span>
                </Col>
            </Row>
        </>
    );
}


export default MyFooter;