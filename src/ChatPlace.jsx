import { useState } from "react";
import MessagesRendering from "./MessagesRendering.jsx"

export default function ChatPlace() {
    const [message, setMessage] = useState("");

    function handleChange(e){
        setMessage(e.target.value);
    }

    const [chatMessages, setChatMessages] = useState([]);

    function handleSend(){
        setMessage("");
       setChatMessages((prev)=>
    [
        ...prev,
        {
            msg : message,
            id : crypto.randomUUID()
        }
    ])
    }

    

  return (
    <div className="chat-container">
        <div className="chat-messages">
              {chatMessages.map(item=>
        <MessagesRendering key={item.id} chatMsg={item.msg} />
    )}
        </div>
 <div className="chat-bar">

  

      <input
        type="text"
        className="chat-input"
        placeholder="Message"
        value={message}
        onChange={handleChange}
      />
      <button 
      className="chat-send-btn"
      onClick={handleSend}
      >Send</button>
    </div>
    </div>
   
  );
}