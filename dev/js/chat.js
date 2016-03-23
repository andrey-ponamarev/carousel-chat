import { sendMessage , receiveMessage} from './actions';
import io from 'socket.io-client'
import { MESSAGE_SEND } from './constants/';

let socket = null;

export function chatMiddleware(store) {
    return next => action => {
        const result = next(action);
        if (socket && action.type === MESSAGE_SEND) {
            socket.emit('message', {action: action.message, user: action.user});
        }

        return result;
    };
}

export default function (store) {
    socket = io.connect('http://185.13.90.140:8081/');

    socket.on('message', function(data){
        if(data.user !== "echoBot2000"){
            store.dispatch(receiveMessage(data));
        }
    });

    socket.on('error', function (err) {
        console.error(err);
    });
}

