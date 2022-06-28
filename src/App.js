import logo from './logo.svg';
import './App.css';
import React from 'react';
// import identify from './Functions/Diagnostics/identify.js';
// import textbox from './Components/textbox.js';
// import createElem from './Functions/Rendering/createElem.js';
import TextForm from './Components/TextForm.js';
import LoginForm from './Components/LoginForm.js';
import MainDisplay from './Components/MainDisplay.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

        <div className="Login">
          <LoginForm />
        </div>

        <div className="MainDisplay">
          {/* {createElem(textbox.initialize())} */}
          <MainDisplay value="Well how about that"/>
        </div>

        <div className="TextForm">
          <TextForm />
        </div>

        {/* <button className="TestButton" onClick={() => identify(textbox)}>Test</button> */}

        </header>
      </div>
    );
  };
};

export default App;
