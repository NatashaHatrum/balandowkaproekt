import React from 'react';
import classes from "../Kontakts/Kontakts.module.css";
import fotoGlowne from "../Assets/img/Konakt.jpg";
import MyMap from "./Map";
import MyFooter from "../Footer/MyFooter";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons/faLocationDot";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import Formular from "./Formularz";
import {MyHeader} from "../Heder/Heder";
import {Row, Col} from "antd";



const KontaktItems = [
    {
        info:'34-500, Zakopane ul. Małe Żywczańskie 16B',
        icon: faLocationDot
    },
    {
        info:'+48 517 319 316',
        icon: faPhone
    },
    {
        info:'vizzroot@gmail.com',
        icon: faEnvelope
    },
]


const Kontakts = () => {
    return (

        <div>
            <MyHeader title={'kontakt'} description={'Masz pytanie? Skontaktuj się z Nami'}
                      arrayOfPhotos={[fotoGlowne]}/>
            <Row justify='center' className={classes.tempRow8}>
                <Col>
                    <Row>
                        <Col  xs={24} sm={12} md={12} lg={12} xl={12} className={classes.tempCol1}>
                            <h3>BAŁANDÓWKA</h3>
                            {
                                KontaktItems.map((el,index)=>
                                    <div key={index} className={classes.content}>
                                        <FontAwesomeIcon icon={el.icon} className={classes.ikons}/> {el.info}
                                    </div>
                                )
                            }
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={12} xl={12} className={classes.tempCol2}>
                            <Formular/>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <MyMap/>
            <MyFooter/>
        </div>
    );
};


export default Kontakts;

