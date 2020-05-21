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

let booklist = [
  {"title": "Book 1 coming from array", "author": "me", "pages": 210},
  {"title": "Book 2 coming from array", "author": "you", "pages": 310},
  {"title": "Book 3 coming from array", "author": "her", "pages": 410},
  {"title": "Book 4 coming from array", "author": "him", "pages": 610},
]

const Book = ({title, author, pages}) => { 

  return(
    <section>
      <h2>{title}</h2>
      <p>By: {author}</p>
      <p>Pages: {pages}</p>
    </section>
  )
}


class Library extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      open: true
    }
  }
  render(){
    console.log(this.state)
    const {books} = this.props
    return (
      <div>
        Welcome to the Library
        <Book title='Theory of relativity' author='Einstein' pages={450} />
        <Book title='Big Bang theory' author='Stephan Hawking' pages={350} />
        <Book title='String Theory' author='Michio Kaku' pages={550} />

        <h1>The library is {this.state.open ? 'open' : 'closed'}</h1>
        {books.map(
          (book, i) => 
                      <Book key={i}
                            title={book.title} 
                            author={book.author} 
                            pages={book.author} />
        ) }
        
        
      </div>
    )
  }
}




render(
  
  <div>
  <TestComponent passion={data.passion} age={data.age} name={data.name} 
  active={data.active} hours={data.hours} duration={5} msg='Passing this text as props'/>
  <Library books ={booklist} />
  </div>,
  document.getElementById('root')
);