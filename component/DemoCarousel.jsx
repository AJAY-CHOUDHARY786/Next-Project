import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="https://res.cloudinary.com/duils7z7r/image/upload/v1704017342/kprs7bclvtdpp2sghtds.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://res.cloudinary.com/duils7z7r/image/upload/v1704017342/kprs7bclvtdpp2sghtds.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://res.cloudinary.com/duils7z7r/image/upload/v1704017342/kprs7bclvtdpp2sghtds.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};

ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));