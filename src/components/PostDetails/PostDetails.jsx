import React, { Component } from "react";
import Delete from '../Delete/Delete'




export default class PostDetails extends Component{
    

    state = {
        posts: []
    }

    getUserPosts = async () => {
        try{
            let jwt = localStorage.getItem('token')
            let fetchPostsResponse = await fetch("/api", {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': 'Bearer ' + jwt
                }
            })
            let allPosts = await fetchPostsResponse.json();
            console.log("this is the user's post", allPosts)
            this.setState({posts: allPosts})
        }catch(err){
            console.log('error', err)
        }
    }

    getOnePost = async (id) => {
        
        try{
            let jwt = localStorage.getItem('token')
            let fetchPostsResponse = await fetch(`/api/${id}`
            , {
                method: 'DELETE', 
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': 'Bearer ' + jwt
                }
            })
            let newPostList = await fetchPostsResponse.json();
            console.log("this is new list", newPostList)
            this.setState({posts: newPostList}) 
    } catch (err) {
        console.log("this is one error", err);
    }
    
}

    newPostList = async () => {
        try{
            let jwt = localStorage.getItem('token')
            let fetchPostsResponse = await fetch("/api/posts", {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': 'Bearer ' + jwt
                }
            })
            let newPosts = await fetchPostsResponse.json();
            console.log("this is the user's post", newPosts)
            this.setState({posts: newPosts})
        }catch(err){
            console.log('error', err)
        }
    }




    componentDidMount() {
        this.getUserPosts()
    }

   render(){
    return (
        <div>
            {this.state.posts.length ?

            this.state.posts.map(post =>
                <div class="card" >
                  <div class="card-body">
                  <h5 class="card-title">Title: {post.title}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Artist: {post.firstname}</h6>
                  <p class="card-text">Description: {post.description}</p>
                 <a href="{post.website}" class="card-link">Website: {post.website}</a>
                <Delete id={post._id} getOnePost={this.getOnePost}/> 
                </div>
            </div> ) :
                'You have no previous posts' }
        </div>
    )
   }
}

