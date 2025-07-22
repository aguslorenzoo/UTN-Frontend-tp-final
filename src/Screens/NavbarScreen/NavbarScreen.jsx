import React from 'react';
import "./NavbarScreen.css"

const NavbarScreen = ({ contact }) => {
    return (
        <div className='container'>
            <h2>Detalles de Contacto</h2>
            <p>Nombre: {contact.name}</p>
            <p>Teléfono: {contact.phone}</p>
            {/* Puedes agregar más información aquí */}
        </div>
    );
};

export default NavbarScreen