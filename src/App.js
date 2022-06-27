import logo from './logo.svg';
import './App.css';
import identify from './Functions/Diagnostics/identify.js';
import textbox from './Components/textbox.js';
import createElem from './Functions/Rendering/createElem.js';
import TextForm from './Components/TextForm.js';
import LoginForm from './Components/LoginForm.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      <div className="MainDisplay">
        {createElem(textbox.initialize())}
      </div>

      {/* <form className="Login">
        <label>
          Username:
          <input type="text" name="usernamename" />
        </label>
        <label>
          Password:
          <input type="password" name="current-password" />
        </label>
        <input type="submit" value="Submit" onClick={() => identify("Submitted Successfully")}/>
      </form> */}
      <div className="Login">
        <LoginForm></LoginForm>
      </div>

      <div className="TextForm">
        <TextForm></TextForm>
      </div>

      <button className="TestButton" onClick={() => identify(textbox)}>Test</button>

      </header>
    </div>
  );
}

export default App;
