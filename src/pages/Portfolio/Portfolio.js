import React from 'react';
import Container from '../../components/Container/Container';
import Row from '../../components/Row/Row';
import Column from '../../components/Column/Column';

import './Portfolio.css';

import WordConnections from '../../assets/images/project-1.png';
import WhatsStreaming from '../../assets/images/whatstreamin.png';
import WeatherManager from '../../assets/images/weather-manager.png';
import PasswordRandom from '../../assets/images/password-generator.png';

function Portfolio() {
    return(
        <>
            <Container styles="project-container">
                <Row>
                    <Column size={3} />
                    <Column size={6}>
                        <h1>Whats Streamin</h1>
                        <a href="https://quiet-beach-99514.herokuapp.com/">
                            <img src={WhatsStreaming} alt="img" className="projectImg" />
                        </a>
                    </Column>
                    <Column size={3} />
                </Row>
            </Container>

            <Container styles="project-container">
                <Row>
                    <Column size={3} />
                    <Column size={6}>
                        <h1>Word Connections</h1>
                        <a href="https://jamesleitschuh02.github.io/Word-Connections/">
                            <img src={WordConnections} alt="img" className="projectImg" />
                        </a>
                    </Column>
                    <Column size={3} />
                </Row>
            </Container>

            <Container styles="project-container">
                <Row>
                    <Column size={3} />
                    <Column size={6}>
                        <h1>Weather Manager</h1>
                        <a href="https://jamesleitschuh02.github.io/weather-manager/">
                            <img src={WeatherManager} alt="img" className="projectImg" />
                        </a>
                    </Column>
                    <Column size={3} />
                </Row>
            </Container>

            <Container styles="project-container">
                <Row>
                    <Column size={3} />
                    <Column size={6}>
                        <h1>Password Randomizer</h1>
                        <a href="https://jamesleitschuh02.github.io/Password-Generator/">
                            <img src={PasswordRandom} alt="img" className="projectImg" />
                        </a>
                    </Column>
                    <Column size={3} />
                </Row>
            </Container>
        </>
    );
}

export default Portfolio;