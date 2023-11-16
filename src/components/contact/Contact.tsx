import "./contact.scss";

import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <div className="textContainer">
        <h1>Let's get started!</h1>
        <div className="item">
          <h2>Mail</h2>
          <span>kagan@degirmenkagan.dev</span>
        </div>
        <div className="item">
          <h2>Address</h2>
          <span>Izmir/Türkiye</span>
        </div>
        <div className="item">
          <h2>Phone</h2>
          <span>+90 530 914 41 00</span>
        </div>
      </div>
      <div className="formContainer">
        <form>
          <input type="text" required placeholder="Name" name="" id="" />
          <input type="email" required placeholder="Email" name="" id="" />
          <textarea rows={8} placeholder="Message" />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
