import React from 'react';
import {useState} from 'react';

// this function was taken from activity fifteen
export default function Contact() {
  // Here we set two state variables for email and message using `useState`
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    // Ternary statement that will call either setEmail or setMessage based on what field the user is typing in
    return name === 'email' ? setEmail(value) : setMessage(value);
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    alert(`${email} ${message}`);
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <p>
        Share a message below with an email for me to contact you at!
      </p>
      <form className="form">
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="Email"
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Message"
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
