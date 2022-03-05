import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         select your broker name
        </p>
        <a
          className="App-link"
          href="index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          ICICI Direct
        </a>
      </header>
    </div>
  );
}

export default App;
