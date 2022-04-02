import './ProfilePage.css';
import React from 'react';
import UserInfo from '../../components/UserInfo/UserInfo';
import PostDetails from '../../components/PostDetails/PostDetails';


export default class ProfilePage extends React.Component {

  render() {
    return (
      <>
      <main className="nav-justify-content-center">
        <nav>
        <UserInfo />
        </nav>
        <div className="card-nav-item1">
        <h2 className='item1'>Name: {this.props.user.name}</h2>
        </div> 
        <br/>
        <div className="card-nav-item">
        <h2>Email: {this.props.user.email}</h2>
        </div>
      </main>
        <br/><br/>
        <h3>Past Posts Created:</h3>
        <PostDetails user={this.props.user} />
        
      </>

    )
  }
}