import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import './App.css';

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      title: "Xing Yu",

      headerLinks: [
        {title: "Home", path: "/"},
        {title: "About", path: "/about"},
        {title: "Contact", path: "/contact"},
      ],

      home: {
        title: 'Introduction',
        subtitle: "Projects",
        text: "Check out my Projects below"
      },

      about: {
        title: "About me"
      },

      contact: {
        title: "Contact"
      },

    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          
          <NavBar className="border-bottom" bg="transparent" expand="lg">
            <NavBar.Brand>
              Choo Xing Yu
            </NavBar.Brand>
            <NavBar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <NavBar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </NavBar.Collapse>
          </NavBar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subtitle={this.state.home.subtitle} text={this.state.home.text}/>}/>
          <Route path="/" exact render={() => <AboutPage title={this.state.about.title}/>}/>
          <Route path="/" exact render={() => <ContactPage title={this.state.contact.title}/>}/>

          <Footer />

        </Container>
      </Router>
    );
  }
}

export default App;
