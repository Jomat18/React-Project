import React, { Component } from 'react';
import './App.css';
import tasks from './tasks.json';
import Tasks from './components/Tasks';
import Form from './components/Form';
//import Post from './components/Post';
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

  /*addTask = (t, d) => {
    const newTask = {
      title: t,
      description: d,
      id: this.state.my_tasks.length+1
    }
    this.setState({
      my_tasks : [...this.state.my_tasks, newTask]
    })

  }
    */
    
  
  deleteTask = (id) => {
    
    this.setState({
     my_tasks : this.state.my_tasks.filter(t => id !== t.id)
    })
  }

  render(){
    return( <div>
              <Form send_task = {this.addTask}/>
              <Tasks prop_task = {this.state.my_tasks} deleteTask={this.deleteTask} />
              <User/>
            </div>
    );
  }
}

/*
function HelloWorld(props) {
  console.log(props);
  return (
    <div id="hello">
      <h1 > {props.title} </h1>
      {props.message}
    </div>
  );

}
*/
/*
class HelloWorld extends Component{
  render() {
    return(
      <div id="hello">
        <h1 > {this.props.title} </h1>
        {this.props.message}
      </div>
    );
  }

}
*/
/*
class HelloWorld extends Component{

  state = {
    show: true
  }

  change = () => {
    this.setState(
      {show: !this.state.show}
    )
  }

  render() {
    if (this.state.show){
      return(
        <div id="hello">
          <h1 > {this.props.title} </h1>
          {this.props.message}
          <button onClick={ this.change }> Change </button>
        </div>
    );
    }
    else {
      return <h1> Not elements
              <button onClick={this.change}>
                Change
              </button>
            </h1>

    }
  }
}

class App extends Component{
  render(){
    return( <div>
              <HelloWorld message="Hello props" title="Component1"/>
              <HelloWorld message="Hello new" title="Component2"/>
            </div>
    );
  }
}
*/
//const App = () =>  <div> <HelloWorld/> </div> 

/*
function App() {
  return (
    //    <img src={logo} className="App-logo" alt="logo" />

    <div>
      <HelloWorld/>
    </div>
    
  );
}
*/

export default App;
