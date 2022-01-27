import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

/*
const App = (props) => {
  return (
    <h1>{props.greeting}, {props.name}</h1>
  )
};

function withGreeting(WrapperComponent) {
  return function WrapperComponentWithGreeting(greeting) {
    return function trueComponent(props) {
      return (
        <React.Fragment>
          <WrapperComponent {...props} greeting={greeting}/>
          <p>Estamos acompañando al WrapperComponent</p>
        </React.Fragment>
      )
    }
  }
}

const AppWithGreeting = withGreeting(App)('Wena wenas');
*/

ReactDOM.render(
  //<AppWithGreeting name="Luis"/>,
  <App />,
  document.getElementById('root')
);
