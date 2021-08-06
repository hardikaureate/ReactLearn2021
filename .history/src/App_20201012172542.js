import React, { Fragment } from 'react';
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
import appStyles from './appStyles.css';
import styles from './appStyles.module.css';
import Form from './Form';
import LifecycleA from './LifecycleA';
import FragmentDemo from './FragmentDemo';
import Table from './Table';
import RefsDemo from './RefsDemo';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import HookCounterOne from './components/HookCounterOne';
import DataFetching from './components/DataFetching';
import CounterOne from './CounterOne';
import CounterTwo from './CounterTwo';
import CounterThree from './CounterThree';
import DataFetchingOneRedu from './components/DataFetchingOneRedu';
import DataFetchingTwoRedu from './components/DataFetchingTwoRedu';
import UsememoCounter from './UsememoCounter';
import HookTimer from './HookTimer';
import DocTitleOne from './DocTitleOne';
import DocTitleTwo from './DocTitleTwo';
import CustomHookUseCounter from './components/CustomHookUseCounter';
import CustomHookUseCounterTwo from './components/CustomHookUseCounterTwo';
import UserForm from './components/UserForm';
import UseInput from './hook/UseInput';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="">
          {/* <h1 className="error">Stylesheet Demo Module Demo</h1>
          <h1 className={styles.success}>Stylesheet Demo Module Demo</h1> */}
          {/* <LifecycleA /> */}
          <UseInput />
          <UserForm />
          <CustomHookUseCounter />
          <CustomHookUseCounterTwo />
          <DocTitleOne />
          <DocTitleTwo />
          <HookTimer /> 
          <UsememoCounter />
          <DataFetchingTwoRedu />
          <DataFetchingOneRedu />
          <CounterOne />
          <CounterTwo />
          <CounterThree />
          <DataFetching />
          {/* <HookCounterOne />
          <HookCounterFour />
          <HookCounterThree />
          <HookCounterTwo />
          <HookCounter /> */}
          <ClassCounter />
          <RefsDemo/>
          <FragmentDemo />
          <Table />
          {/* <Form />
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
        <Message /> */}
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
