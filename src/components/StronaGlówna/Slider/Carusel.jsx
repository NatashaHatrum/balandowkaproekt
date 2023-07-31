import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import foto1 from "./../../Assets/img/SlideGlowna1.JPG"
import foto2 from "./../../Assets/img/Slide2Glowna.JPG"
import foto3 from "./../../Assets/img/Slide3Glowna.JPG"
import classes from './Carusel.module.css'
import {domAnimation, LazyMotion, motion} from "framer-motion";
import {Button} from "react-bootstrap";
import { frame } from "framer-motion"





const MotionButton = React.forwardRef((props, ref) => (
    <Button
        variant="secondary"
        size="lg"
        ref={ref}
        {...props}>{props.children}</Button>
));

const MotionComponent = motion(MotionButton);

function Carusel() {

    const pVariants = {
        hidden: {
            y: -100,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
        }

    };
    const props = {
        controls: false,
        interval: 7000,
        indicators: false,
        pause: false

    };

    return (

        <Carousel {...props} className={classes.carusel} >

            <Carousel.Item className='vh-100'>
                <img
                    className='w-100   d-inline-block '
                    src={foto1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <div className={classes.centered}>
                        <motion.h3
                            style={{
                                paddingTop: '10px',
                                textAlign: 'center',
                                fontSize: '60px',
                            }}
                            initial={{
                                x: -1000,
                                opacity: 0
                            }}
                            animate={{
                                x: 0,
                                opacity: 1
                            }}
                            transition={{

                                repeatType: "reverse",
                                duration: 2,
                                time: [0, 21000],
                            }}

                            className={classes.flexible}>Witamy drogi gościu
                        </motion.h3>
                        <motion.p
                            style={{
                                position: 'absolute',
                                color: 'white',
                                fontSize: '30px',
                                left: '0',
                                right: '0',
                                textAlign: 'center',
                                top: '57%',
                                textShadow: '2px 2px 2px #000'
                            }}
                            initial={{
                                y: -100,
                                opacity: 0
                            }}
                            animate={{
                                y: 0,
                                opacity: 1,


                            }}
                            transition={{

                                repeatType: "reverse",
                                duration: 2,

                                time: [0, 21000],

                            }}>
                            BAłANDÓWKA - to twoje przytulne miejsce wypoczynku w sercu Tatr
                        </motion.p>
                        <MotionComponent
                            initial={{
                                x: -100,
                                opacity: 0
                            }}
                            animate={{
                                x: 0,
                                opacity: 1,

                            }}

                            transition={{

                                repeatType: "reverse",
                                duration: 2,

                                time: [0, 21000],

                            }}

                            onClick={event => window.location.href = 'rooms'}>Zobacz prezentacje
                        </MotionComponent>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>


            <Carousel.Item className='vh-100'>
                <img
                    className=' w-100 d-inline-block  '
                    src={foto2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <div className={classes.centered}>

                        <motion.h3

                            style={{
                                paddingTop: '10px',
                                textAlign: 'center',
                                fontSize: '60px',
                            }}
                            initial={{

                                x: -1000,
                                opacity: 0
                            }}
                            animate={{
                                x: 0,
                                opacity: 1,

                            }}
                            transition={{
                                delay: 6,
                                repeatType: "reverse",
                                duration: 2,
                                time: [21000, 18000],

                                clamp: false
                            }}

                            className={classes.flexible}>Wystarczy
                        </motion.h3>

                        <motion.p
                            style={{
                                position: 'absolute',
                                color: 'white',
                                fontSize: '30px',
                                left: '0',
                                right: '0',
                                textAlign: 'center',
                                top: '57%',
                                textShadow: '2px 2px 2px #000'
                            }}
                            initial={{
                                y: -100,
                                opacity: 0
                            }}
                            animate={{
                                y: 0,
                                opacity: 1,


                            }}
                            transition={{
                                repeatType: "reverse",
                                duration: 2,
                                time: [0, 18000],

                            }}>wybrać pokoje i zarezerwować
                        </motion.p>
                        <MotionComponent
                            initial={'hidden'}
                            animate={'visible'}
                            variants={pVariants}
                            transition={{
                                repeatType: "reverse",
                                duration: 2,
                                time: [0, 18000],
                            }}

                            onClick={event => window.location.href = 'https://natashahatrum.github.io/rooms'}>Rezerwacja pokoju
                        </MotionComponent>

                    </div>

                </Carousel.Caption>
            </Carousel.Item>


            <Carousel.Item className='vh-100'>
                <img
                    className=' w-100   d-inline-block'
                    src={foto3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <div className={classes.centered}>
                        <motion.h3
                            style={{
                                paddingTop: '10px',
                                textAlign: 'center',
                                fontSize: '60px',
                            }}
                            initial={{
                                x: -1000,
                                opacity: 0
                            }}
                            animate={{
                                x: 0,
                                opacity: 1
                            }}
                            transition={{
                                repeatType: "reverse",
                                duration: 2,
                                time: [0, 22000],
                            }}

                            className={classes.flexible}>Jeśli masz
                        </motion.h3>
                        <motion.p
                            style={{
                                position: 'absolute',
                                color: 'white',
                                fontSize: '30px',
                                left: '0',
                                right: '0',
                                textAlign: 'center',
                                top: '57%',
                                textShadow: '2px 2px 2px #000'
                            }}
                            initial={{
                                y: -100,
                                opacity: 0
                            }}
                            animate={{
                                y: 0,
                                opacity: 1,


                            }}
                            transition={{
                                repeatType: "reverse",
                                duration: 2,
                                time: [0, 22000],

                            }}>
                            jakieś pytania, lub już wybrałeś pokój
                        </motion.p>
                        <MotionComponent
                            initial={'hidden'}
                            animate={'visible'}
                            variants={pVariants}
                            transition={{
                                repeatType: "reverse",
                                duration: 2,
                                time: [0, 22000],
                            }}

                            onClick={event => window.location.href = '/kontakt'}>
                            Skontaktuj się z nami!
                        </MotionComponent>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Carusel;