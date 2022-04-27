import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import SingleProduct from "../.././screens/SingleProduct";
class ImageGalleryComponent extends React.Component {
    render() {
        return (
            <div>
                <h2>At another glance...</h2>
                <Carousel autoPlay interval="4000" transitionTime="600">
                    <div className="singleProductCarousel">
                        <img src="https://picsum.photos/500/600?img=2" alt="random" />
                    </div>
                    <div className="singleProductCarousel">
                        <img src="https://picsum.photos/500/600?img=2" alt="random" />
                    </div>
                    <div className="singleProductCarousel">
                        <img src="https://picsum.photos/500/600?img=3" alt="random"/>
                    </div>
                    <div className="singleProductCarousel">
                        <img src="https://picsum.photos/500/600?img=4" alt="random"/>
                    </div>
                    <div className="singleProductCarousel">
                        <img src="https://picsum.photos/500/600?img=5" alt="random"/>
                    </div>
                    <div className="singleProductCarousel">
                        <img src="https://picsum.photos/500/600?img=6" alt="random"/>
                    </div>
                </Carousel>
            </div>
        )
    };
}

export default ImageGalleryComponent;