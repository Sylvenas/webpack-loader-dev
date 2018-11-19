import React, { Component } from 'react';
import Picture from './Picture'
import girl from './girl.jpeg';
import baidu from './baidu.gif';
import logo from './logo.svg';
import './App.css';
import tpl from './test-name.tpl';

console.info(baidu)
console.info(tpl)
console.info(girl)
console.info(logo)

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>{tpl}</h1>
        <header className="App-header">
          <img src={baidu.originSrc} alt='logo' />
          <Picture img={girl} alt='my girl' className='my-girl' />
        </header>
      </div>
    );
  }
}

export default App;
