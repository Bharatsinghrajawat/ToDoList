import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
    getStyle = () => {
        return {
            background : 'grey',
            fontSize : '2em',
            textDecoration : this.props.todo.completed ? 'underline' : 'none'
        }
    }

    // markComplete = (e) => {
    //     console.log(this.props)
    // } 

  render () {
      //const {id , title} = this.props.todo;
  return (
      <div style={this.getStyle()}>
          <p>
              <input type='checkbox' onChange={this.props.markComplete.bind(this,this.props.todo.id)}/> {'     '}
              {this.props.todo.title}
              <button onClick={this.props.delTodo.bind(this,this.props.todo.id)} style={btnStyle}>x</button>
              </p>
      </div>
    
  );
 }
}
TodoItem.propTypes = {
    todo : PropTypes.object.isRequired,
    markComplete : PropTypes.func.isRequired,
    delTodo : PropTypes.func.isRequired,
}
 
const btnStyle = {
    background : 'red',
    color : 'white',
    padding : '5px 9px',
    borderRadius : '50%',
    cursor : 'pointer',
    float : 'right'
}

export default TodoItem ;