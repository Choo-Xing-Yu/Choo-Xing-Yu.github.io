import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import './App.css';

import HomePage from "./pages/HomePage";
import Footer from "./components/Common/Footer";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      title: "Xing Yu",

      headerLinks: [
        {title: "Home", path: "/"},
      ],

      home: {
        name: "Choo Xing Yu",
        title: "PROJECTS",
        text: "Click on the images to find out more"
      },

    }
  }

  render() {
    return(
      <Router>
        <Container className="p-0" fluid={true}>
          
          <NavBar className="border-bottom" bg="transparent" expand="lg">
            <Nav>
            <Link className="nav-link" to="/">Choo Xing Yu</Link>
            </Nav>
            <NavBar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <NavBar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <a href="https://drive.google.com/drive/folders/1-IlwjxD2tS8383Pu8wKhB8TxqlcfpNyX?usp=sharing" target="_blank" rel="noopener noreferrer">My Resume</a>
              </Nav>
            </NavBar.Collapse>
          </NavBar>
          <Route path="/" exact render={() => <HomePage name={this.state.home.name} title={this.state.home.title} subtitle={this.state.home.subtitle} text={this.state.home.text}/>}/>
          <Footer />

        </Container>
      </Router>
    );
  }
}

export default App;
