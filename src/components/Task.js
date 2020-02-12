import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Task extends Component{

    styleCompleted() {
        return{
            fontSize: '20px',
            color: this.props.my_task.done ? 'green': 'blue',
            textDecoration: 'none'
        };
    }

    render(){
        return(

             <p style = {this.styleCompleted()}> 
                  {this.props.my_task.id} -
                  {this.props.my_task.title} -
                  {this.props.my_task.description} -
                  {this.props.my_task.done} 
                  <input type="checkbox"/>
                  <button onClick={this.props.deleteT.bind(this, this.props.my_task.id)}> x </button>      
             </p>
        );
    }

}

Task.propTypes = {
    my_task: PropTypes.object.isRequired
}

export default Task;