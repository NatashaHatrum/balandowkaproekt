import React, {useState} from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import classes from './Navbar.module.css'
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import logo from './../Assets/img/LOGOTYP.png'
import FacebookOutlined from "@ant-design/icons/es/icons/FacebookOutlined";
import InstagramOutlined from "@ant-design/icons/es/icons/InstagramOutlined";
import {Col, Row} from "antd";


const NavBar = () => {

    const [expanded, setExpanded] = useState(false);

    return (

        <>
            <Row gutter={[24, 12]}>
                <Navbar bg="light" expand='lg' fixed='top' expanded={expanded}>
                    <Col xs={0} sm={12} md={6} lg={8} xl={8}>
                        <img className={classes.logo} src={logo}/>
                    </Col>
                    <Col xs={24} sm={12} md={10} lg={12} xl={12}>
                        <Row gutter={[24, 12]}>
                            <Col xs={10} sm={0} md={0} lg={0} xl={0}><img className={classes.logo} src={logo}/></Col>
                            <Col className={classes.tempCol2} xs={14}  sm={0} md={0} lg={0} xl={0}>
                                <Navbar.Brand href="http://instagram.com/balandowka_apartament_zakopane">
                                    <Button className={classes.button2Mobile} variant="outline-secondary">
                                        <InstagramOutlined className={classes.inst}/>
                                    </Button>
                                </Navbar.Brand>
                                <Navbar.Brand href='https://www.facebook.com/profile.php?id=100086957980829'>
                                    <Button className={classes.button1Mobile} variant="outline-secondary">
                                        <div>
                                            <FacebookOutlined className={classes.inst}/>
                                        </div>
                                    </Button>
                                </Navbar.Brand>
                                <Navbar.Toggle
                                    onClick={() => setExpanded(expanded ? false : "expanded")}
                                    aria-controls="basic-navbar-nav"/>
                            </Col>
                        </Row>
                        <Row className={classes.tempRow9}>
                            <Col>
                                <Navbar.Collapse id="basic-navbar-nav" collapseOnSelect={true}>
                                    <Nav>
                                        <Nav.Link onClick={() => setExpanded(false)} as={Link} to="home">STRONA
                                            GLÓWNA</Nav.Link>
                                        <Nav.Link onClick={() => setExpanded(false)} as={Link} to="aboutUs">O
                                            NAS</Nav.Link>
                                        <Nav.Link onClick={() => setExpanded(false)} as={Link}
                                                  to="rooms">NOCLEGI/POKOJE</Nav.Link>
                                        <Nav.Link onClick={() => setExpanded(false)} as={Link}
                                                  to="foto">GALERIA</Nav.Link>
                                        <Nav.Link onClick={() => setExpanded(false)} as={Link}
                                                  to="kontakt">KONTAKT</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Col>
                        </Row>

                    </Col>
                    <Col xs={0} sm={8} md={8} lg={8} xl={8}>
                        <Navbar.Brand>
                            <Link to='/kontakt'><Button variant='outline-secondary'
                                                        className={classes.button2}>Rezerwacja</Button> </Link>
                        </Navbar.Brand>
                        <Navbar.Brand href="http://instagram.com/balandowka_apartament_zakopane">
                            <Button className={classes.button1} variant="outline-secondary">
                                <InstagramOutlined />
                            </Button>
                        </Navbar.Brand>
                        <Navbar.Brand href='https://www.facebook.com/profile.php?id=100086957980829'>
                            <Button className={classes.button1} variant="outline-secondary">
                                <div>
                                    <FacebookOutlined />
                                </div>
                            </Button>
                        </Navbar.Brand>
                    </Col>

                </Navbar>
            </Row>
            <div className={classes.space}/>
        </>

    );
};


export default NavBar;