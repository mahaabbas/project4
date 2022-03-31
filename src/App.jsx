
import { Component } from 'react';
import './App.css';


import AuthPage from './pages/AuthPage/AuthPage';



class App extends Component{
  //stept 1
  state = {
    user:null,
  }
  
  setUserInState = (incomingUserData) => {
    this.setState({ user: incomingUserData})
  }
 //step 1 ^
 componentDidMount() {
  let token = localStorage.getItem('token')
  if (token) {
    // YOU DO: check expiry!
    let userDoc = JSON.parse(window.atob(token.split('.')[1])).user // decode jwt token
    this.setState({user: userDoc})      
  }
}

  render(){
  return (
    <div className="App">
      <header className="App-header">PROJECT 4</header>
      {this.state.user ? 
      <h2>Youre logged in!</h2> :
      <AuthPage setUserInState={this.setUserInState} /> }
    </div>
  );
}
}

export default App;
