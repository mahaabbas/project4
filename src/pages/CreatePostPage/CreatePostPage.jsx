import React, { Component } from "react";
import { Link } from 'react-router-dom';
import UserLogout from '../../components/UserLogout/UserLogout';
import PostForm from '../../components/PostForm/PostForm';
import './CreatePostPage.css'


export default class PostsPage extends Component{

    render(){
    return (
        <div className="nav">
            
            <div className="nav-fill">

                <span className="text"><h3>Upload your work, {this.props.user.name}!</h3>
                <br/><br/>
                <Link className="btn-VP" to='/profile'><button className="btn VP">View Profile</button></Link><br/><br/>
                <Link className="btn-VP" to='/index'><button className="btn VP">Home</button></Link><br/><br/>
                <UserLogout className="btn VP" />
                </span>
                

            </div>
            <div className="PageRight">
            <PostForm onSubmit={this.handleChange} />
                
            </div>
        </div>
    )
    }
}