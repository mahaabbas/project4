import React, { Component } from "react";
import LogInForm from '../../components/LogInForm/LogInForm'
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import './Authpage.css'

export default class AuthPage extends Component {

    state = {
        showLogin: true
    }


    render() {
        return (
            <div className="AuthPage">
                <div className="AuthPageLeft">
                    <h1 className="text" onClick={() => this.setState(
                        { showLogin: !this.state.showLogin }
                    )}>
                        {this.state.showLogin
                            ?
                            <>Don't have an account? <button>Register</button></>
                            :
                            <>Have an account? <button>Sign In</button></>
                        }</h1>
                </div>


            <div className="HiddenAuth">
            <h1 onClick={() => this.setState(
                { showLogin: !this.state.showLogin }
                )}>
            {this.state.showLogin 
            ? 
            <><span>Don't have an account?</span><button>Register</button></>
            :
            <><span>Have an account?</span> <button>Sign In</button></>
            }</h1>
            </div>
            

                <div className="AuthPageRight">
                    {this.state.showLogin
                        ?
                        <LogInForm setUserInState={this.props.setUserInState} />
                        :
                        <SignUpForm setUserInState={this.props.setUserInState} />
                    }
                </div>

                <div className="HiddenAuth">
                    <h1 onClick={() => this.setState(
                        { showLogin: !this.state.showLogin }
                    )}>
                        {this.state.showLogin
                            ?
                            <><span>Don't have an account?</span><span>Register</span></>
                            :
                            <><span>Have an account?</span> <span>Sign In</span></>
                        }</h1>
                </div>
            </div>
        )
    }
}