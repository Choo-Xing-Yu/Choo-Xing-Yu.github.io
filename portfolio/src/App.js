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
        {title: "Home", path: ""},
      ],

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
            <Nav className="ml-auto">
              <a href="https://drive.google.com/drive/folders/1-IlwjxD2tS8383Pu8wKhB8TxqlcfpNyX?usp=sharing" target="_blank" rel="noopener noreferrer">My Resume</a>
            </Nav>
          </NavBar>
          <Route path="" exact render={() => <HomePage/>}/>
          <Footer />

        </Container>
      </Router>
    );
  }
}

export default App;
