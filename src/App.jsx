
// import { Component } from 'react';
// import './App.css';


// import AuthPage from './pages/AuthPage/AuthPage';



// class App extends Component{
//   //stept 1
//   state = {
//     user:null,
//   }
  
//   setUserInState = (incomingUserData) => {
//     this.setState({ user: incomingUserData})
//   }
//  //step 1 ^
//  componentDidMount() {
//   let token = localStorage.getItem('token')
//   if (token) {
//     // YOU DO: check expiry!
//     let userDoc = JSON.parse(window.atob(token.split('.')[1])).user // decode jwt token
//     this.setState({user: userDoc})      
//   }
// }

//   render(){
//   return (
//     <div className="App">
//       <header className="App-header">PROJECT 4</header>
//       {this.state.user ? 
//       <h2>Youre logged in!</h2> :
//       <AuthPage setUserInState={this.setUserInState} /> }
//     </div>
//   );
// }
// }

// export default App;


import { Component } from 'react';
import CreatePost from './pages/CreatePost/CreatePost';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom'
import NavBar from "./components/Navbar/NavBar"
// import Post from './components/post/post';
// import Detail from './pages/detailview/Detail';
import Home from './pages/homepage/Home';
import Detail from './pages/detailview/Detail';
import LogIn from './components/SignUpForm/LoginForm/LoginForm';

class App extends Component{
  
  
  render (){
  return (
    <div className="App">

      <NavBar />
      <Switch>
      <Route path='/posts/new' render={
        (props) => <CreatePost {...props}/>
         }/>
      <Route path='/posts/detail' render={
        (props) => <Detail {...props}/>
         }/>
         <Route path="/home" render={
        (props) => <Home {...props}/>
         }/>
         <Route path="/login" render={
        (props) => <LogIn {...props}/>
         }/>
      </Switch>
       <Redirect to="/home"/>
      
      {/* routes come under here  */}
      
    </div>
  );
}
}

export default App;
