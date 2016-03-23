import { CHANGE_CAROUSEL_SIZE, SHOW_SLIDE} from '../constants/';

const initialState = {
    host: 'http://lorempixel.com/400/400/nature/',
    index: 1,
    activeIndex: 0,
    images: ['http://lorempixel.com/400/400/nature/1'],
    size: {
        width: 640,
        height: 480
    }
};

const addNewSlide = (state) => {
    let index = state.index + 1;
    let activeIndex = state.activeIndex + 1;
    let newImage = state.host + index;
    let saveImages = state.images;
    let images = [...saveImages, newImage];

    return Object.assign({}, state, {
        images,
        index,
        activeIndex
    });
};

const showSlide = (state, direction) => {
    let activeIndex = state.activeIndex + direction;

    if (activeIndex < 0) {
        return state;
    }

    if (activeIndex >= state.images.length) {
        return addNewSlide(state);
    }

    return Object.assign({}, state, {
        activeIndex
    });
};

const changeCaruselSize = (state, newSize) => {
    let size = Object.assign({}, state.size, newSize);

    return Object.assign({}, state, {
        size
    });
};

export default function carusel(state = initialState, action = {}) {
    switch (action.type) {
        case CHANGE_CAROUSEL_SIZE:
            return changeCaruselSize(state, action.size);
        case SHOW_SLIDE:
            return showSlide(state, action.direction);
        default:
            return state;
    }
}
