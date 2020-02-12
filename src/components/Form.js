import React, { Component } from 'react';

export default class Form extends Component{


    //constructor(props) {
    //	super(props)

    state = {
        title: '',
        description: '',
        done: true
    }
    //}
    /*onSubmit = e => {
        e.preventDefault();
        this.props.send_task(this.state.title, this.state.description);
        //console.log(this.state)
    }*/
    
    onSubmit = e => {
        e.preventDefault();
        this.props.send_task(this.state);
    }

    onChange = e => {
        e.persist()
        const {name , value} = e.target;
        this.setState({ 
            [name]: value
        })

        /*this.setState({
            [e.target.name]: e.target.value
        })*/
    }    

    render(){
        return(
            <form onSubmit={this.onSubmit}>
               <input 
               type="text" 
               placeholder="Ingrese text" 
               onChange={this.onChange}
               name="title"
               value={this.state.title}/>  
               <br/>
               <br/>
               <textarea 
               placeholder="Input description"
               onChange={this.onChange}
               name="description"
               value={this.state.description}
               ></textarea>
               <input type="submit"/>
            </form>
        );
    }



}