import React from 'react';
import { Link } from 'react-router';
import "./ContactItem.css"

const ContactItem = ({ contact }) => {
    return (
        <Link to={`/contact/${contact.id}/messages`} className='contact-info-container'>
            <div className='contact-info_img'>
                <img src={contact.avatar} alt={contact.name} className='contact-img'/>
            </div>
            <div className='contact-info_right'>
                <div className='contact-info_header'>
                    <h3 className='contact-name'>{contact.name}</h3>
                    <span className='contact_time'>{contact.last_message}</span>
                </div>
                <div className='contact-info_footer'>
                    <span className='contact_message'>
                        {contact.messages && contact.messages.length > 0
                        ? contact.messages[contact.messages.length - 1].texto
                        : "Sin mensajes"}
                    </span>
                </div>
                <hr className='contact_line' />
            </div>
        </Link>
    )
}

export default ContactItem