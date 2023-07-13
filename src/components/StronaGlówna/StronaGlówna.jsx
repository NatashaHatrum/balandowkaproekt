import React, {Fragment} from 'react';
import classes from './StronaGlowna.module.css'
import fotoRoom2 from './../Assets/img/RoomsImg/Apartament/IMG_4738.jpg'
import fotoRoom from './../Assets/img/RoomsImg/PoLewaj/IMG_4850.jpg'
import {Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBuilding} from "@fortawesome/free-regular-svg-icons";
import {faMountain} from "@fortawesome/free-solid-svg-icons";
import {faWifi} from "@fortawesome/free-solid-svg-icons/faWifi";
import {faMapLocationDot} from "@fortawesome/free-solid-svg-icons/faMapLocationDot";
import {faSquareParking} from "@fortawesome/free-solid-svg-icons/faSquareParking";
import Footer from "../Footer/Footer";
import Carusel from "./Slider/Carusel";
import {Col, Row} from "antd";
import 'antd/dist/antd.css'
import fotoGlowne from "../Assets/img/FotoMobil.jpg";
import pas from '../Assets/img/razdelitel.png'
import {motion} from "framer-motion";

const arrayIkons = [
    {
        iconName: faMapLocationDot,
        text: 'Dobra lokalizacja (1km do Centrum Miasta)',
        className: classes.block1
    },
    {
        iconName: faWifi,
        text: 'Darmowy Wi-Fi',
        className: classes.block1
    },
    {
        iconName: faMountain,
        text: 'Pokoje z widokiem na góry',
        className: classes.block2
    },
    {
        iconName: faBuilding,
        text: 'Nowoczesne wyposażenie',
        className: classes.block2
    },
    {
        iconName: faSquareParking,
        text: 'Darmowy parking',
        className: classes.block2
    },
    {}
];


const Content = () => {
    return (
        <Fragment>
            <Carusel/>
            <div className={classes.GlowneFoto}>
                <div className={classes.fotoGlowne}>
                    <img src={fotoGlowne}/>
                    <h2>Witamy drogi gościu</h2>
                    <h3>BAłANDÓWKA - to twoje przytulne
                        miejsce wypoczynku w sercu Tatr</h3>
                    <img className={classes.pas} src={pas}/>
                </div>
            </div>
            <Row gutter={[10, 5]} justify="center">
                <Col xs={18} sm={16} md={12} lg={2} xl={4}>
                    <div className={classes.container}>
                        <h2>POKOJE</h2>
                        <h3> W naszej ofercie </h3>
                    </div>
                </Col>
            </Row>
            <Row gutter={[10, 5]} justify="center">
                <Col xl={5} xs={18} lg={2} md={10}>
                    <div className={classes.room}>
                        <img src={fotoRoom}/>
                    </div>
                </Col>
                <Col xl={3} xs={18} lg={1} md={10}>
                    <div className={classes.textStandart}>
                        <h2>STANDART</h2>
                        <h3>Dla 1-3x osób</h3>
                        {/* <p>od 120zł/doba</p>*/}
                    </div>
                </Col>

                <Col xl={5} lg={2} xs={18} md={10}>
                    <div className={classes.room}>
                        <img src={fotoRoom2}/>
                    </div>
                </Col>
                <Col xl={3} xs={18} lg={2} md={10}>
                    <div className={classes.textStandart}>
                        <h2>APARTAMIENT</h2>
                        <h3>Dla 3x-4x osób</h3>
                        {/*  <p>od 150zł/doba</p>*/}
                    </div>
                </Col>
            </Row>

            <div className={classes.btn}>
                <Button onClick={event => window.location.href = '/rooms'} variant="secondary">Zobacz całą
                    ofertę</Button>
            </div>

            <Row gutter={[5, 10]} className={classes.rowContainer} justify="end" align='top'>

                {arrayIkons.map((el, index) =>

                    <Col xl={10} xs={20} lg={1} md={10} className={el.className}>
                        <FontAwesomeIcon key={index} icon={el.iconName} className={classes.ikons}/>
                        <p> {el.text} </p>
                    </Col>
                )}
            </Row>
            <Footer/>
        </Fragment>

    );
};


export default Content;
