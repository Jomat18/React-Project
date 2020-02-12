import React, { Component } from 'react';
//7.6K (gzipped: 3.2K)
export default class User extends Component{

    state = {
        loading: true,
        person: null
    }

    async componentDidMount(){
        const url = "https://randomuser.me/api/";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({person: data.results[0], loading: false });

    }    

    render() {
        return(
            <div>
            {this.state.loading || !this.state.person ? (
                <div> loading...</div>
                ) : (
                <div> 
                    <div>{ this.state.person.name.title }</div>
                    <div>{ this.state.person.name.first }</div>
                    <div>{ this.state.person.name.last }</div>
                    <img src={this.state.person.picture.large} alt="imagen"/>
                </div> 
            )}    
            </div>
        );
    }


}