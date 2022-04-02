import React, { Component } from "react";
import { Link } from 'react-router-dom';
import UserLogout from '../../components/UserLogout/UserLogout';
import './PostsPage.css'

export default class PostsPage extends Component{

    render(){
    return (
        <div className="PostsPage">
            
          <div className="PostsPageL">

            <h2 className="welcome">Welcome to the Artists Collective, {this.props.user.name}!
                <br /><br />
                <Link className="btn VP" to='/profile'>View Profile</Link><br/><br />
                <UserLogout />
                <br/>
                <div className="PostsPageRight">
                <Link className="btn VP" to='/posts'>Add Post</Link>

                </div> 
            </h2>
          </div>
        </div>
    )
    }
}