import React, {Fragment} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import classes from './Navbar.module.css'
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import logo from './../Assets/img/logotyp.png'
import FacebookOutlined from "@ant-design/icons/es/icons/FacebookOutlined";
import InstagramOutlined from "@ant-design/icons/es/icons/InstagramOutlined";
import {Col, Row} from "antd";


const NavBarExample = () => {
    return (

        <>
        <Row gutter={[24,12]} >
            <Navbar bg="light" expand='lg' fixed='top' >


                    <Col xs={0} sm={12} md={6} lg={8} xl={8} >
                <img className={classes.logo} src={logo}/>
                    </Col>
                    <Col xs={12} sm={10} md={10} lg={12} xl={12}>
                    <Navbar.Toggle class="navbar-toggler" data-toggle="collapse" aria-controls="navbarToggleExternalContent" aria-expanded="true" aria-label="Toggle navigation" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav data-toggle="collapse" >
                            <Nav.Link as={Link} to="home">STRONA GLÓWNA</Nav.Link>
                            <Nav.Link as={Link} to="aboutUs">O NAS</Nav.Link>
                            <Nav.Link as={Link} to="rooms">NOCLEGI/POKOJE</Nav.Link>
                            <Nav.Link as={Link} to="foto">GALERIA</Nav.Link>
                            <Nav.Link as={Link} to="kontakt">KONTAKT</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                    </Col>
                    <Col xs={0} sm={16} md={6} lg={8} xl={8}>
                    <Navbar.Brand href='/kontakt'>
                        <Button variant='outline-secondary' className={classes.button2}>Rezerwacja</Button>
                    </Navbar.Brand>
                    <Navbar.Brand href="http://instagram.com/balandowka_apartament_zakopane">
                        <Button className={classes.button1} variant="outline-secondary">
                            <InstagramOutlined/>
                        </Button>
                    </Navbar.Brand>
                    <Navbar.Brand href='https://www.facebook.com/profile.php?id=100086957980829'  >
                        <Button className={classes.button1} variant="outline-secondary">
                            <div>
                                <FacebookOutlined/>
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


export default NavBarExample;