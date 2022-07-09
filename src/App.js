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
      value: 'Well how about that.',
      display: 'Look at you go!'
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

        {/* <div className="Login">
          <LoginForm username="Username" password="Password"/>
        </div> */}

        <div className="MainDisplay">
          {/* {createElem(textbox.initialize())} */}
          <MainDisplay value={this.state.value}/>
        </div>

        <div className="TextForm">
          <TextForm value="Enter text here..."/>
        </div>

        {/* <button className="TestButton" onClick={() => identify(textbox)}>Test</button> */}

        </header>
      </div>
    );
  };
};

export default App;
