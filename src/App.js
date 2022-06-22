import logo from './logo.svg';
import './App.css';
import textbox from './Components/textbox.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      <div className="Textbox">
        {textbox.initialize()}
        </div>

      <form>
        <label>
          Username:
          <input type="text" name="name" />
        </label>
        <label>
          Password:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" onClick={() => textbox.identify()}/>
      </form>

      <button onClick={() => textbox.identify()}>Test</button>

      </header>
    </div>
  );
}

export default App;
