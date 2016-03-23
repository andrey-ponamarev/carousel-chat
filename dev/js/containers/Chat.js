import React from 'react'
import { connect } from 'react-redux'
import { sendMessage } from '../actions'
import Nav from '../components/Nav'
import ChatSendMessage from '../components/ChatSendMessage'
import ChatContent from '../components/ChatContent'

const mapStateToProps = (state) => {
    return {
        messages: state.chat.messages,
        user: state.chat.user
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (message, isMyMessage) => {
            dispatch(sendMessage(message, isMyMessage))
        }
    }
};

const Chat = (props) => {
    let { messages, user, sendMessage } = props;

    return <div className="chat">
            <ChatContent { ...props }></ChatContent>
            <ChatSendMessage { ...props } />
        </div>
};

const ChatPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(Chat);

export default ChatPage;
