import React from 'react'
import styled from 'styled-components'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';
import { Container, Wrapper, Desc, ContactForm, ContactInput, ContactTitle, ContactButton, ContactInputMessage, Title } from './ContactStyle';

const Contact = () => {

  //hooks
  const [open, setOpen] = React.useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_fnua4ob', 'template_8r4ulml', form.current, 'SPWfEe2w_FPsN1NkU')
      .then((result) => {
        setOpen(true);
        form.current.reset();
      }, (error) => {
        console.log(error.text);
      });
  }


  return (
    <Container>
      <Wrapper>
        <Title>Contato</Title>
        <Desc></Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Envie um e-mail</ContactTitle>
          <ContactInput placeholder="Your Email" name="from_email" required/>
          <ContactInput placeholder="Your Name" name="from_name" required/>
          <ContactInput placeholder="Subject" name="subject"required />
          <ContactInputMessage placeholder="Message" rows="4" name="message" required/>
          <ContactButton type="submit" value="Send" />
        </ContactForm>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={()=>setOpen(false)}
          message="Email sent successfully!"
          severity="success"
        />
      </Wrapper>
    </Container>
  )
}

export default Contact