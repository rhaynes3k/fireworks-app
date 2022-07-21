import React from 'react'
import './App.css';
import FireworksAll from './Components/fireworksAll'
import NewInvForm from './Components/NewInvForm'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>Boom Kits</h1>
      </header>
      <FireworksAll />
      <NewInvForm />
    </div>
  );
}

export default App;
