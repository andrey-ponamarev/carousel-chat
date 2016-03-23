import React from 'react';

const CarouselArrows = ({moveLeft, moveRight})=> {
    return <div className="carusel-controls">
        <span className="arrow-left">
            <a onClick={moveLeft}>&lt;</a>
        </span>
        <span className="arrow-right">
             <a onClick={moveRight}>&gt;</a>
        </span>
    </div>
};

export default CarouselArrows;