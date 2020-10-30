import React, { useState } from 'react';

const Message = () => {

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  // let messages = [];

  function handleChange(e) {
    setMessage(e.target.value);
  }

  function handleClick() {
    messages.unshift(message);
    console.log(messages);
    setMessage("");
    console.log(messages[0]);
  }

  return (
    <div className="container">
        <h2>Pass the Message</h2>
        <input placeholder="Message" onChange={handleChange} value={message}></input>
        <br></br>
        <button onClick={handleClick}>Submit</button>
        <p>Last Message Delivered:</p>
        <p className="message">{messages[0]}</p>
      </div>
  )
}

export default Message;