import React, { Component } from "react";
import Delete from '../Delete/Delete'
import { Route, Switch, Redirect } from 'react-router-dom';



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

    updateOnePost = async (id) => {
        
        try{
            let jwt = localStorage.getItem('token')
            let fetchPostsResponse = await fetch(`/api/${id}`
            , {
                method: 'PUT', 
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


    componentDidMount() {
        this.getUserPosts()
    }

   render(){
    return (
        <div>
            {this.state.posts.length ?

            this.state.posts.map(post =>
                <div class="card" style="width: 18rem;">
                  <div class="card-body">
                  <h5 class="card-title">Title: {post.title}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Artist: {post.firstname}</h6>
                  <p class="card-text">Description: {post.description}</p>
                 <a href="#" class="card-link">Website: {post.website}</a>
                <button>Delete id={post._id} getOnePost={this.getOnePost} </button>
                </div>
            </div> ) :
                'You have no previous posts' }
        </div>
    )
   }
}

