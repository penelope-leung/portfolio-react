import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
// import React, { useState } from 'react';
import '../styles/ContactMe.css'

// Here we import a helper function that will check if the email is valid
// import { validateEmail } from '../utils/Emailhelper';
// import ContactMe from './ContactMe';

// import styled from "styled-components";

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1ur3yzb",
        "template_cm8rx8a",
        form.current,
        "6-KHtvo9QeO-t_HaF"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message Sent");
          return (result)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};
export default ContactMe;



// import React from 'react'

// export default function ContactMe(props) {
//   return (
//     <form action="" onSubmit="">
//     <div className='forward'>
//     <h2>Contact Me</h2>
//     <span>Full Name</span>
//     <br />
//     <input className="input100" type="text" name='fullName' required />
//      <br />
//      <span>Phone Number</span>
//      <br />
//      <input className="input100" type="text" name='phone' required />
//      <br />
//      <span>Enter Email</span>
//      <br />
//      <input className='input100' type="text" name='email' required />
//      <br />
//     </div>
//     <div className='forward'>
//     <span>Message</span>
//     <br />
//     </div>
//   </form>
//   )
// }
