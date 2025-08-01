import React, {useState} from "react";
import { Routes, Route, useParams, useNavigate } from "react-router";
import ContactScreen from "./Screens/ContactScreen/ContactScreen";
import ChatScreen from "./Screens/ChatScreen/ChatScreen";
import "./App.css";
import InfoContactScreen from "./Screens/NavbarScreen/InfoContactScreen";

/* 
INVESTIGAR
- agregar la navbar con info de contacto
- darle estilo a la barra para bajar de los contacto 
- hacer el responsive
*/

function App() {
  const navigate = useNavigate();
  const [selectedContactId, setSelectedContactId] = useState(null);

  const handleContactSelect = (contactId) => {
    setSelectedContactId(contactId)
    navigate(`/contact/${contactId}/messages`)
  }

  return (
    <div className="whatsapp-container">
      <Routes>
        <Route
          path="/contact/:contact_id/messages"
          element={
            <div className="chat-layout">
              <div className="contact-list-container">
                <ContactScreen onContactSelect={handleContactSelect} />
              </div>  
              <div className="chat-container">
                <ChatScreen contactId={selectedContactId} />
              </div>
            </div>
          }
        />
        <Route
          path="/contact/:contact_id/info"
          element={
            <div className="chat-layout">
              <div className="contact-list-container">
                <ContactScreen onContactSelect={handleContactSelect} />
              </div>  
              <div className="info-layout">
                <InfoContactScreen contactId={selectedContactId} />
              </div>
            </div>
          }
        />
        <Route
          path="/"
          element={
            <div className="chat-layout">
              <div className="contact-list-container">
                <ContactScreen onContactSelect={handleContactSelect} />
              </div>
              <div className="chat-placeholder">
                <h2>Selecciona un chat para comenzar</h2>
              </div>
            </div>
          }
        />
      </Routes>
    </div>
  )
}

export default App;

