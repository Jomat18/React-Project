//rcc
import React, { Component } from 'react'

export default class Post extends Component {

    state = {
        posts: []
    }

    //async componentDidMount() {
    componentDidMount() {    

        /* Ajax
        function reqListener() {
            var data = JSON.parse(this.responseText);
            console.log(data);
            this.setState({posts: data})
        }
        
        function reqError(err) {
            console.log('Fetch Error :-S', err);
        }
        
        var oReq = new XMLHttpRequest();
        oReq.onload = reqListener.bind(this);
        oReq.onerror = reqError.bind(this);
        oReq.open('get', 'https://jsonplaceholder.typicode.com/posts', true);
        oReq.send();
        */    

        /* Using asinc await
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        try {
            const data = await response.json();
            console.log(data);
            this.setState({posts: data})
        }    
        //catch(error => this.setState({ error, isLoading: false }));    
        */
        /* Using Promesas
        fetch('https://jsonplaceholder.typicode.com/posts') 
            .then((response) => {
                return response.json()   //retornar la respuesta en json
            })
            .then((data) => {
                console.log(data)
                this.setState({posts: data})
            })
            //.catch(error => this.setState({ error, isLoading: false }));
        */    
            
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(
            (response) => {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                response.status);
                return;
            }
        
            // Examine the text in the response
            response.json().then( (data) => {
                console.log(data);
                this.setState({posts: data});
            });
            }
        )
        .catch( (err) => {
            console.log('Fetch Error :-S', err);
            //this.setState({ err, isLoading: false });
        });    
        
    }
    
    render() {
        return (
            <div>
                <h1>Posts</h1>
                {
                    this.state.posts.map(post => {
                        return <div key={post.id}>
                            <h1>{post.title}</h1>    
                            <p>{ post.body}</p>
                        </div>
                    })
                }
            </div>
        )
    }
}
