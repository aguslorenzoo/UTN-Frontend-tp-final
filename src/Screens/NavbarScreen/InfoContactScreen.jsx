import React from 'react';
import "./InfoContactScreen.css"
import { useNavigate, useParams } from 'react-router';
import { getContactById } from '../../services/contactServices';
import { IoIosArrowBack } from "react-icons/io";

const InfoContactScreen = () => {
    const {contact_id} = useParams()
    const contact = getContactById(contact_id)
    const navigate = useNavigate()
    return (
        <div className='info-container'>
            <div className='button'><button onClick={() => navigate(`/contact/${contact_id}/messages`)}className='back-icon'><IoIosArrowBack className='back-icon' /></button></div>
            <div className='info-header'>
                <h1>Detalles de Contacto</h1>
            </div>
            <div className='info-contact'>
                <img src={contact.avatar} alt={contact.name} />
                <p>{contact.name}</p>
                <span>{contact.phone}</span>
            </div>
            <hr className='line'/>
            <p className='contact-status'>Estado del contacto: {contact.connection_status}</p>
            <hr className='line'/>
        </div>
    )
}

export default InfoContactScreen