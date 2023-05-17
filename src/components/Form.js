import './FormStyles.css';
import emailjs from 'emailjs-com';
import React, { useRef } from 'react';

const Form = () => {
  const formRef = useRef(null);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm('service_skbynki', 'template_pqgxs3v', e.target, 'QjthV6PV4E4XdDYxU')
      .then((res) => {
        console.log(res);
        // Clear input values
        formRef.current.reset();
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="form">
      <form ref={formRef} onSubmit={sendEmail}>
        <label>Your Name</label>
        <input type="text" name="name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Subject</label>
        <input type="text" name="subject" />
        <label>Message</label>
        <textarea rows="6" placeholder="Type Your Message" name="message" />
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
