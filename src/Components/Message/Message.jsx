import React, {useState} from "react"
import "./Message.css"

const Message = ({emisor, hora, id, texto, status, deleteMessageByID}) => {
    return (
        <div className="message_container">
            <p className="message_text">{texto}</p>
            <div className="message_footer">
                <span className="message_time">{hora}</span>
                <button className="message_button_delete" onClick={() => {deleteMessageByID(id)}}>Eliminar</button>
            </div>
        </div>
    ) 
}

export default Message