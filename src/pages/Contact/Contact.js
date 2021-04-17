import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import Container from '../../components/Container/Container';
import Row from '../../components/Row/Row';
import Column from '../../components/Column/Column';

function Contact() {
    return(
        <Container styles="contact-container">
            <Row styles="contact-h1">
                <Column size={12}>
                    <h1>Contact Me</h1>
                </Column>
                <ContactForm />
            </Row>
        </Container>
    );
}

export default Contact;