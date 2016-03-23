import React from 'react'
import { connect } from 'react-redux'
import { addNewSlide, showSlide} from '../actions'
//import Nav from '../components/Nav'
import Nav from './Navigation'
import CarouselArrows from '../components/CarouselArrows'
import CarouselView from '../components/CarouselView'

const mapStateToProps = (state) => {
    return {
        images: state.carousel.images,
        size: state.carousel.size,
        activeIndex: state.carousel.activeIndex
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        moveLeft: () => {
            dispatch(showSlide(-1));
        },

        moveRight: () => {
            dispatch(showSlide(1));
        },

        detectDirection: (moveDirection) => {
            let direction = moveDirection > 0 ? 1 : -1;
            dispatch(showSlide(direction));
        }
    }
};

const Photos = (props) => {
    let { size, images, activeIndex, moveLeft, moveRight, detectDirection } = props;

    return (
        <div className="photos">
            <div className="carousel-wrap" style={size}>
                <CarouselView {...props} />
                <CarouselArrows {...props}/>
            </div>
        </div>
    )
};

const PhotosPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(Photos);

export default PhotosPage;
