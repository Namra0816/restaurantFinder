import React from 'react';
import './ContactForm.css'; // Importing the CSS file for the contact form

const ContactForm = () => {
  return (
    <div className='container contact-content'>
      <div>
        {/* Heading for the contact form */}
        <h1 className='heading-secondary'>
          Mail <span>us</span>
        </h1>

        {/* Contact form */}
        <form>
          <div className='form-field name-email'>
            
            {/* Name input field */}
            <div>
              <label>Name</label>
              <input type="text" name='name' />
            </div>

            {/* Email input field */}
            <div>
              <label>Email</label>
              <input type="email" name='email' />
            </div>
          </div>

          {/* Subject input field */}
          <div className='form-field'>
            <div>
              <label>Subject</label>
              <input type="text" name='subject' />
            </div>
          </div>

          {/* Message textarea field */}
          <div className='form-field'>
            <div>
              <label>Message</label>
              <textarea type="text" name='message' />
            </div>
          </div>
        </form>

        {/* Submit button */}
        <button>Submit</button>
      </div>
    </div>
  );
};

export default ContactForm;
