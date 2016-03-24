import { MESSAGE_SEND, MESSAGE_RECEIVE, SHOW_SLIDE, CHANGE_CAROUSEL_SIZE} from '../constants/';

export const showSlide = (direction) => {
    return {
        type: SHOW_SLIDE,
        direction
    }
};

export const changeCarouselSize = (size) => {
    return {
        type: CHANGE_CAROUSEL_SIZE,
        size
    }
};
