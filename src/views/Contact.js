import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Navbar from '../components/Navbar';
import './Contact.scss'; 

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_x67bri2', 'template_lvt6s9e', e.target, 'YgXeZOmgaQQH044nj')
      .then((result) => {
          console.log(result.text);
          // Reset form or show success message
      }, (error) => {
          console.log(error.text);
          // Handle errors here
      });
  };

  return (
    <>
      <Navbar className="color-about" />
      <div className = 'total-wrapper'>
      <div className="contact-container">
        <h1 className="title">LET'S WORK TOGETHER.</h1>
        <form className="contact-form" onSubmit={sendEmail}>
          <div className="form-group">
            <input type="text" name="user_name" value={formData.user_name} onChange={handleChange} placeholder="Name" required />
            <input type="email" name="user_email" value={formData.user_email} onChange={handleChange} placeholder="Email" required />
            <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" required />
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" required />
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      </div>
    </>
  );
};

export default Contact;
