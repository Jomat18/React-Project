import React, { Component } from 'react';
import Task from './Task';
import PropTypes from 'prop-types';

class Tasks extends Component{

    render(){
        return(
             this.props.prop_task.map(t => 
             <Task 
                my_task = {t}
                key={t.id}
                deleteT = {this.props.deleteTask}   
             />)
        );
    }

}

Tasks.propTypes = {
    prop_task: PropTypes.array.isRequired
}

export default Tasks;