import React, {Fragment} from 'react';
import classes from './Footer.module.css'
import InstagramOutlined from "@ant-design/icons/es/icons/InstagramOutlined";
import FacebookOutlined from "@ant-design/icons/es/icons/FacebookOutlined";
import {Col, Row} from "antd";
import {Link} from "react-router-dom";


const MyFooter = () => (
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
                            <div> <a href='https://www.google.com/maps/dir//ba%C5%82and%C3%B3wka,+ma%C5%82e+%C5%BCywcza%C5%84skie,+zako+google+map/@50.4111809,19.8792662,8z/data=!4m8!4m7!1m0!1m5!1m1!1s0x4715f3d59912e569:0xcc112e52c77c1515!2m2!1d19.951276!2d49.2864239?entry=ttu' target="_blank">
                                Ul. Małe Żywczańskie 16B,
                                34-500, Zakopane
                            </a>
                            </div>
                            <div>&#9742; <a href="tel:517 319 316">+48 517 319 316</a></div>
                            <div>&#9993; <a href="mailto:vizzroot@gmail.com">vizzroot@gmail.com</a></div>

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
        <Row align="middle" className={classes.tempRow11}>
            <Col span={24}>
                <span className={classes.author}>  Copyright 2023 Balandówka </span>
            </Col>
        </Row>
    </>
);


export default MyFooter;