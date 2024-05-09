import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
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
    <form onSubmit={sendEmail}>
      <input type="text" name="user_name" value={formData.user_name} onChange={handleChange} placeholder="Your Name" required />
      <input type="email" name="user_email" value={formData.user_email} onChange={handleChange} placeholder="Your Email" required />
      <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" required />
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;