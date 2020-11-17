import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends React.Component {
 
  render () {
    
  return ( 
      <div>
       {this.props.todos.map(todo => <TodoItem key={todo.id} todo={todo} handleDelete={this.props.handleDelete} markCompleted={this.props.markCompleted}/>)}
      </div>
  )
}
}

Todos.protoTypes={
  todos : PropTypes.array.isrequired
}

export default Todos;