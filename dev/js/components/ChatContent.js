import React from 'react'

const ChatContent = ({messages})=> {
    return (
        <div className="chat-dialog">
            <ul>
                { messages.map((data, index) => <li key={ index } className={ data.isMyMessage ? "my-message" : ""}>
                        <i>{ data.user }</i>
                        <span>{ data.message }</span>
                    </li>
                )}
            </ul>
        </div>)
};

export default ChatContent;