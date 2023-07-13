import React from "react"
import classes from './Slider.module.css'
import Slider from "react-slick"
import {Button} from "react-bootstrap";
import {motion } from "framer-motion";



export default function SimpleSlider() {


    const pVariants ={
        hidden:{y: -100,
            opacity: 0},
        visible:{y: 0,
            opacity: 1,}

    };


    const props = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        //pauseOnHover: true,
        adaptiveHeight: true,
        mobileFirst: true,
        arrows: false,
        verticalSwiping: true,

    };

    return (
        <Slider {...props} className={classes.slider}>
            <div className={classes.centered}>
                <motion.h3
                    initial={{
                        x: -1000,
                        opacity: 0
                    }}
                    animate={{
                        x: 0,
                        opacity: 1
                    }}
                    transition={{
                        delay: 0.5,
                    }}

                    className={classes.flexible}>Witamy drogi gościu
                </motion.h3>
                <motion.p
                    initial={{
                        y: -100,
                        opacity: 0
                    }}
                    animate={{
                        y: 0,
                        opacity: 1,


                    }}
                    transition={{
                        delay: 1.5,
                    }}>BALANDÓWKA - to twoje przytulne miejsce wypoczynku w sercu Tatr
                </motion.p>
                <motion.button
                    initial={'hidden'}
                    animate={'visible'}
                    variants = {pVariants}
                    transition={{
                        delay: 2,
                    }}

                    onClick={event => window.location.href = '/rooms'} variant="light">Zobaczyć oferty
                </motion.button>
            </div>
            <div className={classes.centeredSecondary}>
                <motion.h3
                    initial={'hidden'}
                    animate={'visible'}
                    variants = {pVariants}
                    transition={{
                        delay: 2,
                    }}


                    className={classes.flexible}>Wystarczę</motion.h3>
                <p> wybrać pokoje i zarezerwować</p>
                <Button onClick={event => window.location.href = '/rooms'} variant="light">Zarezerwować</Button>
            </div>



            <div className={classes.centeredSlide3}>
                <h3 className={classes.flexible}>jeśli masz </h3>
                <p>jakieś pytania, lub już wybrałeś pokój</p>
                <Button onClick={event => window.location.href = '/kontakt'} variant="light">Skontaktuj się z
                    nami</Button>
            </div>

        </Slider>
    );
}

