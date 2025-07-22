
import React from "react";
import { Routes, Route, useParams } from "react-router";
import ContactScreen from "./Screens/ContactScreen/ContactScreen";
import ChatScreen from "./Screens/ChatScreen/ChatScreen";
import "./App.css";

/* 
INVESTIGAR
  propiedad date para el horario de los mensajes
  agregar la navbar con info de contacto
  darle estilos a todo
  darle estilo a la barra para bajar de los contacto 
  personalizar bien los contactos, mensajes y fotos 
  investigar como poner mejor la foto de fondo de chat (esta muy ampliada)
  en el App mejorar las clases porque no entiendo nada con esos nombres
*/

function App() {
  return (
    <div className="whatsapp-container">
      <Routes>
        <Route
          path="/contact/:contact_id/messages"
          element={
            <div className="chat-layout">
              <div className="contact-list-container">
                <ContactScreen />
              </div>
              <div className="chat-container">
                <ChatScreen />
              </div>
            </div>
          }
        />
        <Route
          path="/"
          element={
            <div className="chat-layout">
              <div className="contact-list-container">
                <ContactScreen />
              </div>
              <div className="chat-placeholder">
                <h2>Selecciona un chat para comenzar</h2>
              </div>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

