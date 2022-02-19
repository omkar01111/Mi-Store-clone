import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel  from 'react-bootstrap/Carousel';

const Slider = ({start}) => {
    return (
        <Carousel>
            {start.map((item, index) =>(
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={item}
                    alt="First slide"
                />
               
            </Carousel.Item>
            ))}
        </Carousel>
    )
}

export default Slider
