import React, {useState} from 'react';
import classes from './Rooms.module.css'
import fotoGlowne from './../Assets/img/RoomsfotoGlowne1.JPG'
import UncontrolledExample from "./SliderRooms";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import {faCouch} from "@fortawesome/free-solid-svg-icons/faCouch";
import {faShower} from "@fortawesome/free-solid-svg-icons/faShower";
import {faSquareParking} from "@fortawesome/free-solid-svg-icons/faSquareParking";
import {faWifi} from "@fortawesome/free-solid-svg-icons/faWifi";
import {faCheck} from "@fortawesome/free-solid-svg-icons/faCheck";
import {faBanSmoking} from "@fortawesome/free-solid-svg-icons/faBanSmoking";
import {Button} from "react-bootstrap";
import UncontrolledExamplePokoj2 from "./SliderPokoj2";
import {faUserGroup} from "@fortawesome/free-solid-svg-icons/faUserGroup";
import {faBed} from "@fortawesome/free-solid-svg-icons/faBed";
import {faMountainSun} from "@fortawesome/free-solid-svg-icons/faMountainSun";
import pas from './../Assets/img/razdelitel.png'
import UncontrolledExamplePokoj3 from "./SliderPokoj3";
import UncontrolledExamplePokoj4 from "./SliderPokoj4";
import UncontrolledExamplePokoj5 from "./SliderPokoj5";
import UncontrolledExamplePokoj6 from "./SliderPokoj6";
import {faHouse} from "@fortawesome/free-solid-svg-icons/faHouse";
import Footer from "../Footer/Footer";


const Rooms = () => {


    return (

        <div className={classes.container}>
            <div className={classes.fotoGlowne}><img src={fotoGlowne}/>
                <h2>NOCLEGI/POKOJE</h2>
                <p> Zobacz nasze oferty</p>
            </div>
            <div>

            </div>


            {/*   Pokoj1*/}


            <div className={classes.container4}>
                <div className={classes.slider}><UncontrolledExamplePokoj2/></div>
                <div className={classes.container2}>

                    <div className={classes.tlo}><h1 className={classes.standart1}>Standart </h1></div>
                    <div className={classes.Standart1H3}>

                        <h6><FontAwesomeIcon icon={faUserGroup} className={classes.ikons}/>Pokój Dwuosobowy </h6>
                        <FontAwesomeIcon icon={faBed} className={classes.ikons}/><h6>1 łóżko podwójne</h6>
                        <FontAwesomeIcon icon={faShower} className={classes.ikons}/><h6>Prywatna łazienka</h6>
                        <FontAwesomeIcon icon={faMountainSun} className={classes.ikons}/><h6>Balkon z widokiem na
                        góry</h6>
                    </div>

                    <div className={classes.Standart1H32}>
                        <FontAwesomeIcon icon={faSquareParking} className={classes.ikons}/><h6>Parking</h6>
                        <h6><FontAwesomeIcon icon={faWifi} className={classes.ikons}/>Bezpłatne WiFi</h6>

                    </div>

                    <div className={classes.content}>
                        <h4>W łazience:</h4>
                        <div><FontAwesomeIcon icon={faCheck} className={classes.ikons}/>Toaleta</div>
                        <div><FontAwesomeIcon icon={faCheck} className={classes.ikons}/>Prysznic</div>
                        <div><FontAwesomeIcon icon={faCheck} className={classes.ikons}/>Ręczniki</div>
                        <div><FontAwesomeIcon icon={faCheck} className={classes.ikons}/>Papier toaletowy</div>
                    </div>
                    <div className={classes.content2}>
                        <h4>W pokoju:</h4>
                        <div><FontAwesomeIcon icon={faCheck} className={classes.ikons}/>Pościel</div>
                        <div><FontAwesomeIcon icon={faCheck} className={classes.ikons}/>Zestaw do parzenia kawy i
                            herbaty
                        </div>
                        <div><FontAwesomeIcon icon={faCheck} className={classes.ikons}/>Czajnik elektryczny</div>
                        <div><FontAwesomeIcon icon={faCheck} className={classes.ikons}/>Szafa</div>

                    </div>

                    <div className={classes.palenie}>
                        <h6><FontAwesomeIcon icon={faBanSmoking} className={classes.ikons2}/>Dla palących: ​palenie
                            zabronione</h6>
                    </div>
                    <div className={classes.hr3}>
                        <hr/>
                    </div>
                    <div className={classes.hr1}>
                        <hr/>
                    </div>
                    <div className={classes.btn}><Button onClick={event => window.location.href = '/kontakt'}
                                                         variant="secondary">REZERWUJ POBYT</Button></div>


                </div>

            </div>
            <div className={classes.pas}><img
                src={pas}
            /></div>
            {/*  Pokoj2      */}


            <div className={classes.container4}>
                <div className={classes.slider}><UncontrolledExamplePokoj4/></div>
                <div className={classes.container2}>

                    <div className={classes.tlo}><h1 className={classes.standart1}>Standart </h1></div>
                    <div className={classes.Standart1H3}>

                        <h6><FontAwesomeIcon icon={faUserGroup} className={classes.ikons}/>Pokój mieści 2-3 osoby </h6>
                        <FontAwesomeIcon icon={faBed} className={classes.ikons}/><h6>1 łóżko podwójne</h6>
                        <FontAwesomeIcon icon={faCouch} className={classes.ikons}/><h6>1 sofa rozkładana</h6>
                        <FontAwesomeIcon icon={faShower} className={classes.ikons}/><h6>Prywatna łazienka</h6>


                    </div>

                    <div className={classes.Standart1H32}>
                        <FontAwesomeIcon icon={faMountainSun} className={classes.ikons}/><h6>Balkon z widokiem na
                        góry</h6>
                        <FontAwesomeIcon icon={faSquareParking} className={classes.ikons}/><h6>Parking</h6>
                        <h6><FontAwesomeIcon icon={faWifi} className={classes.ikons}/>Bezpłatne WiFi</h6>

                    </div>

                    <div className={classes.content}>
                        <h4>W łazience:</h4>
                        <div><FontAwesomeIcon icon={faCheck} className={classes.ikons}/>Toaleta</div>
                        <div><FontAwesomeIcon icon={faCheck} className={classes.ikons}/>Prysznic</div>
                        <div><FontAwesomeIcon icon={faCheck} className={classes.ikons}/>Ręczniki</div>
                        <div><FontAwesomeIcon icon={faCheck} className={classes.ikons}/>Papier toaletowy</div>
                    </div>
                    <div className={classes.content2}>
                        <h4>W pokoju:</h4>
                        <div><FontAwesomeIcon icon={faCheck} className={classes.ikons}/>Pościel</div>
                        <div><FontAwesomeIcon icon={faCheck} className={classes.ikons}/>Zestaw do parzenia kawy i
                            herbaty
                        </div>
                        <div><FontAwesomeIcon icon={faCheck} className={classes.ikons}/>Czajnik elektryczny</div>
                        <div><FontAwesomeIcon icon={faCheck} className={classes.ikons}/>Szafa</div>

                    </div>

                    <div className={classes.palenie}>
                        <h6><FontAwesomeIcon icon={faBanSmoking} className={classes.ikons2}/>Dla palących: ​palenie
                            zabronione</h6>
                    </div>
                    <div className={classes.hr4}>
                        <hr/>
                    </div>
                    <div className={classes.hr4}>
                        <hr/>
                    </div>
                    <div className={classes.btn}><Button onClick={event => window.location.href = '/kontakt'}
                                                         variant="secondary">REZERWUJ POBYT</Button></div>

                </div>
            </div>
            <div className={classes.pas}><img
                src={pas}
            /></div>


            {/*   Pokoj3*/}

            <div className={classes.container4}>
                <div className={classes.slider}><UncontrolledExamplePokoj3/></div>
                <div className={classes.container2}>

                    <div className={classes.tlo}><h1 className={classes.standart1}>Standart </h1></div>
                    <div className={classes.Standart1H3}>

                        <h6><FontAwesomeIcon icon={faUserGroup} className={classes.ikons}/>Pokój mieści 2-3 osoby </h6>
                        <FontAwesomeIcon icon={faBed} className={classes.ikons}/><h6>1 łóżko podwójne</h6>
                        <FontAwesomeIcon icon={faBed} className={classes.ikons}/><h6>1 łóżko pojedyncze</h6>
                        <FontAwesomeIcon icon={faShower} className={classes.ikons}/><h6>Prywatna łazienka</h6>

                    </div>

                    <div className={classes.Standart1H32}>
                        <FontAwesomeIcon icon={faSquareParking} className={classes.ikons}/><h6>Parking</h6>
                        <h6><FontAwesomeIcon icon={faWifi} className={classes.ikons}/>Bezpłatne WiFi</h6>

                    </div>

                    <div className={classes.content}>
                        <h4>W łazience:</h4>
                        <div><FontAwesomeIcon icon={faCheck} className={classes.ikons}/>Toaleta</div>
                        <div><FontAwesomeIcon icon={faCheck} className={classes.ikons}/>Prysznic</div>
                        <div><FontAwesomeIcon icon={faCheck} className={classes.ikons}/>Ręczniki</div>
                        <div><FontAwesomeIcon icon={faCheck} className={classes.ikons}/>Papier toaletowy</div>
                    </div>
                    <div className={classes.content2}>
                        <h4>W pokoju:</h4>
                        <div><FontAwesomeIcon icon={faCheck} className={classes.ikons}/>Pościel</div>
                        <div><FontAwesomeIcon icon={faCheck} className={classes.ikons}/>Zestaw do parzenia kawy i
                            herbaty
                        </div>
                        <div><FontAwesomeIcon icon={faCheck} className={classes.ikons}/>Czajnik elektryczny</div>
                        <div><FontAwesomeIcon icon={faCheck} className={classes.ikons}/>Szafa</div>

                    </div>

                    <div className={classes.palenie}>
                        <h6><FontAwesomeIcon icon={faBanSmoking} className={classes.ikons2}/>Dla palących: ​palenie
                            zabronione</h6>
                    </div>
                    <div className={classes.hr4}>
                        <hr/>
                    </div>
                    <div className={classes.hr4}>
                        <hr/>
                    </div>
                    <div className={classes.btn}><Button onClick={event => window.location.href = '/kontakt'}
                                                         variant="secondary">REZERWUJ POBYT</Button></div>


                </div>
            </div>
            <div className={classes.pas}><img
                src={pas}
            /></div>

            {/*
Pokoj4*/}


            <div className={classes.container4}>
                <div className={classes.slider}><UncontrolledExample/></div>
                <div className={classes.container2}>

                    <div className={classes.tlo}><h1 className={classes.standart1}>Standart </h1></div>
                    <div className={classes.Standart1H3}>

                        <h6><FontAwesomeIcon icon={faUser} className={classes.ikons}/>Pokój Jednoosobowy </h6>
                        <FontAwesomeIcon icon={faCouch} className={classes.ikons}/><h6>1 sofa rozkładana</h6>
                        <FontAwesomeIcon icon={faShower} className={classes.ikons}/><h6>Prywatna łazienka</h6>
                    </div>

                    <div className={classes.Standart1H32}>
                        <FontAwesomeIcon icon={faSquareParking} className={classes.ikons}/><h6>Parking</h6>
                        <h6><FontAwesomeIcon icon={faWifi} className={classes.ikons}/>Bezpłatne WiFi</h6>

                    </div>

                    <div className={classes.content}>
                        <h4>W łazience:</h4>
                        <div><FontAwesomeIcon icon={faCheck} className={classes.ikons}/>Toaleta</div>
                        <div><FontAwesomeIcon icon={faCheck} className={classes.ikons}/>Prysznic</div>
                        <div><FontAwesomeIcon icon={faCheck} className={classes.ikons}/>Ręczniki</div>
                        <div><FontAwesomeIcon icon={faCheck} className={classes.ikons}/>Papier toaletowy</div>
                    </div>
                    <div className={classes.content2}>
                        <h4>W pokoju:</h4>
                        <div><FontAwesomeIcon icon={faCheck} className={classes.ikons}/>Pościel</div>
                        <div><FontAwesomeIcon icon={faCheck} className={classes.ikons}/>Zestaw do parzenia kawy i
                            herbaty
                        </div>
                        <div><FontAwesomeIcon icon={faCheck} className={classes.ikons}/>Czajnik elektryczny</div>

                    </div>

                    <div className={classes.palenie}>
                        <h6><FontAwesomeIcon icon={faBanSmoking} className={classes.ikons2}/>Dla palących: ​palenie
                            zabronione</h6>
                    </div>
                    <div className={classes.hr1}>
                        <hr/>
                    </div>
                    <div className={classes.hr2}>
                        <hr/>
                    </div>
                    <div className={classes.btn}><Button onClick={event => window.location.href = '/kontakt'}
                                                         variant="secondary">REZERWUJ POBYT</Button></div>

                </div>

            </div>
            <div className={classes.pas}><img
                src={pas}
            /></div>


            {/*  Pokoj5    */}


            <div className={classes.container4}>
                <div className={classes.slider}><UncontrolledExamplePokoj5/></div>
                <div className={classes.container2}>

                    <div className={classes.tlo}><h1 className={classes.standart1}>Standart </h1></div>
                    <div className={classes.Standart1H3}>

                        <h6><FontAwesomeIcon icon={faUserGroup} className={classes.ikons}/>Pokój Dwuosobowy </h6>
                        <FontAwesomeIcon icon={faBed} className={classes.ikons}/><h6>2 łóżka pojedyncze</h6>
                        <FontAwesomeIcon icon={faShower} className={classes.ikons}/><h6>Prywatna łazienka</h6>


                    </div>

                    <div className={classes.Standart1H32}>
                        <FontAwesomeIcon icon={faMountainSun} className={classes.ikons}/><h6>Widok na góry</h6>
                        <FontAwesomeIcon icon={faSquareParking} className={classes.ikons}/><h6>Parking</h6>
                        <h6><FontAwesomeIcon icon={faWifi} className={classes.ikons}/>Bezpłatne WiFi</h6>

                    </div>

                    <div className={classes.content}>
                        <h4>W łazience:</h4>
                        <div><FontAwesomeIcon icon={faCheck} className={classes.ikons}/>Toaleta</div>
                        <div><FontAwesomeIcon icon={faCheck} className={classes.ikons}/>Prysznic</div>
                        <div><FontAwesomeIcon icon={faCheck} className={classes.ikons}/>Ręczniki</div>
                        <div><FontAwesomeIcon icon={faCheck} className={classes.ikons}/>Papier toaletowy</div>
                    </div>
                    <div className={classes.content2}>
                        <h4>W pokoju:</h4>
                        <div><FontAwesomeIcon icon={faCheck} className={classes.ikons}/>Pościel</div>
                        <div><FontAwesomeIcon icon={faCheck} className={classes.ikons}/>Zestaw do parzenia kawy i
                            herbaty
                        </div>
                        <div><FontAwesomeIcon icon={faCheck} className={classes.ikons}/>Czajnik elektryczny</div>
                        <div><FontAwesomeIcon icon={faCheck} className={classes.ikons}/>Wieszak na ubrania</div>

                    </div>

                    <div className={classes.palenie}>
                        <h6><FontAwesomeIcon icon={faBanSmoking} className={classes.ikons2}/>Dla palących: ​palenie
                            zabronione</h6>
                    </div>
                    <div className={classes.hr1}>
                        <hr/>
                    </div>
                    <div className={classes.hr2}>
                        <hr/>
                    </div>
                    <div className={classes.btn}><Button onClick={event => window.location.href = '/kontakt'}
                                                         variant="secondary">REZERWUJ POBYT</Button></div>

                </div>
            </div>
            <div className={classes.pas}><img
                src={pas}
            /></div>

            {/*  Pokoj6*/}

            <div className={classes.container4}>
                <div className={classes.slider}><UncontrolledExamplePokoj6/></div>
                <div className={classes.container2}>

                    <div className={classes.tlo}><h1 className={classes.standart1}>Apartament</h1></div>
                    <div className={classes.apartament}>
                        <h6><FontAwesomeIcon icon={faUserGroup} className={classes.ikons}/>Apartament mieści 3-4 osoby
                        </h6>
                        <h6><FontAwesomeIcon icon={faHouse} className={classes.ikons}/> Zawiera 2 osobne pokoje: </h6>
                        <h6><FontAwesomeIcon icon={faBed} className={classes.ikons}/>w jednym - 2 łózka pojedynczych
                        </h6>
                        <h6><FontAwesomeIcon icon={faBed} className={classes.ikons}/>w drugiem - 1 łóżko podwójne </h6>
                        <h6><FontAwesomeIcon icon={faShower} className={classes.ikons}/>Prywatna łazienka na 2 pokoje
                            apartamentów</h6>

                    </div>

                    <div className={classes.apartament1}>
                        <h6><FontAwesomeIcon icon={faMountainSun} className={classes.ikons}/>Widok na góry</h6>
                        <FontAwesomeIcon icon={faSquareParking} className={classes.ikons}/><h6>Parking</h6>
                        <h6><FontAwesomeIcon icon={faWifi} className={classes.ikons}/>Bezpłatne WiFi</h6>

                    </div>

                    <div className={classes.content}>
                        <h4>W łazience:</h4>
                        <div><FontAwesomeIcon icon={faCheck} className={classes.ikons}/>Toaleta</div>
                        <div><FontAwesomeIcon icon={faCheck} className={classes.ikons}/>Prysznic</div>
                        <div><FontAwesomeIcon icon={faCheck} className={classes.ikons}/>Ręczniki</div>
                        <div><FontAwesomeIcon icon={faCheck} className={classes.ikons}/>Papier toaletowy</div>
                    </div>
                    <div className={classes.content2}>
                        <h4>W pokoju:</h4>
                        <div><FontAwesomeIcon icon={faCheck} className={classes.ikons}/>Pościel</div>
                        <div><FontAwesomeIcon icon={faCheck} className={classes.ikons}/>Zestaw do parzenia kawy i
                            herbaty
                        </div>
                        <div><FontAwesomeIcon icon={faCheck} className={classes.ikons}/>Czajnik elektryczny</div>
                        <div><FontAwesomeIcon icon={faCheck} className={classes.ikons}/>Szafa</div>

                    </div>

                    <div className={classes.palenie}>
                        <h6><FontAwesomeIcon icon={faBanSmoking} className={classes.ikons2}/>Dla palących: ​palenie
                            zabronione</h6>
                    </div>
                    <div className={classes.hr3}>
                        <hr/>
                    </div>
                    <div className={classes.hr4}>
                        <hr/>
                    </div>
                    <div className={classes.btn}><Button onClick={event => window.location.href = '/kontakt'}
                                                         variant="secondary">REZERWUJ POBYT</Button></div>

                </div>
            </div>

            <Footer/>
        </div>

    );
};


export default Rooms;


