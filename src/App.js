import React from 'react';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';


class App extends React.Component {
  state = {
    todos : [
      {
        id : 1,
        title : 'take out of trash',
        completed : false
      },
      {
        id : 2,
        title : 'dinner is at my home',
        completed : false
      },
      {
        id : 3,
        title : 'she gotta be angry',
        completed : false
      }
    ]
  }

    markCompleted = (id) => {
      this.setState({
        todos: this.state.todos.map(todo => {
          if(todo.id === id){
            
            todo.completed = !todo.completed
          }return todo ;
        } )
      })
    }

    handleDelete = (id) => {
        this.setState({todos : [...this.state.todos.filter(todo => todo.id !== id)]});
    }

    addTodo = (title) => {
      const newTodo = {
        id : new Date() ,
        title : title,
        completed : false
        
      }
      
       
      this.setState({todos : [...this.state.todos, newTodo]})
    }
 
      render(){
          return(
              <div className='App'>
                <div className='container'>
                <Header />
                <AddTodo addTodo={this.addTodo}/>
                <Todos todos={this.state.todos} handleDelete={this.handleDelete} markCompleted={this.markCompleted}/>
                </div>
              </div>
              
            )
      }

}

export default App;
