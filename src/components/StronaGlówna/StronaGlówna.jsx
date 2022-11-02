import React from 'react';
import SimpleSlider from "./Slider/Slider";
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



const Content = () => {
    return (
        <div>
      {/*      <SimpleSlider/>*/}
<Carusel/>

            <div className={classes.container}>
                <h2>POKOJE</h2>
                <h3> W naszej ofercie </h3>

                <div className={classes.pokoje}>
                    <div className={classes.room}>
                        <img src={fotoRoom}/>
                    </div>
                    <div className={classes.textStandart}><h2>Pokoje STANDART</h2>
                        <h3>Dla 1-3x osób</h3>
                       {/* <p>od 120zł/doba</p>*/}
                    </div>

                    <div className={classes.room}>
                        <img src={fotoRoom2}/></div>

                    <div className={classes.textStandart}>
                        <h2>APARTAMIENT</h2>
                        <h3>Dla 3x-4x osób</h3>
                      {/*  <p>od 150zł/doba</p>*/}
                    </div>
                </div>

            </div>
            <div className={classes.btn}><Button onClick={event => window.location.href = '/rooms'} variant="secondary">Zobacz
                całą ofertę</Button></div>


            <div className={classes.rowContainer}>
                <div className={classes.block1}>
                    <FontAwesomeIcon icon={faMapLocationDot} className={classes.ikons}/> <p> Dobra lokalizacja (1km do
                    Centrum Miasta)</p>
                    <FontAwesomeIcon icon={faWifi} className={classes.ikons}/>  <p> Darmowy Wi-Fi</p>
                </div>
                <div className={classes.block2}>
                    <FontAwesomeIcon icon={faMountain} className={classes.ikons}/> <p> Pokoje z widokiem na góry </p>
                    <FontAwesomeIcon icon={faBuilding} className={classes.ikons}/>  <p>Nowoczesne wyposażenie</p>
                    <FontAwesomeIcon icon={faSquareParking} className={classes.ikons}/>  <p>Darmowy parking</p>
                </div>

            </div>
            <Footer/>

        </div>
    );
}


export default Content;
