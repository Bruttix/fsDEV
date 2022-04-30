import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { product } from "../.././screens/SingleProduct";
class ImageGalleryComponent extends React.Component {
    render() {
        return (
            <div>
                <h2>At another glance...</h2>
                <Carousel autoPlay interval="4000" transitionTime="600">
                    <div className="singleProductCarousel">
                        <img src={this.props.imageOnes} alt='product extra image' />
                    </div>
                    <div className="singleProductCarousel">
                        <img src={this.props.imageTwos} alt="product extra image" />
                    </div>
                    <div className="singleProductCarousel">
                        <img src={this.props.imageThrees} alt="product extra image"/>
                    </div>
                    <div className="singleProductCarousel">
                        <img src={this.props.imageFours} alt="product extra image"/>
                    </div>
                    <div className="singleProductCarousel">
                        <img src={this.props.imageFives} alt="product extra image"/>
                    </div>
                </Carousel>
            </div>
        )
    };
}

export default ImageGalleryComponent;