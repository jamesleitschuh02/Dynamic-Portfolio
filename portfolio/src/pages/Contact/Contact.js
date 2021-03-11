import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import Container from '../../components/Container/Container';
import Row from '../../components/Row/Row';
import Column from '../../components/Column/Column';

function Contact() {
    return(
        <div className="container">
        <Container>
            <Row>
                <Column size={12}>
                    <h1>Contact Me</h1>
                </Column>
                <ContactForm />
            </Row>
        </Container>
        </div>
    );
}

export default Contact;