import React from 'react';

const CarouselImages = ({images, size})=> {
    return (
        <div>
            {images.map((src, key)=> {
                return (
                    <div key={key} style={size} className="image-wrap">
                        <img src={src}/>
                    </div>
                );
            })}
        </div>);
};

export default CarouselImages;