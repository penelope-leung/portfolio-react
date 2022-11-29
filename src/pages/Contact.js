import React from 'react';

export default function Contact() {
  return (
    <div>
      <h1>Contact Me</h1>
      <form>
        <input type="text" name="Name:" value="text" />
        <input type="text" name="Email address" id="" />
        <input type="message" name='Message' />
        <button>Submit</button>
        </form>
     </div>
  );
  //error message if the message invalid
}
