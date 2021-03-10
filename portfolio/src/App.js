import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Wrapper from "./components/Wrapper/Wrapper";

function App() {
    return (
        <Router>
            <div>
                <h3>HEADER</h3>
                <Wrapper>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/portfolio" component={Portfolio} />
                </Wrapper>
                <h3>FOOTER</h3>
            </div>
        </Router>
    );
}

export default App;