import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const { Name, Email, Message } = formState;
  
  function handleChange(e) {
    if (e.target.name === 'Email') {
      const isValid = validateEmail(e.target.value);
        if(!isValid) {
          setErrorMessage('Email invalid');
        } else {
          setErrorMessage('');
        }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} invalid.`);
      } else {
        setErrorMessage('');
      } 
    }

    if (!errorMessage) {
      setFormState({...formState, [e.target.name]: e.target.value })
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className='d-flex justify-content-center bg-light'>
      <form className='mt-5 p-5 border-start border-end border-3 form-shadow w-75' onSubmit={handleSubmit}>
        <div className="pb-3">
          <label className="text-primary form-font" htmlFor="name">Name</label><br></br>
          <input className="w-100" type="text" name="Name" defaultValue={Name} onBlur={handleChange} />
        </div>
        <div className="pb-3">
          <label className="text-primary form-font" htmlFor="email">Email Address</label><br></br>
          <input className="w-100" type="email" name="Email" defaultValue={Email} onBlur={handleChange} />
        </div>
        <div className="pb-3">
          <label className="text-primary form-font" htmlFor="Message">Message</label><br></br>
          <textarea className="w-100" name="Message" rows="5" defaultValue={Message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div className='d-flex justify-content-center'>
            <p className="error"><FontAwesomeIcon icon={faExclamationTriangle} size="sm" />{errorMessage}</p>
          </div>
        )}
        <input className="d-flex justify-content-center btn btn-primary" type="submit"/>
      </form>
    </div>
  );
}

export default Contact;