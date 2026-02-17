import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Starter App</h1>
        <p className="subtitle">Testing Web Container</p>
        
        <div className="card">
          <p>Counter: {count}</p>
          <div className="button-group">
            <button onClick={() => setCount(c => c - 1)}>Decrease</button>
            <button onClick={() => setCount(c => c + 1)}>Increase</button>
          </div>
        </div>
        
        <div className="info-section">
          <h3>Component Info</h3>
          <p>React Version: 18.2.0</p>
          <p>State Management: useState hook</p>
        </div>
      </header>
    </div>
  );
}

export default App;
