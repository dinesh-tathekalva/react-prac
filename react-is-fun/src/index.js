// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React from 'react'
import ReactDOM from 'react-dom'

const myStyle = {
  backgroundColor: 'orange',
  color: 'white'
}

let data = {
  name: 'Dinesh',
  age: 30,
  passion: 'astronomy'
}

class TestComponent extends React.Component{
 render(){
   return(
    <div>
      <h1 style={myStyle}>React test</h1>
      <h3>{this.props.msg}</h3>
      <h3>Hello, I'm {this.props.name} and I'm {this.props.age} years old. Im passionate about {this.props.passion}.</h3>
      <h3>It's a {this.props.duration} minutes break now</h3>
    </div>
   )
 }
}

ReactDOM.render(
  <TestComponent passion={data.passion} age={data.age} name={data.name} duration={5} msg='Passing this text as props'/>,
  document.getElementById('root')
);