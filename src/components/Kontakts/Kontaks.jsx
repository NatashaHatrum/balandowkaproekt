import React from 'react';
import classes from "../Kontakts/Kontakts.module.css";
import fotoGlowne from "../Assets/img/Konakt.jpg";
import MyMap from "./Map";
import Footer from "../Footer/Footer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons/faLocationDot";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import Formular from "./Formularz";


const Kontakts = () => {
    return (

        <div>
            <div className={classes.container}>
                <div className={classes.fotoGlowne}>
                    <img src={fotoGlowne}/>
                    <h2>KONTAKT</h2>
                    <p> Masz pytanie? Skontaktuj się z Nami</p>
                </div>
                <div className={classes.containerContent}>
                    <h3>BAŁANDÓWKA</h3>
                    <div className={classes.content}>
                        <FontAwesomeIcon icon={faLocationDot} className={classes.ikons}/> 34-500, Zakopane ul. Małe
                        Żywczańskie 16B,

                    </div>
                    <div className={classes.content}><FontAwesomeIcon icon={faPhone} className={classes.ikons}/>+48 691
                        888 623
                    </div>
                    <div className={classes.content}><FontAwesomeIcon icon={faEnvelope}
                                                                      className={classes.ikons}/> vizzroot@gmail.com
                    </div>
                </div>
               <div className={classes.formular}> <Formular/> </div>
                <MyMap/>
            </div>
            <Footer/>
        </div>


    );
}


export default Kontakts;

