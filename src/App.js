import React, { Component } from 'react';

import tasks from './tasks.json';
import Tasks from './components/Tasks';
import Form from './components/Form';
import Post from './components/Post';
import User from './components/User';

class App extends Component{

  state = {
    my_tasks:  tasks
  }

  addTask = (newTask) => {
    const id_ = this.state.my_tasks.length+1;

    newTask = {...newTask, id: id_}

    console.log(newTask);
    
    this.setState({
      my_tasks : [...this.state.my_tasks, newTask]
    })

  }    
  
  deleteTask = (id) => {
    
    this.setState({
     my_tasks : this.state.my_tasks.filter(t => id !== t.id)
    })
  }

  render(){
    return( <div style={{textAlign: 'center', marginTop: '64px'}} >
              <Form send_task = {this.addTask} />
              <Tasks prop_task = {this.state.my_tasks} deleteTask={this.deleteTask} />
              <User />
              <Post />
            </div>
    );
  }
}

export default App;
