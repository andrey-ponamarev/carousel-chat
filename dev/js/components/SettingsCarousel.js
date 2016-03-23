import React from 'react';

const CarouselSettings = ({size, changeCaruselWidth, changeCaruselHeight})=> {
    return <div>
        <label>Width: {size.width}px</label>
        <input type="range" min="1" max="1200"
               value={size.width}
               onChange={changeCaruselWidth}
            />
        <label>Height: {size.height}px</label>
        <input type="range" min="1" max="1200"
               value={size.height}
               onChange={changeCaruselHeight}
            />
    </div>
};

export default CarouselSettings;