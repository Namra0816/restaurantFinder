import React from 'react';
import { Helmet } from 'react-helmet-async';
import ContactForm from './ContactForm/ContactForm';

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Contact Us - DineDiscover</title>
        <meta name="description" content="Get in touch with DineDiscover. We'd love to hear from you!" />
      </Helmet>
      <ContactForm />
    </div>
  );
};

export default Contact;
