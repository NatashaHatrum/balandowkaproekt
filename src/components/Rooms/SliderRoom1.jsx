import React, {Component} from 'react';
import classes from './SliderRooms.modale.css'
import Slider from "react-slick";

export default class SliderRoom1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null,
        };
    }

    componentDidMount() {
        console.log(this.props);
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }
    render() {
        return (
            <div className={classes.carousel}>
                <Slider
                    infinite={true}
                    asNavFor={this.state.nav2}
                    ref={slider => (this.slider1 = slider)}
                >
                    {this.props.photoArray?.map((el, index) =>
                        <div key={index}>
                            <img src={el}
                                 className='w-100'
                            />
                        </div>
                    )}
                </Slider>

                <Slider
                    variableWidth={true}
                    asNavFor={this.state.nav1}
                    ref={slider => (this.slider2 = slider)}
                    slidesToShow={3}
                    swipeToSlide={true}
                    focusOnSelect={true}
                >
                    {this.props.photoArray?.map((el, index) =>
                        <div key={index}>
                            <img src={el}
                                 style={{width: '100%', paddingRight: '5%', paddingTop: '2%'}}
                            />
                        </div>
                    )}
                </Slider>
            </div>
        );
    }
}



