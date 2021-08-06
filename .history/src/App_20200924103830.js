import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Greet';
import Welcome from './Welcome';
import Hello from './Hello';
import Message from './Message';
import Counter from './Counter';
import FunctionClick from './FunctionClick';
import ClassClick from './ClassClick';
import EventBind from './EventBind';
import ParentComponent from './ParentComponent';
import UserGreeting from './UserGreeting';
import NameList from './NameList';
import Stylesheets from './Stylesheets';
import Inline from './Inline';
import './appStyles.css';
import styles from './appStyles.module.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="">
          <appStyles />
          <appStyles.>
          <Inline />
        <Stylesheets primary={true} />
        <NameList />
        <UserGreeting />
        <ParentComponent />
        <EventBind />
        <ClassClick />
        <Counter />
        <FunctionClick />
        <Greet name="ABC" hsname=" - Alphabet ABCD"/>
        <Greet name="KIRAN" hsname="is a nice Girl"/>
        <Message name="AARYA" hsname="Message is Beautiest Couple in the world."/>
        <Welcome name="AARYA" hsname="is Beautiest Couple in the world."/>
        <Hello />
        <Message />
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
