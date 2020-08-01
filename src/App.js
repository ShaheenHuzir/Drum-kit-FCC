import React from 'react';
import './App.css';
import Drumkit from './components/drumkit/drumkit';
import ReactFCCtest from 'react-fcctest';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Drumkit />
        <ReactFCCtest />
      </div>
    );
  }
}

export default App;
