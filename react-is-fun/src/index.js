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

const Book = ({title, author, pages, freeBookmark}) => { 

  return(
    <section>
      <h2>{title}</h2>
      <p>By: {author}</p>
      <p>Pages: {pages}</p>
      <p>Free Bookmark Today: {freeBookmark ? 'yes' : 'no'}</p>
    </section>
  )
}

const Hiring = () => 
  <div>
    <h1>This library is hiring. Go to www.library.com to apply</h1>
  </div>

const NotHiring = () => 
  <div>
    <h1>This library is not hiring. Check back later.</h1>
  </div>  

//COMPONENT LIFECYCLE METHODS ARE ONLY AVAILABLE 
//WHILE USING THE CLASS COMPONENTS BUT NOT FUNCTIONAL COMPONENTS

class Library extends React.Component{

  state = {
    open: true,
    freeBookmark: false,
    hiring: true,
    data: [],
    loading: false
  } // added static state to get rid of the constructor and state(code clean up)

  componentDidMount() {
    this.setState({loading: true})
    fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
    .then(data => data.json())
    .then(data => this.setState({data, loading: false}))
  }

  componentDidUpdate() {
    console.log("The component just updated")
  }

  // constructor(props){
  //   super(props)
  //   this.state = {
  //     open: true
  //   }
  //   this.toggleOpenClosed = this.toggleOpenClosed.bind(this) // binding the setState function to this
  // }

  toggleOpenClosed = () => { // binding 'this' using arrow function
    this.setState(prevState => ({
      open: !prevState.open
    }))
  }

  render(){
    console.log(this.state)
    const {books} = this.props
    return (
      <div>
        {this.state.hiring ? <Hiring /> : <NotHiring />}
        {this.state.loading 
        ? "loading ... "
        : <div>
          {this.state.data.map(product => {
            return (
              <div>
                <h3>Library Product of the week!</h3>
                <h4>{product.name}</h4>
                <img src={product.image} alt="img" height={100}/>
              </div>
            )
          })}
          </div>
         }
        Welcome to the Library
        <Book title='Theory of relativity' author='Einstein' pages={450} />
        <Book title='Big Bang theory' author='Stephan Hawking' pages={350} />
        <Book title='String Theory' author='Michio Kaku' pages={550} />

        <h1>The library is {this.state.open ? 'open' : 'closed'}</h1>
        <button onClick = {this.toggleOpenClosed}>Change</button>
        {books.map(
          (book, i) => 
                      <Book key={i}
                            title={book.title} 
                            author={book.author} 
                            pages={book.pages}
                            freeBookmark={this.state.freeBookmark} />
        ) }
        <button onClick = {this.toggleOpenClosed}>Change</button>
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