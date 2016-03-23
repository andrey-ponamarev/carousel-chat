import React from 'react'
import CarouselImages from './CarouselImages.js'

const CarouselView = (props) => {
    let {size, images, activeIndex, detectDirection} = props;
    let startPoint;
    let endPoint;

    const saveStartPoint = (e) => {
        e.preventDefault();
        startPoint = e.pageX;
    };

    const saveEndPoint = (e) => {
        e.preventDefault();
        endPoint = e.pageX;

        detectDirection(startPoint - endPoint);
    };


    return (
        <div className="carousel" style={size}>
            <div className="carousel-view"
                 onMouseDown={saveStartPoint}
                 onMouseUp={saveEndPoint}
                 onTouchStart={saveStartPoint}
                 onTouchEnd={saveEndPoint}
                 style={{
                    height: size.height,
                    width: size.width * images.length,
                    left: -(size.width * activeIndex)
                 }}>
                <CarouselImages {...props} />
            </div>
        </div>);
};

export default CarouselView;