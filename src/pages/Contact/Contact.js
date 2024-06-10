import React from 'react';
import { Helmet } from 'react-helmet-async';  // Import Helmet for managing document head
import ContactForm from './ContactForm/ContactForm';  // Import the ContactForm component

const Contact = () => {
  return (
    <div>
      
      <Helmet>  {/* Helmet is used to set the page title and meta description */}
        <title>Contact Us - DineDiscover</title>
        <meta name="description" content="Get in touch with DineDiscover. We'd love to hear from you!" />
      </Helmet>
      
      <ContactForm />   {/* Render the ContactForm component */}
    </div>
  );
};

export default Contact;
