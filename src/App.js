import React from 'react';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import './App.css';
import Todos from './components/Todos';
import About from './components/pages/About';
import axios from 'axios';

class App extends React.Component {

state = {
  todos : [
                                                        // {
                                                        //   id : 1 ,
                                                        //   title : 'take out the trash',
                                                        //   completed : false 
                                                        // },
                                                        // {
                                                        //   id : 2 ,
                                                        //   title : 'dinner with wife',
                                                        //   completed : false
                                                        // },
                                                        // {
                                                        //   id : 3 ,
                                                        //   title : 'meeting with boss',
                                                        //   completed : false 
                                                        // }
  ]
}

componentDidMount () {
  axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
  .then(res => this.setState({todos : res.data }))
}

markComplete = (id) =>{
 this.setState({todos : this.state.todos.map(todo => {
   if(todo.id === id){
     todo.completed = !todo.completed
   }
   return todo ;
 } )})
}

delTodo = (id) => {
  axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
  .then(res => this.setState({todos : [...this.state.todos.filter(todo => todo.id !== id)]}));
 // this.setState({todos : [...this.state.todos.filter(todo => todo.id !== id)]})
}

addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos',{
      title : title,
      completed : false
    })
    
  .then(res => this.setState({ todos : [...this.state.todos , res.data]}));
}

  render () {
  return (
  <Router>
    <div>
        <Header />
        <Route exact path='/' render={props => (
          <React.Fragment>
            <AddTodo addTodo={this.addTodo}/>
            <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
          </React.Fragment>
        )} />
        <Route path='/about' component={About} />
    </div>
  </Router>
  );
 }
}

export default App;
