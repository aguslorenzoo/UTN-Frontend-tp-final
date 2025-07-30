import React, {useState} from "react"
import "./Message.css"

const Message = ({emisor, hora, id, texto, status, deleteMessageByID}) => {
    let messageClass;
    
    if (emisor === "yo") {
        messageClass ="message_sent"
    } else {
        messageClass = "message_received"
    } 

    return (
        <div className="message_container">
            <div className={messageClass}>
                <div className="message">
                    <p className="message_text">{texto}</p>
                    <span className="message_time">{hora}</span>
                </div>
            </div>
            {/* <div>
                <button className="message_button_delete" onClick={() => {deleteMessageByID(id)}}>Eliminar</button>
            </div> */}
        </div>
    ) 
}

export default Message