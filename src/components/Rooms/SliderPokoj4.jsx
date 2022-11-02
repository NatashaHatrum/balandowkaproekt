import React, {Component} from 'react';
import standart1 from './../Assets/img/RoomsImg/ApartamZKanapa/IMG_4640.JPG'
import standart2 from './../Assets/img/RoomsImg/ApartamZKanapa/IMG_4647.JPG'
import standart3 from '../Assets/img/RoomsImg/ApartamZKanapa/IMG_4656.JPG'
import standart4 from '../Assets/img/RoomsImg/ApartamZKanapa/IMG_4712.jpg'
import standart6 from '../Assets/img/RoomsImg/ApartamZKanapa/IMG_4679.jpg'
import standart5 from '../Assets/img/RoomsImg/ApartamZKanapa/lazenka.JPG'
import classes from './SliderRooms.modale.css'
import Slider from "react-slick";

export default class UncontrolledExamplePokoj4 extends Component {
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
                        <img  src={standart2}
                              className='w-100'
                        />
                    </div>
                    <div>
                        <img  src={standart1}
                              className='w-100'
                        />
                    </div>
                    <div>
                        <img  src={standart3}
                              className='w-100'
                        />
                    </div>
                    <div>
                        <img  src={standart4}
                              className='w-100'
                        />
                    </div>
                    <div>
                        <img  src={standart5}
                              className='w-100'
                        />
                    </div>
                    <div>
                        <img  src={standart6}
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
                        <img  src={standart2}
                              className='w-100'
                        />
                    </div>
                    <div className={classes.carouselSlide}>
                        <img  src={standart1}
                              className='w-100'
                        />
                    </div>
                    <div className={classes.carouselSlide}>
                        <img  src={standart3}
                              className='w-100'
                        />

                    </div>
                    <div className={classes.carouselSlide}>
                        <img  src={standart4}
                              className='w-100'
                        />

                    </div>
                    <div className={classes.carouselSlide}>
                        <img  src={standart5}
                              className='w-100'
                        />

                    </div>
                    <div className={classes.carouselSlide}>
                        <img  src={standart6}
                              className='w-100'
                        />

                    </div>
                </Slider>
            </div>
        );
    }
}



