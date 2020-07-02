// function 방식
// import React from 'react';
// import logo from './logo.svg';
// class 방식으로 수업 !
import React, { Component } from 'react';
import './App.css';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/
class Content extends Component {
  render() {
    return (
      <article>
        <h2>HTML</h2>
        HTML is HyperText Markup Language.
      </article>
    );
  }
}
class TOC extends Component {
  render() {
    return (
      <nav>
        <ul>
            <li><a href="1.html">HTML</a></li>
            <li><a href="2.html">CSS</a></li>
            <li><a href="3.html">JavaScript</a></li>
        </ul>
      </nav>
    );
  }
}
class Chater extends Component {
  render() {
    return (
      <dl>
        <dt>안녕하세요ㅎㅎ</dt>
        <dt>반갑습니다 ㅎㅎ</dt>
        <dt>퇴근하겠습니다 ㅎㅎ</dt>
      </dl>
    );
  }
}
class Subject extends Component {
  render() {
    return (
      <header>
          <h1>WEB</h1>
          world wide web!  
      </header>
    );
  }
} 
class App extends Component {
  render() {
    return(
    <div className="App">
        <Subject title ="WEB" sub="title"></Subject>
        <TOC></TOC>
        <Content></Content>
        <Chater></Chater>
    </div>
    );
  }
}

export default App;
