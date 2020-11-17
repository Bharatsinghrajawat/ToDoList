import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {

    getStyle = () => {
        return {
            background : '#f4f4f4',
            padding    : '10px',
            borderBottom : '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render(){
        const {id , title} = this.props.todo;
        return(
            <div style={this.getStyle()}>
              <h1>  <input type='checkbox' onChange={this.props.markCompleted.bind(this,id)}/>
                {title} <button style={btnStyle} onClick={this.props.handleDelete.bind(this,id)}>X</button></h1>

            </div>
        )
    }
}

TodoItem.propTypes={
    todo : PropTypes.object.isRequired
}

const btnStyle = {
    background : 'red',
    color      : 'yellow',
    border     : 'none',
    padding    : '5px 10px',
    borderRadius: '50%',
    cursor     : 'pointer',
    float      : 'right'
}

export default TodoItem ;