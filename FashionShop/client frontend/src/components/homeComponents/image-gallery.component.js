import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

class ImageGalleryComponent extends React.Component {
    render() {
        return (
            <div>
                <h2>At another glance...</h2>
                <Carousel autoPlay interval="5000" transitionTime="600">
                    <div className="singleProductCarousel">
                        <img src="https://picsum.photos/500/600?img=1" />
                    </div>
                    <div className="singleProductCarousel">
                        <img src="https://picsum.photos/500/600?img=2" />
                    </div>
                    <div className="singleProductCarousel">
                        <img src="https://picsum.photos/500/600?img=3" />
                    </div>
                    <div className="singleProductCarousel">
                        <img src="https://picsum.photos/500/600?img=4" />
                    </div>
                    <div className="singleProductCarousel">
                        <img src="https://picsum.photos/500/600?img=5" />
                    </div>
                    <div className="singleProductCarousel">
                        <img src="https://picsum.photos/500/600?img=6" />
                    </div>
                </Carousel>
            </div>
        )
    };
}

export default ImageGalleryComponent;