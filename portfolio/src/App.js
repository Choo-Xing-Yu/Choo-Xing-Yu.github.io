import React from 'react';
import './App.css';

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
      <div> Hi! My name is Xy </div>
    );
  }
}

export default App;
