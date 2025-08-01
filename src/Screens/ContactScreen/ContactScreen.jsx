import React, {useState} from "react";
import ContactList from "../../Components/ContactList/ContactList";
import { getContactList } from "../../services/contactServices";
import "./ContactScreen.css"

const ContactScreen = () => {
    const contacts = getContactList()
    const [contactState, setContactState] = useState(contacts)
    return (
        <div className="contact-container">
            <div className="contact-container_header">
                <h1>Chats</h1>
                <div className="contact_line"></div>
            </div>
            <div className="contact-container_list">
                <ContactList contacts={contactState} />
            </div>
        </div>
    )
}

export default ContactScreen