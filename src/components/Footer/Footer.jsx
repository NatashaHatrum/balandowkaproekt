import React, {Fragment} from 'react';
import classes from './Footer.module.css'
import InstagramOutlined from "@ant-design/icons/es/icons/InstagramOutlined";
import FacebookOutlined from "@ant-design/icons/es/icons/FacebookOutlined";
import {Col, Row} from "antd";


const Footer = () => {
    return (

        <div className={classes.container}>
            <Row gutter={[8, 4]} justify="center">
                <div className={classes.content}>
                    <Col xs={0} sm={10} md={10} lg={10} xl={10}>
                        <div className={classes.menu}>
                            <h3><a href='/rooms'> &#9658; Pokoje\oferty </a></h3>
                            <h3><a href='/aboutUs'>&#9658; O nas</a></h3>
                            <h3><a href='foto'> &#9658; Galeria</a></h3>
                        </div>
                    </Col>


                    <Col xs={24} sm={10} md={16} lg={17} xl={17}>
                        <div className={classes.kontakt}>
                            <div className={classes.contackt}>KONTAKT</div>
                            <div>
                                Ul. Małe Żywczańskie 16B,
                                34-500, Zakopane
                            </div>
                            <div>&#9742; +48 691 888 623</div>
                            <div>&#9993; vizzroot@gmail.com</div>

                            <div className={classes.social}>Jesteśmy w społecznościach:</div>
                            <div className={classes.inst}>
                                <a href='http://instagram.com/balandowka_apartament_zakopane'>
                                    <InstagramOutlined/>
                                </a>
                            </div>
                            <div className={classes.fb}>
                                <a href='https://www.facebook.com/profile.php?id=100086957980829'>
                                    <FacebookOutlined/>
                                </a>
                            </div>

                        </div>
                    </Col>
                </div>
            </Row>
        </div>

    );
}


export default Footer;