import { MESSAGE_SEND, MESSAGE_RECEIVE, CHANGE_USER_NAME, NEW_MESSAGE_RECEIVE} from '../constants/';

export const sendMessage = (message, isMyMessage) => {
    return {
        type: MESSAGE_SEND,
        message,
        isMyMessage
    }
};

export const receiveMessage = (message) => {
    return {
        type: MESSAGE_RECEIVE,
        message
    }
};

export const changeName = (user) => {
    return {
        type: CHANGE_USER_NAME,
        user
    }
};

export const newMessage = (newMessages) => {
    return {
        type: NEW_MESSAGE_RECEIVE,
        newMessages
    }
};