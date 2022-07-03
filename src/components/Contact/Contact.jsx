import React from "react";
import './Contact.css'

const Contact = () => {
  return (
    <section className='contact'>
      <div className="container">
        <h1>
          Love to hear from you, <span> Get in touch</span>
        </h1>
        <form>
          <div className="align-form">
            <label htmlFor="name">Your name</label>
            <input
              type="text"
              id="name"
              autoComplete="name"
              spellCheck
              required
            />
          </div>
          <div className="align-form">
            <label htmlFor="email">Your email address</label>
            <input
              type="email"
              id="email"
              autoComplete="email"
              spellCheck
              required
            />
          </div>
          <div className="align-form">
            <label htmlFor="phone">Your phone number</label>
            <input
              type="number"
              id="phone"
              autoComplete="phone number"
              spellCheck
              required
            />
          </div>
          <div className="align-form">
            <label htmlFor="message">Your message</label>
            <textarea
              type="textarea"
              id="message"
              cols="50"
              rows="8"
              autoComplete="message"
              spellCheck
              required
            ></textarea>
          </div>
          <div className="button">
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </section>
  );
};
export default Contact;
