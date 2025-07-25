import React, {useState} from "react";
import MessageList from "../../Components/MessageList/MessageList";
import { useParams } from "react-router";
import { getContactById } from "../../services/contactServices"; 
import "./ChatScreen.css"


const ChatScreen = () =>{

    const {contact_id} = useParams()
    const contact_selected = getContactById(contact_id)
    const [messages, setMessages] = useState(contact_selected.messages)

    const deleteMessageByID = (message_id) => {
        const new_message_list = []
        
        for (const message of messages){
            if (message.id !== message_id){ 
                new_message_list.push(message)
            }
        }
        setMessages(new_message_list)
    }

    const addNewMessage = (text) => {
        const now = new Date();
        const actualTime = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
        const new_message = {
            emisor: "YO",
            hora: actualTime,
            texto: text,
            status: "no-visto",
            id: messages.length + 1
        }
    const cloned_messages_list = [...messages]
    cloned_messages_list.push(new_message)
    setMessages(cloned_messages_list)
    }

    const handleSumbitSentMessageForm = (event) => {
        event.preventDefault()
        let new_message_text = event.target.message.value.trim()
        if (new_message_text === "") {
            return;
        }
        addNewMessage(new_message_text)
        event.target.message.value = ""
    }
    return (
        <div>
            <div className="chat-header">
                <img src={contact_selected.avatar} className="chat-header-avatar"/>
                {contact_selected.name}
            </div>
            <MessageList messages={messages} deleteMessageByID={deleteMessageByID}/>
            <form onSubmit={handleSumbitSentMessageForm}>
                <div>
                    <label htmlFor="message">Escribe un mensaje:</label>
                    <input type="text" placeholder="Escribe un mensaje..." id="message" name="message"/>
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </div>
    )
}

export default ChatScreen