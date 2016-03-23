import { MESSAGE_SEND, MESSAGE_RECEIVE, CHANGE_USER_NAME } from '../constants/';

const initialState = {
    messages: [],
    user: 'Andrew'
};

const sendMessage = (state, message, isMyMessage = null) => {
    return Object.assign({}, state, {
        messages: [...state.messages, {
            user: state.user,
            message,
            isMyMessage
        }]
    })
};

const receiveMessage = (state, action) => {
    return Object.assign({}, state, {
        messages: [...state.messages, {
            user: action.user,
            message: action.message
        }]
    })
};


const changeUserName = (state, user) => {
    let messages = state.messages.filter((data)=> {
        if (data.isMyMessage) {
            data.user = user;
        }

        return data;
    });

    return Object.assign({}, state, {
        messages,
        user
    });
};

export default function chat(state = initialState, action = {}) {
    switch (action.type) {
        case MESSAGE_SEND:
            return sendMessage(state, action.message, action.isMyMessage);
        case MESSAGE_RECEIVE:
            return receiveMessage(state, action.message);
        case CHANGE_USER_NAME:
            return changeUserName(state, action.user);
        default:
            return state;
    }
}
