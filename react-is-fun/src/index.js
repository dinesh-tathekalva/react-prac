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

import React, {Component} from 'react' //destructuring component from React
import  {render} from 'react-dom' //destructuring render from react-dom

const myStyle = {
  backgroundColor: 'orange',
  color: 'white'
}

var data = {
  name: 'Dinesh',
  age: 30,
  passion: 'astronomy',
  active: 520,
  hours: 8
}

class TestComponent extends Component{

  activeInHours = (active,hours) => {
    return active*hours
  }

  activeInDays =(activeInHours) => {
    return this.activeInHours/24
  }

  

 render(){
   const {name, age, passion, active, hours} = this.props //destructuring
   console.log(this.props)
   return(
    <div>
      <h1 style={myStyle}>React test</h1>
      <h3>{this.props.msg}</h3>
      <h3>Hello, I'm {this.props.name} and I'm {this.props.age} years old. Im passionate about {this.props.passion}.</h3>
      <h3>It's a {this.props.duration} minutes break now</h3>
      <h5>Hello, I'm {name} and I'm {age} years old. Im passionate about {passion}. (Destructured text)</h5> {/* Destructured */}
      <h5>I'm active on the weekdays. In last two years my total active duration is {this.activeInHours(active,hours) }</h5> 
    </div>
   )
 }
}

render(
  <TestComponent passion={data.passion} age={data.age} name={data.name} active={data.active} hours={data.hours} duration={5} msg='Passing this text as props'/>,
  document.getElementById('root')
);