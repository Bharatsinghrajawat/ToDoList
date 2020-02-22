import React from 'react';
import PropTypes from 'prop-types';
class AddTodo extends React.Component {
    state = {
        title : ""
    }
    onChange = (e) => this.setState({title : e.target.value});

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title : ""});
    }

render () {
    return (
        <form onSubmit={this.onSubmit} style={{display : "flex"}}>
            <input type="text" name="title" placeholder="Add Todo..." value={this.state.title} onChange={this.onChange}  style={{flex : "10" ,padding : "5px" , fontWeight : "bold" }}/>
            <input type="submit" value="Submit"  style={{flex : "1" , fontSize : "2em" , fontWeight : "bold" }}/>
        </form>
    )
}
}
AddTodo.propTypes = {
    addTodo : PropTypes.func.isRequired
}


export default AddTodo ;