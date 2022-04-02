import React, { Component } from "react";
import { Link } from 'react-router-dom';
import PostDetails from "../../components/PostDetails/PostDetails";
import Quote from "../../components/Quotes/Quotes";
import UserLogout from '../../components/UserLogout/UserLogout';
import './PostsPage.css'

export default class PostsPage extends Component{

    render(){
    return (
        <div className="PostsPage">
            
          <div className="PostsPageL">

            <h2 className="welcome">Welcome to the Artists Collective, {this.props.user.name}!
                <br />
                <Link className="btn VP" to='/profile'>View Profile</Link><br/>
                <UserLogout />
                <br/>
                <div className="PostsPageRight">
                <Link className="btn VP" to='/posts'>Add Post</Link>

                </div> 
                <br />
                <Quote className="quotes"/>
            </h2>
            <div>
                <PostDetails className="pgright"/>
            </div>
          </div>
        </div>
    )
    }
}