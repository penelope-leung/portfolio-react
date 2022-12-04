// import React, { useState } from 'react';
// // import './style.css';

// // Here we import a helper function that will check if the email is valid
// import { validateEmail } from '../utils/Emailhelper';
// import ContactMe from './ContactMe';

// function Contact() {
//   // Create state variables for the fields in the form
//   // We are also setting their initial values to an empty string
//   const [email, setEmail] = useState('');
//   const [name, setName] = useState('');
//   const [message, setMessage] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleInputChange = (e) => {
//     // Getting the value and name of the input which triggered the change
//     const { target } = e;
//     const inputType = target.name;
//     const inputValue = target.value;

//      if (inputType === 'email') {
//       setEmail(inputValue);
//     } else if (inputType === 'name') {
//       setName(inputValue);
//     } else if (inputType === 'message') {
//       setMessage(inputValue);
//     }
//   };

//   const handleFormSubmit = (e) => {
//     // Preventing the default behavior of the form submit (which is to refresh the page)
//     e.preventDefault();

//     // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
//     if (!validateEmail(email) || !name) {
//       setErrorMessage('Email or Name is invalid');
//       // We want to exit out of this code block if something is wrong so that the user can correct it
//       return;
//       // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
//     };
    

//   };

//   return (
//     <div>
//       <h1>Contact Me</h1>
//       <form className="form">
//       <input
//           value={name}
//           name="name"
//           onChange={handleInputChange}
//           type="text"
//           placeholder="Name"
//         />
//         <input
//           value={email}
//           name="email"
//           onChange={handleInputChange}
//           type="email"
//           placeholder="email"
//         />
//           <input
//           value={message}
//           name="message"
//           onChange={handleInputChange}
//           type="text"
//           placeholder="Message"
//         />
//         <button type="button" onClick={handleFormSubmit}>
//           Submit
//         </button>
//       </form>
//       {errorMessage && (
//         <div>
//           <p className="error-text">{errorMessage}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Contact;