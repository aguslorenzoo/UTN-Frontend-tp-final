import React, {useState, useEffect} from "react";
import MessageList from "../../Components/MessageList/MessageList";
import { useParams } from "react-router";
import { getContactById } from "../../services/contactServices"; 
import "./ChatScreen.css"
import { IoSendSharp } from "react-icons/io5"



const ChatScreen = () =>{

    const {contact_id} = useParams()
    const contact_selected = getContactById(contact_id)
    const [messages, setMessages] = useState([]);
    
    useEffect(() => {
        setMessages(contact_selected?.messages || []);
    }, [contact_id]);   

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
            emisor: "yo",
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
        <div className="chatscreen_container">
            <div className="chat-header">
                <img src={contact_selected.avatar} className="chat-header-avatar"/>
                {contact_selected.name}
            </div>
            <div className="chat">
                <MessageList messages={messages} deleteMessageByID={deleteMessageByID}/>
                <form onSubmit={handleSumbitSentMessageForm}>
                    <div className="chat_form">
                        <label htmlFor="message"></label>
                        <input type="text" placeholder="Escribe un mensaje..." id="message" name="message" className="input"/>
                        <button type="submit" className="input-button"><IoSendSharp className="button-icon"/></button>
                    </div>
                </form>
            </div>    
        </div>
    )
}

export default ChatScreen