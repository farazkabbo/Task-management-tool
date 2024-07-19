
import React from 'react';
import './App.css';
import JiraForm from './components/JiraForm';
import ConfluenceForm from './components/ConfluenceForm';

function App() {
  return (
    <div className="App">
      <h1>Task Management Tool</h1>
      <JiraForm />
      <ConfluenceForm />
    </div>
  );
}

export default App;
