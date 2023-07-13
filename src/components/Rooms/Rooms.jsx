import React, {Fragment, useState} from 'react';
import classes from './Rooms.module.css'
import mainPhoto from './../Assets/img/TitlePhoto.jpg'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import {faCouch} from "@fortawesome/free-solid-svg-icons/faCouch";
import {faShower} from "@fortawesome/free-solid-svg-icons/faShower";
import {faSquareParking} from "@fortawesome/free-solid-svg-icons/faSquareParking";
import {faWifi} from "@fortawesome/free-solid-svg-icons/faWifi";
import {faCheck} from "@fortawesome/free-solid-svg-icons/faCheck";
import {faBanSmoking} from "@fortawesome/free-solid-svg-icons/faBanSmoking";
import {Button} from 'antd'
import {faUserGroup} from "@fortawesome/free-solid-svg-icons/faUserGroup";
import {faBed} from "@fortawesome/free-solid-svg-icons/faBed";
import {faMountainSun} from "@fortawesome/free-solid-svg-icons/faMountainSun";
import pas from './../Assets/img/razdelitel.png'

import {faHouse} from "@fortawesome/free-solid-svg-icons/faHouse";
import MyFooter from "../Footer/MyFooter";
import {Row, Col} from "antd";
import {MyHeader} from "../Heder/Heder";
import SliderRoom1 from "./SliderRoom1";
import standart1 from "../Assets/img/RoomsImg/PoLewaj/IMG_4850.jpg";
import standart2 from "../Assets/img/RoomsImg/PoLewaj/IMG_4853.jpg";
import standart3 from "../Assets/img/RoomsImg/PoLewaj/IMG_4619.jpg";
import standart4 from "../Assets/img/RoomsImg/PoLewaj/lazenka1.jpg";
import standart5 from './../Assets/img/RoomsImg/PoPravaj/IMG_4820.jpg'
import standart6 from './../Assets/img/RoomsImg/PoPravaj/IMG_4831.jpg'
import standart7 from '../Assets/img/RoomsImg/PoPravaj/IMG_4816.jpg'
import standart8 from '../Assets/img/RoomsImg/PoPravaj/lazenka.jpg'
import standart9 from './../Assets/img/RoomsImg/ApartamZKanapa/IMG_4640.JPG'
import standart10 from './../Assets/img/RoomsImg/ApartamZKanapa/IMG_4647.JPG'
import standart11 from '../Assets/img/RoomsImg/ApartamZKanapa/IMG_4656.JPG'
import standart12 from '../Assets/img/RoomsImg/ApartamZKanapa/IMG_4712.JPG'
import standart13 from '../Assets/img/RoomsImg/ApartamZKanapa/IMG_4679.JPG'
import standart14 from '../Assets/img/RoomsImg/ApartamZKanapa/lazenka.jpg'
import standart15 from '../Assets/img/RoomsImg/1/IMG_4871.JPG'
import standart16 from '../Assets/img/RoomsImg/1/IMG_4868.JPG'
import standart17 from '../Assets/img/RoomsImg/1/IMG_4871.JPG'
import standart18 from './../Assets/img/RoomsImg/Poddasze/IMG_4776.jpg'
import standart19 from './../Assets/img/RoomsImg/Poddasze/IMG_4610.jpg'
import standart20 from '../Assets/img/RoomsImg/Poddasze/lazenka.jpg'
import standart21 from '../Assets/img/RoomsImg/Apartament/IMG_4713.jpg'
import standart22 from './../Assets/img/RoomsImg/Apartament/IMG_4738.jpg'
import standart23 from '../Assets/img/RoomsImg/Apartament/IMG_4741.jpg'
import standart24 from '../Assets/img/RoomsImg/Apartament/IMG_4723.jpg'
import standart25 from '../Assets/img/RoomsImg/Apartament/IMG_4740.jpg'
import standart26 from '../Assets/img/RoomsImg/Apartament/lazenka.jpg'
import standart27 from '../Assets/img/RoomsImg/Apartament/pokoj.jpg'
import RoomsPage from "./RoomsPage";


const tabelInfo = [
    {
        name: 'Pokój Dwuosobowy',
        icon: faUserGroup,
    },
    {
        name: '1 łóżko podwójne',
        icon: faBed,
    },
    {
        name: 'Prywatna łazienka',
        icon: faShower,
    },
    {
        name: 'Balkon z widokiem na góry',
        icon: faMountainSun,
    },
    {
        name: 'Parking',
        icon: faSquareParking,
    },
    {
        name: 'Bezpłatne WiFi',
        icon: faWifi,
    },
];
const tabelInfo2 = [
    {
        name: 'Pokój mieści 2-3 osoby',
        icon: faUserGroup,
    },
    {
        name: '1 łóżko podwójne',
        icon: faBed,
    },
    {
        name: 'Prywatna łazienka',
        icon: faShower,
    },
    {
        name: '1 łóżko pojedyncze',
        icon: faBed,
    },
    {
        name: 'Parking',
        icon: faSquareParking,
    },
    {
        name: 'Bezpłatne WiFi',
        icon: faWifi,
    },
];
const tabelInfo3 = [
    {
        name: 'Pokój mieści 2-3 osoby',
        icon: faUserGroup,
    },
    {
        name: '1 łóżko podwójne',
        icon: faBed,
    },
    {
        name: 'Prywatna łazienka',
        icon: faShower,
    },
    {
        name: '1 sofa rozkładana',
        icon: faCouch,
    },
    {
        name: 'Bezpłatne WiFi',
        icon: faWifi,
    },
    {
        name: 'Balkon z widokiem na góry',
        icon: faMountainSun,
    },
    {
        name: 'Parking',
        icon: faSquareParking,
    },
];
const tabelInfo4 = [
    {
        name: 'Pokój Jednoosobowy',
        icon: faUserGroup,
    },
    {
        name: 'Prywatna łazienka',
        icon: faShower,
    },
    {
        name: '1 sofa rozkładana',
        icon: faCouch,
    },
    {
        name: 'Bezpłatne WiFi',
        icon: faWifi,
    },
    {
        name: 'Parking',
        icon: faSquareParking,
    },
];
const tabelInfo5 = [
    {
        name: 'Pokój Dwuosobowy',
        icon: faUserGroup,
    },
    {
        name: 'Prywatna łazienka',
        icon: faShower,
    },
    {
        name: '2 łóżka pojedyncze',
        icon: faBed,
    },
    {
        name: 'Bezpłatne WiFi',
        icon: faWifi,
    },
    {
        name: 'Parking',
        icon: faSquareParking,
    },
];
const tabelInfo6 = [
    {
        name: 'Apartament mieści 3-4 osoby',
        icon: faUserGroup,
    },
    {
        name: 'Zawiera 2 osobne pokoje:',
        icon: faHouse,
    },
    {
        name: 'Prywatna łazienka',
        icon: faShower,
    },

    {
        name: 'w jednym - 2 łózka pojedynczych',
        icon: faBed,
    },

    {
        name: 'Parking',
        icon: faSquareParking,
    },
    {
        name: 'w drugiem - 1 łóżko podwójne',
        icon: faBed,
    },
    {
        name: 'Bezpłatne WiFi',
        icon: faWifi,
    },

];
const tabelInfoBathroom = ['Toaleta', 'Prysznic', 'Ręczniki', 'Papier toaletowy'];
const tabelInfoRoom = ['Pościel', 'Zestaw do parzenia kawy i herbaty', 'Czajnik elektryczny', 'Szafa', 'Televizor'];
const tabelInfoRoom5 = ['Pościel', 'Zestaw do parzenia kawy i herbaty', 'Czajnik elektryczny', 'Wieszak na ubrania', 'Televizor'];

const dataSource = (nameTable) => [
    {
        key: '1',
        name: nameTable
    },
    {
        key: '2',
        name: <Row justify='center'>
            <Col span={12}>
                <h4>W łazience:</h4>
                {tabelInfoBathroom.map((el, index) =>
                    <div key={index}><FontAwesomeIcon icon={faCheck} className={classes.ikons}/>{el}</div>)
                }
            </Col>
            <Col span={12}>
                <h4>W pokoju:</h4>
                {tabelInfoRoom.map((el, index) =>
                    <div key={index}><FontAwesomeIcon icon={faCheck} className={classes.ikons}/>{el}</div>)
                }
            </Col>
        </Row>,
    },
];
const dataSourceRoom5 = [
    {
        key: '1',
        name: <Row>
            {tabelInfo5.map((el, index) =>
                <Col span={12} key={index}>
                    <h6><FontAwesomeIcon icon={el.icon} className={classes.ikons}/>{el.name}</h6>
                </Col>
            )}
        </Row>
    },
    {
        key: '2',
        name: <Row justify='center'>
            <Col span={12}>
                <h4>W łazience:</h4>
                {tabelInfoBathroom.map((el, index) =>
                    <div key={index}><FontAwesomeIcon icon={faCheck} className={classes.ikons}/>{el}</div>)
                }
            </Col>
            <Col span={12}>
                <h4>W pokoju:</h4>
                {tabelInfoRoom5.map((el, index) =>
                    <div key={index}><FontAwesomeIcon icon={faCheck} className={classes.ikons}/>{el}</div>)
                }
            </Col>
        </Row>,
    },
];

const columns = (titleTable) => [
    {
        title: titleTable,
        dataIndex: 'name',
        key: 'name',

    }];

const photoArray = {
    room1: [standart1, standart2, standart3, standart4],
    room2: [standart5, standart6, standart7, standart8],
    room3: [standart9, standart10, standart11, standart12, standart13, standart14],
    room4: [standart15, standart16, standart17],
    room5: [standart18, standart19, standart20],
    room6: [standart21, standart22, standart23, standart24, standart25, standart26, standart27]
};

const Rooms = () => {
    return (
        <>
            <MyHeader title={'noclegi/pokoje'} description={'Zobacz nasze oferty'} arrayOfPhotos={[mainPhoto]}/>
            {/*      Room1    */}
            <RoomsPage
                componentSlider={<SliderRoom1
                    photoArray={photoArray?.room1}/>
                }
                dataForTable={dataSource(<Row justify='center'>
                    {tabelInfo.map((el, index) =>
                        <Col span={12} key={index}>
                            <h6><FontAwesomeIcon icon={el.icon} className={classes.ikons}/>{el.name}</h6>
                        </Col>
                    )}
                </Row>)}
                columnsForTable={columns('Standard')}

            />
            {/*      Room2    */}
            <RoomsPage
                componentSlider={<SliderRoom1
                    photoArray={photoArray?.room2}/>
                }
                dataForTable={dataSource(<Row justify='center'>
                    {tabelInfo2.map((el, index) =>
                        <Col span={12} key={index}>
                            <h6><FontAwesomeIcon icon={el.icon} className={classes.ikons}/>{el.name}</h6>
                        </Col>
                    )}
                </Row>)}
                columnsForTable={columns('Standard')}
            />
            {/*      Room3    */}
            <RoomsPage
                componentSlider={<SliderRoom1
                    photoArray={photoArray?.room3}/>
                }
                dataForTable={dataSource(<Row>
                    {tabelInfo3.map((el, index) =>
                        <Col span={12} key={index}>
                            <h6><FontAwesomeIcon icon={el.icon} className={classes.ikons}/>{el.name}</h6>
                        </Col>
                    )}
                </Row>)}
                columnsForTable={columns('Standard')}
            />
            {/*      Room4    */}
            <RoomsPage
                componentSlider={<SliderRoom1
                    photoArray={photoArray?.room4}/>
                }
                dataForTable={dataSource(<Row>
                    {tabelInfo4.map((el, index) =>
                        <Col span={12} key={index}>
                            <h6><FontAwesomeIcon icon={el.icon} className={classes.ikons}/>{el.name}</h6>
                        </Col>
                    )}
                </Row>)}
                columnsForTable={columns('Standard')}
            />
            {/*      Room5    */}
            <RoomsPage
                componentSlider={<SliderRoom1
                    photoArray={photoArray?.room5}/>
                }
                dataForTable={dataSourceRoom5}
                columnsForTable={columns('Standard')}
            />
            {/*      Room6 -Apartment    */}
            <RoomsPage
                id='001'
                componentSlider={<SliderRoom1
                    photoArray={photoArray?.room6}/>
                }
                dataForTable={dataSource(<Row>
                    {tabelInfo6.map((el, index) =>
                        <Col span={12} key={index}>
                            <h6><FontAwesomeIcon icon={el.icon} className={classes.ikons}/>{el.name}</h6>
                        </Col>
                    )}
                </Row>)}
                columnsForTable={columns('Apartament')}
            />
            <MyFooter/>
        </>


    );
};


export default Rooms;


