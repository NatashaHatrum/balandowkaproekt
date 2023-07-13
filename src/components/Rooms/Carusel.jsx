import React from 'react';
import Standart1 from '../Assets/img/RoomsImg/Standart1.jpg'
import Standart2 from './../Assets/img/RoomsImg/Standart2.jpg'
import Standart3 from '../Assets/img/RoomsImg/Standart3.jpg'
import Standart4 from '../Assets/img/RoomsImg/Standart4.jpg'
import classes from './Rooms.module.css'
import Carousel from 'react-bootstrap/Carousel';



function UncontrolledExample() {
    return (
       <div className={classes.carousel}><Carousel >
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Standart1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Standart2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Standart3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
       </div>
    );
}

export default UncontrolledExample;