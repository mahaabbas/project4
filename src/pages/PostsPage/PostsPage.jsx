import React, { Component } from "react";
import { Link } from 'react-router-dom';
import UserLogout from '../../components/UserLogout/UserLogout';
import PostForm from '../../components/PostForm/PostForm';
import './PostsPage.css'

export default class PostsPage extends Component{
    render(){
    return (
        <div className="postsPage">
            
            <div className="postsPageL">

                <h1>Welcome, {this.props.user.name}!
                <br/><br/>
                <Link className="btn" to='/profile'>View Profile</Link><br/><br/>
                <UserLogout />
                </h1>
                

            </div>
            <div className="postsPageR">
                <PostForm title={this.props.title} description={this.props.description} firstname={this.props.firstname}  />
            </div>
        </div>
    )
    }
}