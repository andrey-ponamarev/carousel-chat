import React from 'react';

const SendMessage = ({sendMessage})=> {
    let input;

    const submitMessage = e => {
        e.preventDefault();

        if (!input.value.trim()) {
            return
        }

        sendMessage(input.value, true);

        input.value = '';
    };

    return <form className="chat-control" onSubmit={submitMessage}>
        <input ref={node => { input = node }}
               type="text"
               className="message-content"
               placeholder="Type your text"/>
        <button
            type="submit"
            className="send-message">Send
        </button>
    </form>
};

export default SendMessage;