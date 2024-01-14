import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <form className="form-container">
      <h1>Contact</h1>
      <p>Lets get in touch and talk about your next project.</p>
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Subject" />
      <input type="text" placeholder="Comment" />
      <button>SEND MESSAGE</button>
    </form>
  );
};

export default Contact;
