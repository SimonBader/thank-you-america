import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [thankers, setThankers] = useState([])

  useEffect(() => {
    fetch('https://service.thank-you-america.com/default/thankAmerica', { method: "GET", mode: 'no-cors' })
      .then(res => res.json())
      .then(response => {
        setThankers(response.Items)
      })
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Thank you United States of America</h1>
        {thankers.map((val, index) => (<h2>{val.Email}</h2>))}
      </header>
    </div>
  );
}

export default App;
