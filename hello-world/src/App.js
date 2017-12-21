import React from 'react';
import './App.css';
import HelloWorld from './HelloWorld';

const App = () => {
  return (
    <div className="App">
      <HelloWorld name="Foo"/>
      <HelloWorld name="Bar"/>
    </div>
  );
};

export default App;
