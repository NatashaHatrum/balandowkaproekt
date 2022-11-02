import React, {Component} from 'react';
import classes from './SliderRooms.modale.css'
import standart1 from './../Assets/img/RoomsImg/1/IMG_4868.jpg'
import standart2 from './../Assets/img/RoomsImg/1/IMG_4871.jpg'
import standart3 from '../Assets/img/RoomsImg/1/IMG_4871.jpg'
import Slider from "react-slick";

export default class UncontrolledExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null
        };
    }

    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }

    render() {
        return (
            <div className={classes.carousel}>

                <Slider


                infinite = {true}
                    asNavFor={this.state.nav2}
                    ref={slider => (this.slider1 = slider)}
                >
                    <div>
                        <img  src={standart3}
                              className='w-100'
                        />
                    </div>
                    <div>
                        <img  src={standart2}
                              className='w-100'
                        />
                    </div>
                    <div>
                        <img  src={standart1}
                              className='w-100'
                        />
                    </div>

                </Slider>

                <Slider
                    variableWidth = {true}
                    asNavFor={this.state.nav1}
                    ref={slider => (this.slider2 = slider)}
                    slidesToShow={3}
                    swipeToSlide={true}
                    focusOnSelect={true}
                >
                    <div className={classes.carouselSlide}>
                        <img  src={standart3}
                              className='w-100'
                        />
                    </div>
                    <div className={classes.carouselSlide}>
                        <img  src={standart2}
                              className='w-100'
                        />
                    </div>
                    <div className={classes.carouselSlide}>
                        <img  src={standart1}
                              className='w-100'
                        />

                    </div>


                </Slider>
            </div>
        );
    }
}

/*


function UncontrolledExample() {

    const props = {

        interval: null,
        indicators: false,
        nextLabel: null,
        prevLabel: null,
        fade: true
    };

    return (
        <Carousel {...props}  >
            <Carousel.Item className='w-50' >
                <img
                    className='w-100'
                    src={standart3}
                    alt="First slide"
                />

            </Carousel.Item >
            <Carousel.Item className='  w-50 '>
                <img
                    className='w-100'
                    src={standart2}
                    alt="Second slide"
                />

            </Carousel.Item>
            <Carousel.Item className='  w-50'>
                <img
                    className='w-100'
                    src={standart1}
                    alt="Third slide"
                />

                           </Carousel.Item>
        </Carousel>

    );
}

export default UncontrolledExample;
*/
