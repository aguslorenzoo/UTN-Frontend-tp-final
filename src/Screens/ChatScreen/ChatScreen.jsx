import React, {useState} from "react";
import MessageList from "../../Components/MessageList/MessageList";
import { useParams } from "react-router";
import { getContactById } from "../../services/contactServices"; 


const ChatScreen = () =>{

    const {contact_id} = useParams()
    
    const contact_selected = getContactById(contact_id)

    const [messages, setMessages] = useState(contact_selected.messages)

    const deleteMessageByID = (message_id) => {
        //aca voy a recorrer la lista de mensjaes original (estado) y agregar los mensajes con id distinto al recibido
        const new_message_list = []
        
        for (const message of messages){
            if (message.id !== message_id){ 
                new_message_list.push(message)
            }
        }
        setMessages(new_message_list)
    }

    const addNewMessage = (text) => {
        const new_message = {
            emisor: "YO",
            hora: "11:10",
            texto: text,
            status: "no-visto",
            id: messages.length + 1
        }
    //clonar lista de mensajes(porque el clon al ser otra variable PERO NO UN ESTADO si lo podemos mutar)
    const cloned_messages_list = [...messages]
    cloned_messages_list.push(new_message)
    setMessages(cloned_messages_list)
    }

    const deleteAllMessages = () =>{
        setMessages([])
    }

    const handleSumbitSentMessageForm = (event) => {
        event.preventDefault()
        let new_message_text = event.target.message.value
        //llamamos a la funcion de agregar nuevo mensaje
        addNewMessage(new_message_text)
        //reseteamos el campo para que vuelva a estar vacio
        event.target.message.value = " "
    }

    return (
        <div>
            <h1>Mensajes:</h1>
            {
                messages.length > 0
                &&
                <button onClick={deleteAllMessages}>Eliminar todos los mensajes</button>
            }
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