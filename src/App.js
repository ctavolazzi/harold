import logo from './logo.svg';
import './App.css';
import identify from './Functions/Diagnostics/identify.js';
import textbox from './Components/textbox.js';
// import createElem from './Functions/Rendering/createElem.js';
import TextForm from './Components/TextForm.js';
import LoginForm from './Components/LoginForm.js';
import MainDisplay from './Components/MainDisplay.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      <div className="MainDisplay">
        {/* {createElem(textbox.initialize())} */}
        <MainDisplay></MainDisplay>
      </div>

      <div className="Login">
        <LoginForm></LoginForm>
      </div>

      <div className="TextForm">
        <TextForm></TextForm>
      </div>

      {/* <button className="TestButton" onClick={() => identify(textbox)}>Test</button> */}

      </header>
    </div>
  );
}

export default App;
