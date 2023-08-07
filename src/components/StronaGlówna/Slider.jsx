import React, {useState} from 'react';
import classes from './Sliders.module.css'
import Slider from 'react-animated-slider';
import foto1 from "./../Assets/img/SlideGlowna01.jpg"
import foto2 from "./../Assets/img/Slide2Glowna02.jpg"
import foto3 from "./../Assets/img/Slide03Glowna.jpg"
import 'react-animated-slider/build/horizontal.css';
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";


const content = [
    {
        title: 'Witamy drogi gościu',
        description:
            'BAłANDÓWKA - to twoje przytulne miejsce wypoczynku w sercu Tatr',
        button: 'Zobacz prezentacje',
        image: foto1,
        path: '/rooms'
    },
    {
        title: 'Wystarczy',
        description:
            'wybrać pokoje i zarezerwować',
        button: 'Rezerwacja pokoju',
        image: foto2,
        path: '/rooms'
    },
    {
        title: 'Jeśli masz',
        description:
            'jakieś pytania, lub już wybrałeś pokój',
        button: 'Skontaktuj się z nami!',
        image: foto3,
        path: '/kontakt'

    }
];

const Sliders = () => (
    <div>
        <Slider className={classes.sliderWrapper}
                autoplay={60}
                duration={8000}
                animateIn={classes.animateIn}
                animateOut={classes.animateOut}
                previousButton={false}
                nextButton={false}
        >
            {content.map((item, index) => (
                <div
                    key={index}
                    className={classes.sliderContent}
                    style={{background: `url('${item.image}') `, backgroundSize: 'cover', backgroundPositionX: 'center'}}
                >
                    <div className={classes.inner}>
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                        <Link to={item.path}><Button  className={classes.button1}>{item.button}</Button></Link>
                    </div>
                </div>
            ))}
        </Slider>
    </div>
);

export default Sliders;