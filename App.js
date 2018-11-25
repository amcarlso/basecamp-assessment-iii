import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

<div>
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          
        </header>
        <p>How are you doing today?</p>
        <div>I'm curious to see if this works.
             Does this 'div' tag and previous 'p' tag count as multiple components?
        </div>
        
      </div>
      
    );
      
    
  }
  
}
  <div>
    function Welcome(props) {
      return <h1>Hello, {props.name}</h1>;
    }
  </div>
  <div>
    function Double(props) {
      return <h2>{2*props}</h2>;
    }
  </div>
</div>
ReactDOM.render(
  <div>
    <h1>{app}</h1>
    <h1>{Welcome}</h1>
    <h1>{Double}</h1>
  </div>,
  document.getElementById('root')
);



export default App;
