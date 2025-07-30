import React, {useState} from "react"
import Message from "../Message/Message"
import "./MessageList.css"

const MessageList = ({messages, deleteMessageByID}) => {
    if (messages.length === 0){
        return <span>Aun no tienes mensajes!</span>
    }
    const message_list = messages.map(
        (message) => {
            return (
                <Message
                    key={message.id}
                    emisor={message.emisor}
                    id={message.id}
                    hora={message.hora}
                    texto={message.texto}
                    status={message.status}
                    deleteMessageByID={deleteMessageByID}
                />
            )
        }
    )
    return(
        <div className="message-list-container">
            {message_list}
        </div>
    )
}


export default MessageList