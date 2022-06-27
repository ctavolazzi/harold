import logo from './logo.svg';
import './App.css';
import identify from './Functions/Diagnostics/identify.js';
import textbox from './Components/textbox.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      <div className="MainDisplay">
        {textbox.initialize()}
      </div>

      <form className="Login">
        <label>
          Username:
          <input type="text" name="usernamename" />
        </label>
        <label>
          Password:
          <input type="password" name="current-password" />
        </label>
        <input type="submit" value="Submit" onClick={() => identify("Submitted Successfully")}/>
      </form>

      <button className="TestButton" onClick={() => identify(textbox)}>Test</button>

      </header>
    </div>
  );
}

export default App;
