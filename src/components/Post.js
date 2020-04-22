
import React, { Component } from 'react'

export default class Post extends Component {

    state = {
        posts: []
    }

    async componentDidMount() {    

        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        try {
            const data = await response.json();
            console.log(data);
            this.setState({posts: data})
        }    
        catch (err){
       		 console.error(err.message);
      	}
        
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
