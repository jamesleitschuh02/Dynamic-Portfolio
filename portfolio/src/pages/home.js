import React from 'react';
import Column from '../components/Column/Column';
import Row from '../components/Row/Row';
import Container from '../components/Container/Container';

function Home() {
    return(
        <Container>
            <Row>
                <Column size={4}>
                    <img src="../public/Images/me.jpg" alt="me" className="responsive" /> 
                </Column>               
                <Column size={4}>
                    <h2>About Me</h2>
                        <Row>
                            <Column size={12}>
                                <p>Hi, my name is James Leitschuh. I am currently enrolled in the U of M coding bootcamp. With a minimal background in coding, I'm training to aquire the skills to find a succesful career in coding.
                                </p>
                            </Column>
                        </Row>
                </Column>
            </Row>
        </Container>
    );
}

export default Home;