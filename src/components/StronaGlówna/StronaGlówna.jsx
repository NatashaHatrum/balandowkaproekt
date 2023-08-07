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
import MyFooter from "../Footer/MyFooter";
import Sliders from "./Slider";
import {Col, Row} from "antd";
import {Link} from "react-router-dom";



const roomsDescriptions = [
    {
        name: 'standart',
        description:'Dla 1-3x osób',
        photo: fotoRoom
    },
    {
        name: 'apartament',
        description:'Dla 3x-4x osób',
        photo: fotoRoom2
    },
];

const arrayIkons = [
    {
        iconName: faMapLocationDot,
        text: 'Dobra lokalizacja (1km do Centrum Miasta)',
    },
    {
        iconName: faWifi,
        text: 'Darmowy Wi-Fi',
        className: classes.block1
    },
    {
        iconName: faMountain,
        text: 'Pokoje z widokiem na góry',
    },
    {
        iconName: faBuilding,
        text: 'Nowoczesne wyposażenie',
    },
    {
        iconName: faSquareParking,
        text: 'Darmowy parking',
    },
];


const Content = () => {
    return (
        <Fragment>
            <Sliders/>

            <Row className={classes.tempRow5} justify="center">
                <Col span={24}>
                    <div className={classes.titles}><h2>pokoje</h2></div>
                    <div className={classes.titles2}><h3>W naszej ofercie</h3></div>
                </Col>
            </Row>
            <Row justify='center' className={classes.temRow6}>
                {
                    roomsDescriptions.map((el,index) =>
                    <>
                        <Col key={index}  xs={24} sm={9} md={8} lg={7} xl={6} xxl={4}>
                            <div><img className={classes.photoRoom} src={el.photo}/></div>
                        </Col>
                        <Col  xs={24} sm={9} md={8} lg={7} xl={6} xxl={4}>
                            <h2 className={classes.titleRoom}>{el.name}</h2>
                            <h3 className={classes.descriptionRoom}>{el.description}</h3>
                        </Col>
                    </>
                    )
                }

            </Row>
            <div className={classes.btn}>
             <Link to='/rooms'>   <Button variant="secondary">Zobacz całą
                 ofertę</Button></Link>
            </div>
            <Row className={classes.tempRow4}>
                <Col span={24}>
                    <Row className={classes.tempRow3}>
                        {arrayIkons.map((el, index) =>
                            <>
                                <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
                                    <div>
                                        <span><FontAwesomeIcon key={index} icon={el.iconName}
                                                               className={classes.ikons}/> </span>
                                        <span className={classes.textIcons}> {el.text} </span>
                                    </div>
                                </Col>
                            </>
                        )}
                    </Row>
                </Col>
            </Row>
            <MyFooter/>
        </Fragment>

    );
};


export default Content;
