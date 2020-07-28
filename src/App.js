import React from 'react';
import './App.css';

import ReactComponent from './components/ReactComponent';
import ReactPureComponent from './components/ReactPureComponent';

const reactCreateElement = React.createElement(
  'p',
  { className: 'App-component' },
  '1. Example of React.CreateElement'
);

const FunctionalComponent = () => {
  return <p className='App-component'>4. Example of Functional Component</p>;
};

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        Hello World
      </header>
      {reactCreateElement}
      <ReactComponent />
      <ReactPureComponent />
      <FunctionalComponent />
    </div>
  );
}

export default App;
